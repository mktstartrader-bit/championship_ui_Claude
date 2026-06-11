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
  // Sharp 6-point asterisk star (STAR Trading League mark).
  const star =
    'M12 1 L13.6 9.23 L21.53 6.5 L15.2 12 L21.53 17.5 L13.6 14.77 L12 23 L10.4 14.77 L2.47 17.5 L8.8 12 L2.47 6.5 L10.4 9.23 Z'

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
          {/* facet lines for a subtle 3D crystal read */}
          <path
            d="M12 1 L12 23 M2.47 6.5 L21.53 17.5 M2.47 17.5 L21.53 6.5"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="0.5"
          />
        </>
      )}
    </svg>
  )
}
