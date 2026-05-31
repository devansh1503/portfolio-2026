import FadeInSection from './FadeInSection'
import SectionComment from './SectionComment'

function IconGridSection({ comment, items, variant = 'default' }) {
  const isTechStack = variant === 'tech-stack'
  const isSocialLinks = variant === 'social-links'

  return (
    <FadeInSection
      className={`content-section icon-grid-section ${
        isTechStack ? 'tech-stack-section' : ''
      } ${isSocialLinks ? 'social-links-section' : ''}`}
    >
      <SectionComment>{comment}</SectionComment>

      {isTechStack ? (
        <div className="tech-stack-grid">
          {items.map((item) => (
            <div className="tech-stack-card" key={item.name}>
              <span>{item.name}</span>
              <img src={item.icon || undefined} alt="" className="tech-stack-image" />
            </div>
          ))}
        </div>
      ) : (
        <div className="icon-grid">
          {items.map((item) => (
            <a
              className="icon-card"
              href={isSocialLinks ? item.url || `#${item.name.toLowerCase()}` : `#${item.toLowerCase().replaceAll(' ', '-')}`}
              key={isSocialLinks ? item.name : item}
            >
              {isSocialLinks ? (
                <img src={item.icon || undefined} alt="" className="social-icon" />
              ) : (
                <span className="tech-icon">{item.slice(0, 2)}</span>
              )}
              <span>{isSocialLinks ? item.name : item}</span>
            </a>
          ))}
        </div>
      )}
    </FadeInSection>
  )
}

export default IconGridSection
