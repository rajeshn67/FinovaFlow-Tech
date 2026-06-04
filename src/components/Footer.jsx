import { navLinks } from '../data/content'
import { Icon } from './Icon'

const companyLinks = ['Process', 'Testimonials', 'FAQ', 'Contact']
const socialLinks = ['LinkedIn', 'Instagram', 'GitHub']

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <a className="brand brand-light" href="#home">FinovaFlow</a>
          <p>Empowering visionary brands through cutting-edge technology and exceptional design.</p>
          <div className="social-icons">
            <a href="#home" aria-label="Website"><Icon name="globe" size={16} /></a>
            <a href="#home" aria-label="Community"><Icon name="users" size={16} /></a>
            <a href="#home" aria-label="Share"><Icon name="share" size={16} /></a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h3>Quick Links</h3>
            {navLinks.slice(0, 4).map((link) => (
              <a href={link.href} key={link.href}>{link.label}</a>
            ))}
          </div>
          <div>
            <h3>Company</h3>
            {companyLinks.map((label) => (
              <a href={label === 'Contact' ? 'mailto:hello@finovaflow.tech' : `#${label.toLowerCase()}`} key={label}>
                {label}
              </a>
            ))}
          </div>
          <div>
            <h3>Social</h3>
            {socialLinks.map((label) => (
              <a href="#home" key={label}>{label}</a>
            ))}
          </div>
        </div>
      </div>
      <p className="copyright">© 2026 FinovaFlow Tech. All rights reserved.</p>
    </footer>
  )
}
