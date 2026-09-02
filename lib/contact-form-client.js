(function (root) {
  var ENDPOINT = "/api/contact";
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var PHONE_RE = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  function validateEmail(email) {
    return EMAIL_RE.test(email);
  }

  function validatePhone(phone) {
    return PHONE_RE.test(phone);
  }

  function validateName(name) {
    return String(name || "").trim().length >= 2;
  }

  function safePublicError(payload) {
    if (!payload || typeof payload.error !== "string") return "";
    var error = payload.error.trim();
    if (!error || error.length > 120) return "";
    if (/key|secret|token|bearer|resend/i.test(error)) return "";
    return error;
  }

  async function submitContactPayload(payload, fetchImpl) {
    var send = fetchImpl || fetch;
    var response = await send(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    var data = {};
    try {
      data = await response.json();
    } catch (_err) {
      data = {};
    }
    if (!response.ok) {
      var error = new Error(safePublicError(data) || "Failed to send message");
      error.status = response.status;
      throw error;
    }
    return data;
  }

  var api = {
    submitContactPayload: submitContactPayload,
    validateEmail: validateEmail,
    validateName: validateName,
    validatePhone: validatePhone,
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.throwbacksContactForm = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
