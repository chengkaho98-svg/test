# Aurelian — Private Advisory

A single-page marketing site built for qualified lead generation: React 19 + Vite + Tailwind CSS 3, no component library.

**Live:** https://chengkaho98-svg.github.io/test/

Deployed to GitHub Pages by `.github/workflows/deploy.yml`. The Vite `base` is derived at build time, so local dev stays on `/` while Pages serves the `/test/` subpath.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  App.jsx                 page composition + shared enquiry state
  data/site.js            all brand copy, services, metrics, FAQs
  hooks/                  useInView, useCountUp, useScrolled, useActiveSection, usePrefersReducedMotion
  components/
    Navbar.jsx            sticky nav, active section, mobile menu
    Hero.jsx              headline, CTAs, client-brief panel, proof strip
    Capabilities.jsx      services grid (left intro, six cards)
    ServiceCard.jsx       reusable card, presets the contact form
    Approach.jsx          three-step engagement model
    Metrics.jsx           scroll-triggered animated counters
    Clients.jsx           testimonial, anonymised mandates, mid-page CTA
    Faq.jsx               accessible accordion
    Contact.jsx           validated enquiry form + success state
    Footer.jsx            closing CTA, navigation, legal
    ui/                   Button, Container, Eyebrow, Reveal, SectionHeading
    icons.jsx             inline SVG icon set and brand mark
public/                   robots.txt, sitemap.xml, OG image
```

## Design tokens

Defined in `tailwind.config.js`:

- `ink` `#0B0B0F` — page base
- `gold` `#C9A84C` — accent, primary CTA
- `cream` `#F5F0E6` — text and the light section
- `font-display` Inter, `font-sans` Manrope (loaded from Google Fonts)

All styling is Tailwind utilities. `src/index.css` only contains the three Tailwind directives.

## Customising

- **Brand, services, FAQs, metrics** — edit `src/data/site.js`; components read from it.
- **Colours and fonts** — edit `tailwind.config.js`; the palette is used through semantic tokens.
- **Form backend** — `handleSubmit` in `src/components/Contact.jsx` currently simulates a request. Replace the `setTimeout` with a `fetch` to your CRM or form endpoint. Client-side validation, honeypot and success state are already wired.
- **Canonical/OG URLs** — the Pages URLs live in `index.html`, `public/robots.txt` and `public/sitemap.xml`.
- **Deploying elsewhere** — the `base` in `vite.config.js` falls back to `/`, which suits a custom domain or root-hosted deployment.

## Accessibility & performance notes

- Semantic landmarks, one `h1`, named regions, skip link, visible focus rings.
- Form errors use `aria-invalid`, `aria-describedby` and `role="alert"`; focus moves to the first invalid field, then to the success message.
- Scroll reveals, counters, smooth scrolling and the rotating hero arc all respect `prefers-reduced-motion`.
- Lighthouse (desktop): Accessibility 100, Best Practices 100, SEO 100.
- Checked for horizontal overflow at 375, 768 and 1280 px.
