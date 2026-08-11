import { Reveal } from './Reveal'
import './About.css'

export function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <Reveal>
          <div className="about__content">
            <h2 className="about__heading">Technology with purpose.</h2>
            <div className="about__copy">
              <p>
                Originmaster exists to help businesses make better use of technology.
              </p>
              <p>
                We combine software engineering, thoughtful design, artificial
                intelligence, and strategic thinking to create digital products and systems
                that solve real problems.
              </p>
              <p className="about__goal-label">Our goal is simple:</p>
              <p className="about__goal">Build technology that makes business better.</p>
              <a href="#contact" className="btn-text">
                About Originmaster →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
