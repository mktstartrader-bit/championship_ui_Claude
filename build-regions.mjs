// Builds one self-contained static site per region into dist-regions/<slug>/.
// Each build is locked to a single language and edition (nba | generic) and
// uses relative asset URLs, so a folder can be dropped straight onto its URL.
//
//   node build-regions.mjs
import { execSync } from 'node:child_process'
import { rmSync, mkdirSync, writeFileSync } from 'node:fs'

const { translations } = await import('./src/i18n/translations.js')

// OUTDIR: where builds land. PREVIEW: build for the live review deployment —
// switchers link to sibling preview paths (../<slug>/) and animations stay on
// (SPA, not the no-JS static export). Default = production static export.
const OUTDIR = process.env.OUTDIR || 'dist-regions'
const PREVIEW = process.env.PREVIEW === '1'

// BCP-47 tags for <html lang>. SCN (Simplified Chinese) maps to the CN dict.
const htmlLang = {
  EN: 'en', AR: 'ar', KR: 'ko', JP: 'ja', CN: 'zh-Hans',
  TW: 'zh-Hant', FR: 'fr', MY: 'ms', VN: 'vi', TH: 'th',
  DE: 'de', ES: 'es', IT: 'it', PL: 'pl', PT: 'pt', NL: 'nl', IDN: 'id',
}

// Language switcher groups (production URLs). Only domains that publish more
// than one language get a switcher; everyone else is single-language (none).
const SW_MAIN = PREVIEW
  ? [
      { code: 'EN', label: 'EN', url: '../01-startrader-com-en/' },
      { code: 'AR', label: 'العربية', url: '../01-startrader-com-ar/' },
    ]
  : [
      { code: 'EN', label: 'EN', url: 'https://www.startrader.com/star-trading-league-championship/' },
      { code: 'AR', label: 'العربية', url: 'https://www.startrader.com/ar/star-trading-league-championship/' },
    ]
const SW_APAC = PREVIEW
  ? [
      { code: 'EN', label: 'EN', url: '../04-apac-en/' },
      { code: 'CN', label: '简体', url: '../04-apac-scn/' },
      { code: 'TW', label: '繁體', url: '../04-apac-tw/' },
    ]
  : [
      { code: 'EN', label: 'EN', url: 'https://www.startraderapac.com/star-trading-league-championship/' },
      { code: 'CN', label: '简体', url: 'https://www.startraderapac.com/scn/star-trading-league-championship/' },
      { code: 'TW', label: '繁體', url: 'https://www.startraderapac.com/tw/star-trading-league-championship/' },
    ]
const switchFor = (slug) =>
  slug.startsWith('01-startrader-com') ? SW_MAIN
  : slug.startsWith('04-apac') ? SW_APAC
  : []

// Per Aleksandar: only Global (EN/Canada) and Arabic keep NBA logo + content.
// `name`/`langLabel` are display strings for the review hub only.
const regions = [
  { slug: '01-startrader-com-en',  lang: 'EN', edition: 'generic', name: 'startrader.com',          langLabel: 'EN',          url: 'https://www.startrader.com/star-trading-league-championship/' },
  { slug: '01-startrader-com-ar',  lang: 'AR', edition: 'nba',     name: 'startrader.com /ar',       langLabel: 'AR',          url: 'https://www.startrader.com/ar/star-trading-league-championship/' },
  { slug: '02-kr',                 lang: 'KR', edition: 'generic', name: 'startrader.com /kr',       langLabel: 'KR',          url: 'https://www.startrader.com/kr/star-trading-league-championship/' },
  { slug: '03-jp',                 lang: 'JP', edition: 'generic', name: 'startraderjp.com',         langLabel: 'JP',          url: 'https://www.startraderjp.com/star-trading-league-championship/' },
  { slug: '04-apac-en',            lang: 'EN', edition: 'generic', name: 'startraderapac.com',       langLabel: 'EN',          url: 'https://www.startraderapac.com/star-trading-league-championship/' },
  { slug: '04-apac-scn',           lang: 'CN', edition: 'generic', name: 'apac /scn',                langLabel: 'SCN (简体)',   url: 'https://www.startraderapac.com/scn/star-trading-league-championship/' },
  { slug: '04-apac-tw',            lang: 'TW', edition: 'generic', name: 'apac /tw',                 langLabel: 'TW (繁體)',    url: 'https://www.startraderapac.com/tw/star-trading-league-championship/' },
  { slug: '05-fr',                 lang: 'FR', edition: 'generic', name: 'startraderfr.com',         langLabel: 'FR',          url: 'https://www.startraderfr.com/fr/star-trading-league/' },
  { slug: '06-my',                 lang: 'MY', edition: 'generic', name: 'startradermy.com',         langLabel: 'MY',          url: 'https://www.startradermy.com/my/star-trading-league/' },
  { slug: '07-vn',                 lang: 'VN', edition: 'generic', name: 'startradervn.net',         langLabel: 'VN',          url: 'https://www.startradervn.net/vn/star-trading-league/' },
  { slug: '08-in-en',              lang: 'EN', edition: 'generic', name: 'startrader.com /in',       langLabel: 'EN (India)',  url: 'https://www.startrader.com/in/star-trading-league/' },
  { slug: '09-th',                 lang: 'TH', edition: 'generic', name: 'startrader.com /th',       langLabel: 'TH',          url: 'https://www.startrader.com/th/star-trading-league/' },
  { slug: '10-global-en',          lang: 'EN', edition: 'nba',     name: 'startrader.com /global',   langLabel: 'EN (Canada)', url: 'https://www.startrader.com/global/star-trading-league/' },
  // Additional supported languages (no domain assigned yet in the brief).
  { slug: '11-de',                 lang: 'DE',  edition: 'generic', name: 'German (Deutsch)',       langLabel: 'DE',  url: '— target domain TBD —' },
  { slug: '12-es',                 lang: 'ES',  edition: 'generic', name: 'Spanish (Español)',      langLabel: 'ES',  url: '— target domain TBD —' },
  { slug: '13-it',                 lang: 'IT',  edition: 'generic', name: 'Italian (Italiano)',     langLabel: 'IT',  url: '— target domain TBD —' },
  { slug: '14-pl',                 lang: 'PL',  edition: 'generic', name: 'Polish (Polski)',        langLabel: 'PL',  url: '— target domain TBD —' },
  { slug: '15-pt',                 lang: 'PT',  edition: 'generic', name: 'Portuguese (Português)', langLabel: 'PT',  url: '— target domain TBD —' },
  { slug: '16-nl',                 lang: 'NL',  edition: 'generic', name: 'Dutch (Nederlands)',     langLabel: 'NL',  url: '— target domain TBD —' },
  { slug: '17-idn',                lang: 'IDN', edition: 'generic', name: 'Indonesian (Bahasa)',    langLabel: 'IDN', url: '— target domain TBD —' },
]

rmSync(OUTDIR, { recursive: true, force: true })
mkdirSync(OUTDIR, { recursive: true })

const manifest = ['folder\tlanguage\tedition\ttarget URL', '']
for (const r of regions) {
  const dict = translations[r.lang] || translations.EN
  const desc = dict['more.lead'] || translations.EN['more.lead']
  const out = `${OUTDIR}/${r.slug}`
  const env = {
    ...process.env,
    VITE_LANG: r.lang,
    VITE_EDITION: r.edition,
    VITE_HTMLLANG: htmlLang[r.lang] || 'en',
    VITE_DESC: desc,
    VITE_STATIC: PREVIEW ? '0' : '1',
    VITE_SWITCH: JSON.stringify(switchFor(r.slug)),
  }
  console.log(`\n▶ ${r.slug}  ${r.lang}/${r.edition}  → ${r.url}`)
  execSync(`npx vite build --outDir ${out} --emptyOutDir`, { stdio: 'inherit', env })
  manifest.push(`${r.slug}\t${r.lang}\t${r.edition}\t${r.url}`)
}

writeFileSync(`${OUTDIR}/MANIFEST.txt`, manifest.join('\n') + '\n')

// Review hub (dist-regions/index.html) — a card grid linking to each build.
const cards = regions
  .map((r) => {
    const badge = r.edition === 'nba' ? 'nba">NBA' : 'generic">Generic'
    const path = r.url.replace(/^https?:\/\/(www\.)?/, '')
    return `        <a class="card" href="./${r.slug}/">
          <div class="row"><span class="name">${r.name}</span>
            <span class="badges"><span class="badge lang">${r.langLabel}</span><span class="badge ${badge}</span></span></div>
          <div class="url">${path}</div><div class="open">Open build &rarr;</div>
        </a>`
  })
  .join('\n')

const hub = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#06061f" />
    <title>STAR Trading League — Regional Builds (Review)</title>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <style>
      :root{--navy:#06061f;--panel:rgba(13,13,75,.35);--stroke:rgba(120,160,255,.18);--cyan:#16e9d7;--gold:#e6c9a8;--text:#eef2ff;--mute:#9fb0d6}
      *{box-sizing:border-box;margin:0}
      body{font-family:'Plus Jakarta Sans',system-ui,sans-serif;background:radial-gradient(60% 50% at 20% 0%,rgba(46,123,255,.22),transparent 60%),radial-gradient(50% 40% at 90% 10%,rgba(22,233,215,.12),transparent 60%),var(--navy);color:var(--text);min-height:100vh;padding:clamp(1.5rem,5vw,4rem);line-height:1.5}
      .wrap{max-width:1080px;margin-inline:auto}
      header{margin-bottom:2.5rem}
      .eyebrow{font-size:.72rem;font-weight:700;letter-spacing:.28em;text-transform:uppercase;color:var(--cyan);margin-bottom:.6rem}
      h1{font-size:clamp(1.7rem,4.5vw,2.8rem);font-weight:800;letter-spacing:-.02em;line-height:1.05}
      .sub{color:var(--mute);margin-top:.7rem;max-width:60ch;font-size:.98rem}
      .grid{display:grid;gap:1rem;grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}
      a.card{display:flex;flex-direction:column;gap:.55rem;padding:1.15rem 1.25rem;background:var(--panel);border:1px solid var(--stroke);border-radius:16px;text-decoration:none;color:inherit;backdrop-filter:blur(8px);transition:transform .15s ease,border-color .2s ease,background .2s ease}
      a.card:hover{transform:translateY(-3px);border-color:var(--cyan);background:rgba(22,233,215,.06)}
      .row{display:flex;align-items:center;justify-content:space-between;gap:.5rem}
      .name{font-weight:700;font-size:1.05rem}
      .badges{display:flex;gap:.4rem;flex-shrink:0}
      .badge{font-size:.62rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:.2rem .5rem;border-radius:999px;border:1px solid var(--stroke);color:var(--mute)}
      .badge.lang{color:var(--text);border-color:rgba(120,160,255,.4)}
      .badge.nba{color:var(--navy);background:var(--gold);border-color:var(--gold)}
      .badge.generic{color:var(--cyan);border-color:rgba(22,233,215,.5)}
      .url{font-size:.78rem;color:var(--mute);word-break:break-all}
      .open{font-size:.8rem;font-weight:700;color:var(--cyan)}
      footer{margin-top:2.5rem;color:var(--mute);font-size:.8rem}
    </style>
  </head>
  <body>
    <div class="wrap">
      <header>
        <p class="eyebrow">STAR Trading League · Championship</p>
        <h1>Regional Builds — Review</h1>
        <p class="sub">Each build is locked to one language and edition. Only the <strong>Global</strong> and <strong>Arabic</strong> pages carry NBA branding; all others are generic. Generic prize copy is interim, pending approved wording.</p>
      </header>
      <div class="grid">
${cards}
      </div>
      <footer>${regions.length} builds · relative-asset static sites (mirror the production sub-path hosting).</footer>
    </div>
  </body>
</html>
`
writeFileSync(`${OUTDIR}/index.html`, hub)

console.log(`\n✓ All regional builds written to ${OUTDIR}/ (+ index.html hub, MANIFEST.txt)`)
