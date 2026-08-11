import { Reveal } from './Reveal'
import './Enterprise.css'

const qualities = [
  {
    title: 'Reliable',
    copy: 'Systems engineered for consistency, clarity, and long-term maintainability.',
  },
  {
    title: 'Scalable',
    copy: 'Architecture that grows with demand without sacrificing performance or control.',
  },
  {
    title: 'Secure',
    copy: 'Security treated as a foundation — not a feature added after the fact.',
  },
]

export function Enterprise() {
  return (
    <section className="enterprise">
      <div className="container">
        <Reveal>
          <div className="enterprise__header">
            <h2 className="section-heading">Built for business. Ready for scale.</h2>
            <p className="section-copy">
              Reliable software isn't just about making something work. It's about creating
              systems that remain secure, maintainable, scalable, and valuable as your
              organization grows.
            </p>
          </div>
        </Reveal>

        <div className="enterprise__qualities">
          {qualities.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="enterprise__item">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
