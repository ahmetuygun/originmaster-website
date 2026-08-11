import { Reveal } from './Reveal'
import { PremiumMedia } from './PremiumMedia'
import './FeaturedCapability.css'

const stages = ['Discover', 'Design', 'Build', 'Launch', 'Evolve']

export function FeaturedCapability() {
  return (
    <section className="journey">
      <div className="container">
        <Reveal>
          <h2 className="section-heading journey__heading">From idea to impact.</h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="journey__path" aria-label="Delivery journey">
            {stages.map((stage, index) => (
              <div key={stage} className="journey__stage">
                <span>{stage}</span>
                {index < stages.length - 1 && (
                  <span className="journey__sep" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="journey__panel">
          <Reveal>
            <p className="journey__kicker">One partner. Every stage.</p>
            <p className="section-copy">
              We work alongside your team from the first conversation through launch and
              beyond, creating technology that evolves with your business.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="journey__visual">
            <PremiumMedia
              src="/images/journey-milestones.jpg"
              alt="Software engineers collaborating over code on multiple screens in a bright office"
              aspect="wide"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
