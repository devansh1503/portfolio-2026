import { profile } from '../data/profile'
import { handleDownload } from '../hooks/handleDownload'
import FadeInSection from './FadeInSection'
import Icon from './Icon'
import SectionComment from './SectionComment'

function AboutSection() {
  return (
    <FadeInSection className="content-section about-section">
      <SectionComment>About me section</SectionComment>

      <div className="about-layout">
        <div className="about-copy">
          <h3 className="section-heading">
            <span>My</span> <span>Engineering Core</span>
          </h3>
          <p>
            I am a software engineer focused on building useful, maintainable systems across the
            stack. I enjoy turning fuzzy product ideas into structured interfaces, dependable APIs,
            and data flows that feel calm under pressure. My work spans React, backend services,
            databases, cloud deployments, and AI-powered product features, with a bias for simple
            architecture and clear user outcomes.
          </p>
        </div>

        <img src={profile.avatar} alt="" className="about-image" />
      </div>

      <button onClick={handleDownload} className="download-button about-download" type="button">
        <Icon name="download" />
        Download CV
      </button>
    </FadeInSection>
  )
}

export default AboutSection
