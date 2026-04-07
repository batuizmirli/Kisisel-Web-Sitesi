import { useState } from 'react'
import { toast } from 'react-toastify'
import { useAppContext } from '../context/AppContext'
import { postWorkintechContact } from '../services/api'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

function ContactSection() {
  const { t } = useAppContext()
  const [form, setForm] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const promise = postWorkintechContact(form)

      await toast.promise(promise, {
        pending: t.contact.pending,
        success: t.contact.success,
        error: t.contact.error,
      })

      setForm(initialForm)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section py-16 md:py-20" aria-labelledby="contact-title">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="contact-title" className="text-3xl font-semibold tracking-tight md:text-4xl">{t.contact.title}</h2>
        <p className="section-text mx-auto mt-3 max-w-2xl text-base md:text-lg">{t.contact.description}</p>

        <form className="contact-form mx-auto mt-8 grid max-w-2xl gap-3 text-left" onSubmit={handleSubmit}>
          <label htmlFor="name" className="text-sm font-medium">{t.contact.fields.name}</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            minLength={2}
            className="w-full rounded-md border border-pink-400/40 bg-white/80 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500/40 dark:bg-zinc-900/60"
          />

          <label htmlFor="email" className="text-sm font-medium">{t.contact.fields.email}</label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-pink-400/40 bg-white/80 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500/40 dark:bg-zinc-900/60"
          />

          <label htmlFor="message" className="text-sm font-medium">{t.contact.fields.message}</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
            minLength={10}
            className="w-full rounded-md border border-pink-400/40 bg-white/80 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500/40 dark:bg-zinc-900/60"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="cta-btn mt-2 inline-flex items-center justify-center rounded-md px-5 py-2.5 font-medium transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {t.contact.submit}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
