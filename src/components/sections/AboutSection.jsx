import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'
import StatCard from '../ui/StatCard'
import BackgroundEffects from '../BackgroundEffects'
import { Code2, Sparkles, Rocket, Brain } from 'lucide-react'

function AboutSection({ mousePosition }) {
  const { theme } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  const [activeSkill, setActiveSkill] = useState(null)
  const sectionRef = useRef(null)

  const skills = [
    { name: 'React', category: 'Frontend', icon: Code2 },
    { name: 'Node.js', category: 'Backend', icon: Rocket },
    { name: 'Python', category: 'Backend', icon: Code2 },
    { name: 'AI/ML', category: 'Specialized', icon: Brain },
    { name: 'TypeScript', category: 'Frontend', icon: Code2 },
    { name: 'MongoDB', category: 'Database', icon: Sparkles },
    { name: 'PostgreSQL', category: 'Database', icon: Sparkles },
    { name: 'Docker', category: 'DevOps', icon: Rocket },
  ]

  const journey = [
    { year: '2025', title: 'Full-Stack Developer', description: 'Building scalable web applications' },
    { year: '2024', title: 'Software Intern', description: 'Gained hands-on experience in development' },
    { year: '2023', title: 'MSc IT', description: 'Advanced studies in Information Technology' },
    { year: '2022', title: 'Started Coding Journey', description: 'Fell in love with problem-solving' },
  ]

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
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden"
    >
      <BackgroundEffects mousePosition={mousePosition} />
      <div className="max-w-7xl w-full">
        <div
          className={`transition-all duration-1000 apple-ease ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
         

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 tracking-tight">
            Think. Build. Ship.
          </h2>
          
          <p className={`text-lg sm:text-xl md:text-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-8 md:mb-12 max-w-4xl leading-relaxed`}>
            Passionate software engineer specializing in full-stack development and AI-driven solutions. 
            I transform complex problems into elegant, scalable systems that users love.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16">
            <StatCard number="1+" label="Years Experience" delay={0} isVisible={isVisible} />
            <StatCard number="1000+" label="Data Points Processed" delay={100} isVisible={isVisible} />
            <StatCard number="100+" label="API Endpoints Built" delay={200} isVisible={isVisible} />
            <StatCard number="MSc IT" label="Education" delay={300} isVisible={isVisible} />
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div
              className={`transition-all duration-1000 delay-400 apple-ease ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <button
                      key={skill.name}
                      onMouseEnter={() => setActiveSkill(skill.name)}
                      onMouseLeave={() => setActiveSkill(null)}
                      className={`group relative px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                        theme === 'dark'
                          ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20'
                          : 'bg-black/5 hover:bg-black/10 border border-black/10 hover:border-black/20'
                      } ${activeSkill === skill.name ? 'scale-105' : 'scale-100'}`}
                      style={{
                        transitionDelay: `${index * 50}ms`
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span>{skill.name}</span>
                      </div>
                      <div className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity ${
                        theme === 'dark' ? 'bg-white/10 backdrop-blur-sm' : 'bg-black/10 backdrop-blur-sm'
                      }`}>
                        {skill.category}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-600 apple-ease ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">Journey</h3>
              <div className="space-y-6">
                {journey.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative pl-8 border-l-2 transition-all duration-500 ${
                      theme === 'dark' ? 'border-white/10' : 'border-black/10'
                    }`}
                    style={{
                      transitionDelay: `${700 + index * 100}ms`
                    }}
                  >
                    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${
                      theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'
                    } ring-4 ${
                      theme === 'dark' ? 'ring-gray-900' : 'ring-white'
                    }`} />
                    <div className={`text-sm font-semibold mb-1 ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {item.year}
                    </div>
                    <div className="font-bold text-lg mb-1">{item.title}</div>
                    <div className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
