import { createContext, useContext, useEffect } from 'react'
import { translations } from './translations'
import { LANG, IS_NBA } from '../buildConfig'

const LanguageContext = createContext(null)

// Right-to-left languages (sets <html dir="rtl">).
const RTL = new Set(['AR'])

// Prize strings that carry NBA branding. On the generic edition the "NBA"
// token is removed so no NBA marks appear. NOTE: interim mechanical strip —
// replaced by the approved generic wording once provided.
const NBA_PRIZE_KEYS = [
  'tier.first.prizes',
  'tier.second.meta',
  'tier.second.prizes',
  'tier.third.meta',
  'tier.third.prizes',
]
const stripNba = (v) =>
  Array.isArray(v)
    ? v.map(stripNba)
    : typeof v === 'string'
      ? v.replace(/NBA\s*/g, '').replace(/\s{2,}/g, ' ').trim()
      : v

function buildDict(lang) {
  const base = translations[lang] || translations.EN
  if (IS_NBA) return base
  const generic = { ...base }
  for (const k of NBA_PRIZE_KEYS) {
    if (k in generic) generic[k] = stripNba(generic[k])
  }
  return generic
}

// Resolved once at module load — LANG/IS_NBA are build-time constants.
const DICT = buildDict(LANG)
const FALLBACK = buildDict('EN')

export function LanguageProvider({ children }) {
  const lang = LANG

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase()
    document.documentElement.dir = RTL.has(lang) ? 'rtl' : 'ltr'
  }, [lang])

  // Return the value for a key, falling back to English so partially
  // translated languages never render blank. setLang is a no-op (single
  // locked language per regional build).
  const t = (key) => {
    if (DICT[key] !== undefined) return DICT[key]
    if (FALLBACK[key] !== undefined) return FALLBACK[key]
    return key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: () => {}, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}
