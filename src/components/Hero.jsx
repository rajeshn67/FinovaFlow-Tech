import heroTile from '../assets/hero.png'
import { Icon } from './Icon'

export function Hero() {
  return (
    <section className="hero-section section-pad" id="home">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Next-gen digital agency</span>
          <h1>
            Transforming Ideas into <span>Powerful</span> Digital Solutions
          </h1>
          <p>
            We build high-performance websites, mobile applications, and custom
            AI agents that scale with your vision. Engineered for speed,
            designed for impact.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#pricing">
              Start Your Project <Icon name="arrow" size={18} />
            </a>
            <a className="btn btn-secondary" href="#portfolio">View Portfolio</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Software development showcase">
          <div className="showcase-card">
            <div className="showcase-header">
              <span />
              <span />
              <span />
            </div>
            <div className="showcase-title">
              <strong>Building the Future of Software</strong>
              <small>Premium Development Agency</small>
            </div>
            <div className="device-scene">
              <div className="dashboard-screen">
                <div className="screen-top" />
                <div className="screen-grid">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div className="screen-chart" />
              </div>
              <img src={heroTile} alt="" className="hero-tile" />
              <div className="phone-screen">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
