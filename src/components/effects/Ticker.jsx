import './Ticker.css'

/**
 * Ticker — an infinite horizontal marquee styled like a trading-terminal
 * data strip. Used to add "live arena scoreboard" texture.
 *
 * @param {Array<{label:string, value:string, up?:boolean}>} items
 * @param {number} [speed=38] - seconds for one full loop (lower = faster)
 * @param {'cyan'|'mute'} [tone='cyan']
 */
export default function Ticker({ items, speed = 38, tone = 'cyan', className = '' }) {
  // Duplicate the list so the loop is seamless.
  const loop = [...items, ...items]

  return (
    <div
      className={`ticker ticker--${tone} ${className}`}
      role="marquee"
      aria-hidden="true"
    >
      <div className="ticker__track" style={{ animationDuration: `${speed}s` }}>
        {loop.map((it, i) => (
          <span className="ticker__item" key={i}>
            <span className="ticker__label">{it.label}</span>
            <span className={`ticker__value ${it.up === false ? 'is-down' : it.up ? 'is-up' : ''}`}>
              {it.up != null && (
                <span className="ticker__arrow">{it.up ? '▲' : '▼'}</span>
              )}
              {it.value}
            </span>
            <span className="ticker__sep" aria-hidden="true">
              ◇
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
