import { professionalExperiences } from '../data/professionalWork'
import ProfessionalExperienceBlock from './ProfessionalExperienceBlock'
import ProfessionalWorkHero from './ProfessionalWorkHero'

function ProfessionalWorkSection({ onOpenProject }) {
  return (
    <section id="work.done" className="editor-panel professional-work">
      <ProfessionalWorkHero />

      {professionalExperiences.map((experience) => (
        <ProfessionalExperienceBlock
          experience={experience}
          key={`${experience.designation}-${experience.period}`}
          onOpenProject={onOpenProject}
        />
      ))}
    </section>
  )
}

export default ProfessionalWorkSection
