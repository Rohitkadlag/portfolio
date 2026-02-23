import { useState, useEffect, useRef } from 'react'

function ExperienceSection() {
  const [visibleItems, setVisibleItems] = useState([])
  const sectionRef = useRef(null)

  const experiences = [
    {
      company: 'Ai-Tech-Tures-Lab',
      role: 'Software Engineer',
      period: 'Jan 2025 – Present',
      achievements: [
        'Built AI-driven course discovery with OpenAI + semantic search over 18,000+ courses',
        'Automated data extraction pipelines with Playwright (18,000+ entries, 3,000 assets)',
        'Developed multi-tenant SaaS app with Django REST, React, PostgreSQL, AWS S3',
      ],
    },
    {
      company: 'Kirabiz Technologies',
      role: 'Software Developer Intern',
      period: 'Jan 2024 – June 2024',
      achievements: [
        'Built responsive UI from Figma → pixel-perfect React + TypeScript',
        'Integrated RESTful APIs with optimized state management and auth',
      ],
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
    <section id="experience" ref={sectionRef} className="py-20 md:py-32 overflow-hidden">
      <div className="mb-12 md:mb-16 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">Experience.</h2>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="max-w-5xl w-full space-y-8 md:space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-index={index}
              className={`transition-all duration-1000 apple-ease ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="glass rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-12 lg:p-14 hover:scale-[1.01] hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-700 apple-ease" style={{ textAlign: 'center' }}>
                <div className="mb-6 sm:mb-8 pb-6 border-b border-white/10">
                  <div className="mb-3">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">{exp.company}</h3>
                    <p className="text-lg sm:text-xl lg:text-2xl text-gradient font-semibold">{exp.role}</p>
                  </div>
                  <div className="text-sm sm:text-base text-gray-400">{exp.period}</div>
                </div>

                <ul className="space-y-4 max-w-3xl mx-auto" style={{ textAlign: 'center', listStyle: 'none', paddingLeft: 0 }}>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-base sm:text-lg text-gray-300 leading-relaxed">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
