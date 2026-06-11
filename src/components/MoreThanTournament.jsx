import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import StarTrophy from './objects/StarTrophy'
import BrandMark from './objects/BrandMark'
import useReducedMotion from '../hooks/useReducedMotion'
import './MoreThanTournament.css'

/**
 * More Than a Tournament — an arena face-off scene (per the supplied
 * design): East (blue) vs West (red) conferences flank a central glowing
 * faceted star trophy, under the section heading, closing with the
 * emotive lines and a divider.
 */
export default function MoreThanTournament() {
  const reduced = useReducedMotion()
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const trophyY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [60, -60])
  const ghostX = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['-5%', '5%'])

  const fade = {
    hidden: { opacity: 0, y: reduced ? 0 : 16 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
    }),
  }

  return (
    <section className="section more" aria-labelledby="more-title" ref={ref}>
      {/* Arena ambience */}
      <div className="more__arena" aria-hidden="true">
        <span className="more__glow more__glow--east" />
        <span className="more__glow more__glow--west" />
        <motion.span className="more__ghost" style={{ x: ghostX }}>
          SQUAD
        </motion.span>
      </div>

      <motion.div
        className="container more__inner"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span className="section-index" variants={fade} custom={0}>
          <b>05</b> / 06
        </motion.span>
        <motion.p className="eyebrow" variants={fade} custom={1}>
          BEYOND THE BRACKET
        </motion.p>
        <motion.h2 id="more-title" className="section-title more__title" variants={fade} custom={2}>
          More Than a Tournament
        </motion.h2>
        <motion.p className="more__lead" variants={fade} custom={3}>
          The STAR Trading League: A competition defined by market performance and
          competitive spirit.
        </motion.p>

        {/* Face-off stage */}
        <motion.div className="more__stage" variants={fade} custom={4}>
          <div className="more__side more__side--east">
            <BrandMark size={64} outline color="var(--east)" glow={false} className="more__conf-star" />
            <span className="more__conf-label">Eastern Conference</span>
          </div>

          <motion.div className="more__trophy" style={{ y: trophyY }}>
            <StarTrophy size={300} />
          </motion.div>

          <div className="more__side more__side--west">
            <BrandMark size={64} outline color="var(--west)" glow={false} className="more__conf-star" />
            <span className="more__conf-label">Western Conference</span>
          </div>
        </motion.div>

        {/* Closing lines + divider */}
        <motion.div className="more__close" variants={fade} custom={5}>
          <span className="more__divider" aria-hidden="true" />
          <p className="more__line">You competed. You represented. You traded.</p>
          <p className="more__line more__line--mute">
            Whether you made it to the finals or fell in the early rounds, every
            participant was part of something bigger.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
