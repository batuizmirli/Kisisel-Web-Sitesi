import { useAppContext } from '../context/AppContext'
import githubBrandIcon from '../assets/github-brand.svg'
import { FaLinkedin } from 'react-icons/fa'
import workspaceImage from '../assets/workspace.jpg'

function HeroSection() {
  const { t } = useAppContext()

  return (
    <section id="hero" className="section hero-section" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow">{t.hero.greeting}</p>
          <h1 id="hero-title">
            <span className="highlight-name">{t.hero.highlightName}</span> {t.hero.title}
          </h1>
          <div className="hero-socials" aria-label="Social links">
            <a href="https://www.linkedin.com/in/batu-izmirli-9118b4a0/" target="_blank" rel="noreferrer" className="social-link social-linkedin">
              <FaLinkedin />
            </a>
            <a href="https://github.com/batuizmirli" target="_blank" rel="noreferrer" className="social-link social-github">
              <img src={githubBrandIcon} alt="" />
            </a>
          </div>
          <p className="hero-note">
            {t.hero.notePrefix}{' '}
            <span className="hero-note-accent">{t.hero.noteAccent1}</span> {t.hero.noteMiddle}
            <span className="hero-note-accent"> {t.hero.noteAccent2}</span>
            <br />
            {t.hero.noteInvite}
            <a href={`mailto:${t.hero.email}`} className="hero-note-link"> {t.hero.email}</a>
          </p>
        </div>

        <div className="hero-image-container">
          <img src={workspaceImage} alt="Profil Fotoğrafı" className="hero-image" />
          <span className="hero-image-pill" aria-hidden="true"></span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
