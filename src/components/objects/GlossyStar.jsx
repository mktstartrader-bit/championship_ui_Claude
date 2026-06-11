import './GlossyStar.css'

/**
 * GlossyStar — the STARTRADER star mark rendered as a premium 3D glossy
 * object: chrome-cyan body gradient, a clipped specular highlight, an
 * animated gloss sweep, bright edge bevel, cyan accent squares, neon glow
 * and a slow float. Pure SVG/CSS. The hero banner centerpiece.
 *
 * Drop-in swap: pass `src`/`image` to replace with a real 3D render.
 *
 * @param {string} [src]
 * @param {string} [image]
 * @param {number} [size=360]
 */
export default function GlossyStar({ src, image, size = 360, className = '' }) {
  const source = src || image
  if (source) {
    return (
      <img
        className={`gstar gstar--img ${className}`}
        src={source}
        alt=""
        aria-hidden="true"
        style={{ width: size }}
      />
    )
  }

  const BLADE_A =
    'M316.43 229.072V178.088L219.159 154.063L267.291 81.0428L232.164 44.334L80.2344 203.107L232.547 362.279L267.674 325.52L220.071 253.097L316.43 229.072Z'
  const BLADE_B =
    'M0 177.491V228.475L97.2712 252.55L49.0915 325.52L84.2185 362.279L236.148 203.455L83.8826 44.334L48.7076 81.0428L96.3594 153.466L0 177.491Z'

  return (
    <div
      className={`gstar ${className}`}
      style={{ width: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 317 407" className="gstar__svg">
        <defs>
          <linearGradient id="gsBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f2fffd" />
            <stop offset="28%" stopColor="#8af0e4" />
            <stop offset="52%" stopColor="#16e9d7" />
            <stop offset="78%" stopColor="#0a78c0" />
            <stop offset="100%" stopColor="#062a4f" />
          </linearGradient>
          <radialGradient id="gsSpec" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <clipPath id="gsClip">
            <path d={BLADE_A} />
            <path d={BLADE_B} />
          </clipPath>
        </defs>

        {/* Glossy body */}
        <g className="gstar__body">
          <path d={BLADE_A} fill="url(#gsBody)" />
          <path d={BLADE_B} fill="url(#gsBody)" />
        </g>

        {/* Specular + animated gloss sweep, clipped to the star */}
        <g clipPath="url(#gsClip)">
          <ellipse cx="110" cy="120" rx="95" ry="70" fill="url(#gsSpec)" opacity="0.85" />
          <rect className="gstar__sweep" x="0" y="-40" width="60" height="490" />
        </g>

        {/* Bright bevel edge */}
        <g fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinejoin="round">
          <path d={BLADE_A} />
          <path d={BLADE_B} />
        </g>

        {/* Cyan accent squares */}
        <path d="M179.252 0H137.07V43.7224H179.252V0Z" fill="#16E9D7" className="gstar__sq" />
        <path d="M179.252 362.443H137.07V406.166H179.252V362.443Z" fill="#16E9D7" className="gstar__sq" />
      </svg>
    </div>
  )
}
