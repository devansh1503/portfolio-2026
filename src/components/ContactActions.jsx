import { profile } from '../data/profile'

function ContactActions({ className = 'sidebar-actions' }) {
  return (
    <div className={className}>
      <a className="contact-button" href={`mailto:${profile.email}`}>
        Email Me
      </a>
      <a className="contact-button" href="https://wa.me/918558906689">
        Whatsapp Me
      </a>
    </div>
  )
}

export default ContactActions
