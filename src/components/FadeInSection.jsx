import { useEffect, useRef, useState } from 'react'

function FadeInSection({ children, className = '', direction = 'left' }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={sectionRef}
      className={`fade-section fade-${direction} ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export default FadeInSection
