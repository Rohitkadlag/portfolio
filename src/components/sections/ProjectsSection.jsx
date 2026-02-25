import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'
import Modal from '../ui/Modal'
import BackgroundEffects from '../BackgroundEffects'

function ProjectsSection({ mousePosition }) {
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
      impact: 'Streamlined the architectural design process, reducing design time by 60% for small to medium projects.',
      liveUrl: 'https://floorplanarchitechture.netlify.app/',
      githubUrl: 'https://github.com/Rohitkadlag/floorplan-architechture',
      image: '/images/project/2825814_20574.jpg'
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
      impact: 'Successfully handles concurrent users with real-time updates, demonstrating scalable architecture patterns.',
      githubUrl: 'https://github.com/Rohitkadlag/redditclone2',
      image: '/images/project/36190313_8379997.jpg'
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
      impact: 'Improved course discovery accuracy by 85% compared to traditional keyword search, with 3x faster data processing.',
      image: '/images/project/7743098_1723.jpg'
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
      impact: 'Eliminates manual data entry entirely with 3 production-ready n8n workflows, saving hours of weekly bill management while proactively detecting anomalies.',
      liveUrl: 'https://billmind-frontend.vercel.app/',
      githubUrl: 'https://github.com/Rohitkadlag/billmind-frontend',
      githubUrl2: 'https://github.com/Rohitkadlag/billmind-backend',
      image: '/images/project/138219470_10172884.jpg'
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
    <section id="projects" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      <BackgroundEffects mousePosition={mousePosition} />
      <div className="mb-8 sm:mb-12 md:mb-16 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">Featured work.</h2>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="relative" style={{ overflow: 'hidden' }}>
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 z-10 pointer-events-none" style={{
            background: theme === 'dark' 
              ? 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
              : 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)'
          }} />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 z-10 pointer-events-none" style={{
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
            <div className="flex gap-4 sm:gap-6 justify-start md:justify-center px-4 sm:px-8 md:px-16 lg:px-32">
              {projects.map((project, index) => (
                <div
                  key={index}
                  data-index={index}
                  className={`transition-all duration-1000 apple-ease flex-shrink-0 ${
                    visibleProjects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`relative w-[280px] xs:w-[320px] sm:w-[380px] h-[520px] xs:h-[550px] sm:h-[600px] ${theme === 'dark' ? 'bg-black' : 'bg-white'} rounded-2xl sm:rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 apple-ease group flex flex-col`} 
                    style={{ 
                      boxShadow: theme === 'light' ? '0 4px 20px rgba(0, 0, 0, 0.08)' : '0 4px 20px rgba(0, 0, 0, 0.5)',
                      border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.06)'
                    }}
                  >
                    <div className="flex-1 flex flex-col justify-between p-5 xs:p-6 sm:p-8">
                      <div className="text-left">
                        <p className={`text-xs font-semibold mb-2 xs:mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {project.metrics[0]}
                        </p>
                        <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-2 leading-tight">
                          {project.title}
                        </h3>
                        <p className={`text-sm xs:text-base sm:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-snug mb-3 xs:mb-4`}>
                          {project.subtitle}
                        </p>

                        {/* Project Image */}
                        {project.image && (
                          <div className="relative w-full h-40 xs:h-48 overflow-hidden rounded-xl mb-3 xs:mb-4 bg-gray-100 dark:bg-gray-800">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        )}
                      </div>

                    <div className="flex flex-col gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`flex items-center justify-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-2 xs:py-2.5 rounded-lg font-semibold text-xs xs:text-sm transition-all duration-300 ${
                            theme === 'dark'
                              ? 'bg-white text-black hover:bg-gray-200'
                              : 'bg-black text-white hover:bg-gray-800'
                          }`}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={`flex-1 flex items-center justify-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-2 xs:py-2.5 rounded-lg font-semibold text-xs xs:text-sm transition-all duration-300 ${
                              theme === 'dark'
                                ? 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700'
                                : 'bg-white text-black hover:bg-gray-100 border border-gray-300'
                            }`}
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            {project.githubUrl2 ? 'Frontend' : 'GitHub'}
                          </a>
                        )}
                        {project.githubUrl2 && (
                          <a
                            href={project.githubUrl2}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={`flex-1 flex items-center justify-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-2 xs:py-2.5 rounded-lg font-semibold text-xs xs:text-sm transition-all duration-300 ${
                              theme === 'dark'
                                ? 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700'
                                : 'bg-white text-black hover:bg-gray-100 border border-gray-300'
                            }`}
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            Backend
                          </a>
                        )}
                      </div>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className={`flex items-center justify-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-2 xs:py-2.5 rounded-lg font-semibold text-xs xs:text-sm transition-all duration-300 ${
                          theme === 'dark'
                            ? 'bg-zinc-800/50 text-white hover:bg-zinc-800 border border-zinc-700'
                            : 'bg-gray-100 text-black hover:bg-gray-200 border border-gray-200'
                        }`}
                      >
                        View Details
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                    </div>
                  </div>
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

            {(selectedProject.liveUrl || selectedProject.githubUrl || selectedProject.githubUrl2) && (
              <div className="mt-8 flex flex-wrap gap-4">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-white text-black hover:bg-gray-200'
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700'
                        : 'bg-white text-black hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    {selectedProject.githubUrl2 ? 'Frontend' : 'GitHub'}
                  </a>
                )}
                {selectedProject.githubUrl2 && (
                  <a
                    href={selectedProject.githubUrl2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700'
                        : 'bg-white text-black hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Backend
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  )
}

export default ProjectsSection
