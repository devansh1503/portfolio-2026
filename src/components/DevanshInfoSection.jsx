import { socialLinks, techStack } from '../data/devanshInfo'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import EducationSection from './EducationSection'
import IconGridSection from './IconGridSection'
import InfoHero from './InfoHero'
import SinceMarker from './SinceMarker'
import SkillsSection from './SkillsSection'

function DevanshInfoSection() {
  return (
    <section id="devansh.info" className="editor-panel devansh-info">
      <InfoHero />
      <SinceMarker />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <IconGridSection comment="My tech stack" items={techStack} variant="tech-stack" />
      <IconGridSection comment="Social Links" items={socialLinks} variant="social-links" />
      <ContactSection />
    </section>
  )
}

export default DevanshInfoSection
