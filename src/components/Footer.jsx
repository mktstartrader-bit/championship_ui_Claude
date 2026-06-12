import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__ghost" aria-hidden="true">STARTRADER</span>
      <div className="container footer__inner">
        <p className="footer__tagline">
          Strategy. Skill. Squad. The STAR Trading League: where the market meets
          the court.
        </p>
        <p className="footer__signoff">Stay tuned for the next season.</p>

        <div className="footer__baseline">
          <img className="footer__logo" src="/startrader-logo.svg" alt="STARTRADER" />
          <span className="footer__legal">
            STARTRADER is an official NBA partner. STAR Trading League · 2026
            Season. All trademarks are the property of their respective owners.
          </span>
        </div>
      </div>
    </footer>
  )
}
