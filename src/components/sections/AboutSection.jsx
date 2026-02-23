import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'
import StatCard from '../ui/StatCard'

function AboutSection() {
  const { theme } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-32"
    >
      <div className="max-w-6xl w-full">
        <div
          className={`transition-all duration-1000 apple-ease ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 tracking-tight">Think. Build. Ship.</h2>
          <p className={`text-lg sm:text-xl md:text-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-12 md:mb-16 max-w-4xl leading-relaxed`}>
            Passionate software engineer specializing in full-stack development and AI-driven solutions. 
            I transform complex problems into elegant, scalable systems that users love.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <StatCard number="1+" label="Years Experience" delay={0} isVisible={isVisible} />
            <StatCard number="1000+" label="Data Points Processed" delay={100} isVisible={isVisible} />
            <StatCard number="100+" label="API Endpoints Built" delay={200} isVisible={isVisible} />
            <StatCard number="MSc IT" label="Education" delay={300} isVisible={isVisible} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
