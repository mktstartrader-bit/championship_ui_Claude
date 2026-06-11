import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import CandlestickCanvas from './CandlestickCanvas'
import GlossyStar from './objects/GlossyStar'
import Ticker from './effects/Ticker'
import useReducedMotion from '../hooks/useReducedMotion'
import './Hero.css'

/** Headline split into 3 lines; the final line carries the cyan accent. */
const HEADLINE_LINES = [
  { words: ['The', 'Season', 'Has'], accent: false },
  { words: ['Reached', 'Its'], accent: false },
  { words: ['Final', 'Moment'], accent: true },
]

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

const CONFETTI = Array.from({ length: 20 }, (_, i) => ({
  left: 52 + ((i * 41) % 48), // confetti biased to the right (over the trophy)
  delay: (i % 6) * 0.5,
  dur: 3.2 + (i % 5) * 0.6,
  tone: ['cyan', 'blue', 'gold', 'white'][i % 4],
  size: 5 + (i % 3) * 2,
}))

export default function Hero() {
  const reduced = useReducedMotion()
  const sectionRef = useRef(null)
  // Real banner render; if the asset is missing we fall back to the CSS scene.
  const [bgOk, setBgOk] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const trophyY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -120])
  const trophyScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 0.85])
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 60])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.08, delayChildren: 0.15 } },
  }
  const rise = {
    hidden: { opacity: 0, y: reduced ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }
  const wordRise = {
    hidden: { opacity: 0, y: reduced ? 0 : '0.6em' },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      className={`hero ${bgOk ? 'has-bgimg' : ''}`}
      id="top"
      aria-labelledby="hero-title"
      ref={sectionRef}
    >
      {/* Real banner image (chrome star on circuit podium) */}
      <img
        className="hero__bgimg"
        src="/hero-star.png"
        alt=""
        aria-hidden="true"
        onLoad={() => setBgOk(true)}
        onError={() => setBgOk(false)}
      />
      <span className="hero__bgimg-scrim" aria-hidden="true" />

      {!bgOk && <CandlestickCanvas />}

      {/* Arena lighting (CSS fallback only) */}
      {!bgOk && (
        <div className="hero__spotlights" aria-hidden="true">
          <span className="hero__spot hero__spot--l" />
          <span className="hero__spot hero__spot--r" />
        </div>
      )}
      {!reduced && (
        <div className="hero__confetti" aria-hidden="true">
          {CONFETTI.map((c, i) => (
            <span
              key={i}
              className={`hero__confetti-bit hero__confetti-bit--${c.tone}`}
              style={{
                left: `${c.left}%`,
                width: c.size,
                height: c.size,
                animationDelay: `${c.delay}s`,
                animationDuration: `${c.dur}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="hero__grid container">
        <motion.div
          className="hero__copy"
          variants={container}
          initial="hidden"
          animate="show"
          style={{ y: copyY }}
        >
          {/* Eyebrow HUD frame */}
          <motion.div className="hero__eyebrow-frame" variants={rise}>
            <span className="section-index">
              <b>01</b> / 06
            </span>
            <span className="hero__eyebrow-div" aria-hidden="true" />
            <span className="eyebrow">STAR TRADING LEAGUE</span>
          </motion.div>

          {/* 3D chrome metallic headline */}
          <h1 id="hero-title" className="hero__title">
            {HEADLINE_LINES.map((line, li) => (
              <span
                className={`hero__line ${line.accent ? 'hero__line--accent' : ''}`}
                key={li}
              >
                {line.words.map((word, i) => (
                  <span className="hero__word-wrap" key={`${word}-${i}`}>
                    <motion.span className="hero__word" variants={wordRise}>
                      {word}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </h1>

          {/* Bell notification HUD panel */}
          <motion.div className="hero__bell-panel glass corner-brackets" variants={rise}>
            <span className="hero__bell" aria-hidden="true">
              <span className="hero__bell-wave" />
              <svg viewBox="0 0 32 36" className="hero__bell-svg">
                <path
                  d="M16 2.5a2.4 2.4 0 0 1 2.4 2.4v1.1a8.6 8.6 0 0 1 6.2 8.25v5.1l2.3 3.4a1.2 1.2 0 0 1-1 1.85H6.1a1.2 1.2 0 0 1-1-1.85l2.3-3.4v-5.1A8.6 8.6 0 0 1 13.6 6v-1.1A2.4 2.4 0 0 1 16 2.5Z"
                  fill="url(#bellGrad)"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="0.8"
                />
                <path d="M12.6 29.5a3.4 3.4 0 0 0 6.8 0Z" fill="url(#bellGrad)" />
                <defs>
                  <linearGradient id="bellGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#aef6ee" />
                    <stop offset="55%" stopColor="#16E9D7" />
                    <stop offset="100%" stopColor="#0047BB" />
                  </linearGradient>
                </defs>
              </svg>
            </span>

            <div className="hero__bell-copy">
              <p className="hero__bell-lead">
                The buzzer has sounded. The bracket is complete.
              </p>
              <p className="hero__sub">
                30 teams to 1: the <span className="hero__accent">ultimate</span>{' '}
                trading <span className="hero__accent">MVP</span> has been determined.
              </p>
            </div>
          </motion.div>

          {/* Tournament period chip */}
          <motion.div className="hero__chip" variants={rise}>
            <span className="hero__chip-label">Tournament Period</span>
            <span className="hero__chip-value">1 June 2026 – 13 August 2026</span>
            <span className="hero__chip-state">Concluded</span>
          </motion.div>
        </motion.div>

        {/* Star trophy on a podium (CSS fallback when no banner image) */}
        {!bgOk && (
          <motion.div
            className="hero__stage"
            variants={rise}
            initial="hidden"
            animate="show"
            transition={{ delay: reduced ? 0 : 0.7, duration: 0.8 }}
            style={{ y: trophyY, scale: trophyScale }}
          >
            <div className="hero__rise-arrow" aria-hidden="true" />
            <GlossyStar size={360} />
            <div className="hero__podium" aria-hidden="true">
              <span className="hero__podium-top" />
              <span className="hero__podium-mid" />
              <span className="hero__podium-glow" />
            </div>
          </motion.div>
        )}
      </div>

      <motion.div
        className="hero__ticker"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduced ? 0 : 1.1, duration: 0.8 }}
      >
        <Ticker items={TICKER_ITEMS} speed={42} />
      </motion.div>

      <div className="hero__scroll" aria-hidden="true">
        <span>SCROLL</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}
