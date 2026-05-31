import { personalProjects } from '../data/personalProjects'
import FadeInSection from './FadeInSection'
import ProjectCard from './ProjectCard'
import SectionComment from './SectionComment'

function ProjectsGrid({ onOpenProject }) {
  return (
    <FadeInSection className="projects-grid-section">
      <SectionComment>Projects</SectionComment>

      <div className="projects-grid">
        {personalProjects.map((project) => (
          <ProjectCard onOpenProject={onOpenProject} project={project} key={project.title} />
        ))}
      </div>
    </FadeInSection>
  )
}

export default ProjectsGrid
