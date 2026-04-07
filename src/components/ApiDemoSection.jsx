import { useCallback, useEffect, useRef, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { getSampleUsers } from '../services/api'

const API_USERS_CACHE_KEY = 'api-demo-users-v1'

let memoryUsersCache = null

function getErrorMessage(error, fallback) {
  if (error?.code === 'ECONNABORTED') return `${fallback} (timeout)`

  const status = error?.response?.status
  if (status) return `${fallback} (HTTP ${status})`

  if (error?.message) return `${fallback} (${error.message})`

  return fallback
}

function getCachedUsers() {
  if (memoryUsersCache?.length) return memoryUsersCache

  try {
    const raw = sessionStorage.getItem(API_USERS_CACHE_KEY)
    if (!raw) return null

    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return null

    memoryUsersCache = parsed
    return parsed
  } catch {
    return null
  }
}

function setCachedUsers(users) {
  memoryUsersCache = users
  try {
    sessionStorage.setItem(API_USERS_CACHE_KEY, JSON.stringify(users))
  } catch {
    // Storage unavailable; memory cache still works.
  }
}

function ApiDemoSection() {
  const { t } = useAppContext()
  const sectionRef = useRef(null)

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [hasFetched, setHasFetched] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [dataSource, setDataSource] = useState('')

  const fetchUsers = useCallback(async () => {
    const cachedUsers = getCachedUsers()
    if (cachedUsers?.length) {
      setUsers(cachedUsers)
      setError('')
      setHasFetched(true)
      setDataSource('cache')
      return
    }

    setLoading(true)
    setError('')

    try {
      const data = await getSampleUsers()
      setUsers(data)
      setCachedUsers(data)
      setDataSource('network')
      setHasFetched(true)
    } catch (requestError) {
      setError(getErrorMessage(requestError, t.api.error))
    } finally {
      setLoading(false)
    }
  }, [t.api.error])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '100px 0px' },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible || hasFetched || loading) return
    fetchUsers()
  }, [isVisible, hasFetched, loading, fetchUsers])

  return (
    <section id="api" ref={sectionRef} className="section" aria-labelledby="api-title">
      <div className="container">
        <h2 id="api-title">{t.api.title}</h2>
        <p className="section-text">{t.api.description}</p>

        {loading && (
          <>
            <p>{t.api.loading}</p>
            <div className="api-grid" aria-hidden="true">
              {[1, 2, 3].map((item) => (
                <article key={item} className="api-card api-card-skeleton">
                  <div className="api-skeleton-avatar" />
                  <div className="api-skeleton-line" />
                  <div className="api-skeleton-line short" />
                </article>
              ))}
            </div>
          </>
        )}

        {error && (
          <div className="api-feedback" role="alert">
            <p className="error-text">{error}</p>
            <button type="button" className="api-retry-btn" onClick={fetchUsers}>
              {t.api.retry ?? 'Tekrar dene'}
            </button>
          </div>
        )}

        {!loading && !error && hasFetched && (
          <p className="api-meta-text">{dataSource === 'cache' ? (t.api.cached ?? 'Veri önbellekten yüklendi.') : (t.api.fresh ?? 'Veri dış servisten başarıyla alındı.')}</p>
        )}

        <div className="api-grid">
          {users.map((user) => (
            <article key={user.id} className="api-card">
              <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} loading="lazy" decoding="async" />
              <h3>
                {user.first_name} {user.last_name}
              </h3>
              <p>{user.email}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ApiDemoSection
