import FadeInSection from './FadeInSection'
import ProjectCard from './ProjectCard'

function ProfessionalExperienceBlock({ experience, onOpenProject }) {
  return (
    <FadeInSection className="professional-experience">
      <div className="experience-heading">
        <h3>
          {experience.designation} - {experience.company}
        </h3>
        <span>{experience.period}</span>
      </div>

      <div className="work-projects-grid">
        {experience.projects.map((project) => {
          const projectWithExperience = {
            ...project,
            client: project.client || experience.company,
            role: project.role || experience.designation,
            year: project.year || experience.period,
          }

          return (
            <ProjectCard
              onOpenProject={onOpenProject}
              project={projectWithExperience}
              key={project.title}
            />
          )
        })}
      </div>
    </FadeInSection>
  )
}

export default ProfessionalExperienceBlock
