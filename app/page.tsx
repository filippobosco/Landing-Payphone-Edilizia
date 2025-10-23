import Header from './components/Header'
import HeroSection from './components/HeroSection'
import BenefitsSection from './components/BenefitsSection'
import StatsSection from './components/StatsSection'
import HowItWorksSection from './components/HowItWorksSection'
import PromoCodeSection from './components/PromoCodeSection'
import EmergenciesSection from './components/EmergenciesSection'
import FinalCTASection from './components/FinalCTASection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <StatsSection />
      <HowItWorksSection />
      <PromoCodeSection />
      <EmergenciesSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
