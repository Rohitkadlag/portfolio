import { useState, useEffect, useRef } from 'react'

function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState([])
  const sectionRef = useRef(null)

  const projects = [
    {
      title: 'Floor Plan Architect',
      subtitle: 'Interactive architectural design tool.',
      metrics: ['40+ Components', '7 Categories', 'Real-Time Export'],
      tech: ['React 18', 'TypeScript', 'Konva.js', 'Zustand', 'TailwindCSS'],
      description: 'Drag-and-drop architectural design with snap-to-grid, export to PNG/SVG/JSON.',
    },
    {
      title: 'Reddit Clone',
      subtitle: 'Full-stack social platform.',
      metrics: ['Real-Time Chat', '15+ Features', 'Admin Dashboard'],
      tech: ['React 18', 'Node.js', 'MongoDB', 'Socket.IO', 'Redux Toolkit'],
      description: 'Complete social platform with nested comments, community management, and real-time features.',
    },
    {
      title: 'AI Course Discovery',
      subtitle: 'OpenAI-powered semantic search.',
      metrics: ['18,000+ Courses', 'NLP Search', 'Multi-Tenant'],
      tech: ['Django REST', 'React', 'PostgreSQL', 'Playwright', 'OpenAI'],
      description: 'Intelligent course discovery system with natural language querying and automated data pipelines.',
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

      <div className="px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="max-w-6xl w-full space-y-10 md:space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className={`transition-all duration-1000 apple-ease ${
                visibleProjects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="glass rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-12 lg:p-14 hover:scale-[1.01] hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 apple-ease group" style={{ textAlign: 'center' }}>
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 group-hover:text-gradient transition-all duration-700">
                    {project.title}
                  </h3>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-400">{project.subtitle}</p>
                </div>

                <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center">
                  {project.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full text-sm sm:text-base font-semibold border border-purple-500/30 hover:border-purple-500/50 transition-colors duration-300"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto text-center">{project.description}</p>

                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 rounded-lg text-sm sm:text-base text-gray-400 border border-white/10 hover:border-white/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
