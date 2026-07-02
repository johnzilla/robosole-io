# RoboSole — robosole.io

Marketing landing page for **RoboSole**: premium, high-performance shoes, kicks, and treads engineered for humanoid robots. Dark, cyber-industrial, conversion-focused single page.

**Zero npm. Zero `node_modules`. Zero runtime dependencies.** Just static HTML, a
compiled CSS file, ~30 lines of vanilla JS, and self-hosted fonts. The only
build-time tool is a single pinned Tailwind binary you fetch once.

- **No dependency tree** — nothing runs install scripts on your machine.
- **~300 KB** of committed site files, everything self-hosted (no CDN/Google calls at runtime).
- **Runs anywhere** — open it through any static file server; deploy to any static host.

---

## Run it locally

The site is pre-built (`assets/css/output.css` is committed), so you just need to
serve the folder. Any static server works — pick whichever you have:

```bash
# Python (bundled with macOS)
python3 -m http.server 3000

# …or Ruby
ruby -run -e httpd . -p 3000

# …or, if you happen to have Node handy (not required)
npx serve .
```

Then open **http://localhost:3000**.

> Serve through a server rather than opening `index.html` via `file://` — the page
> uses absolute paths (`/assets/...`) that need a document root.

---

## Editing the styles (rebuilding the CSS)

Styling is [Tailwind CSS](https://tailwindcss.com), compiled by the **standalone
binary** — a single self-contained executable, no Node required.

**One-time setup** — fetch the pinned binary (`v3.4.17`):

```bash
tools/fetch-tailwind.sh
```

This downloads `tools/tailwindcss` (~46 MB, gitignored). Then:

```bash
./build.sh          # compile once, minified → assets/css/output.css
./build.sh watch    # rebuild on every change to index.html / src/input.css
```

Edit Tailwind classes directly in [`index.html`](index.html); edit the brand tokens
(colors, shadows, fonts, animations) in [`tailwind.config.js`](tailwind.config.js)
and base/component styles in [`src/input.css`](src/input.css).

> If you never touch the styling, you don't need the binary at all — the committed
> `output.css` is all the site serves.

---

## Project structure

```
robosole-io/
├── index.html              # the entire page (all 7 sections + head/SEO/JSON-LD)
├── build.sh                # compile Tailwind via the standalone binary
├── tailwind.config.js      # brand palette, shadows, keyframes, fonts
├── src/
│   └── input.css           # @font-face, Tailwind layers, brand components, JS-toggled states
├── assets/
│   ├── css/output.css      # compiled stylesheet (committed — the site serves this)
│   ├── js/main.js          # nav scroll state, mobile menu, scroll reveal, signup, year
│   ├── fonts/*.woff2       # self-hosted Space Grotesk + Inter (no Google request)
│   └── images/*.svg        # placeholder brand art (see below)
├── tools/
│   ├── fetch-tailwind.sh   # download the pinned Tailwind binary
│   └── tailwindcss         # the binary itself (gitignored, fetched on demand)
├── favicon.svg  robots.txt  sitemap.xml
└── README.md
```

**Sections, in order:** Hero → Product Showcase → Why RoboSole → The Forge →
Community & Drops → Testimonials (In the Wild) → Footer.

---

## Replacing the placeholder art

Every image is a self-contained SVG in [`assets/images/`](assets/images/) so the
page looks finished out of the box. Swap each for a real render/photo/video — the
descriptive `alt` text on each `<img>` in `index.html` says exactly what to shoot.

| File | Where | Replace with |
| --- | --- | --- |
| `hero-robot.svg` | Hero background | Cinematic photo **or a looping `<video>`** of a humanoid robot mid-stride in RoboSole treads |
| `product-sole-01.svg` | Product card | Studio render of Sole Series 01 |
| `product-trail-treads.svg` | Product card | Studio render of Trail Treads |
| `product-performance-kicks.svg` | Product card | Studio render of Performance Kicks |
| `forge.svg` | The Forge | Interior shot of the workshop / forge floor |
| `og-robosole.svg` | Social share card | 1200×630 branded OG image |

**Video hero:** replace the hero `<img>` in `index.html` with:

```html
<video autoplay muted loop playsinline poster="/assets/images/hero-robot.svg"
       class="h-full w-full object-cover">
  <source src="/assets/videos/hero-loop.mp4" type="video/mp4" />
</video>
```

---

## Wiring up the interactive bits

These ship as front-end placeholders — all live in [`assets/js/main.js`](assets/js/main.js)
and `index.html`:

- **Email signup** — the `data-signup-form` handler fakes success. Point it at your
  email provider (Klaviyo, Resend, Mailchimp) or a serverless function.
- **Product buttons** — the `Pre-order` / `Buy` buttons anchor to `#community`.
  Swap the `href` for real checkout URLs (Shopify, Stripe, etc.).
- **Social links** — update the URLs in `index.html`
  (currently `x.com/robosole`, `github.com/robosole`).

---

## Brand system

- **Palette** — matte black `forge.*`, electric `cyan-glow #22d3ee`, metallic `silver`, `spark #f97316`.
- **Type** — Space Grotesk (display) + Inter (body), self-hosted `woff2`.
- **Motion** — scroll reveals, hover lifts, glow shadows, scan-line + pulse. All respect `prefers-reduced-motion`.
- **Dark theme only**, mobile-first, fully responsive.

## SEO

`<title>`, meta description, Open Graph, Twitter card, canonical URL, `robots.txt`,
`sitemap.xml`, and Organization JSON-LD are all in place — optimized for
**“humanoid robot shoes”** and **“robotic footwear.”** Update the `robosole.io` URLs
if the domain changes.

---

© RoboSole. Corporate: [robosolehq.com](https://robosolehq.com).
