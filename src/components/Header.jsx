import { useAppContext } from '../context/AppContext'

function Header() {
  const { theme, language, toggleTheme, toggleLanguage, t } = useAppContext()
  const languageParts = language === 'tr'
    ? { primary: 'SWITCH TO', secondary: 'ENGLISH' }
    : { primary: "'YE GEÇ", secondary: 'TÜRKÇE' }

  return (
    <header className="site-header sticky top-0 z-50 backdrop-blur">
      <div className="container header-content mx-auto max-w-6xl px-4 sm:px-6">
        <div className="controls mode-switch flex items-center justify-end gap-3" role="group" aria-label="Theme and language controls">
          <button type="button" onClick={toggleTheme} className="control-btn theme-pill inline-flex items-center gap-2 rounded-full px-3 py-1.5">
            <span className="theme-dot" aria-hidden="true"></span>
            <span className="theme-label">{theme === 'dark' ? t.header.darkMode : t.header.lightMode}</span>
          </button>
          <button type="button" onClick={toggleLanguage} className="control-btn language-link inline-flex items-center gap-1 rounded-full px-3 py-1.5">
            {language === 'tr' ? (
              <>
                <span className="language-link-primary">{languageParts.primary}</span>
                <span className="language-link-secondary">{languageParts.secondary}</span>
              </>
            ) : (
              <>
                <span className="language-link-secondary">{languageParts.secondary}</span>
                <span className="language-link-primary">{languageParts.primary}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
