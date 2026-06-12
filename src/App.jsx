import HudNav from './components/HudNav'
import Hero from './components/Hero'
import Champions from './components/Champions'
import RoadToFinals from './components/RoadToFinals'
import MoreThanTournament from './components/MoreThanTournament'
import ClaimPrize from './components/ClaimPrize'
import Footer from './components/Footer'
import HudFrame from './components/effects/HudFrame'
import SectionConnector from './components/effects/SectionConnector'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* Animated perspective-floor backdrop layer */}
      <div className="bg-floor" aria-hidden="true" />
      {/* Full-viewport game-UI overlay (corners, scan, scroll progress) */}
      <HudFrame />

      {/* Official STARTRADER logo */}
      <HudNav logoSrc="/startrader-logo.svg" />

      <main id="main">
        <Hero />
        <Champions />
        <RoadToFinals />
        <MoreThanTournament />
        <SectionConnector />
        <ClaimPrize />
      </main>

      <Footer />
    </>
  )
}
