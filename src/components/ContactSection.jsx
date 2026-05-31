import { useState } from 'react'
import { profile } from '../data/profile'
import FadeInSection from './FadeInSection'

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function ContactSection() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    setErrors((currentErrors) => ({ ...currentErrors, [name]: '' }))
    setStatus('')
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!form.firstName.trim()) {
      nextErrors.firstName = 'First name is required.'
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!validateEmail(form.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Message is required.'
    }

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = validateForm()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('Please fill the required fields.')
      return
    }

    const subject = form.subject.trim() || `Portfolio message from ${form.firstName.trim()}`
    const body = [
      `First Name: ${form.firstName.trim()}`,
      `Last Name: ${form.lastName.trim() || 'Not provided'}`,
      `Email: ${form.email.trim()}`,
      '',
      form.message.trim(),
    ].join('\n')

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setStatus('Opening your email app...')
  }

  return (
    <FadeInSection className="content-section contact-section">
      <div className="contact-heading">
        <h3>
          <span>Let&apos;s Work</span>
          <span>Together</span>
        </h3>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label>
            <span>First Name *</span>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={updateField}
              aria-invalid={Boolean(errors.firstName)}
            />
            {errors.firstName && <small>{errors.firstName}</small>}
          </label>
          <label>
            <span>Last Name</span>
            <input type="text" name="lastName" value={form.lastName} onChange={updateField} />
          </label>
        </div>

        <label>
          <span>Email *</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={updateField}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <small>{errors.email}</small>}
        </label>

        <label>
          <span>Subject</span>
          <input type="text" name="subject" value={form.subject} onChange={updateField} />
        </label>

        <label>
          <span>Message *</span>
          <textarea
            name="message"
            rows="6"
            value={form.message}
            onChange={updateField}
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && <small>{errors.message}</small>}
        </label>

        <button className="send-button" type="submit">
          Send Message
        </button>

        {status && <p className="form-status">{status}</p>}
      </form>
    </FadeInSection>
  )
}

export default ContactSection
