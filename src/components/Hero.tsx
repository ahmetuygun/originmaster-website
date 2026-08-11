import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'framer-motion'
import { CodeStudio } from './visuals/CodeStudio'
import './Hero.css'

export function Hero() {
  const reduce = useReducedMotion()
  const storyRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    setProgress(scrollYProgress.get())
  }, [scrollYProgress])

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    setProgress(value)
  })

  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__content">
          <motion.p
            className="eyebrow"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Software • AI • Digital
          </motion.p>

          <motion.h1
            className="hero__title"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Technology, beautifully engineered.
          </motion.h1>

          <motion.p
            className="hero__copy"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            Originmaster builds intelligent software and digital experiences that help
            ambitious businesses work better, move faster, and grow with confidence.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#contact" className="btn btn-primary">
              Let's Talk →
            </a>
            <a href="#solutions" className="btn btn-secondary">
              Explore Solutions
            </a>
          </motion.div>
        </div>
      </div>

      <div className="hero__story" ref={storyRef}>
        <div className="hero__sticky">
          <div className="container">
            <p className="hero__scroll-hint">Scroll to build</p>
            <CodeStudio progress={reduce ? 1 : progress} />
          </div>
        </div>
      </div>
    </section>
  )
}
