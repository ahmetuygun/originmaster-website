import { Reveal } from './Reveal'
import './Introduction.css'

export function Introduction() {
  return (
    <section className="intro" id="solutions">
      <div className="container">
        <div className="intro__grid">
          <Reveal>
            <p className="section-label">Originmaster</p>
            <h2 className="intro__title">
              We turn complex technology challenges into simple digital experiences.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="intro__copy">
              <p>
                Originmaster partners with businesses and enterprises to design, build,
                and evolve software that creates real business value.
              </p>
              <p>
                From custom applications and AI solutions to enterprise platforms and
                digital transformation, we bring strategy, design, and engineering together.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
