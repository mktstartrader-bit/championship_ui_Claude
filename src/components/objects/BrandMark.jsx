/**
 * BrandMark — the STARTRADER / STAR Trading League 5-point star emblem
 * as inline SVG (matches the star glyph used across the brand banners).
 *
 * Rendered inline so it stays crisp and uses brand gradients. Swap for the
 * official asset by passing `logoSrc` to <HudNav>.
 *
 * @param {number} [size=26]
 * @param {boolean} [glow=true]
 * @param {boolean} [outline=false] - hollow outline star (for conference badges)
 * @param {string} [color] - override fill/stroke (used by outline variant)
 */
export default function BrandMark({
  size = 26,
  glow = true,
  outline = false,
  color,
  className = '',
}) {
  const gid = `bm-${size}-${outline ? 'o' : 'f'}`
  const star =
    'M12 1.6 L15.09 8.26 L22.4 9.18 L17 14.14 L18.45 21.4 L12 17.77 L5.55 21.4 L7 14.14 L1.6 9.18 L8.91 8.26 Z'

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label="STAR Trading League"
      style={glow ? { filter: `drop-shadow(0 0 6px ${color || 'rgba(22,233,215,0.6)'})` } : undefined}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5CF4E6" />
          <stop offset="55%" stopColor="#16E9D7" />
          <stop offset="100%" stopColor="#0047BB" />
        </linearGradient>
      </defs>

      {outline ? (
        <path
          d={star}
          fill="none"
          stroke={color || '#16E9D7'}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      ) : (
        <>
          <path d={star} fill={color || `url(#${gid})`} />
          {/* facet line for a subtle 3D crystal read */}
          <path
            d="M12 1.6 L12 17.77 M1.6 9.18 L22.4 9.18"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="0.6"
          />
        </>
      )}
    </svg>
  )
}
