import ContactActions from './ContactActions'
import ProfileDetails from './ProfileDetails'

function Sidebar() {
  return (
    <aside className="sidebar">
      <ProfileDetails />
      <ContactActions />
    </aside>
  )
}

export default Sidebar
