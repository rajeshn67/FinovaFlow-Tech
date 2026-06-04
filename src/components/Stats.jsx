import { stats } from '../data/content'

export function Stats() {
  return (
    <section className="stats-strip" aria-label="Company achievements">
      <div className="shell stats-grid">
        {stats.map((item) => (
          <div className="stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
