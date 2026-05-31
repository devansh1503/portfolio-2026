import { navItems, profile } from '../data/profile'
import AvailabilityBadge from './AvailabilityBadge'
import WelcomeCell from './WelcomeCell'

function DesktopHeader({ activeSection, onNavigate, time }) {
  return (
    <header className="desktop-header">
      <WelcomeCell />

      <nav className="desktop-nav" aria-label="Primary navigation">
        <div className="nav-links">
          {navItems.map((item) => (
            <button
              className={activeSection === item ? 'is-active' : ''}
              key={item}
              type="button"
              onClick={() => onNavigate(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="header-meta">
          <AvailabilityBadge />
          <span>{profile.location}</span>
          <span className="big-dot" />
          <span>My time: {time}</span>
        </div>
      </nav>
    </header>
  )
}

export default DesktopHeader
