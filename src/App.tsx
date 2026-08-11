import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Introduction } from './components/Introduction'
import { Services } from './components/Services'
import { FeaturedCapability } from './components/FeaturedCapability'
import { ProductShowcase } from './components/ProductShowcase'
import { AISection } from './components/AISection'
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
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <FeaturedCapability />
        <ProductShowcase />
        <AISection />
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
