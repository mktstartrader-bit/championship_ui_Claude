import { useRef, useState } from 'react'
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

const FIREWORKS = [
  { x: '9%', y: '22%', delay: '0s', r: '96px', color: 'var(--cyan)' },
  { x: '15%', y: '50%', delay: '1.2s', r: '78px', color: '#e8c45a' },
  { x: '6%', y: '68%', delay: '3.0s', r: '84px', color: '#6aa6ff' },
  { x: '50%', y: '9%', delay: '2.2s', r: '108px', color: 'var(--cyan)' },
  { x: '91%', y: '20%', delay: '0.6s', r: '96px', color: '#e8c45a' },
  { x: '85%', y: '48%', delay: '2.0s', r: '80px', color: 'var(--cyan)' },
  { x: '94%', y: '66%', delay: '3.6s', r: '84px', color: '#6aa6ff' },
]
const FW_SPARKS = Array.from({ length: 16 }, (_, i) => i)

const BURST_SPARKS = Array.from({ length: 14 }, (_, i) => i)
const BURST_COLORS = ['var(--cyan)', '#e8c45a', '#6aa6ff', '#ff7eb6']

export default function Hero() {
  const reduced = useReducedMotion()
  const [posterOk, setPosterOk] = useState(true)

  // Cursor-triggered fireworks
  const [bursts, setBursts] = useState([])
  const lastSpawn = useRef(0)
  const idRef = useRef(0)

  function spawnBurst(e) {
    if (reduced) return
    const t = e.timeStamp
    if (t - lastSpawn.current < 110) return // throttle
    lastSpawn.current = t
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = ++idRef.current
    const color = BURST_COLORS[id % BURST_COLORS.length]
    setBursts((prev) => [...prev.slice(-13), { id, x, y, color }])
    setTimeout(() => setBursts((prev) => prev.filter((b) => b.id !== id)), 900)
  }

  const ease = [0.22, 1, 0.36, 1]
  const rise = (delay = 0) => ({
    initial: { opacity: 0, y: reduced ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay: reduced ? 0 : delay },
  })

  return (
    <section
      className={`hero ${posterOk ? 'has-bgimg' : ''}`}
      id="top"
      aria-labelledby="hero-title"
      onPointerMove={spawnBurst}
    >
      {/* Full-bleed banner image */}
      <img
        className="hero__bgimg"
        src="/hero-champions.jpg"
        alt="STAR Trading League — Champions Crowned. Official Partner of the NBA."
        onError={() => setPosterOk(false)}
      />
      <span className="hero__scrim" aria-hidden="true" />

      {/* Minimal celebration: occasional firework bursts */}
      {!reduced && (
        <div className="hero__fw" aria-hidden="true">
          {FIREWORKS.map((f, i) => (
            <span
              key={i}
              className="hero__firework"
              style={{ left: f.x, top: f.y, color: f.color, '--d': f.delay, '--r': f.r }}
            >
              <span className="hero__fw-flash" />
              {FW_SPARKS.map((s) => (
                <span key={s} className="hero__fw-spark" style={{ '--i': s }} />
              ))}
            </span>
          ))}
        </div>
      )}

      {/* Cursor-triggered firework bursts */}
      {!reduced && bursts.length > 0 && (
        <div className="hero__cursor-fw" aria-hidden="true">
          {bursts.map((b) => (
            <span
              key={b.id}
              className="hero__burst"
              style={{ left: `${b.x}px`, top: `${b.y}px`, color: b.color }}
            >
              <span className="hero__burst-flash" />
              {BURST_SPARKS.map((s) => (
                <span key={s} className="hero__burst-spark" style={{ '--i': s }} />
              ))}
            </span>
          ))}
        </div>
      )}

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
