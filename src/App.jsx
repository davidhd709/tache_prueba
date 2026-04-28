import { Navbar } from './components/sections/Navbar'
import { HeroSection } from './components/sections/HeroSection'
import { ProblemSection } from './components/sections/ProblemSection'
import { SolutionSection } from './components/sections/SolutionSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { BenefitsSection } from './components/sections/BenefitsSection'
import { ProcessSection } from './components/sections/ProcessSection'
import { MetricsSection } from './components/sections/MetricsSection'
import { CtaSection } from './components/sections/CtaSection'
import { ContactSection } from './components/sections/ContactSection'
import { FooterSection } from './components/sections/FooterSection'
import { BotpressChat } from './components/BotpressChat'

function App() {
  return (
    <div className="min-h-screen text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <BenefitsSection />
        <ProcessSection />
        <MetricsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <FooterSection />
      <BotpressChat />
    </div>
  )
}

export default App
