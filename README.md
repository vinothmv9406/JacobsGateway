# Jacob’s Gateway — Business Setup Consultancy Website

Single-page marketing site for a business setup / company formation consultancy
serving Dubai, the wider UAE and Saudi Arabia.

React 18, Vite, TypeScript, Tailwind CSS and shadcn/ui.

Public pages: `/` (homepage), `/terms`, `/privacy`, `/cookies`.

## Design system

Palette and typography are taken from the approved mockup
(`jacobs-gateway-poc.html`).

| Token | Hex | Use |
|---|---|---|
| `jg-ink` | `#0A1220` | Dark section grounds, body text on porcelain |
| `jg-ink-2` | `#0F1C33` | Gradient midpoint on ink sections |
| `jg-ink-soft` | `#4C5A6B` | Body copy on porcelain |
| `jg-porcelain` | `#F5F3EC` | Page ground |
| `jg-card` | `#FFFFFF` | Cards on porcelain |
| `jg-gold-light` / `jg-gold` / `jg-gold-deep` | `#F6DFB0` / `#CB8A46` / `#8B4E20` | Brass gradient, accents, eyebrows |
| `jg-brass` | `#EAD2A0` | Icon discs |
| `jg-emerald*` | `#1F4A3D` etc. | Confirmation ticks only |

Typefaces are the **template's originals** — `Inter` (`font-sans`) and
`Poppins` (`font-display`) — deliberately kept rather than the mockup's
Playfair/Jost/IBM Plex Mono pairing. Headings use the default sans stack; the
only typographic rule in `index.css` is a slight negative letter-spacing on
`h1`–`h5`. Small caps-style labels (eyebrows, stat captions, table headers) get
their emphasis from `uppercase` + wide `tracking` + a weight class, not from a
separate typeface.

Shared utilities in `src/index.css`: `.text-gradient` /
`.text-gradient-on-dark` (brass gradient text), `.eyebrow` (+
`.eyebrow-on-dark`, `.eyebrow-center`), `.silk-overlay` (diagonal sheen for ink
sections), `.bg-gradient-hero`, `.hero-glow`.

The logo is `src/components/Logo.tsx` — `<Logo variant="on-dark|on-light" />`
for mark + wordmark, or `<LogoMark />` for the mark alone. Paths inherit
`currentColor`.

**Section rhythm** alternates porcelain and ink so the dark bands act as
punctuation: hero (ink) → services (porcelain) → how it works (ink) →
testimonials, pricing (porcelain) → market guide (ink) → FAQ (porcelain) →
CTA (porcelain wrapping a dark banner) → footer (ink).

The old `crypto-*` Tailwind tokens still exist but now point at the Jacob's
Gateway palette, so any class the re-skin missed renders on-brand rather than
purple. Prefer `jg-*` in new work.

## Getting started

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint
```

## Where the content lives

Almost all copy is data-driven. To change wording, edit these rather than the
components:

| File | Controls |
|---|---|
| `src/data/siteConfig.ts` | Brand name, phone, email, address, hero stats |
| `src/data/featuresData.tsx` | The nine service cards |
| `src/data/howItWorks.tsx` | The three-step process |
| `src/data/pricingData.ts` | Package names, prices, inclusions |
| `src/data/faqData.ts` | FAQ questions and answers |
| `src/data/providersData.ts` | Market-guide providers and comparison table |
| `src/data/testimonials.ts` | Client quotes |
| `index.html` | Title, meta tags, Open Graph, JSON-LD structured data |

## Before going live

1. **Replace every `[REPLACE]` marker** in `src/data/siteConfig.ts` — phone,
   email, address and legal name are placeholders.
2. **Swap the domain.** `https://www.jacobsgateway.com` appears in `index.html`
   (canonical, hreflang, Open Graph, both JSON-LD blocks),
   `public/robots.txt`, `public/sitemap.xml` and `src/data/siteConfig.ts`.
3. **Replace the testimonials.** `src/data/testimonials.ts` contains clearly
   marked sample copy, not real client quotes. Publishing invented reviews as
   genuine is deceptive — use real, attributable quotes or delete the
   `<Testimonials />` section from `src/pages/Index.tsx`.
4. **Confirm the pricing.** Figures in `src/data/pricingData.ts` are indicative
   placeholders.
5. **Have the FAQ reviewed.** `src/data/faqData.ts` states UAE and KSA fee
   thresholds and ownership rules. These change — have a compliance contact
   verify them, and re-check annually. Keep the FAQPage JSON-LD in
   `index.html` in sync with any edit.
6. **Add a share image** at `public/og-image.jpg` (1200×630).
7. **Replace the hero image** in `src/components/Hero.tsx` — it currently points
   at an Unsplash stock photo.

## Notes

- **This is a client-side rendered SPA.** The visible copy is not in the served
  HTML, only in the JS bundle. Google renders JavaScript, but if organic search
  is a priority, consider pre-rendering or migrating to a framework with SSR.
- The Tailwind colour tokens are still named `crypto-*` (`crypto-purple`,
  `crypto-blue`) inherited from the UI scaffold. They are just token names now
  and point at the brand palette. Renaming them touches every component, so it
  was left alone deliberately.
- `vite.config.ts` `base` is `/` and the route is `/`, ready for a root domain.
  The `deploy` script still targets GitHub Pages; if you deploy to a project
  subpath, `base` must be changed back to match.

## Licence

The UI scaffold this project started from is MIT licensed, and the `LICENSE`
file at the repo root carries that notice. **Keep it.** MIT requires the
copyright notice to be retained in the source, and removing it would put the
project in breach. It is a repository file only: it is not part of the build,
is never served to visitors, and appears nowhere on the published site.

All brand assets, copy, design and content under `src/` belong to
Jacob's Gateway.
