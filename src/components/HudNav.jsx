import { useEffect, useState } from 'react'
import BrandMark from './objects/BrandMark'
import './HudNav.css'

/**
 * HudNav — STARTRADER logo (left). Condenses on scroll.
 * (English-only build: the language selector is intentionally omitted.)
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
        </a>
      </div>
    </header>
  )
}
