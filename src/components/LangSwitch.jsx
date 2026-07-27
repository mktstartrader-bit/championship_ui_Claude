import { LANG, SWITCH } from '../buildConfig'
import './LangSwitch.css'

// Language switcher. Each regional page is a separate static build, so a
// switch is a plain link to the other language's page (works without JS).
// SWITCH is [{code,label,url}] from the build; hidden when there's nothing
// to switch to (single-language pages).
export default function LangSwitch() {
  if (!Array.isArray(SWITCH) || SWITCH.length < 2) return null
  return (
    <nav className="langswitch" aria-label="Language">
      {SWITCH.map((l) =>
        l.code === LANG ? (
          <span key={l.code} className="langswitch__item is-active" aria-current="true">
            {l.label}
          </span>
        ) : (
          <a
            key={l.code}
            className="langswitch__item"
            href={l.url}
            lang={l.code.toLowerCase()}
          >
            {l.label}
          </a>
        ),
      )}
    </nav>
  )
}
