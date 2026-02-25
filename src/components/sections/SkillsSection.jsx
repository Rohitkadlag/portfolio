import { useTheme } from '../../context/ThemeContext'
import { Code2, Database, Cloud, Cpu, Zap, GitBranch, Flame, Box, Boxes, FileCode, Server, Sparkles, Terminal, Layers } from 'lucide-react'
import BackgroundEffects from '../BackgroundEffects'

function SkillsSection({ mousePosition }) {
  const { theme } = useTheme()
  
  const skillsRow1 = [
    { name: 'React', icon: Code2 },
    { name: 'TypeScript', icon: FileCode },
    { name: 'Python', icon: Terminal },
    { name: 'Django', icon: Server },
    { name: 'Express', icon: Zap },
    { name: 'PostgreSQL', icon: Database },
    { name: 'AWS', icon: Cloud },
  ]

  const skillsRow2 = [
    { name: 'Gen AI', icon: Sparkles },
    { name: 'C++', icon: Cpu },
    { name: 'JavaScript', icon: Box },
    { name: 'Firebase', icon: Flame },
    { name: 'Streamlit', icon: Layers },
    { name: 'Git', icon: GitBranch },
    { name: 'Node.js', icon: Boxes },
  ]

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* <BackgroundEffects mousePosition={mousePosition} /> */}
      <div className="mb-12 sm:mb-16 md:mb-20 text-center px-4 sm:px-6 lg:px-8">
        <p className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight ${theme === 'dark' ? 'text-white-400' : 'text-black-500'}`}>
          Technologies I Work With
        </p>
      </div>

      <div className="relative space-y-6 sm:space-y-8 md:space-y-12">
        {/* Gradient fade overlays */}
        <div className={`absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 z-10 pointer-events-none ${theme === 'dark' ? 'bg-gradient-to-r from-black to-transparent' : 'bg-gradient-to-r from-white to-transparent'}`}></div>
        <div className={`absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 z-10 pointer-events-none ${theme === 'dark' ? 'bg-gradient-to-l from-black to-transparent' : 'bg-gradient-to-l from-white to-transparent'}`}></div>
        
        {/* First row - scrolling left */}
        <div className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-20 animate-marquee">
          {[...skillsRow1, ...skillsRow1, ...skillsRow1].map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-3 flex-shrink-0 transition-all duration-300 hover:scale-110"
            >
              <div className={`${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-400 group-hover:text-gray-700'} transition-colors duration-300`}>
                <skill.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" strokeWidth={1.5} />
              </div>
              <span className={`text-xs sm:text-sm font-medium whitespace-nowrap ${theme === 'dark' ? 'text-gray-500 group-hover:text-gray-300' : 'text-gray-500 group-hover:text-gray-700'} transition-colors duration-300`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Second row - scrolling right */}
        <div className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-20 animate-marquee" style={{ animationDirection: 'reverse' }}>
          {[...skillsRow2, ...skillsRow2, ...skillsRow2].map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-3 flex-shrink-0 transition-all duration-300 hover:scale-110"
            >
              <div className={`${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-400 group-hover:text-gray-700'} transition-colors duration-300`}>
                <skill.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" strokeWidth={1.5} />
              </div>
              <span className={`text-xs sm:text-sm font-medium whitespace-nowrap ${theme === 'dark' ? 'text-gray-500 group-hover:text-gray-300' : 'text-gray-500 group-hover:text-gray-700'} transition-colors duration-300`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
