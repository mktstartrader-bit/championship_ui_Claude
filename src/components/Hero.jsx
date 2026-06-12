import { useState } from 'react'
import { motion } from 'framer-motion'
import Ticker from './effects/Ticker'
import useReducedMotion from '../hooks/useReducedMotion'
import './Hero.css'

const HEADLINE_LINES = ['The Season Has', 'Reached Its', 'Final Moment']

const TICKER_ITEMS = [
  { label: 'EAST', value: '15→1', up: true },
  { label: 'WEST', value: '15→1', up: true },
  { label: 'STAGES', value: '5 / 5', up: true },
  { label: 'PROFIT RATE', value: 'MVP', up: true },
  { label: 'GRAND PRIZE', value: '$10,000', up: true },
  { label: 'TEAMS', value: '30', up: false },
  { label: 'CHAMPION', value: 'CROWNED', up: true },
  { label: 'BRACKET', value: 'COMPLETE', up: true },
]

export default function Hero() {
  const reduced = useReducedMotion()
  const [posterOk, setPosterOk] = useState(true)

  const ease = [0.22, 1, 0.36, 1]
  const rise = (delay = 0) => ({
    initial: { opacity: 0, y: reduced ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay: reduced ? 0 : delay },
  })

  return (
    <section className={`hero ${posterOk ? 'has-bgimg' : ''}`} id="top" aria-labelledby="hero-title">
      {/* Full-bleed banner image */}
      <img
        className="hero__bgimg"
        src="/hero-champions.jpg"
        alt="STAR Trading League — Champions Crowned. Official Partner of the NBA."
        onError={() => setPosterOk(false)}
      />
      <span className="hero__scrim" aria-hidden="true" />

      {/* Bottom overlay: heading (left) + content (right) */}
      <div className="hero__overlay container">
        <motion.div className="hero__heading-col" {...rise(0.2)}>
          <p className="eyebrow hero__eyebrow">STAR TRADING LEAGUE</p>
          <h1 id="hero-title" className="hero__title">
            {HEADLINE_LINES.map((line) => (
              <span className="hero__line" key={line}>
                {line}
              </span>
            ))}
          </h1>
        </motion.div>

        <motion.div className="hero__content-col" {...rise(0.34)}>
          <p className="hero__sub">
            The buzzer has sounded. The bracket is complete. 30 teams to 1: the
            ultimate trading MVP has been determined.
          </p>
          <div className="hero__chip">
            <span className="hero__chip-label">Tournament Period</span>
            <span className="hero__chip-value">1 June 2026 – 13 August 2026</span>
            <span className="hero__chip-state">Concluded</span>
          </div>
          <a className="hero__cta" href="#claim">
            Claim Your Prize
            <span className="hero__cta-arrow" aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero__ticker"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduced ? 0 : 0.9, duration: 0.8 }}
      >
        <Ticker items={TICKER_ITEMS} speed={42} />
      </motion.div>
    </section>
  )
}
