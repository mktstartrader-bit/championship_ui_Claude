import { useEffect, useState } from 'react'
import './HudFrame.css'

/**
 * HudFrame — a fixed, non-interactive game-UI overlay for the whole viewport:
 *  - corner brackets in all four screen corners
 *  - a top scroll-progress beam
 *  - edge tick marks + a faint horizontal scan sweep
 *
 * Purely decorative; aria-hidden. Sits above content but ignores pointer.
 */
export default function HudFrame() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const h = document.documentElement
        const max = h.scrollHeight - h.clientHeight
        setProgress(max > 0 ? h.scrollTop / max : 0)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="hudframe" aria-hidden="true">
      <div className="hudframe__progress" style={{ transform: `scaleX(${progress})` }} />
      <span className="hudframe__corner hudframe__corner--tl" />
      <span className="hudframe__corner hudframe__corner--tr" />
      <span className="hudframe__corner hudframe__corner--bl" />
      <span className="hudframe__corner hudframe__corner--br" />
      <span className="hudframe__scan" />
      <span className="hudframe__edge hudframe__edge--l" />
      <span className="hudframe__edge hudframe__edge--r" />
    </div>
  )
}
