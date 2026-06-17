import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
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

// Sparkles framing the trophy.
const SPARKS = [
  { x: 16, y: 14, s: 1 }, { x: 84, y: 10, s: 0.8 }, { x: 8, y: 52, s: 0.7 },
  { x: 92, y: 46, s: 1.1 }, { x: 28, y: 78, s: 0.7 }, { x: 74, y: 80, s: 0.9 },
]

/**
 * Claim Your Prize — a reward-reveal: the STAR Trading League trophy on a
 * glowing pedestal with light rays, halo and sparkles, inside a glass panel
 * with a glossy CTA.
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
  const trophyY = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : 60, 0])

  return (
    <section className="section claim" id="claim" aria-label="Claim Your Prize" ref={ref}>
      {/* Clean futuristic stage ambience */}
      <div className="claim__stage" aria-hidden="true">
        <span className="claim__glow" />
        <span className="claim__ring claim__ring--1" />
        <span className="claim__ring claim__ring--2" />
        <span className="claim__ring claim__ring--3" />
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
      </div>

      <motion.div
        className="claim__inner glass corner-brackets"
        initial={{ opacity: 0, y: reduced ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="claim__beam" aria-hidden="true" />

        {/* Trophy reveal */}
        <motion.div className="claim__crown" style={{ y: trophyY }}>
          <span className="claim__rays" aria-hidden="true" />
          <span className="claim__halo" aria-hidden="true" />
          {!reduced && (
            <span className="claim__sparks" aria-hidden="true">
              {SPARKS.map((p, i) => (
                <span
                  key={i}
                  className="claim__spark"
                  style={{ left: `${p.x}%`, top: `${p.y}%`, '--s': p.s, '--d': `${(i % 4) * 0.5}s` }}
                />
              ))}
            </span>
          )}
          <div className="claim__trophy-bob">
            <img className="claim__trophy-img" src="/champion-trophy.png" alt="" aria-hidden="true" />
          </div>
          <span className="claim__pedestal" aria-hidden="true" />
        </motion.div>

        <a className="claim__btn" href={href}>
          <span className="claim__btn-label">Claim Your Prize</span>
          <span className="claim__btn-arrow" aria-hidden="true">→</span>
          <span className="claim__btn-shine" aria-hidden="true" />
        </a>
      </motion.div>
    </section>
  )
}
