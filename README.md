# Throwbacks Arcade

A marketing and events site for a retro arcade, built with [Next.js](https://nextjs.org/) (App Router), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/). UI primitives use [Radix UI](https://www.radix-ui.com/) and [shadcn/ui](https://ui.shadcn.com/) patterns. Contact forms integrate with [EmailJS](https://www.emailjs.com/).

## Prerequisites

- Node.js 18+ (see `netlify.toml` for the CI/deploy Node version)
- npm

## Local development

```bash
npm install
cp .env.example .env.local
# Add EmailJS keys to .env.local (see below)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Contact submissions require EmailJS. Copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Email service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Template ID |

These are public-facing EmailJS identifiers; keep real secrets out of the repo and configure them in your host’s environment (e.g. Netlify) for production.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run lint` | ESLint |

## Deploy

The project includes `netlify.toml` for [Netlify](https://www.netlify.com/) with the Next.js plugin. Set the same `NEXT_PUBLIC_*` variables in the Netlify UI.

## License

MIT — see [LICENSE](LICENSE).
