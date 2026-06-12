import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import StarTrophy from './objects/StarTrophy'
import GlossyBasketball from './objects/GlossyBasketball'
import useReducedMotion from '../hooks/useReducedMotion'
import './MoreThanTournament.css'

// Arena crowd bokeh (top stands) — deterministic positions.
const CROWD = Array.from({ length: 36 }, (_, i) => ({
  left: (i * 53) % 100,
  top: (i % 6) * 3 + ((i * 17) % 14),
  size: 3 + (i % 4) * 2,
  tone: i % 3,
  delay: (i % 7) * 0.3,
}))

const SPARKS = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 61) % 100,
  top: 20 + ((i * 37) % 60),
  size: 2 + (i % 3),
  delay: (i % 5) * 0.5,
}))

export default function MoreThanTournament() {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  // Real scene render; falls back to the CSS neon arena if the asset is missing.
  const [bgOk, setBgOk] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const trophyY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [70, -70])
  const ballY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-40, 50])

  const fade = {
    hidden: { opacity: 0, y: reduced ? 0 : 16 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
    }),
  }

  return (
    <section
      className={`section more ${bgOk ? 'has-bgimg' : ''}`}
      aria-labelledby="more-title"
      ref={ref}
    >
      {/* Real neon trophy scene */}
      <img
        className="more__bgimg"
        src="/more-trophy.jpg"
        alt=""
        aria-hidden="true"
        onLoad={() => setBgOk(true)}
        onError={() => setBgOk(false)}
      />
      <span className="more__bgimg-scrim" aria-hidden="true" />

      {/* ===== Immersive neon arena scene (CSS fallback) ===== */}
      {!bgOk && (
      <div className="more__scene" aria-hidden="true">
        <span className="more__rays" />
        <span className="more__wall more__wall--east" />
        <span className="more__wall more__wall--west" />

        {/* arena crowd bokeh */}
        <div className="more__crowd">
          {CROWD.map((d, i) => (
            <span
              key={i}
              className={`more__bokeh more__bokeh--${d.tone}`}
              style={{
                left: `${d.left}%`,
                top: `${d.top}%`,
                width: d.size,
                height: d.size,
                animationDelay: `${d.delay}s`,
              }}
            />
          ))}
        </div>

        {/* neon basketball court floor */}
        <svg className="more__court" viewBox="0 0 400 240" preserveAspectRatio="xMidYMax meet">
          <g fill="none" stroke="#16E9D7" strokeWidth="1.4" opacity="0.9">
            <rect x="6" y="6" width="388" height="228" rx="4" />
            <line x1="200" y1="6" x2="200" y2="234" />
            <circle cx="200" cy="120" r="40" />
            <path d="M6 50 A150 150 0 0 1 6 190" />
            <path d="M394 50 A150 150 0 0 0 394 190" />
          </g>
        </svg>

        {/* floating sparks */}
        <div className="more__sparks">
          {SPARKS.map((s, i) => (
            <span
              key={i}
              className="more__spark"
              style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
            />
          ))}
        </div>

        {/* centerpiece: star trophy + neon basketball */}
        <motion.div className="more__trophy" style={{ y: trophyY }}>
          <StarTrophy size={340} />
        </motion.div>
        <motion.div className="more__ball" style={{ y: ballY }}>
          <GlossyBasketball size={150} />
        </motion.div>

        <span className="more__scrim" />
      </div>
      )}

      {/* ===== Overlaid copy ===== */}
      <motion.div
        className="container more__inner"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="more__top">
          <motion.span className="section-index" variants={fade} custom={0}>
            <b>05</b> / 06
          </motion.span>
          <motion.p className="eyebrow" variants={fade} custom={1}>
            BEYOND THE BRACKET
          </motion.p>
          <motion.h2 id="more-title" className="section-title more__title" variants={fade} custom={2}>
            More Than a Tournament
          </motion.h2>
          <motion.p className="more__lead" variants={fade} custom={3}>
            The STAR Trading League: A competition defined by market performance and
            competitive spirit.
          </motion.p>
        </div>

        <motion.div className="more__bottom" variants={fade} custom={4}>
          <div className="more__confs">
            <span className="more__conf more__conf--east">Eastern Conference</span>
            <span className="more__conf more__conf--west">Western Conference</span>
          </div>
          <span className="more__divider" aria-hidden="true" />
          <p className="more__line">You competed. You represented. You traded.</p>
          <p className="more__line more__line--mute">
            Whether you made it to the finals or fell in the early rounds, every
            participant was part of something bigger.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
