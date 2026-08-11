import { Reveal } from './Reveal'
import { PremiumMedia } from './PremiumMedia'
import './AISection.css'

export function AISection() {
  return (
    <section className="ai">
      <div className="container">
        <div className="ai__grid">
          <Reveal>
            <p className="section-label">Artificial Intelligence</p>
            <h2 className="section-heading ai__heading">
              Make intelligence part of your business.
            </h2>
            <p className="section-copy">
              From intelligent assistants to automated workflows and AI-powered products,
              Originmaster helps businesses turn emerging technology into practical
              solutions.
            </p>
            <a href="#contact" className="btn-text ai__cta">
              Explore AI Solutions →
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <PremiumMedia
              src="/images/ai-intelligence.jpg"
              alt="Abstract visualization of intelligence as connected luminous nodes in soft silver and blue"
              aspect="square"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
