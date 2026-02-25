import { useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext'

function Modal({ isOpen, onClose, children }) {
  const { theme } = useTheme()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        style={{ animation: 'fadeIn 0.3s ease-out' }}
      />
      
      <div 
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl shadow-2xl transform transition-all duration-300 ${
          theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
        }`}
        style={{ animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`sticky top-3 xs:top-4 right-3 xs:right-4 float-right z-10 w-8 h-8 xs:w-9 xs:h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 ${
            theme === 'dark' 
              ? 'bg-zinc-800 hover:bg-zinc-700' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
          aria-label="Close modal"
        >
          <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="p-5 xs:p-6 sm:p-8 md:p-12 lg:p-16">
          {children}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  )
}

export default Modal
