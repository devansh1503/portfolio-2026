import FadeInSection from './FadeInSection'
import SectionComment from './SectionComment'

function InfoHero() {
  return (
    <FadeInSection className="info-hero">
      <SectionComment>Hero section</SectionComment>
      <h2 className="hero-title">
        <span>Full-Stack</span>
        <span>Engineer</span>
      </h2>
      <p className="hero-copy">
        I design and engineer full-stack products that balance practical backend architecture,
        polished interfaces, and reliable delivery. My work sits close to product thinking,
        clean code, and systems that can grow without becoming hard to reason about.
      </p>
    </FadeInSection>
  )
}

export default InfoHero
