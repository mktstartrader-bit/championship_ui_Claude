import { useEffect, useState } from 'react'
import BrandMark from './objects/BrandMark'
import './HudNav.css'

const LINKS = [
  { href: '#champions', label: 'Champions' },
  { href: '#road', label: 'The Bracket' },
  { href: '#claim', label: 'Claim' },
]

/**
 * HudNav — game-UI command bar.
 *
 * STARTRADER wordmark (swap `logoSrc` for the official SVG), the
 * "STAR Trading League" tag, section jump-links, an animated equalizer
 * cluster, and a live status chip. Condenses on scroll.
 *
 * @param {string} [logoSrc] - URL/path to the official STARTRADER logo SVG.
 */
export default function HudNav({ logoSrc }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`hud ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="hud__inner container">
        <a className="hud__brand" href="#top" aria-label="STARTRADER home">
          {logoSrc ? (
            <img className="hud__logo" src={logoSrc} alt="STARTRADER" />
          ) : (
            <span className="hud__lockup">
              <BrandMark size={24} />
              <span className="hud__wordmark">
                STAR<span className="hud__wordmark-accent">TRADER</span>
              </span>
            </span>
          )}
          <span className="hud__divider" aria-hidden="true" />
          <span className="hud__tag">STAR Trading League</span>
        </a>

        <nav className="hud__nav" aria-label="Page sections">
          {LINKS.map((l) => (
            <a key={l.href} className="hud__link" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hud__right">
          <span className="hud__eq" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <div className="hud__status" role="status" aria-label="Season status">
            <span className="hud__dot" aria-hidden="true" />
            <span className="hud__status-text">SEASON CONCLUDED</span>
          </div>
        </div>
      </div>
    </header>
  )
}
