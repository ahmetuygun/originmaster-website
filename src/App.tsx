import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Introduction } from './components/Introduction'
import { Services } from './components/Services'
import { FeaturedCapability } from './components/FeaturedCapability'
import { ProductShowcase } from './components/ProductShowcase'
import { TechStack } from './components/TechStack'
import { AISection } from './components/AISection'
import { AIPlatforms } from './components/AIPlatforms'
import { Enterprise } from './components/Enterprise'
import { Industries } from './components/Industries'
import { CaseStudies } from './components/CaseStudies'
import { About } from './components/About'
import { CTA } from './components/CTA'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Introduction />
        <Services />
        <FeaturedCapability />
        <ProductShowcase />
        <TechStack />
        <AISection />
        <AIPlatforms />
        <Enterprise />
        <Industries />
        <CaseStudies />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
