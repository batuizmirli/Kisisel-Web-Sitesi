import appExample from '../assets/pizza-order-app.png'
import customCalendar from '../assets/custom-calendar.jpg'
import laptopFrame from '../assets/laptop-frame.png'
import { useAppContext } from '../context/AppContext'

function ProjectsSection() {
  const { t } = useAppContext()

  const projectCards = [
    {
      ...t.projects.items[0],
      className: 'project-card project-blue',
      imageClassName: 'project-image-default',
      imageSrc: appExample,
    },
    {
      ...t.projects.items[1],
      className: 'project-card project-green',
      imageClassName: 'project-image-angled',
      imageSrc: customCalendar,
    },
  ]

  return (
    <section id="projects" className="section py-16 md:py-20" aria-labelledby="projects-title">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="projects-title" className="section-title text-3xl font-semibold tracking-tight md:text-4xl">{t.projects.title}</h2>
        <div className="projects-grid mt-8 grid gap-6 lg:grid-cols-2">
          {projectCards.map((project) => (
            <article key={project.name} className={`${project.className} h-full`}>
              <div className="project-content flex flex-col">
                <h3>{project.name}</h3>
                <p className="project-description leading-relaxed">{project.description}</p>
                <ul className="tag-list mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.tech.map((tag) => (
                    <li key={tag} className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide">{tag}</li>
                  ))}
                </ul>
                <div className="project-links mt-4 flex flex-wrap items-center gap-4 pt-2">
                  <a href={project.github ?? '#'} className="project-link underline underline-offset-4 hover:no-underline" target="_blank" rel="noreferrer">
                    {t.projects.viewOnGithub}
                  </a>
                  <a href={project.live ?? '#'} className="project-link underline underline-offset-4 hover:no-underline" target="_blank" rel="noreferrer">
                    {t.projects.goToApp}
                  </a>
                </div>
              </div>
              <div className="project-device" aria-hidden="true">
                <div className="project-laptop">
                  <img src={project.imageSrc} alt="" className={`project-laptop-content ${project.imageClassName}`} />
                  <img src={laptopFrame} alt="" className="project-laptop-frame" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
