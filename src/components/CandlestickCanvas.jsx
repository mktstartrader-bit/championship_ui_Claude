import { useEffect, useRef } from 'react'
import useReducedMotion from '../hooks/useReducedMotion'
import './CandlestickCanvas.css'

/**
 * CandlestickCanvas — ambient "market = arena" backdrop.
 *
 * A slow-scrolling candlestick chart rendered to <canvas> in cyan/blue
 * with a soft bloom, plus a few drifting particles. Low opacity, sits
 * behind hero content.
 *
 * Performance contract:
 *  - throttled via requestAnimationFrame
 *  - paused when scrolled off-screen (IntersectionObserver)
 *  - disabled entirely under prefers-reduced-motion (renders nothing)
 *  - DPR-aware, resizes with its container, no layout shift
 */
export default function CandlestickCanvas() {
  const canvasRef = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let raf = 0
    let running = true
    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    const CANDLE_W = 16 // logical px per candle slot
    let candles = []
    let particles = []
    let scroll = 0 // sub-pixel scroll offset

    const rand = (a, b) => a + Math.random() * (b - a)

    function makeCandle(prevClose) {
      const open = prevClose
      const drift = rand(-1, 1.05) // slight upward bias → "to the finals"
      const close = open + drift * rand(6, 26)
      const high = Math.max(open, close) + rand(2, 16)
      const low = Math.min(open, close) - rand(2, 16)
      return { open, close, high, low }
    }

    function seed() {
      candles = []
      let close = 0
      const count = Math.ceil(width / CANDLE_W) + 4
      for (let i = 0; i < count; i++) {
        const c = makeCandle(close)
        candles.push(c)
        close = c.close
      }
      particles = Array.from({ length: 18 }, () => ({
        x: rand(0, width),
        y: rand(0, height),
        r: rand(0.6, 2.2),
        vx: rand(-0.15, 0.25),
        vy: rand(-0.2, 0.2),
        a: rand(0.1, 0.5),
      }))
    }

    function resize() {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    // Map a price value into vertical canvas space, centred + scaled.
    function priceToY(price, mid, scale) {
      return height / 2 - (price - mid) * scale
    }

    function draw() {
      if (!running) return
      ctx.clearRect(0, 0, width, height)

      // Determine price range for current window
      let min = Infinity
      let max = -Infinity
      for (const c of candles) {
        if (c.low < min) min = c.low
        if (c.high > max) max = c.high
      }
      const mid = (min + max) / 2
      const range = Math.max(40, max - min)
      const scale = (height * 0.42) / (range / 2)

      // Particles (drift)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(22, 233, 215, ${p.a})`
        ctx.fill()
      }

      // Candles, scrolling left
      scroll += 0.35
      if (scroll >= CANDLE_W) {
        scroll -= CANDLE_W
        const last = candles[candles.length - 1]
        candles.push(makeCandle(last.close))
        candles.shift()
      }

      ctx.lineWidth = 1.5
      for (let i = 0; i < candles.length; i++) {
        const c = candles[i]
        const x = i * CANDLE_W - scroll + CANDLE_W / 2
        const up = c.close >= c.open
        const color = up ? '#16E9D7' : '#0047BB'

        const yHigh = priceToY(c.high, mid, scale)
        const yLow = priceToY(c.low, mid, scale)
        const yOpen = priceToY(c.open, mid, scale)
        const yClose = priceToY(c.close, mid, scale)

        ctx.save()
        ctx.shadowColor = color
        ctx.shadowBlur = 10 // bloom

        // Wick
        ctx.strokeStyle = color
        ctx.globalAlpha = 0.55
        ctx.beginPath()
        ctx.moveTo(x, yHigh)
        ctx.lineTo(x, yLow)
        ctx.stroke()

        // Body
        ctx.globalAlpha = 0.42
        ctx.fillStyle = color
        const bodyTop = Math.min(yOpen, yClose)
        const bodyH = Math.max(2, Math.abs(yClose - yOpen))
        ctx.fillRect(x - CANDLE_W * 0.32, bodyTop, CANDLE_W * 0.64, bodyH)
        ctx.restore()
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const onResize = () => resize()
    window.addEventListener('resize', onResize)

    // Pause when off-screen
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!running) {
            running = true
            raf = requestAnimationFrame(draw)
          }
        } else {
          running = false
          cancelAnimationFrame(raf)
        }
      },
      { threshold: 0 },
    )
    io.observe(canvas)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      io.disconnect()
    }
  }, [reduced])

  if (reduced) {
    // Reduced-motion fallback: a static, calm gradient wash (no canvas).
    return <div className="candles candles--static" aria-hidden="true" />
  }

  return <canvas ref={canvasRef} className="candles" aria-hidden="true" />
}
