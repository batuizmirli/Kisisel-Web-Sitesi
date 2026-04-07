import { useAppContext } from '../context/AppContext'
import javascriptLogo from '../assets/skills/js-logo.png'
import { SiFigma, SiNodedotjs, SiReact, SiRedux } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

function SkillsSection() {
  const { t } = useAppContext()

  const skillIcons = [
    { key: 'JAVASCRIPT', image: javascriptLogo, className: 'skill-icon js skill-icon-image' },
    { key: 'REACT', Icon: SiReact, className: 'skill-icon react', iconClassName: 'skill-glyph react-glyph' },
    { key: 'REDUX', Icon: SiRedux, className: 'skill-icon redux', iconClassName: 'skill-glyph redux-glyph' },
    { key: 'NODE', Icon: SiNodedotjs, className: 'skill-icon node', iconClassName: 'skill-glyph node-glyph' },
    { key: 'VS CODE', Icon: VscVscode, className: 'skill-icon vscode', iconClassName: 'skill-glyph vscode-glyph' },
    { key: 'FIGMA', Icon: SiFigma, className: 'skill-icon figma', iconClassName: 'skill-glyph figma-glyph' },
  ]

  const skillLabels = t.skills.items.map((item) => item.name)

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <h2 id="skills-title" className="section-title">{t.skills.title}</h2>
        <div className="skills-grid figma-skills-grid">
          {skillIcons.map((skill, index) => (
            <article key={skill.key} className="skill-card">
              <div className={skill.className} aria-hidden="true">
                {skill.image ? <img src={skill.image} alt="" /> : <skill.Icon className={skill.iconClassName} />}
              </div>
              <span className="skill-label">{skillLabels[index] ?? skill.key}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
