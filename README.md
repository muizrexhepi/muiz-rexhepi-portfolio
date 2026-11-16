# Muiz Rexhepi

Client-facing portfolio built on the existing Next.js App Router project.

## Local development

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Run `npm run lint`, `npm run typecheck`, and `npm run build` to verify changes.

## Project inquiries

Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` to a sending key for the verified sender domain. The sender and recipient both default to `mail@muizrexhepi.com`. On Vercel, set `RESEND_API_KEY` in the environment that serves this site. Optional `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL` override the defaults. The contact API validates submissions, ignores the honeypot, and applies per-instance rate limits. It sends one email to the inquiry inbox with the visitor as Reply-To.

## Content

Featured case studies are in `lib/featured-projects.ts` and use the original `/work/[slug]` route. Rendo images come from the Rendo website and product-capture assets. Ido Tours and Villa Noar site screenshots are from the public websites. The Villa Noar interior photograph comes from its website repository.

Site identity, locale, and share metadata are in `lib/site.ts`. Published URLs currently use English without a locale prefix.
