# Attentive Medical Care & Wellness website

The redesigned website for Attentive Medical Care & Wellness: virtual medical weight management with Ladawana Crawford, DNP, FNP-BC, in Maryland, Virginia and Washington, DC.

Built with Next.js 16 (App Router), React 19 and plain CSS. Every page is statically generated, so it deploys to Vercel without extra configuration. There is no database, analytics, tracking or form handling, and no patient information passes through this website.

## Run it locally

Requires Node.js 20 or newer.

```bash
npm install
```

```bash
cp .env.example .env.local
```

```bash
npm run dev
```

Open http://localhost:3000. Other commands:

```bash
npm run build
```

```bash
npm run start
```

```bash
npm run lint
```

## Review mode

With `NEXT_PUBLIC_REVIEW_MODE=true` (the default in `.env.example`), the site shows a review banner and dashed **Pending** notes wherever content is waiting on the practice: photos, contact details, pricing, scheduler and portal links. With review mode off, those notes disappear, unconfirmed FAQ answers are hidden, and the pricing section stays unpublished. Review builds also ask search engines not to index them.

Set `NEXT_PUBLIC_REVIEW_MODE` to `false` (or leave it empty) for the live launch.

## Where things are configured

| What | Where |
| --- | --- |
| Practice name, provider, credentials, service areas | `src/config/site.ts` |
| Verified phone, email, mailing address, hours | `src/config/site.ts` → `contact` |
| Pricing and what it includes (unpublished until set) | `src/config/site.ts` → `pricing` |
| Confirmed program details, follow up, insurance, forms | `src/config/site.ts` → `program`, `operations` |
| Tebra scheduler URL | `NEXT_PUBLIC_TEBRA_SCHEDULER_URL` |
| Tebra patient portal URL | `NEXT_PUBLIC_TEBRA_PORTAL_URL` |
| Payment URL, once confirmed | `NEXT_PUBLIC_PAYMENT_URL` |
| FAQ questions and answers | `src/content/faqs.ts` |
| Photos, alt text, licenses and credits | `src/content/images.ts` and `public/images/` |
| Provider portrait | `public/images/` plus `provider.portrait` in `src/config/site.ts` |
| Colors, type and layout | `src/app/globals.css` (tokens at the top) |

Integration URLs must use https. Set them in `.env.local` for development and in the Vercel project settings for previews and production. They are public links, not secrets, but keeping them in environment variables lets preview and production use different values.

### Tebra scheduling

The Book a Consultation page (`/book`) embeds Tebra's official online scheduler in an iframe using the URL supplied by the practice. Tebra controls everything inside the frame. The page always shows an **Open Tebra Scheduler** link as a fallback. Until the URL is set, the page shows a clear pending message and never a simulated calendar.

### Tebra patient portal

Every Patient Portal link (header, mobile menu, footer, Contact, Book, FAQ) opens the Tebra portal in a new tab with `target="_blank"` and `rel="noopener noreferrer"`. Until the URL is set, these links go to the portal section of the Contact page. The portal is never embedded and this site never collects Tebra credentials.

### Payments

A **Make a Payment** footer link appears only when `NEXT_PUBLIC_PAYMENT_URL` is set. Confirm with the practice whether payments run through Tebra before adding anything else.

## Adding photos

Each photo on the site is a named slot in `src/content/images.ts` with alt text and an art direction brief. To fill one:

1. Export a web sized JPEG or WebP (about 1600px on the long edge, under 400 KB).
2. Save it as `public/images/<slot-name>.jpg`.
3. Set `src`, `credit`, `license` and `sourceUrl` for that slot.

Next.js serves optimized AVIF and WebP versions automatically. Use each photo once. Do not present illustrative people as patients, staff or Dr. Crawford.

## Project layout

```
src/
  app/            Pages (one folder per route), layout and global CSS
  components/     Header, footer, accordion, scheduler embed, shared UI
  config/site.ts  Central practice configuration
  content/        FAQs and the image manifest
docs/
  DEVELOPMENT_CHECKLIST.md   Missing content, integrations, verification and launch steps
```

## Deployment

Not deployed yet. See the launch sequence in `docs/DEVELOPMENT_CHECKLIST.md`. Connect the repository to Vercel only after the finished site is approved, use a preview deployment for final checks, and change no domain or DNS settings until the live launch is authorized.
