import { useCallback, useEffect, useMemo } from 'react'
import { AppContext } from './AppContext'
import { useLocalStorage } from '../hooks/useLocalStorage'
import content from '../data/content.json'
import { postWorkintechContact } from '../services/api'

export function AppProvider({ children }) {
  const [language, setLanguage] = useLocalStorage('portfolio_language', 'tr')
  const [theme, setTheme] = useLocalStorage('portfolio_theme', 'light')

  useEffect(() => {
    let isMounted = true

    async function syncMockDataWithApi() {
      try {
        const selectedMockData = content[language]
        const response = await postWorkintechContact({
          language,
          theme,
          meta: selectedMockData?.meta,
          source: 'portfolio-homepage-load',
        })

        if (isMounted) {
          // Challenge requirement: log Reqres POST response on app flow
          console.info('Reqres POST response:', response)
        }
      } catch (error) {
        if (isMounted) {
          console.error('Reqres POST error:', error)
        }
      }
    }

    syncMockDataWithApi()

    return () => {
      isMounted = false
    }
  }, [language, theme])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleLanguage = useCallback(() => {
    setLanguage((current) => (current === 'tr' ? 'en' : 'tr'))
  }, [setLanguage])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }, [setTheme])

  const value = useMemo(
    () => ({
      language,
      theme,
      toggleLanguage,
      toggleTheme,
      t: content[language],
    }),
    [language, theme, toggleLanguage, toggleTheme],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
