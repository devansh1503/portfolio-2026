import { useState } from 'react'
import { navItems, profile } from '../data/profile'
import AvailabilityBadge from './AvailabilityBadge'
import ContactActions from './ContactActions'
import Icon from './Icon'
import ProfileDetails from './ProfileDetails'
import WelcomeCell from './WelcomeCell'

function MobileHeader({ activeSection, onNavigate, time }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigate = (item) => {
    onNavigate(item)
    setIsMenuOpen(false)
  }

  return (
    <header className="mobile-header">
      <div className="mobile-bar">
        <div className="mobile-profile-trigger">
          <img src={profile.avatar} alt="" className="mobile-avatar" />
          <button
            className="icon-button"
            type="button"
            aria-label="Toggle profile details"
            aria-expanded={isProfileOpen}
            onClick={() => setIsProfileOpen((open) => !open)}
          >
            <Icon name="info" />
          </button>
        </div>

        <WelcomeCell />

        <button
          className={`hamburger ${isMenuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      {isProfileOpen && (
        <div className="mobile-profile-panel">
          <ProfileDetails compact />
          <ContactActions className="mobile-contact-actions" />
        </div>
      )}

      {isMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              className={activeSection === item ? 'is-active' : ''}
              key={item}
              type="button"
              onClick={() => handleNavigate(item)}
            >
              {item}
            </button>
          ))}
          <AvailabilityBadge />
          <span>{profile.location}</span>
          <span>My time: {time}</span>
        </div>
      )}
    </header>
  )
}

export default MobileHeader
