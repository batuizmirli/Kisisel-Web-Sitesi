import { useAppContext } from '../context/AppContext'

function Footer() {
  const { t } = useAppContext()

  return (
    <footer className="site-footer" id="footer">
      <div className="container footer-content">
        <h2 className="footer-title">
          {t.footer.prefix} <span>{t.footer.highlight}</span> {t.footer.suffixTop}<br />{t.footer.suffixBottom}
        </h2>
        <div className="footer-links">
          <a href="https://github.com/batuizmirli" target="_blank" rel="noreferrer">{t.footer.github}</a>
          <a href="https://github.com/batuizmirli" target="_blank" rel="noreferrer">{t.footer.blog}</a>
          <a href="https://www.linkedin.com/in/batu-izmirli-9118b4a0/" target="_blank" rel="noreferrer">{t.footer.linkedin}</a>
          <a href="mailto:y.batuizmirli@gmail.com">{t.footer.email}</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
