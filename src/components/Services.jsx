import { services } from '../data/content'
import { Icon } from './Icon'

export function Services() {
  return (
    <section className="section-pad section-muted" id="services">
      <div className="shell">
        <div className="section-heading">
          <h2>Comprehensive Solutions</h2>
          <p>End-to-end development services powered by the latest technology stacks.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="icon-box">
                <Icon name={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
