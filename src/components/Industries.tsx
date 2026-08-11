import { Reveal } from './Reveal'
import './Industries.css'

const industries = [
  'Financial Services',
  'Healthcare',
  'Retail & Commerce',
  'Professional Services',
  'Manufacturing',
  'Logistics',
  'Technology',
  'Startups & Scale-ups',
]

export function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="container">
        <Reveal>
          <p className="section-label">Industries</p>
          <h2 className="section-heading industries__heading">
            Technology that adapts to your business.
          </h2>
        </Reveal>

        <div className="industries__list">
          {industries.map((industry, index) => (
            <Reveal key={industry} delay={index * 0.03}>
              <div className="industries__item">
                <span>{industry}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
