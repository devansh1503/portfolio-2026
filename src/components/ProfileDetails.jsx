import { profile } from '../data/profile'
import { handleDownload } from '../hooks/handleDownload'
import Icon from './Icon'

function ProfileDetails({ compact = false }) {
  const contactItems = [
    ['suitcase', profile.experience],
    ['location', profile.location],
    ['language', profile.languages],
    ['email', profile.email],
    ['phone', profile.phone],
  ]

  return (
    <div className={compact ? 'profile-details compact' : 'profile-details'}>
      <div className="profile-intro">
        <img src={profile.avatar} alt="" className="profile-avatar" />
        <div>
          <h1>{profile.name}</h1>
          <p>{profile.designation}</p>
        </div>
      </div>

      <p className="profile-description">{profile.description}</p>

      <div className="profile-facts">
        {contactItems.map(([icon, label]) => (
          <div className="profile-fact" key={label}>
            <Icon name={icon} />
            <span>{label}</span>
          </div>
        ))}
      </div>

      <button onClick={handleDownload} className="download-button" type="button">
        <Icon name="download" />
        Download CV
      </button>
    </div>
  )
}

export default ProfileDetails
