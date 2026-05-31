import PersonalProjectsHero from './PersonalProjectsHero'
import ProjectsGrid from './ProjectsGrid'

function PersonalProjectsSection({ onOpenProject }) {
  return (
    <section id="personal.projects" className="editor-panel personal-projects">
      <PersonalProjectsHero />
      <ProjectsGrid onOpenProject={onOpenProject} />
    </section>
  )
}

export default PersonalProjectsSection
