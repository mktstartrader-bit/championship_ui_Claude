import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

// Right-to-left languages (sets <html dir="rtl">).
const RTL = new Set(['AR'])

export function LanguageProvider({ children }) {
  // English-only build: language is fixed to EN (no persistence, no switching).
  const [lang, setLang] = useState('EN')

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase()
    document.documentElement.dir = RTL.has(lang) ? 'rtl' : 'ltr'
  }, [lang])

  const dict = translations[lang] || translations.EN

  // Return the value for a key, falling back to English (then the key
  // itself) so partially-translated languages never render blank.
  const t = (key) => {
    if (dict[key] !== undefined) return dict[key]
    if (translations.EN[key] !== undefined) return translations.EN[key]
    return key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}
