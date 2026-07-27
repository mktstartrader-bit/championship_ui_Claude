import { LANG, URL_EN, URL_AR } from '../buildConfig'
import './LangSwitch.css'

// EN / AR switcher. Each regional page is a separate static build, so the
// switch is a plain link to the other language's page (works without JS).
const LANGS = [
  { code: 'EN', label: 'EN', url: URL_EN },
  { code: 'AR', label: 'العربية', url: URL_AR },
]

export default function LangSwitch() {
  return (
    <nav className="langswitch" aria-label="Language">
      {LANGS.map((l) =>
        l.code === LANG ? (
          <span key={l.code} className="langswitch__item is-active" aria-current="true">
            {l.label}
          </span>
        ) : (
          <a key={l.code} className="langswitch__item" href={l.url} lang={l.code.toLowerCase()}>
            {l.label}
          </a>
        ),
      )}
    </nav>
  )
}
