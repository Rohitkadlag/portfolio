import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

function Navigation({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 apple-ease ${
          scrolled ? 'glass py-3 md:py-4' : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-lg md:text-xl font-semibold tracking-tight">RK</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <div className="flex gap-6 lg:gap-8 text-sm">
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

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-20 right-4 left-4 glass rounded-2xl p-6 space-y-4">
            <a 
              href="#about" 
              onClick={handleLinkClick}
              className="block text-lg font-medium hover:text-gray-400 transition-colors py-2"
            >
              About
            </a>
            <a 
              href="#experience" 
              onClick={handleLinkClick}
              className="block text-lg font-medium hover:text-gray-400 transition-colors py-2"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              onClick={handleLinkClick}
              className="block text-lg font-medium hover:text-gray-400 transition-colors py-2"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={handleLinkClick}
              className="block text-lg font-medium hover:text-gray-400 transition-colors py-2"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default Navigation
