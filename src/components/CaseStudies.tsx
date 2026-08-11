import { Reveal } from './Reveal'
import { PremiumMedia } from './PremiumMedia'
import './CaseStudies.css'

const cases = [
  {
    image: '/images/case-operations.jpg',
    alt: 'Engineer reviewing systems on a laptop inside a modern data center',
    title: 'Enterprise Operations Platform',
    description: 'Modern software for managing complex business operations.',
  },
  {
    image: '/images/case-ai.jpg',
    alt: 'Robotic hand interacting with a glowing neural network of connected data nodes',
    title: 'AI-Powered Business Assistant',
    description:
      'An intelligent platform designed to help teams work faster and access information more effectively.',
  },
  {
    image: '/images/case-experience.jpg',
    alt: 'Designer mapping a customer journey across connected mobile app wireframes',
    title: 'Digital Customer Experience',
    description: 'A modern platform designed to simplify customer journeys.',
  },
]

export function CaseStudies() {
  return (
    <section className="cases">
      <div className="container">
        <Reveal>
          <p className="section-label">Selected Work</p>
          <h2 className="section-heading cases__heading">Ideas become products.</h2>
        </Reveal>

        <div className="cases__grid">
          {cases.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="cases__item">
                <PremiumMedia src={item.image} alt={item.alt} aspect="case" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
