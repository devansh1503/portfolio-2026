import { useState } from 'react'
import './App.css'
import DevanshInfoSection from './components/DevanshInfoSection'
import Header from './components/Header'
import PersonalProjectsSection from './components/PersonalProjectsSection'
import ProjectDetailSection from './components/ProjectDetailSection'
import ProfessionalWorkSection from './components/ProfessionalWorkSection'
import Sidebar from './components/Sidebar'
import { useCurrentTime } from './hooks/useCurrentTime'

function App() {
  const time = useCurrentTime()
  const [activeSection, setActiveSection] = useState('devansh.info')
  const [previousSection, setPreviousSection] = useState('personal.projects')
  const [selectedProject, setSelectedProject] = useState(null)

  const handleNavigate = (section) => {
    setActiveSection(section)
    setSelectedProject(null)
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }

  const handleOpenProject = (project) => {
    setPreviousSection(activeSection)
    setSelectedProject(project)
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'auto' })
    })
  }

  const handleBackFromProject = () => {
    setSelectedProject(null)
    setActiveSection(previousSection)
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'auto' })
    })
  }

  const renderActiveSection = () => {
    if (selectedProject) {
      return (
        <ProjectDetailSection
          onBack={handleBackFromProject}
          onOpenProject={handleOpenProject}
          project={selectedProject}
        />
      )
    }

    if (activeSection === 'work.done') {
      return <ProfessionalWorkSection onOpenProject={handleOpenProject} />
    }

    if (activeSection === 'personal.projects') {
      return <PersonalProjectsSection onOpenProject={handleOpenProject} />
    }

    return <DevanshInfoSection />
  }

  return (
    <div className="portfolio-shell">
      <Header activeSection={activeSection} onNavigate={handleNavigate} time={time} />

      <div className="portfolio-grid">
        <Sidebar />

        <main className="editor-stage">{renderActiveSection()}</main>
      </div>
    </div>
  )
}

export default App
