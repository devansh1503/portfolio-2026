import { education } from '../data/devanshInfo'
import FadeInSection from './FadeInSection'
import SectionComment from './SectionComment'

function EducationSection() {
  return (
    <FadeInSection className="content-section education-section">
      <SectionComment>Education</SectionComment>

      <div className="education-row">
        <span className="education-years">{education.years}</span>
        <span className="education-school">{education.institute}</span>
      </div>

      <div className="education-details">
        <p>
          <strong>Grade-</strong> {education.grade}
        </p>
        <p>
          <strong>Course work-</strong> {education.coursework}
        </p>
      </div>
    </FadeInSection>
  )
}

export default EducationSection
