import { useState } from 'react'
import { motion } from 'framer-motion'
import useReducedMotion from '../hooks/useReducedMotion'
import { useLang } from '../i18n/LanguageContext'
import './RoadToFinals.css'

/**
 * The bracket presented as a rising "roadmap" journey curve (inspired by
 * game/esports roadmap UIs): a glowing path is drawn through milestone
 * nodes 30 → 16 → 8 → 4 → 2 → 1, each node carrying its Eastern/Western
 * split and a status chip. Resolves at the elevated MVP Champion node.
 *
 * `x`/`y` are percentages within the curve stage (matched to the SVG
 * viewBox 1000×540 so nodes sit exactly on the path). On narrow screens
 * the same items reflow into a vertical timeline (see CSS).
 */
// `tkey` maps each stage to its translation keys (road.<tkey>.name|east|west).
const STAGES = [
  { tkey: 'regular', total: 30, x: 6.2, y: 80.0, side: 'below', anchor: 'left' },
  { tkey: 'playoff', total: 16, x: 25.0, y: 57.8, side: 'above', anchor: 'center' },
  { tkey: 'quarter', total: 8, x: 43.8, y: 68.9, side: 'below', anchor: 'center' },
  { tkey: 'semi', total: 4, x: 62.8, y: 45.9, side: 'above', anchor: 'center' },
  { tkey: 'mvp', total: 2, x: 81.2, y: 36.3, side: 'below', anchor: 'center' },
]

const CHAMP = { x: 94.0, y: 17.0 }

const CURVE_PATH =
  'M62,432 C150,432 168,312 250,312 C332,312 356,372 438,372 C520,372 548,248 628,248 C712,248 730,196 812,196 C880,196 882,92 940,92'

// Decorative sparkles scattered across the field (deterministic positions).
const SPARKS = [
  { x: 14, y: 22, s: 1 }, { x: 33, y: 14, s: 0.7 }, { x: 48, y: 30, s: 1.2 },
  { x: 58, y: 18, s: 0.8 }, { x: 70, y: 60, s: 1 }, { x: 88, y: 40, s: 0.9 },
  { x: 22, y: 64, s: 0.8 }, { x: 40, y: 52, s: 0.6 }, { x: 76, y: 26, s: 1.1 },
  { x: 92, y: 70, s: 0.7 }, { x: 9, y: 46, s: 0.9 }, { x: 64, y: 80, s: 0.8 },
]

export default function RoadToFinals() {
  const reduced = useReducedMotion()
  const { t } = useLang()
  const [lit, setLit] = useState(false)

  const draw = reduced
    ? { pathLength: 1, opacity: 1 }
    : { pathLength: 1, opacity: 1 }

  const nodePop = (i) => ({
    initial: { scale: reduced ? 1 : 0, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: reduced ? 0 : 0.4 + i * 0.22 },
  })

  return (
    <section className="section road" id="road" aria-labelledby="road-title">
      <div className="container">
        <motion.div
          className="road__intro"
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="road-title" className="section-title">
            {t('road.title')}
          </h2>
        </motion.div>

        <motion.div
          className={`road__curve ${lit ? 'is-lit' : ''}`}
          onViewportEnter={() => setLit(true)}
          viewport={{ once: true, amount: 0.25 }}
          aria-label="Tournament journey from 30 teams to 1 MVP champion"
        >
          {/* Sparkle field */}
          <div className="road__sparks" aria-hidden="true">
            {SPARKS.map((p, i) => (
              <span
                key={i}
                className="road__spark"
                style={{ left: `${p.x}%`, top: `${p.y}%`, '--s': p.s, '--d': `${(i % 5) * 0.4}s` }}
              />
            ))}
          </div>

          {/* The journey curve */}
          <svg
            className="road__svg"
            viewBox="0 0 1000 540"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="roadGrad" x1="0" y1="540" x2="1000" y2="0">
                <stop offset="0%" stopColor="#0047BB" />
                <stop offset="48%" stopColor="#16E9D7" />
                <stop offset="100%" stopColor="#9fd0ff" />
              </linearGradient>
            </defs>
            {/* Glow underlay */}
            <motion.path
              d={CURVE_PATH}
              stroke="url(#roadGrad)"
              strokeWidth="10"
              strokeLinecap="round"
              opacity="0.35"
              style={{ filter: 'blur(7px)' }}
              initial={{ pathLength: reduced ? 1 : 0 }}
              whileInView={draw}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: reduced ? 0 : 2, ease: 'easeInOut' }}
            />
            {/* Crisp line */}
            <motion.path
              d={CURVE_PATH}
              stroke="url(#roadGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: reduced ? 1 : 0 }}
              whileInView={draw}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: reduced ? 0 : 2, ease: 'easeInOut' }}
            />

            {/* Comet riding the path (scales with the viewBox) */}
            {lit && !reduced && (
              <circle r="5" className="road__comet" fill="#fff">
                <animateMotion dur="2.6s" begin="0.3s" repeatCount="indefinite" path={CURVE_PATH} />
              </circle>
            )}
          </svg>

          {/* Milestone stage nodes */}
          {STAGES.map((s, i) => (
            <motion.div
              key={s.tkey}
              className={`road__item road__item--${s.side} road__item--${s.anchor}`}
              style={{ left: `${s.x}%`, top: `${s.y}%` }}
              {...nodePop(i)}
            >
              <span className="road__node" aria-hidden="true">
                <span className="road__node-ring" />
                <span className="road__node-core">{s.total}</span>
              </span>
              <div className="road__card glass">
                <h3 className="road__name">{t(`road.${s.tkey}.name`)}</h3>
                <p className="road__split">{t(`road.${s.tkey}.east`)}</p>
                <p className="road__split">{t(`road.${s.tkey}.west`)}</p>
              </div>
            </motion.div>
          ))}

          {/* Resolution: elevated MVP Champion node */}
          <motion.div
            className="road__item road__item--above road__item--right road__item--champ"
            style={{ left: `${CHAMP.x}%`, top: `${CHAMP.y}%` }}
            {...nodePop(STAGES.length)}
          >
            <span className="road__node road__node--champ" aria-hidden="true">
              <span className="road__node-ring" />
              <img className="road__champ-trophy" src="/champion-trophy.png" alt="" />
              {!reduced && (
                <span className="road__champ-sparks">
                  {Array.from({ length: 10 }, (_, n) => (
                    <span key={n} className="road__champ-spark" style={{ '--i': n, '--n': 10 }} />
                  ))}
                </span>
              )}
            </span>
            <div className="road__card road__card--champ glass corner-brackets">
              <h3 className="road__name">{t('road.champion')}</h3>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
