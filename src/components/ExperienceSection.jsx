import { useAppContext } from '../context/AppContext'

function ExperienceSection() {
  const { t } = useAppContext()

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <h2 id="experience-title" className="section-title">{t.experience.title}</h2>
        <div className="timeline">
          {t.experience.items.map((item) => (
            <article key={`${item.period}-${item.title}`} className="timeline-item">
              <p className="period">{item.period}</p>
              <h3 className="job-title">{item.title}</h3>
              <p className="job-description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
