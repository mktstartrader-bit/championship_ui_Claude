import { useEffect, useRef, useState } from 'react'
import useReducedMotion from './useReducedMotion'

/**
 * Animates a number from 0 → `end` once the returned ref scrolls into view.
 * Respects reduced motion (jumps straight to the final value).
 *
 * @param {number} end       - target value
 * @param {object} [opts]
 * @param {number} [opts.duration=1400] - ms
 * @param {number} [opts.decimals=0]
 * @returns {[number, React.RefObject]} current value + ref to attach
 */
export default function useCountUp(end, { duration = 1400, decimals = 0 } = {}) {
  const reduced = useReducedMotion()
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (reduced) {
      setValue(end)
      return
    }
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        let raf = 0
        const t0 = performance.now()
        const tick = (now) => {
          const p = Math.min(1, (now - t0) / duration)
          // easeOutCubic
          const eased = 1 - Math.pow(1 - p, 3)
          const next = end * eased
          setValue(decimals ? Number(next.toFixed(decimals)) : Math.round(next))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        io.disconnect()
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [end, duration, decimals, reduced])

  return [value, ref]
}
