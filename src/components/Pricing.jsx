import { plans } from '../data/content'
import { Icon } from './Icon'

export function Pricing() {
  return (
    <section className="section-pad section-muted" id="pricing">
      <div className="shell">
        <div className="section-heading">
          <h2>Flexible Investment Plans</h2>
          <p>Choose the path that fits your current growth stage.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={`price-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
              {plan.featured && <span className="popular">Most Popular</span>}
              <div>
                <h3>{plan.name}</h3>
                <div className="price">
                  {plan.price}
                  {plan.suffix && <span>{plan.suffix}</span>}
                </div>
                <p>{plan.description}</p>
              </div>
              <ul>
                {plan.features.map((feature) => {
                  const muted = feature === plan.mutedFeature

                  return (
                    <li className={muted ? 'muted-feature' : ''} key={feature}>
                      <Icon name={muted ? 'close' : 'check'} size={16} strokeWidth={2.5} />
                      {feature}
                    </li>
                  )
                })}
              </ul>
              <a className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'}`} href="#home">
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
