import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Trophy from './objects/Trophy'
import BrandMark from './objects/BrandMark'
import useReducedMotion from '../hooks/useReducedMotion'
import './ClaimPrize.css'

// Deterministic confetti pieces (no Math.random so reveals are stable).
const CONFETTI = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 37) % 100,
  delay: (i % 7) * 0.4,
  dur: 3 + (i % 5) * 0.6,
  tone: ['cyan', 'blue', 'gold', 'white'][i % 4],
  size: 5 + (i % 3) * 2,
}))

/**
 * Claim Your Prize — a spotlit stage scene (per the supplied design): a
 * glassmorphic panel on a 3D podium under a spotlight, crowned by a glossy
 * gold trophy, with confetti, smoke and flanking STAR banners.
 *
 * @param {string} [href] - claim destination (swap for the real URL)
 */
export default function ClaimPrize({ href = '#claim' }) {
  const reduced = useReducedMotion()
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })
  const trophyY = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : 70, 0])

  return (
    <section className="section claim" id="claim" aria-labelledby="claim-title" ref={ref}>
      {/* Stage ambience */}
      <div className="claim__stage" aria-hidden="true">
        <span className="claim__spotlight" />
        <span className="claim__smoke claim__smoke--l" />
        <span className="claim__smoke claim__smoke--r" />
        <div className="claim__confetti">
          {!reduced &&
            CONFETTI.map((c, i) => (
              <span
                key={i}
                className={`claim__confetti-bit claim__confetti-bit--${c.tone}`}
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
        <span className="claim__floor" />
      </div>

      {/* Flanking STAR banners */}
      <div className="claim__banner claim__banner--l" aria-hidden="true">
        <BrandMark size={30} />
        <span className="claim__banner-text">STAR TRADING LEAGUE</span>
      </div>
      <div className="claim__banner claim__banner--r" aria-hidden="true">
        <BrandMark size={30} />
        <span className="claim__banner-text">STAR TRADING LEAGUE</span>
      </div>

      <motion.div
        className="container claim__inner glass corner-brackets"
        initial={{ opacity: 0, y: reduced ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="claim__beam" aria-hidden="true" />

        <motion.div className="claim__trophy" style={{ y: trophyY }}>
          <div className="claim__trophy-bob">
            <Trophy size={118} />
          </div>
        </motion.div>

        <span className="section-index">
          <b>06</b> / 06
        </span>
        <p className="eyebrow claim__eyebrow">YOUR REWARD AWAITS</p>
        <h2 id="claim-title" className="section-title claim__title">
          Claim Your Prize
        </h2>

        <a className="claim__btn" href={href}>
          <span className="claim__btn-label">Claim Your Prize</span>
          <span className="claim__btn-arrow" aria-hidden="true">→</span>
          <span className="claim__btn-shine" aria-hidden="true" />
        </a>

        <p className="claim__note">
          <span className="hud-tag">
            <span className="hud-tag__dot" />
            CLAIM WINDOW OPEN
          </span>
        </p>
      </motion.div>

      {/* 3D podium base */}
      <div className="claim__podium" aria-hidden="true">
        <span className="claim__podium-top" />
        <span className="claim__podium-mid" />
        <span className="claim__podium-glow" />
      </div>
    </section>
  )
}
