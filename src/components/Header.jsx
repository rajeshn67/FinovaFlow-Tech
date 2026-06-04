import { navLinks } from '../data/content'

export function Header() {
  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#home">FinovaFlow</a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a className="contact-link" href="mailto:hello@finovaflow.tech">Contact</a>
          <a className="btn btn-primary btn-small" href="#pricing">Get Free Consultation</a>
        </div>
      </nav>
    </header>
  )
}
