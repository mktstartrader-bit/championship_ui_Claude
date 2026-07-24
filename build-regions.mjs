// Builds one self-contained static site per region into dist-regions/<slug>/.
// Each build is locked to a single language and edition (nba | generic) and
// uses relative asset URLs, so a folder can be dropped straight onto its URL.
//
//   node build-regions.mjs
import { execSync } from 'node:child_process'
import { rmSync, mkdirSync, writeFileSync } from 'node:fs'

const { translations } = await import('./src/i18n/translations.js')

// BCP-47 tags for <html lang>. SCN (Simplified Chinese) maps to the CN dict.
const htmlLang = {
  EN: 'en', AR: 'ar', KR: 'ko', JP: 'ja', CN: 'zh-Hans',
  TW: 'zh-Hant', FR: 'fr', MY: 'ms', VN: 'vi', TH: 'th',
}

// Per Aleksandar: only Global (EN/Canada) and Arabic keep NBA logo + content.
const regions = [
  { slug: '01-startrader-com-en',  lang: 'EN', edition: 'generic', url: 'https://www.startrader.com/star-trading-league-championship/' },
  { slug: '01-startrader-com-ar',  lang: 'AR', edition: 'nba',     url: 'https://www.startrader.com/ar/star-trading-league-championship/' },
  { slug: '02-kr',                 lang: 'KR', edition: 'generic', url: 'https://www.startrader.com/kr/star-trading-league-championship/' },
  { slug: '03-jp',                 lang: 'JP', edition: 'generic', url: 'https://www.startraderjp.com/star-trading-league-championship/' },
  { slug: '04-apac-en',            lang: 'EN', edition: 'generic', url: 'https://www.startraderapac.com/star-trading-league-championship/' },
  { slug: '04-apac-scn',           lang: 'CN', edition: 'generic', url: 'https://www.startraderapac.com/scn/star-trading-league-championship/' },
  { slug: '04-apac-tw',            lang: 'TW', edition: 'generic', url: 'https://www.startraderapac.com/tw/star-trading-league-championship/' },
  { slug: '05-fr',                 lang: 'FR', edition: 'generic', url: 'https://www.startraderfr.com/fr/star-trading-league/' },
  { slug: '06-my',                 lang: 'MY', edition: 'generic', url: 'https://www.startradermy.com/my/star-trading-league/' },
  { slug: '07-vn',                 lang: 'VN', edition: 'generic', url: 'https://www.startradervn.net/vn/star-trading-league/' },
  { slug: '08-in-en',              lang: 'EN', edition: 'generic', url: 'https://www.startrader.com/in/star-trading-league/' },
  { slug: '09-th',                 lang: 'TH', edition: 'generic', url: 'https://www.startrader.com/th/star-trading-league/' },
  { slug: '10-global-en',          lang: 'EN', edition: 'nba',     url: 'https://www.startrader.com/global/star-trading-league/' },
]

rmSync('dist-regions', { recursive: true, force: true })
mkdirSync('dist-regions', { recursive: true })

const manifest = ['folder\tlanguage\tedition\ttarget URL', '']
for (const r of regions) {
  const dict = translations[r.lang] || translations.EN
  const desc = dict['more.lead'] || translations.EN['more.lead']
  const out = `dist-regions/${r.slug}`
  const env = {
    ...process.env,
    VITE_LANG: r.lang,
    VITE_EDITION: r.edition,
    VITE_HTMLLANG: htmlLang[r.lang] || 'en',
    VITE_DESC: desc,
  }
  console.log(`\n▶ ${r.slug}  ${r.lang}/${r.edition}  → ${r.url}`)
  execSync(`npx vite build --outDir ${out} --emptyOutDir`, { stdio: 'inherit', env })
  manifest.push(`${r.slug}\t${r.lang}\t${r.edition}\t${r.url}`)
}

writeFileSync('dist-regions/MANIFEST.txt', manifest.join('\n') + '\n')
console.log('\n✓ All regional builds written to dist-regions/ (see MANIFEST.txt)')
