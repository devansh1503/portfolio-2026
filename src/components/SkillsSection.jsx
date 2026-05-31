import { skillGroups } from '../data/devanshInfo'
import FadeInSection from './FadeInSection'
import SectionComment from './SectionComment'

function SkillsSection() {
  return (
    <FadeInSection className="content-section skills-section">
      <SectionComment>Skills</SectionComment>

      <div className="skills-list">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h4>{group.title}-</h4>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </FadeInSection>
  )
}

export default SkillsSection
