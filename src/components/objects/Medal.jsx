import './Medal.css'

/**
 * Medal — a glossy metallic disc for the 2nd / 3rd podium tiers.
 *
 * Layered radial gradients give the disc its form, a clipped bright arc
 * sells the "wet" gloss, and a metallic sheen sweeps on reveal/hover.
 * Pure SVG/CSS.
 *
 * Drop-in swap: pass `src`/`image` to replace with a real render.
 *
 * @param {'silver'|'sand'} [variant='silver'] - Metallic palette.
 * @param {string|number}   [place]            - Numeral shown on the disc.
 * @param {string} [src]
 * @param {string} [image]
 * @param {number} [size=92]
 */
export default function Medal({
  variant = 'silver',
  place,
  src,
  image,
  size = 92,
  className = '',
}) {
  const source = src || image

  if (source) {
    return (
      <img
        className={`medal medal--img ${className}`}
        src={source}
        alt=""
        aria-hidden="true"
        style={{ width: size, height: size }}
      />
    )
  }

  return (
    <div
      className={`medal medal--${variant} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Ribbon */}
      <span className="medal__ribbon medal__ribbon--l" />
      <span className="medal__ribbon medal__ribbon--r" />
      {/* Disc */}
      <span className="medal__disc">
        <span className="medal__rim" />
        {place != null && <span className="medal__num">{place}</span>}
        <span className="medal__gloss" />
        <span className="medal__sweep" />
      </span>
    </div>
  )
}
