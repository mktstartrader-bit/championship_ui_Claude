import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Per-build values, sourced from env vars set by build-regions.mjs.
// Defaults keep `npm run dev` / plain `npm run build` working (EN, NBA).
const LANG = process.env.VITE_LANG || 'EN'
const EDITION = process.env.VITE_EDITION || 'nba'
const HTMLLANG = process.env.VITE_HTMLLANG || 'en'
const DESC =
  process.env.VITE_DESC ||
  'STAR Trading League — a trading competition by STARTRADER. The season has concluded: meet the champions.'

// Replaces @@TOKEN@@ placeholders in index.html (kept distinct from Vite's
// own %ENV% mechanism so there is no ambiguity about what fills them).
function htmlEnv() {
  return {
    name: 'html-env',
    transformIndexHtml(html) {
      return html
        .replace(/@@HTMLLANG@@/g, HTMLLANG)
        .replace(/@@DESC@@/g, DESC)
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), htmlEnv()],
  // Relative asset URLs so a build can be dropped into any sub-path
  // (e.g. https://www.startrader.com/star-trading-league-championship/).
  base: './',
  resolve: {
    alias: {
      // `@hero` resolves to exactly one image per edition, so the other
      // (NBA / generic) hero file is never emitted into the build.
      '@hero': fileURLToPath(
        new URL(
          EDITION === 'nba'
            ? './src/assets/hero-champions.jpg'
            : './src/assets/hero-champions-generic.jpg',
          import.meta.url,
        ),
      ),
    },
  },
  define: {
    __LANG__: JSON.stringify(LANG),
    __EDITION__: JSON.stringify(EDITION),
    // Boolean literal so `__IS_NBA__ ? a : b` constant-folds and the unused
    // hero image is dropped from the bundle (no NBA asset in generic builds).
    __IS_NBA__: JSON.stringify(EDITION === 'nba'),
  },
})
