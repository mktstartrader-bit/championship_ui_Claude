import { motion } from 'framer-motion'
import useReducedMotion from '../../hooks/useReducedMotion'
import './GlossyBasketball.css'

/**
 * GlossyBasketball — the hero centerpiece.
 *
 * A pure CSS/SVG glossy sphere that doubles as a "market orb":
 * bronze→deep-orange radial body, dark seam lines, a sharp white
 * top-left specular highlight, a cyan rim-light bottom-right, and a
 * soft contact shadow. Slow float + subtle Y-axis rotation.
 *
 * Drop-in swap: pass `src` (or `image`) with a real 3D render and the
 * CSS object is replaced by an <img> — no layout change required.
 *
 * @param {string} [src]   - URL of a real render to use instead of CSS.
 * @param {string} [image] - Alias for `src`.
 * @param {number} [size]  - Diameter in px (defaults to a fluid clamp).
 * @param {string} [alt]   - Accessible label.
 */
export default function GlossyBasketball({
  src,
  image,
  size,
  alt = 'STAR Trading League basketball — a glossy market orb',
  className = '',
}) {
  const reduced = useReducedMotion()
  const source = src || image
  const style = size ? { width: size, height: size } : undefined

  const float = reduced
    ? {}
    : {
        animate: { y: [0, -16, 0], rotateZ: [0, 1.5, 0] },
        transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
      }

  return (
    <motion.div
      className={`orb ${className}`}
      style={style}
      role="img"
      aria-label={alt}
      {...float}
    >
      <span className="orb__halo" aria-hidden="true" />
      <div className="orb__shadow" aria-hidden="true" />

      {source ? (
        <img className="orb__render" src={source} alt="" aria-hidden="true" />
      ) : (
        <div className="orb__ball" aria-hidden="true">
          {/* Seam lines + shading drawn as crisp SVG over the gradient body */}
          <svg
            className="orb__seams"
            viewBox="0 0 200 200"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <radialGradient id="bbSheen" cx="36%" cy="30%" r="72%">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="58%" stopColor="rgba(0,0,0,0)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.55)" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="99" fill="url(#bbSheen)" />
            {/* Soft shadow under each seam for depth, then the crisp seam */}
            <g
              stroke="rgba(0,0,0,0.35)"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            >
              <line x1="100" y1="3" x2="100" y2="197" />
              <path d="M3 100 H197" />
              <path d="M30 30 Q100 100 30 170" />
              <path d="M170 30 Q100 100 170 170" />
            </g>
            <g
              stroke="rgba(28,12,4,0.92)"
              strokeWidth="2.4"
              fill="none"
              strokeLinecap="round"
            >
              <line x1="100" y1="3" x2="100" y2="197" />
              <path d="M3 100 H197" />
              <path d="M30 30 Q100 100 30 170" />
              <path d="M170 30 Q100 100 170 170" />
            </g>
          </svg>
          <span className="orb__env" />
          <span className="orb__specular" />
          <span className="orb__gloss-band" />
          <span className="orb__sheen" />
          <span className="orb__rim" />
          <span className="orb__rim orb__rim--warm" />
        </div>
      )}

      <span className="orb__reflection" aria-hidden="true" />
    </motion.div>
  )
}
