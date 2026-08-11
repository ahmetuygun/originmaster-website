import { useState } from 'react'
import type { FormEvent } from 'react'
import { Reveal } from './Reveal'
import './Contact.css'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__grid">
          <Reveal>
            <h2 className="contact__heading">Let's talk.</h2>
            <p className="contact__sub">
              Have a project, idea, or technology challenge?
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            {submitted ? (
              <div className="contact__success" role="status">
                <p>Thank you. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={onSubmit}>
                <label>
                  <span>Name</span>
                  <input name="name" type="text" required autoComplete="name" />
                </label>
                <label>
                  <span>Work email</span>
                  <input name="email" type="email" required autoComplete="email" />
                </label>
                <label>
                  <span>Company</span>
                  <input name="company" type="text" autoComplete="organization" />
                </label>
                <label>
                  <span>How can we help?</span>
                  <select name="topic" defaultValue="">
                    <option value="" disabled>
                      Select a topic
                    </option>
                    <option>Custom Software</option>
                    <option>Artificial Intelligence</option>
                    <option>Web & Mobile</option>
                    <option>Enterprise Solutions</option>
                    <option>Automation & Integration</option>
                    <option>Digital Transformation</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label className="contact__full">
                  <span>Tell us about your project</span>
                  <textarea name="message" rows={5} required />
                </label>
                <div className="contact__full">
                  <button type="submit" className="btn btn-primary">
                    Send Message →
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
