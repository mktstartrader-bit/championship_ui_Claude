import { useRef } from 'react'
import { motion } from 'framer-motion'
import Medal from './objects/Medal'
import useReducedMotion from '../hooks/useReducedMotion'
import { useLang } from '../i18n/LanguageContext'
import './Champions.css'

// Tier structure + winner UIDs. Title / meta / prizes are pulled from the
// translation dictionary by `key` (tier.<key>.title|meta|prizes).
// Each winner: UID (from the championship board) + their Profit Rate.
// Leave `profit` as '' to render an editable placeholder until the real
// figure is dropped in.
const TIERS = [
  {
    key: 'second',
    rank: 2,
    placeClass: 'is-second',
    crown: <Medal variant="silver" place="2" size={84} />,
    winners: [
      { uid: '345XXX', profit: '' },
      { uid: '678XXX', profit: '' },
      { uid: '789XXX', profit: '' },
      { uid: '890XXX', profit: '' },
    ],
  },
  {
    key: 'first',
    rank: 1,
    placeClass: 'is-first',
    crown: <Medal variant="gold" place="1" size={96} />,
    winners: [
      { uid: '234XXX', profit: '' },
      { uid: '567XXX', profit: '' },
    ],
  },
  {
    key: 'third',
    rank: 3,
    placeClass: 'is-third',
    crown: <Medal variant="sand" place="3" size={84} />,
    winners: [
      { uid: '456XXX', profit: '' },
      { uid: '901XXX', profit: '' },
      { uid: '123XXX', profit: '' },
      { uid: '789XXX', profit: '' },
    ],
  },
]

/** Person silhouette — matches the winner-chip icon in the board artwork. */
function UserIcon() {
  return (
    <svg
      className="winner__icon"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      <path
        d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Pointer-tracked 3D tilt + diagonal shine sweep, reduced-motion safe. */
function PrizeCard({ tier, reduced }) {
  const { t } = useLang()
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
            <h3 className="prize-card__title">{t(`tier.${tier.key}.title`)}</h3>
            <p className="prize-card__meta">{t(`tier.${tier.key}.meta`)}</p>
          </div>
        </header>

        <ul className="prize-card__list">
          {t(`tier.${tier.key}.prizes`).map((p) => (
            <li key={p} className="prize-card__item">
              <span className="prize-card__bullet" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>

        {/* Winner roster — UID + Profit Rate per winner */}
        <div className="winners">
          <p className="winners__label">
            {t('champions.winners')}{' '}
            <span className="winners__count">{tier.winners.length}</span>
          </p>
          <ul className="winners__list">
            {tier.winners.map((w, i) => (
              <li key={`${w.uid}-${i}`} className="winner" data-slot="winner">
                <span className="winner__id">
                  <UserIcon />
                  <span className="winner__id-label">{t('champions.uid')}</span>
                  <span className="winner__id-val">{w.uid}</span>
                </span>
                <span className="winner__rate">
                  <span className="winner__rate-label">{t('champions.profitRate')}</span>
                  <span
                    className={`winner__rate-val${w.profit ? '' : ' is-empty'}`}
                    data-slot="profit-rate"
                  >
                    {w.profit || '—'}
                  </span>
                </span>
              </li>
            ))}
          </ul>
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
  const { t } = useLang()

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
          <h2 id="champions-title" className="section-title">
            {t('champions.title')}
          </h2>

          {/* Editable placeholder slot for the real team name */}
          <p className="champions__placeholder" data-slot="champion-name">
            {t('champions.placeholder')}
          </p>

          <p className="champions__body">{t('champions.body')}</p>
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
