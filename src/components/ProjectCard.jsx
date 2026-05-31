function ProjectImage({ src, className }) {
  if (!src) {
    return <span className={`project-image-placeholder ${className}`}>Image</span>
  }

  return <img src={src} alt="" className={className} />
}

function ProjectCard({ onOpenProject, project }) {
  const hoverImage = project.hoverImage || project.image
  const handleOpenProject = () => {
    onOpenProject(project)
  }

  return (
    <article className="project-card">
      <div className="project-card-titlebar">
        <h3>{project.title}</h3>
        <button
          aria-label={`Open ${project.title}`}
          className="project-arrow"
          type="button"
          onClick={handleOpenProject}
        >
          ↗
        </button>
      </div>

      <button
        className="project-image-frame"
        type="button"
        aria-label={`Open ${project.title}`}
        onClick={handleOpenProject}
      >
        <ProjectImage src={project.image} className="project-image project-image-default" />
        <ProjectImage src={hoverImage} className="project-image project-image-hover" />
      </button>
    </article>
  )
}

export default ProjectCard
