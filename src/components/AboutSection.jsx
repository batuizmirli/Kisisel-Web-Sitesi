import { useAppContext } from '../context/AppContext'
import profileImg from '../assets/Group 101.svg'

function AboutSection() {
  const { t } = useAppContext()

  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="container">
        <h2 id="about-title" className="section-title">{t.profile.title}</h2>

        <div className="about-grid">
          <div className="about-left">
            <div className="profile-card">
              <h3 className="profile-card-title">{t.profile.infoTitle}</h3>
              <table className="profile-info">
                <tbody>
                  {t.profile.info.map((item) => (
                    <tr key={item.label}>
                      <td className="label">{item.label}</td>
                      <td className="value">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <img src={profileImg} alt="Profil Fotoğrafı" className="profile-image" />
          </div>

          <div className="about-right">
            <h3 className="about-subtitle">{t.profile.aboutTitle}</h3>
            <p className="about-text">
              {t.profile.aboutParagraph1}
            </p>
            <p className="about-text">
              {t.profile.aboutParagraph2}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
