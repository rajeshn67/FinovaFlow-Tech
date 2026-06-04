import heroTile from '../assets/hero.png'
import { excellence } from '../data/content'
import { Icon } from './Icon'

export function Excellence() {
  return (
    <section className="section-pad excellence-section">
      <div className="shell split-grid">
        <div className="tech-panel">
          <img src={heroTile} alt="" />
          <div className="tech-lines">
            <span />
            <span />
            <span />
          </div>
          <div className="mini-window">
            <b>System Health</b>
            <i />
            <i />
          </div>
        </div>
        <div>
          <h2>Engineering Excellence at Every Step</h2>
          <div className="feature-list">
            {excellence.map((item) => (
              <div className="feature-item" key={item.title}>
                <Icon name={item.icon} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
