import { useRef, useState } from 'react'
import useReducedMotion from '../../hooks/useReducedMotion'
import './CursorFireworks.css'

const SPARKS = Array.from({ length: 14 }, (_, i) => i)
const COLORS = ['var(--cyan)', '#e8c45a', '#6aa6ff', '#ff7eb6']

/**
 * CursorFireworks — a self-contained overlay that pops a small firework
 * burst at the pointer as it moves across the parent (which must be
 * position:relative). Throttled, auto-cleaning, reduced-motion safe.
 *
 * @param {number} [throttle=110] - min ms between bursts
 */
export default function CursorFireworks({ throttle = 110 }) {
  const reduced = useReducedMotion()
  const [bursts, setBursts] = useState([])
  const last = useRef(0)
  const idRef = useRef(0)

  if (reduced) return null

  function spawn(e) {
    const t = e.timeStamp
    if (t - last.current < throttle) return
    last.current = t
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = ++idRef.current
    const color = COLORS[id % COLORS.length]
    setBursts((prev) => [...prev.slice(-13), { id, x, y, color }])
    setTimeout(() => setBursts((prev) => prev.filter((b) => b.id !== id)), 900)
  }

  return (
    <div className="cfw" onPointerMove={spawn} aria-hidden="true">
      {bursts.map((b) => (
        <span
          key={b.id}
          className="cfw__burst"
          style={{ left: `${b.x}px`, top: `${b.y}px`, color: b.color }}
        >
          <span className="cfw__flash" />
          {SPARKS.map((s) => (
            <span key={s} className="cfw__spark" style={{ '--i': s }} />
          ))}
        </span>
      ))}
    </div>
  )
}
