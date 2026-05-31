import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

function Header({ activeSection, onNavigate, time }) {
  return (
    <>
      <DesktopHeader activeSection={activeSection} onNavigate={onNavigate} time={time} />
      <MobileHeader activeSection={activeSection} onNavigate={onNavigate} time={time} />
    </>
  )
}

export default Header
