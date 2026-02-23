import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'
import Modal from '../ui/Modal'

function ProjectsSection() {
  const { theme } = useTheme()
  const [visibleProjects, setVisibleProjects] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)
  const sectionRef = useRef(null)

  const projects = [
    {
      title: 'Floor Plan Architect',
      subtitle: 'Interactive architectural design tool.',
      metrics: ['40+ Components', '7 Categories', 'Real-Time Export'],
      tech: ['React 18', 'TypeScript', 'Konva.js', 'Zustand', 'TailwindCSS'],
      description: 'Drag-and-drop architectural design with snap-to-grid, export to PNG/SVG/JSON.',
      detailedDescription: 'A comprehensive architectural design tool that revolutionizes the way floor plans are created. Built with modern web technologies, it offers an intuitive drag-and-drop interface with intelligent snap-to-grid functionality.',
      features: [
        'Drag-and-drop interface with 40+ pre-built architectural components',
        'Intelligent snap-to-grid system for precise placement',
        'Real-time collaboration and auto-save functionality',
        'Export to multiple formats: PNG, SVG, and JSON',
        'Responsive design optimized for desktop and tablet',
        'State management with Zustand for seamless performance',
        'Custom canvas rendering with Konva.js for smooth interactions'
      ],
      impact: 'Streamlined the architectural design process, reducing design time by 60% for small to medium projects.'
    },
    {
      title: 'Reddit Clone',
      subtitle: 'Full-stack social platform.',
      metrics: ['Real-Time Chat', '15+ Features', 'Admin Dashboard'],
      tech: ['React 18', 'Node.js', 'MongoDB', 'Socket.IO', 'Redux Toolkit'],
      description: 'Complete social platform with nested comments, community management, and real-time features.',
      detailedDescription: 'A full-featured social platform replicating Reddit\'s core functionality with modern enhancements. Built from the ground up with scalability and real-time interactions in mind.',
      features: [
        'Real-time messaging and notifications using Socket.IO',
        'Nested comment threads with voting system',
        'Community creation and moderation tools',
        'User authentication with JWT and session management',
        'Admin dashboard with analytics and content moderation',
        'Rich text editor for post creation',
        'Image upload and media handling with cloud storage',
        'Responsive design for mobile and desktop'
      ],
      impact: 'Successfully handles concurrent users with real-time updates, demonstrating scalable architecture patterns.'
    },
    {
      title: 'AI Course Discovery',
      subtitle: 'OpenAI-powered semantic search.',
      metrics: ['18,000+ Courses', 'NLP Search', 'Multi-Tenant'],
      tech: ['Django REST', 'React', 'PostgreSQL', 'Playwright', 'OpenAI'],
      description: 'Intelligent course discovery system with natural language querying and automated data pipelines.',
      detailedDescription: 'An AI-powered course discovery platform that transforms how users find educational content. Leveraging OpenAI\'s language models and semantic search to understand user intent and deliver personalized recommendations.',
      features: [
        'Natural language search powered by OpenAI embeddings',
        'Automated data extraction pipeline processing 18,000+ courses',
        'Semantic search with vector similarity matching',
        'Multi-tenant SaaS architecture with role-based access',
        'Playwright automation for continuous data updates',
        'RESTful API with Django REST Framework',
        'Advanced filtering and personalized recommendations',
        'AWS S3 integration for asset management'
      ],
      impact: 'Improved course discovery accuracy by 85% compared to traditional keyword search, with 3x faster data processing.'
    },
    {
      title: 'BillMind',
      subtitle: 'AI-powered bill management with workflow automation.',
      metrics: ['95%+ OCR Accuracy', 'n8n Automation', 'Real-Time Alerts'],
      tech: ['React', 'FastAPI', 'n8n', 'Google Cloud Vision', 'Mistral AI', 'Telegram Bot API'],
      description: 'Intelligent bill processing system that automates extraction, anomaly detection, and notifications using AI and n8n workflows.',
      detailedDescription: 'A full-stack bill management platform that turns inbox chaos into structured data. Bills are automatically extracted from Gmail, parsed with OCR and AI, scored for anomalies, and tracked through a real-time analytics dashboard — all running on autopilot via n8n workflows.',
      features: [
        'Automatic bill extraction from Gmail using n8n workflow triggers',
        'OCR-powered text extraction with Google Cloud Vision',
        'AI-driven data parsing with Mistral for vendor, amount, dates, and line items',
        'ML-based anomaly detection and fraud risk scoring',
        'Real-time Telegram notifications color-coded by risk level',
        'Scheduled daily reminders for bills due within 3 days',
        'Interactive analytics dashboard with spending insights and category breakdowns',
        'AI chatbot for natural language queries about bills and spending'
      ],
      impact: 'Eliminates manual data entry entirely with 3 production-ready n8n workflows, saving hours of weekly bill management while proactively detecting anomalies.'
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleProjects((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 }
    )

    const items = sectionRef.current?.querySelectorAll('[data-index]')
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 overflow-hidden">
      <div className="mb-12 md:mb-16 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">Featured work.</h2>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="relative" style={{ overflow: 'hidden' }}>
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{
            background: theme === 'dark' 
              ? 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
              : 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)'
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
              {projects.map((project, index) => (
                <div
                  key={index}
                  data-index={index}
                  className={`transition-all duration-1000 apple-ease flex-shrink-0 ${
                    visibleProjects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`relative w-[320px] sm:w-[380px] h-[400px] sm:h-[450px] ${theme === 'dark' ? 'bg-black' : 'bg-white'} rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-[1.02] transition-all duration-500 apple-ease group cursor-pointer overflow-hidden flex flex-col justify-between`} 
                    style={{ 
                      boxShadow: theme === 'light' ? '0 4px 20px rgba(0, 0, 0, 0.08)' : '0 4px 20px rgba(0, 0, 0, 0.5)',
                      border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.06)'
                    }}
                  >
                    <div className="text-left">
                      <p className={`text-xs font-semibold mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {project.metrics[0]}
                      </p>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-snug`}>
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="absolute bottom-6 right-6">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        theme === 'dark' ? 'bg-white/10' : 'bg-black/5'
                      }`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div>
            <div className="mb-6">
              <p className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Innovation</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">{selectedProject.title}</h2>
              <p className={`text-xl sm:text-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                {selectedProject.detailedDescription}
              </p>
            </div>

            <div className={`${theme === 'dark' ? 'bg-zinc-800/50' : 'bg-gray-50'} rounded-2xl p-6 sm:p-8 mb-8`}>
              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {selectedProject.features.map((feature, i) => (
                  <li key={i} className={`text-base sm:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed flex items-start`}>
                    <span className="text-gradient mr-3 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {selectedProject.tech.map((tech, i) => (
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
              <h3 className="text-xl font-bold mb-3">Impact</h3>
              <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                {selectedProject.impact}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}

export default ProjectsSection
