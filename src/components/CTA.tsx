import { Reveal } from './Reveal'
import './CTA.css'

export function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <Reveal>
          <div className="cta__content">
            <h2 className="cta__heading">
              Have an idea?
              <br />
              Let's build it.
            </h2>
            <p className="cta__copy">
              Tell us what you're trying to solve. We'll help you find the right technology
              approach.
            </p>
            <a href="#contact" className="btn btn-on-deep">
              Start a Conversation →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
