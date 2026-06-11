import { useRef } from 'react'
import { motion } from 'framer-motion'
import Trophy from './objects/Trophy'
import Medal from './objects/Medal'
import useReducedMotion from '../hooks/useReducedMotion'
import './Champions.css'

const TIERS = [
  {
    key: 'second',
    rank: 2,
    placeClass: 'is-second',
    crown: <Medal variant="silver" place="2" size={84} />,
    title: 'Second Place',
    meta: 'USD 200 NBA Store Voucher (4 person)',
    prizes: ['NBA Jersey or NBA Basketball Shoes — you choose.'],
    profit: 82, // relative profit-rate index for the HUD bar
  },
  {
    key: 'first',
    rank: 1,
    placeClass: 'is-first',
    crown: <Trophy size={132} />,
    title: 'Grand Prize Winners',
    meta: 'Top 2',
    prizes: [
      'NBA Tickets',
      'Basketball Gift Set',
      'NBA Signature Jersey',
      '$10,000 Cash Reward',
    ],
    profit: 100,
  },
  {
    key: 'third',
    rank: 3,
    placeClass: 'is-third',
    crown: <Medal variant="sand" place="3" size={84} />,
    title: 'Third Place',
    meta: 'USD 150 NBA Store Voucher (4 person)',
    prizes: ['NBA Jersey or NBA Basketball Shoes — you choose.'],
    profit: 71,
  },
]

/** Pointer-tracked 3D tilt + diagonal shine sweep, reduced-motion safe. */
function PrizeCard({ tier, reduced }) {
  const ref = useRef(null)

  function onMove(e) {
    if (reduced) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--rx', `${(-py * 7).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(px * 9).toFixed(2)}deg`)
    el.style.setProperty('--mx', `${(px * 100 + 50).toFixed(1)}%`)
  }
  function onLeave() {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <motion.li
      className={`podium__col ${tier.placeClass}`}
      initial={{ opacity: 0, y: reduced ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: reduced ? 0 : tier.rank === 1 ? 0.1 : 0.25,
      }}
    >
      <div className="podium__crown">{tier.crown}</div>

      <article
        ref={ref}
        className="prize-card glass corner-brackets"
        onPointerMove={onMove}
        onPointerLeave={onLeave}
      >
        <header className="prize-card__head">
          <span className="prize-card__rank">{tier.rank}</span>
          <div>
            <h3 className="prize-card__title">{tier.title}</h3>
            <p className="prize-card__meta">{tier.meta}</p>
          </div>
        </header>

        <ul className="prize-card__list">
          {tier.prizes.map((p) => (
            <li key={p} className="prize-card__item">
              <span className="prize-card__bullet" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>

        {/* Profit-rate HUD meter */}
        <div className="prize-card__meter" aria-hidden="true">
          <span className="prize-card__meter-label">Profit Rate Index</span>
          <span className="prize-card__meter-track">
            <motion.span
              className="prize-card__meter-fill"
              initial={{ width: 0 }}
              whileInView={{ width: `${tier.profit}%` }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />
          </span>
          <span className="prize-card__meter-val">{tier.profit}</span>
        </div>

        <span className="prize-card__shine" aria-hidden="true" />
      </article>

      {/* The physical podium block; height varies by rank */}
      <div className="podium__block" aria-hidden="true">
        <span className="podium__place-num">{tier.rank}</span>
      </div>
    </motion.li>
  )
}

export default function Champions() {
  const reduced = useReducedMotion()

  return (
    <section className="section champions" id="champions" aria-labelledby="champions-title">
      {/* Stage spotlights behind the podium */}
      <div className="champions__spotlights" aria-hidden="true">
        <span className="champions__beam champions__beam--1" />
        <span className="champions__beam champions__beam--2" />
        <span className="champions__beam champions__beam--3" />
      </div>

      <div className="container">
        <motion.div
          className="champions__intro"
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-index">
            <b>03</b> / 06 · PODIUM
          </span>
          <p className="eyebrow champions__eyebrow">CHAMPIONS · 2026 SEASON</p>
          <h2 id="champions-title" className="section-title">
            Meet Your MVP Champions
          </h2>

          {/* Editable placeholder slot for the real team name */}
          <p className="champions__placeholder" data-slot="champion-name">
            [Insert Champion Team Name &amp; Conference]
          </p>

          <p className="champions__body">
            Most teams competed. They dominated. The team with the highest profit
            rate across all 5 stages of the STAR Trading League.
          </p>
        </motion.div>

        <ol className="podium" aria-label="Prize podium">
          {TIERS.map((tier) => (
            <PrizeCard key={tier.key} tier={tier} reduced={reduced} />
          ))}
        </ol>
      </div>
    </section>
  )
}
