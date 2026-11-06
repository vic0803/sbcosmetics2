# Sophia Belinska Cosmetics — Project Guide

Persistent context for this project. Read this before working so you don't re-discover the codebase each session.

## What this is
A static marketing + storefront site for a handcrafted cosmetics brand (Sophie Bilynska / Sophia Belinska). Plain HTML/CSS/JS, no build step, no backend, no framework. Served with any static server (e.g. `python3 -m http.server`).

## Stack & conventions
- Vanilla HTML/CSS/JS only. No npm, no bundler, no TypeScript.
- Bilingual UA/EN via a JS i18n dictionary in `js/app.js` (`I18N` object). Text nodes use `data-i18n="key"`, placeholders use `data-i18n-ph="key"`. Default language is `ua`, stored in `localStorage` key `sbc_lang`.
- Event handlers are attached from JS with `addEventListener` — avoid inline `onclick=` in HTML.
- When injecting dynamic strings into `innerHTML`, escape them (XSS safety).
- Design tokens live in `:root` in `css/style.css`: `--gold`, `--gold-light`, `--pearl`, `--text`, `--text-muted`, `--line`, `--black`, `--black-soft`, `--black-card`, `--radius`, `--radius-sm`, `--font-display`, `--font-body`.
- Shared components reused across pages: `.header`, `.mobile-menu`, `.footer`, `.btn` / `.btn-fill` / `.btn-block`, `.eyebrow`, `.section` / `.section-title` / `.section-sub`, `.card-wrap` / `.card`, `.reveal` (scroll-in animation).

## File map
- `index.html` — home. Custom scroll-driven canvas hero (`.xhero`, powered by `js/xhero.js` + GSAP from CDN). Also has: quiz (`#quiz`), reviews (`#reviews`), FAQ (`#faq`).
- `catalog.html` — product grid with category filter chips and a sort select.
- `product.html` — product detail page (PDP). Gallery, variants, accordion, related products, sticky mobile buy bar.
- `brand.html`, `contacts.html` — static content pages.
- `css/style.css` — main stylesheet (tokens, components, all sections).
- `css/xhero.css` — styles for the homepage canvas hero only.
- `js/app.js` — i18n, mobile menu, accordion (`.acc-item`/`.acc-head` and `.faq-item`/`.faq-head`), mock cart badge, scroll reveal, catalog filters, the skin quiz controller.
- `js/data.js` — single source of truth for products (if present / once added).
- `assets/products/*` — product imagery. `assets/logo`, `assets/brand`, `assets/fonts` (Jost, OFL).

## Known state / gotchas
- The cart is a MOCK: `addToCart()` just increments `localStorage.sbc_cart`. There is no real cart, no checkout.
- `product.html` was originally static (one hardcoded soap). Moving to dynamic `product.html?id=<id>` rendering from `js/data.js`.
- Fonts: the brand font is Jost (SIL OFL) in `assets/fonts`, referenced via `--font-display` and `--font-b`. Futura PT was removed (licensed, kept outside the project).
- This is `sbcosmetics2`, the ACTIVE working copy. The sibling project `/Volumes/Mac D/Kiro/projects/sbcosmetics` is the stable base/backup — do not break it; new work (new images, ideas) happens here.
- A friend's more feature-complete fork exists OUTSIDE this workspace at `/Volumes/Mac D/sb/sb.cosmetic/sbcosmetics_v2` (real cart/checkout/data.js). Reference only — do not edit it, not part of this repo.

## Running locally
`python3 -m http.server 8082` from this project root, then open http://localhost:8082.
(The base `sbcosmetics` typically runs on 8081, so use a different port to run both at once.)

## How to work here
- Keep changes scoped. Match existing class names and the bilingual i18n pattern rather than inventing new structures.
- Any new product must be added to `js/data.js` and will flow into catalog + PDP automatically once those are data-driven.
- Verify JS with `node --check` after edits; there is no test suite.
