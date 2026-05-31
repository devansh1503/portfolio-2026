import { personalProjects } from '../data/personalProjects'
import { professionalExperiences } from '../data/professionalWork'
import FadeInSection from './FadeInSection'
import ProjectCard from './ProjectCard'
import SectionComment from './SectionComment'

function ProjectDetailImage({ src }) {
  if (!src) {
    return <span className="project-detail-image project-image-placeholder">Image</span>
  }

  return <img src={src} alt="" className="project-detail-image" />
}

function getProjectKey(project) {
  return project.title.toLowerCase().replaceAll(' ', '-')
}

function getAllProjects() {
  const workProjects = professionalExperiences.flatMap((experience) =>
    experience.projects.map((project) => ({
      ...project,
      client: project.client || experience.company,
      role: project.role || experience.designation,
      year: project.year || experience.period,
    })),
  )

  return [...personalProjects, ...workProjects]
}

function ProjectInfoItem({ label, value }) {
  return (
    <div>
      <span>{label}</span>
      <strong>{value || 'To be added'}</strong>
    </div>
  )
}

function ProjectTextBlock({ title, value }) {
  const content = Array.isArray(value) ? value : value ? [value] : ['To be added.']

  return (
    <div className="project-text-block">
      <h3>{title}</h3>
      {content.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  )
}

function ProjectDetailSection({ onBack, onOpenProject, project }) {
  const allProjects = getAllProjects()
  const seeMoreProjects = allProjects
    .filter((item) => getProjectKey(item) !== getProjectKey(project))
    .slice(0, 2)

  return (
    <section className="editor-panel project-detail">
      <FadeInSection className="project-detail-hero">
        <button className="back-button" type="button" onClick={onBack}>
          &lt;- Back
        </button>
        <h2>{project.title}</h2>
      </FadeInSection>

      <FadeInSection className="project-detail-section">
        <SectionComment>Work info</SectionComment>
        <div className="project-info-grid">
          <ProjectInfoItem label="Client:" value={project.client} />
          <ProjectInfoItem label="Role:" value={project.role} />
          <ProjectInfoItem label="Year:" value={project.year} />
        </div>

        <ProjectDetailImage src={project.detailImage || project.image} />
      </FadeInSection>

      <FadeInSection className="project-detail-section">
        <ProjectTextBlock title="Project Overview" value={project.overview} />
        <ProjectTextBlock title="My Approach" value={project.approach} />
        <ProjectTextBlock title="Key Features" value={project.features} />
      </FadeInSection>

      <FadeInSection className="project-detail-section">
        <h3 className="detail-section-title">Results</h3>
        <div className="results-grid">
          {(project.results?.length ? project.results : [{ value: 'Metric', description: 'To be added' }]).map(
            (result) => (
              <div className="result-card" key={`${result.value}-${result.description}`}>
                <strong>{result.value}</strong>
                <span>{result.description}</span>
              </div>
            ),
          )}
        </div>
      </FadeInSection>

      <FadeInSection className="project-detail-section">
        <h3 className="see-more-title">
          <span>See More</span>
          <span>Projects</span>
        </h3>

        <div className="projects-grid see-more-grid">
          {seeMoreProjects.map((item) => (
            <ProjectCard onOpenProject={onOpenProject} project={item} key={item.title} />
          ))}
        </div>
      </FadeInSection>
    </section>
  )
}

export default ProjectDetailSection
