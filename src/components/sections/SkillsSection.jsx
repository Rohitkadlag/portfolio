function SkillsSection() {
  const skills = [
    'React', 'TypeScript', 'Python', 'Django', 'Express', 'PostgreSQL',
    'AWS', 'Gen AI', 'C++', 'JavaScript', 'Firebase', 'Streamlit', 'Git', 'Node.js',
  ]

  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="mb-12 md:mb-16 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">Built with.</h2>
      </div>

      <div className="relative">
        <div className="flex gap-4 animate-marquee">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 glass rounded-full whitespace-nowrap text-sm sm:text-base md:text-lg font-medium flex-shrink-0"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
