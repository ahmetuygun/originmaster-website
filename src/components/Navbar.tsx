import { useEffect, useState } from 'react'
import { Logo } from './Logo'
import './Navbar.css'

const links = [
  { href: '#solutions', label: 'Solutions' },
  { href: '#services', label: 'Services' },
  { href: '#industries', label: 'Industries' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner container-wide">
        <a
          href="#top"
          className="nav__logo"
          onClick={() => setOpen(false)}
          aria-label="Origin Master home"
        >
          <Logo />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav__cta">
          Let's Talk <span aria-hidden="true">→</span>
        </a>

        <button
          className="nav__menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <img
            className="nav__menu-icon"
            src="/menu-icon.png"
            alt=""
            width={36}
            height={26}
            decoding="async"
          />
        </button>
      </div>

      <button
        type="button"
        className={`nav__backdrop ${open ? 'is-open' : ''}`}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />

      <div className={`nav__mobile ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            Let's Talk →
          </a>
        </nav>
      </div>
    </header>
  )
}
