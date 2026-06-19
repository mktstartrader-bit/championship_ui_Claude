import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import './LanguageSelector.css'

// Code + native label. EN is the default (page language); the rest are the
// requested options.
const LANGS = [
  { code: 'EN', name: 'English' },
  { code: 'CN', name: '简体中文' },
  { code: 'TW', name: '繁體中文' },
  { code: 'MY', name: 'Bahasa Melayu' },
  { code: 'VN', name: 'Tiếng Việt' },
  { code: 'TH', name: 'ไทย' },
  { code: 'IDN', name: 'Bahasa Indonesia' },
  { code: 'AR', name: 'العربية' },
  { code: 'KR', name: '한국어' },
  { code: 'JP', name: '日本語' },
  { code: 'FR', name: 'Français' },
  { code: 'ES', name: 'Español' },
  { code: 'PT', name: 'Português' },
  { code: 'DE', name: 'Deutsch' },
  { code: 'IT', name: 'Italiano' },
  { code: 'PL', name: 'Polski' },
  { code: 'NL', name: 'Nederlands' },
]

export default function LanguageSelector() {
  const [open, setOpen] = useState(false)
  const { lang: current, setLang } = useLang()
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="lang" ref={ref}>
      <button
        type="button"
        className="lang__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        onClick={() => setOpen((v) => !v)}
      >
        <svg className="lang__globe" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M3 12h18M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
        <span className="lang__code">{current}</span>
        <svg className={`lang__chev ${open ? 'is-open' : ''}`} viewBox="0 0 16 16" aria-hidden="true">
          <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul className="lang__menu" role="listbox" aria-label="Languages">
          {LANGS.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={current === l.code}
                className={`lang__item ${current === l.code ? 'is-active' : ''}`}
                onClick={() => {
                  setLang(l.code)
                  setOpen(false)
                }}
              >
                <span className="lang__item-code">{l.code}</span>
                <span className="lang__item-name">{l.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
