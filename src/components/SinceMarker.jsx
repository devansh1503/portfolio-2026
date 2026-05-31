import { useEffect, useRef, useState } from 'react'

function SinceMarker() {
  const markerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    if (markerRef.current) {
      observer.observe(markerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={markerRef}
      className={`since-marker ${isVisible ? 'is-visible' : ''}`}
      aria-label="Since 2023"
    >
      <div className="since-row since-row-top">
        <span className="since-word">Since</span>
        <span className="since-lines">//////</span>
      </div>
      <div className="since-row since-row-bottom">
        <span className="since-lines">////////</span>
        <span className="since-year">2023</span>
      </div>
    </div>
  )
}

export default SinceMarker
