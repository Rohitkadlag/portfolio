import ThemeToggle from './ThemeToggle'

function Navigation({ scrolled }) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 apple-ease ${
        scrolled ? 'glass py-3 md:py-4' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-lg md:text-xl font-semibold tracking-tight">RK</div>
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <div className="flex gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm">
            <a href="#about" className="hover:text-gray-400 transition-colors apple-ease">
              About
            </a>
            <a href="#experience" className="hover:text-gray-400 transition-colors apple-ease">
              Experience
            </a>
            <a href="#projects" className="hover:text-gray-400 transition-colors apple-ease">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-400 transition-colors apple-ease">
              Contact
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navigation
