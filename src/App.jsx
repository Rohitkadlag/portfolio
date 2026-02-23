import { useState, useEffect } from 'react'
import Navigation from './components/ui/Navigation'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ExperienceSection from './components/sections/ExperienceSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="bg-black text-white">
      <Navigation scrolled={scrolled} />
      <HeroSection mousePosition={mousePosition} />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default App
