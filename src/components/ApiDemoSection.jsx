import { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { getSampleUsers } from '../services/api'

function ApiDemoSection() {
  const { t } = useAppContext()
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    const fetchUsers = async () => {
      setLoading(true)
      setError('')

      try {
        const data = await getSampleUsers()
        if (isMounted) setUsers(data)
      } catch {
        if (isMounted) setError(t.api.error)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchUsers()

    return () => {
      isMounted = false
    }
  }, [t.api.error])

  return (
    <section id="api" className="section" aria-labelledby="api-title">
      <div className="container">
        <h2 id="api-title">{t.api.title}</h2>
        <p className="section-text">{t.api.description}</p>

        {loading && <p>{t.api.loading}</p>}
        {error && <p className="error-text">{error}</p>}

        <div className="api-grid">
          {users.map((user) => (
            <article key={user.id} className="api-card">
              <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
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
