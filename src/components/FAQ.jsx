import { faqs } from '../data/content'
import { Icon } from './Icon'

export function FAQ() {
  return (
    <section className="section-pad faq-section" id="faq">
      <div className="shell narrow-shell">
        <div className="section-heading">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>
                {faq.question}
                <Icon name="chevron" size={18} />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
