# STAR Trading League — Championship Landing Page

A single-page, recap/celebration landing page for the **STAR Trading League**, an
NBA-themed trading competition by **STARTRADER** (an official NBA partner). The
season has concluded; the page celebrates the MVP champions, retells the bracket
journey, drives a "Claim Your Prize" action, and teases next season.

Premium game-UI / esports-broadcast aesthetic crossed with a trading terminal:
dark futuristic navy, neon court-lights, glassmorphic HUD panels, glossy 3D
objects (built in CSS/SVG), and orchestrated motion.

## Stack

- **React 18 + Vite**
- **framer-motion** for orchestrated reveals, scroll effects, and micro-interactions
- **Plus Jakarta Sans** as the single typeface across the site
- Plain CSS with design tokens in `src/styles/tokens.css` (STARTRADER brand — source of truth)
- Ambient `<canvas>` candlestick layer (throttled, paused off-screen, reduced-motion safe)

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Sections

1. **HUD Nav** — STARTRADER lockup, section links, live status chip
2. **Hero / Banner** — 3D chrome headline, bell-notification HUD panel, faceted star-trophy on a podium, spotlights + confetti, ambient candlesticks, live ticker
3. **Meet Your MVP Champions** — editable champion slot + glossy 3-tier prize podium with profit-rate meters
4. **The Road to the Finals** — the signature: an animated roadmap journey curve (30 → 16 → 8 → 4 → 2 → 1) with milestone nodes, status chips, and an MVP champion node
5. **More Than a Tournament** — arena face-off (East vs West) around the star-trophy monument
6. **Claim Your Prize** — spotlit stage with podium, confetti, side banners, glass panel, and glossy CTA
7. **Footer** — tagline, sign-off, STARTRADER baseline

## Drop-in swap points

- `<HudNav logoSrc="..." />` — official STARTRADER logo SVG (currently an on-brand star mark)
- `public/favicon.svg` — swap for the official favicon
- `<StarTrophy src="..." />`, `<Trophy src="..." />`, `<GlossyBasketball src="..." />`, `<Medal src="..." />` — drop in real 3D renders
- `<ClaimPrize href="..." />` — real claim URL
- `[data-slot="champion-name"]` in `Champions` — real team name & conference

## Accessibility / quality

Responsive to 360px, `prefers-reduced-motion` honored (canvas + transforms disabled,
opacity fades retained), visible keyboard focus, semantic landmarks, skip link,
canvas throttled with `requestAnimationFrame` and paused when off-screen.
