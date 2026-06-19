import { motion } from 'framer-motion'
import CursorFireworks from './effects/CursorFireworks'
import useReducedMotion from '../hooks/useReducedMotion'
import { useLang } from '../i18n/LanguageContext'
import './MoreThanTournament.css'

/**
 * More Than a Tournament — clean, centered editorial copy (no background
 * image). Flows into the Claim section via the futuristic connector.
 */
export default function MoreThanTournament() {
  const reduced = useReducedMotion()
  const { t } = useLang()

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
          {t('more.title')}
        </motion.h2>

        <motion.p className="more__lead" {...fade(1)}>
          {t('more.lead')}
        </motion.p>

        <motion.p className="more__line" {...fade(2)}>
          {t('more.line1')}
        </motion.p>

        <motion.p className="more__line more__line--mute" {...fade(3)}>
          {t('more.line2')}
        </motion.p>
      </div>
    </section>
  )
}
