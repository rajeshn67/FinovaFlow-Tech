import { processSteps } from '../data/content'
import { Icon } from './Icon'

export function Process() {
  return (
    <section className="section-pad" id="process">
      <div className="shell">
        <div className="section-heading">
          <h2>How We Build</h2>
          <p>A structured approach to ensure quality and precision in every line of code.</p>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => (
            <article className="process-step" key={step.title}>
              <div className="process-icon">
                <Icon name={step.icon} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
