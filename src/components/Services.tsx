import { Reveal } from './Reveal'
import './Services.css'

const services = [
  {
    num: '01',
    title: 'Custom Software',
    description:
      'Purpose-built software designed around your business, your processes, and your customers.',
  },
  {
    num: '02',
    title: 'Artificial Intelligence',
    description:
      'Practical AI solutions that automate work, improve decisions, and create new possibilities.',
  },
  {
    num: '03',
    title: 'Web & Mobile',
    description:
      'High-performance digital products designed around people and built for scale.',
  },
  {
    num: '04',
    title: 'Enterprise Solutions',
    description:
      'Scalable platforms and systems that connect teams, data, and business operations.',
  },
  {
    num: '05',
    title: 'Automation & Integration',
    description:
      'Connect your systems and eliminate repetitive work through intelligent automation.',
  },
  {
    num: '06',
    title: 'Digital Transformation',
    description: 'Modernize legacy technology, processes, and customer experiences.',
  },
]

export function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <Reveal>
          <p className="section-label">What we do</p>
          <h2 className="section-heading services__heading">
            Everything you need to build what’s next.
          </h2>
        </Reveal>

        <div className="services__list">
          {services.map((service, index) => (
            <Reveal key={service.num} delay={index * 0.04}>
              <a href="#contact" className="services__row">
                <span className="services__num">{service.num}</span>
                <div className="services__body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="services__arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
