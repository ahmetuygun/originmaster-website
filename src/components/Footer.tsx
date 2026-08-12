import { Logo } from './Logo'
import './Footer.css'

const nav = [
  { href: '#solutions', label: 'Solutions' },
  { href: '#services', label: 'Services' },
  { href: '#industries', label: 'Industries' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <a href="#top" className="footer__logo" aria-label="Origin Master home">
              <Logo />
            </a>
            <p className="footer__tagline">Software. AI. Digital.</p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer__legal">
            <a href="#contact">Privacy</a>
            <a href="#contact">Terms</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Originmaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
