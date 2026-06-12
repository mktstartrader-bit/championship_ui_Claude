import { motion } from 'framer-motion'
import CursorFireworks from './effects/CursorFireworks'
import useReducedMotion from '../hooks/useReducedMotion'
import './MoreThanTournament.css'

/**
 * More Than a Tournament — clean, centered editorial copy (no background
 * image). Flows into the Claim section via the futuristic connector.
 */
export default function MoreThanTournament() {
  const reduced = useReducedMotion()

  const fade = (i = 0) => ({
    initial: { opacity: 0, y: reduced ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: reduced ? 0 : i * 0.1 },
  })

  return (
    <section className="section more" aria-labelledby="more-title">
      <CursorFireworks />

      <div className="container more__inner">
        <motion.h2 id="more-title" className="section-title more__title" {...fade(0)}>
          More Than a Tournament
        </motion.h2>

        <motion.p className="more__lead" {...fade(1)}>
          The STAR Trading League: A competition defined by market performance and
          competitive spirit.
        </motion.p>

        <motion.p className="more__line" {...fade(2)}>
          You competed. You represented. You traded.
        </motion.p>

        <motion.p className="more__line more__line--mute" {...fade(3)}>
          Whether you made it to the finals or fell in the early rounds, every
          participant was part of something bigger.
        </motion.p>
      </div>
    </section>
  )
}
