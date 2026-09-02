const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const {
  DEFAULT_INBOX,
  buildEmail,
  clientIpFromHeaders,
  createRateLimiter,
  handleContactForm,
  parseFormPayload,
} = require("../lib/contact-form.js");
const client = require("../lib/contact-form-client.js");

const VALID_PAYLOAD = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  phone: "540-555-0100",
  message: "Do you host birthday parties on Saturdays?",
  recaptchaToken: "test-token",
  source: "contact",
};

const CONFIGURED_ENV = {
  RECAPTCHA_SECRET_KEY: "recaptcha-test-secret",
  RESEND_API_KEY: "re_test_key_do_not_leak",
  RESEND_FROM: "Throwbacks Arcade <forms@throwbacksarcade.com>",
  CONTACT_INBOX: "ThrowbacksCulpeper@gmail.com",
};

function parseBody(response) {
  return JSON.parse(response.body);
}

test("parseFormPayload accepts the public contact fields (#1)", () => {
  const parsed = parseFormPayload(VALID_PAYLOAD);
  assert.equal(parsed.fields.name, VALID_PAYLOAD.name);
  assert.equal(parsed.fields.email, VALID_PAYLOAD.email);
  assert.equal(parsed.fields.subject, "Website inquiry");
});

test("parseFormPayload rejects missing or invalid fields (#1)", () => {
  assert.equal(parseFormPayload(null).error, "Invalid form submission");
  assert.equal(parseFormPayload({ ...VALID_PAYLOAD, email: "not-an-email" }).error, "Invalid form submission");
  assert.equal(parseFormPayload({ ...VALID_PAYLOAD, recaptchaToken: "" }).error, "Invalid form submission");
  assert.equal(parseFormPayload({ ...VALID_PAYLOAD, name: "A" }).error, "Invalid form submission");
});

test("handleContactForm returns 503 without secrets and does not leak them (#1)", async () => {
  const sendCalls = [];
  const response = await handleContactForm(VALID_PAYLOAD, {
    env: {},
    sendResendEmail: async (payload) => {
      sendCalls.push(payload);
    },
    verifyCaptcha: async () => true,
  });

  assert.equal(response.statusCode, 503);
  assert.equal(parseBody(response).error, "Contact form is not configured");
  assert.doesNotMatch(response.body, /re_test_key|recaptcha-test-secret|RESEND_API_KEY/);
  assert.equal(sendCalls.length, 0);
});

test("handleContactForm rejects captcha failure without calling Resend (#1)", async () => {
  const sendCalls = [];
  const response = await handleContactForm(VALID_PAYLOAD, {
    env: CONFIGURED_ENV,
    verifyCaptcha: async () => false,
    sendResendEmail: async (payload) => {
      sendCalls.push(payload);
    },
  });

  assert.equal(response.statusCode, 400);
  assert.equal(parseBody(response).error, "Verification failed");
  assert.equal(sendCalls.length, 0);
});

test("handleContactForm happy path sends Reply-To mail via Resend (#1)", async () => {
  let sent;
  const response = await handleContactForm(
    { ...VALID_PAYLOAD, source: "party" },
    {
      env: CONFIGURED_ENV,
      verifyCaptcha: async (token, secret) =>
        token === "test-token" && secret === CONFIGURED_ENV.RECAPTCHA_SECRET_KEY,
      sendResendEmail: async (payload, apiKey) => {
        sent = { payload, apiKey };
      },
    },
  );

  assert.equal(response.statusCode, 200);
  assert.deepEqual(parseBody(response), { ok: true });
  assert.equal(sent.apiKey, CONFIGURED_ENV.RESEND_API_KEY);
  assert.equal(sent.payload.reply_to, "ada@example.com");
  assert.deepEqual(sent.payload.to, [DEFAULT_INBOX]);
  assert.match(sent.payload.subject, /^Party inquiry: Website inquiry$/);
});

test("buildEmail escapes HTML in visitor fields (#1)", () => {
  const email = buildEmail(
    {
      ...VALID_PAYLOAD,
      name: "<script>alert(1)</script>",
      message: "Hello <b>there</b>",
    },
    DEFAULT_INBOX,
    CONFIGURED_ENV.RESEND_FROM,
  );
  assert.match(email.html, /&lt;script&gt;/);
  assert.doesNotMatch(email.html, /<script>alert/);
});

test("handleContactForm rate-limits repeat posts from the same IP (#1)", async () => {
  const limiter = createRateLimiter({ windowMs: 60_000, maxHits: 2 });
  const options = {
    env: CONFIGURED_ENV,
    ip: "203.0.113.9",
    rateLimiter: limiter,
    now: 1_000,
    verifyCaptcha: async () => true,
    sendResendEmail: async () => ({ ok: true }),
  };

  assert.equal((await handleContactForm(VALID_PAYLOAD, options)).statusCode, 200);
  assert.equal((await handleContactForm(VALID_PAYLOAD, options)).statusCode, 200);
  const limited = await handleContactForm(VALID_PAYLOAD, options);
  assert.equal(limited.statusCode, 429);
});

test("clientIpFromHeaders prefers Netlify connection IP (#1)", () => {
  assert.equal(
    clientIpFromHeaders({
      "x-nf-client-connection-ip": "198.51.100.4",
      "x-forwarded-for": "203.0.113.8, 198.51.100.4",
    }),
    "198.51.100.4",
  );
});

test("shared client helper validates the same visitor fields (#1)", () => {
  assert.equal(client.validateName("Ada"), true);
  assert.equal(client.validateEmail("ada@example.com"), true);
  assert.equal(client.validatePhone("540-555-0100"), true);
  assert.equal(client.validatePhone("nope"), false);
});

test("ContactSection drops EmailJS (#1)", () => {
  const source = fs.readFileSync(
    path.join(PROJECT_ROOT, "app/components/ContactSection.tsx"),
    "utf8",
  );
  assert.doesNotMatch(source, /@emailjs\/browser/);
  assert.doesNotMatch(source, /emailjs\.send/);
  assert.match(source, /submitContactPayload/);
  assert.match(source, /g-recaptcha/);
});

test("EmailJS env vars removed from example config (#1)", () => {
  const envExample = fs.readFileSync(path.join(PROJECT_ROOT, ".env.example"), "utf8");
  assert.doesNotMatch(envExample, /EMAILJS_/);
  assert.match(envExample, /RESEND_API_KEY=/);
  assert.match(envExample, /RECAPTCHA_SECRET_KEY=/);
  assert.match(envExample, /NEXT_PUBLIC_RECAPTCHA_SITE_KEY=/);
});
