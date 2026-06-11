import './Trophy.css'

/**
 * Trophy — bronze metallic SVG trophy that crowns the 1st-place podium.
 *
 * Chrome/bronze gradient body, an animated specular sweep across the cup,
 * and a cyan glow pulse via drop-shadow. Pure SVG/CSS.
 *
 * Drop-in swap: pass `src`/`image` to replace with a real render.
 *
 * @param {string} [src]
 * @param {string} [image]
 * @param {number} [size=120]
 */
export default function Trophy({ src, image, size = 120, className = '' }) {
  const source = src || image

  if (source) {
    return (
      <img
        className={`trophy trophy--img ${className}`}
        src={source}
        alt=""
        aria-hidden="true"
        style={{ width: size, height: size }}
      />
    )
  }

  return (
    <div
      className={`trophy ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 120 140" className="trophy__svg">
        <defs>
          <linearGradient id="trophyBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f5dcb8" />
            <stop offset="32%" stopColor="var(--bronze-hi)" />
            <stop offset="60%" stopColor="var(--bronze)" />
            <stop offset="100%" stopColor="#6e4628" />
          </linearGradient>
          <linearGradient id="trophyBase" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--bronze-hi)" />
            <stop offset="100%" stopColor="#5c3a21" />
          </linearGradient>
        </defs>

        {/* Handles */}
        <path
          d="M28 30 C8 32 8 64 34 66"
          fill="none"
          stroke="url(#trophyBody)"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M92 30 C112 32 112 64 86 66"
          fill="none"
          stroke="url(#trophyBody)"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Cup */}
        <path
          d="M26 22 H94 V44 C94 70 78 84 60 84 C42 84 26 70 26 44 Z"
          fill="url(#trophyBody)"
        />
        <rect x="26" y="20" width="68" height="6" rx="3" fill="var(--bronze-hi)" />

        {/* Stem + base */}
        <rect x="54" y="84" width="12" height="20" fill="url(#trophyBody)" />
        <rect x="40" y="104" width="40" height="9" rx="3" fill="url(#trophyBase)" />
        <rect x="32" y="113" width="56" height="12" rx="4" fill="url(#trophyBase)" />

        {/* Star emblem on the cup */}
        <path
          className="trophy__star"
          d="M60 38 l4.2 8.5 9.4 1.4 -6.8 6.6 1.6 9.3 -8.4 -4.4 -8.4 4.4 1.6 -9.3 -6.8 -6.6 9.4 -1.4 Z"
          fill="#3a1d0c"
          opacity="0.55"
        />

        {/* Animated specular sweep, clipped to the cup */}
        <clipPath id="cupClip">
          <path d="M26 22 H94 V44 C94 70 78 84 60 84 C42 84 26 70 26 44 Z" />
        </clipPath>
        <g clipPath="url(#cupClip)">
          <rect className="trophy__sweep" x="-40" y="10" width="26" height="90" />
        </g>
      </svg>
    </div>
  )
}
