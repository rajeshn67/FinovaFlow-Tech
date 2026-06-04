import { projects } from '../data/content'
import { Icon } from './Icon'

function ProjectPreview({ variant }) {
  return (
    <div className={`project-preview ${variant}`} aria-hidden="true">
      <div className="preview-frame">
        <span />
        <span />
        <span />
      </div>
      <div className="preview-body">
        <i />
        <i />
        <i />
      </div>
    </div>
  )
}

export function Portfolio() {
  return (
    <section className="section-pad dark-section" id="portfolio">
      <div className="shell">
        <div className="section-heading row-heading">
          <div>
            <h2>Our Recent Work</h2>
            <p>Exploring the boundary of what's possible in digital creation.</p>
          </div>
          <a href="#portfolio">
            View all projects <Icon name="external" size={18} />
          </a>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <ProjectPreview variant={project.variant} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
