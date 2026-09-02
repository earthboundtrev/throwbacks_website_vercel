# Throwbacks Arcade

This repository powers the **live marketing site** for **Throwbacks Arcade**—a real arcade in **Culpeper, Virginia**. The business uses it day to day: hours and location, events, party info, games and menus, and contact flows that actually reach their inbox. It is not a course exercise or a dormant side project; **what you see in production is what ships from this codebase**, deployed from `main` and built on every push.

If you are reviewing this for a **job application or portfolio pass**, here is the part worth knowing: I treat it like a small product. Changes have to stay fast, readable on phones, and safe for non-technical stakeholders who depend on the site staying up. That means predictable builds, environment-based configuration for integrations, and documentation that matches reality—including specs for features that are planned but not yet live.

Thanks for taking the time to read this. The sections below are the usual reference material: stack, folder layout, and how to run it locally.

---

## Contents

| Section | What you’ll find |
| --- | --- |
| [Tech stack](#tech-stack) | Frameworks and hosting |
| [Repository layout](#repository-layout) | Where things live in this repo |
| [Getting started](#getting-started) | Install, env, dev server |
| [Environment variables](#environment-variables) | Resend + reCAPTCHA for contact forms |
| [Scripts](#scripts) | npm commands |
| [Deployment](#deployment) | Netlify |
| [Documentation](#documentation) | Specs and internal docs |
| [License](#license) | MIT |

---

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| UI | [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Components | [Radix UI](https://www.radix-ui.com/) primitives, [shadcn/ui](https://ui.shadcn.com/)-style patterns |
| Contact email | Resend via `/api/contact` (server-side) + reCAPTCHA v2 |

**Hosting:** [Netlify](https://www.netlify.com/) via `netlify.toml` (Next.js plugin, Node 18).

---

## Repository layout

| Path | Purpose |
| --- | --- |
| `app/` | Routes, layouts, and page-specific UI ([App Router](https://nextjs.org/docs/app)) |
| `app/components/` | Page sections and arcade-specific components |
| `components/` | Shared UI (e.g. shadcn-style primitives) |
| `lib/` | Utilities |
| `public/` | Static assets |
| `docs/` | Product and feature specifications |
| `netlify.toml` | Build command, Node version, redirects |

---

## Getting started

**Requirements**

- **Node.js** 18 or newer (matches `netlify.toml`)
- **npm**

**Steps**

```bash
git clone https://github.com/earthboundtrev/throwbacks_website_vercel.git
cd throwbacks_website_vercel
npm install
cp .env.example .env.local
```

Add your contact form values to `.env.local` (see [Environment variables](#environment-variables)), then:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment variables

Contact forms post to `/api/contact`, which sends mail through [Resend](https://resend.com/) after server-side reCAPTCHA verification. Copy `.env.example` to `.env.local` and set:

| Variable | Role |
| --- | --- |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA v2 site key (public widget) |
| `RECAPTCHA_SECRET_KEY` | reCAPTCHA secret (server-only) |
| `RESEND_API_KEY` | Resend API key (server-only) |
| `RESEND_FROM` | Verified sender address for outbound mail |
| `CONTACT_INBOX` | Studio inbox that receives submissions |

`NEXT_PUBLIC_*` variables are embedded in client bundles. **Never** put `RESEND_API_KEY` or `RECAPTCHA_SECRET_KEY` in `NEXT_PUBLIC_*` names. Configure production values in Netlify **Site settings → Environment variables**.

---

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build (`.next`) |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint (interactive setup may run on first use) |
| `npm test` | Run contact-form regression tests (`node:test`) |

---

## Deployment

1. Connect the repo to Netlify (or use the existing site linked to this GitHub project).
2. Build settings are read from `netlify.toml` (`npm run build`, Next plugin).
3. Mirror the contact form env vars (`RESEND_*`, `RECAPTCHA_*`, `CONTACT_INBOX`, `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`) in the Netlify UI.

---

## Documentation

| Document | Description |
| --- | --- |
| [Documentation index](docs/README.md) | List of all specs in `docs/` |
| [Party booking requirements](docs/party-booking-requirements.md) | Future booking-system product spec (not yet implemented in the live site) |

---

## License

MIT — see [LICENSE](LICENSE).
