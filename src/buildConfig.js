// Build-time configuration. The __LANG__ / __EDITION__ tokens are replaced
// at build time by Vite's `define` (see vite.config.js), sourced from the
// VITE_LANG / VITE_EDITION env vars set per region by build-regions.mjs.
//
//   language  — the single locked display language for this build
//               (EN, AR, KR, JP, CN, TW, FR, MY, VN, TH)
//   edition   — 'nba'     keeps the NBA logo + NBA prize content
//               'generic' strips NBA branding (STARTRADER-only hero,
//                         NBA removed from prize copy)
//
// Regional pages are single-language, so there is no language switcher.
export const LANG = String(__LANG__ || 'EN').toUpperCase()
export const EDITION = String(__EDITION__ || 'nba').toLowerCase()
export const IS_NBA = __IS_NBA__
// STATIC export: when true, components skip their hidden `initial` state so
// content renders visible on first paint (for the no-JS prerendered build).
export const STATIC = __STATIC__
// Target URLs for the EN/AR language switcher.
export const URL_EN = __URL_EN__
export const URL_AR = __URL_AR__
