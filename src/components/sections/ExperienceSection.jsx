import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'
import Modal from '../ui/Modal'
import BackgroundEffects from '../BackgroundEffects'

function ExperienceSection({ mousePosition }) {
  const { theme } = useTheme()
  const [visibleItems, setVisibleItems] = useState([])
  const [selectedExperience, setSelectedExperience] = useState(null)
  const sectionRef = useRef(null)

  const experiences = [
    {
      company: 'Ai-Tech-Tures-Lab',
      role: 'Software Engineer',
      period: 'Jan 2025 – Present',
      location: 'Remote',
      logo: '/images/aitechtures llp/1693043433502.jpeg',
      linkedinUrl: 'https://www.linkedin.com/company/ai-tech-ture-labs/posts/?feedView=all',
      achievements: [
        'Built AI-driven course discovery with OpenAI + semantic search over 18,000+ courses',
        'Automated data extraction pipelines with Playwright (18,000+ entries, 3,000 assets)',
        'Developed multi-tenant SaaS app with Django REST, React, PostgreSQL, AWS S3',
      ],
      detailedDescription: 'Leading the development of an innovative AI-powered educational platform that transforms how users discover and engage with online courses. Working with cutting-edge technologies to build scalable, intelligent systems.',
      responsibilities: [
        'Architected and implemented AI-driven course discovery system using OpenAI embeddings and semantic search',
        'Built automated data extraction pipelines processing 18,000+ course entries and 3,000+ assets using Playwright',
        'Developed multi-tenant SaaS application with role-based access control',
        'Designed and implemented RESTful APIs using Django REST Framework',
        'Integrated AWS S3 for scalable asset management and storage',
        'Optimized database queries and implemented caching strategies for improved performance',
        'Collaborated with cross-functional teams to deliver features on schedule'
      ],
      technologies: ['Django REST Framework', 'React', 'PostgreSQL', 'OpenAI API', 'Playwright', 'AWS S3', 'Redis', 'Docker'],
      impact: 'Improved course discovery accuracy by 85% and reduced data processing time by 70% through automation.'
    },
    {
      company: 'Kirabiz Technologies',
      role: 'Software Developer Intern',
      period: 'Jan 2024 – June 2024',
      location: 'Hybrid',
      logo: '/images/kirabiz/kirativity_logo.jpeg',
      linkedinUrl: 'https://www.linkedin.com/company/kirativity/posts/?feedView=all',
      achievements: [
        'Built responsive UI from Figma → pixel-perfect React + TypeScript',
        'Integrated RESTful APIs with optimized state management and auth',
      ],
      detailedDescription: 'Contributed to building modern web applications with a focus on creating pixel-perfect, responsive user interfaces and seamless API integrations.',
      responsibilities: [
        'Translated Figma designs into pixel-perfect React components using TypeScript',
        'Implemented responsive layouts optimized for mobile, tablet, and desktop devices',
        'Integrated RESTful APIs with efficient state management using Redux Toolkit',
        'Developed authentication flows with JWT token management',
        'Optimized component rendering and application performance',
        'Participated in code reviews and followed best practices for clean code',
        'Collaborated with designers to ensure design consistency and accessibility'
      ],
      technologies: ['React', 'TypeScript', 'Redux Toolkit', 'REST APIs', 'JWT', 'CSS3', 'Figma', 'Git'],
      impact: 'Delivered 15+ responsive UI components ahead of schedule, contributing to a 30% improvement in user engagement.'
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 }
    )

    const items = sectionRef.current?.querySelectorAll('[data-index]')
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      <BackgroundEffects mousePosition={mousePosition} />
      <div className="relative z-10 mb-12 md:mb-16 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">Experience.</h2>
      </div>

      <div className="relative z-50 px-4 sm:px-6 lg:px-8">
        <div className="relative" style={{ overflow: 'hidden' }}>
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{
            // background: theme === 'dark' 
            //   ? 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
            //   : 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)'
          }} />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{
            background: theme === 'dark'
              ? 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
              : 'linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)'
          }} />
          
          <div 
            className="overflow-x-auto pb-8 scrollbar-hide"
            style={{
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="flex gap-4 sm:gap-6 justify-center px-32">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  data-index={index}
                  className={`transition-all duration-1000 apple-ease flex-shrink-0 ${
                    visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                >
                  <button
                    onClick={() => setSelectedExperience(exp)}
                    className={`relative w-[320px] sm:w-[380px] h-[400px] sm:h-[450px] ${theme === 'dark' ? 'bg-black' : 'bg-white'} rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-[1.02] transition-all duration-500 apple-ease cursor-pointer group overflow-hidden flex flex-col justify-between`} 
                    style={{ 
                      boxShadow: theme === 'light' ? '0 4px 20px rgba(0, 0, 0, 0.08)' : '0 4px 20px rgba(0, 0, 0, 0.5)',
                      border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.06)'
                    }}
                  >
                    <div className="text-left">
                      {exp.logo && (
                        <div className="mb-4">
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`}
                            className="h-12 w-12 object-contain rounded-lg"
                          />
                        </div>
                      )}
                      <p className={`text-xs font-semibold mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Professional Experience
                      </p>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2 leading-tight">
                        {exp.company}
                      </h3>
                      <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-snug mb-2`}>
                        {exp.role}
                      </p>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                        {exp.period}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      {exp.linkedinUrl && (
                        <a
                          href={exp.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                            theme === 'dark'
                              ? 'bg-[#0077B5] text-white hover:bg-[#006399]'
                              : 'bg-[#0077B5] text-white hover:bg-[#006399]'
                          }`}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          LinkedIn
                        </a>
                      )}
                      <div className="ml-auto">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                          theme === 'dark' ? 'bg-white/10' : 'bg-black/5'
                        }`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={!!selectedExperience} onClose={() => setSelectedExperience(null)}>
        {selectedExperience && (
          <div>
            <div className="mb-6">
              <p className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Professional Experience</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">{selectedExperience.company}</h2>
              <p className="text-2xl sm:text-3xl text-gradient font-semibold mb-4">{selectedExperience.role}</p>
              <div className={`flex flex-wrap gap-4 text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
                <span>{selectedExperience.period}</span>
                <span>•</span>
                <span>{selectedExperience.location}</span>
              </div>
              <p className={`text-xl sm:text-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                {selectedExperience.detailedDescription}
              </p>
            </div>

            <div className={`${theme === 'dark' ? 'bg-zinc-800/50' : 'bg-gray-50'} rounded-2xl p-6 sm:p-8 mb-8`}>
              <h3 className="text-2xl font-bold mb-4">Key Responsibilities</h3>
              <ul className="space-y-3">
                {selectedExperience.responsibilities.map((responsibility, i) => (
                  <li key={i} className={`text-base sm:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed flex items-start`}>
                    <span className="text-gradient mr-3 mt-1">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {selectedExperience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-lg text-base font-medium ${
                      theme === 'dark'
                        ? 'bg-zinc-800 text-gray-300 border border-zinc-700'
                        : 'bg-white text-gray-700 border border-gray-200'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className={`${theme === 'dark' ? 'bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/30' : 'bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200'} border rounded-2xl p-6 sm:p-8`}>
              <h3 className="text-xl font-bold mb-3">Impact & Achievements</h3>
              <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                {selectedExperience.impact}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}

export default ExperienceSection
