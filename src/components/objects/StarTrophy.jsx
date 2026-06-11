import './StarTrophy.css'

/**
 * StarTrophy — a faceted neon STAR monument: a crystalline 5-point star on
 * a tapered crystal pillar and base plaque, with a cyan neon glow. Pure
 * SVG/CSS. The centerpiece of the "More Than a Tournament" arena scene.
 *
 * Drop-in swap: pass `src`/`image` to replace with a real 3D render.
 *
 * @param {string} [src]
 * @param {string} [image]
 * @param {number} [size=300]
 */
export default function StarTrophy({ src, image, size = 300, className = '' }) {
  const source = src || image
  if (source) {
    return (
      <img
        className={`startrophy startrophy--img ${className}`}
        src={source}
        alt=""
        aria-hidden="true"
        style={{ width: size }}
      />
    )
  }

  // Facet triangles (center → adjacent star vertices), shaded for a 3D read.
  const facets = [
    { p: '120,125 120,37 140.6,96.7', f: '#d6fbf6' },
    { p: '120,125 140.6,96.7 203.7,97.8', f: '#16E9D7' },
    { p: '120,125 203.7,97.8 153.3,135.8', f: '#0fbfb2' },
    { p: '120,125 153.3,135.8 171.7,196.2', f: '#0a8f86' },
    { p: '120,125 171.7,196.2 120,160', f: '#0c6f9e' },
    { p: '120,125 120,160 68.3,196.2', f: '#0a8f86' },
    { p: '120,125 68.3,196.2 86.7,135.8', f: '#12c7ba' },
    { p: '120,125 86.7,135.8 36.3,97.8', f: '#16E9D7' },
    { p: '120,125 36.3,97.8 99.4,96.7', f: '#aef6ee' },
    { p: '120,125 99.4,96.7 120,37', f: '#eafbf9' },
  ]
  const STAR =
    'M120,37 L140.6,96.7 L203.7,97.8 L153.3,135.8 L171.7,196.2 L120,160 L68.3,196.2 L86.7,135.8 L36.3,97.8 L99.4,96.7 Z'

  return (
    <div
      className={`startrophy ${className}`}
      style={{ width: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 240 380" className="startrophy__svg">
        <defs>
          <linearGradient id="stPillar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#16E9D7" />
            <stop offset="100%" stopColor="#062a4f" />
          </linearGradient>
          <linearGradient id="stBase" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0D0D4B" />
            <stop offset="100%" stopColor="#06061F" />
          </linearGradient>
          <radialGradient id="stGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(22,233,215,0.55)" />
            <stop offset="100%" stopColor="rgba(22,233,215,0)" />
          </radialGradient>
        </defs>

        {/* Neon glow halo */}
        <circle className="startrophy__glow" cx="120" cy="118" r="120" fill="url(#stGlow)" />

        {/* Tapered crystal pillar behind the star */}
        <polygon points="108,150 132,150 127,302 113,302" fill="url(#stPillar)" opacity="0.9" />
        <line x1="120" y1="152" x2="120" y2="300" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />

        {/* Base + plinth */}
        <rect x="72" y="298" width="96" height="26" rx="6" fill="url(#stBase)" stroke="rgba(22,233,215,0.4)" />
        <rect x="60" y="324" width="120" height="16" rx="5" fill="url(#stBase)" stroke="rgba(22,233,215,0.25)" />
        {/* Plaque mark + label */}
        <path d="M88 308 l1.6 3.3 3.6 .5 -2.6 2.5 .6 3.6 -3.2 -1.7 -3.2 1.7 .6 -3.6 -2.6 -2.5 3.6 -.5 Z" fill="#16E9D7" />
        <text x="98" y="314" className="startrophy__plaque">STAR TRADING LEAGUE</text>

        {/* Faceted star */}
        <g className="startrophy__star">
          {facets.map((t, i) => (
            <polygon key={i} points={t.p} fill={t.f} />
          ))}
          <path d={STAR} fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.6" strokeLinejoin="round" />
          {/* bright core */}
          <circle cx="120" cy="118" r="9" fill="#ffffff" opacity="0.9" />
        </g>
      </svg>
    </div>
  )
}
