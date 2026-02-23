import { useState, useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext'

function StatCard({ number, label, delay, isVisible }) {
  const { theme } = useTheme()
  const isNumeric = /^\d+/.test(number)
  const target = isNumeric ? parseInt(number.replace(/[^0-9]/g, '')) : 0
  const [count, setCount] = useState(isNumeric ? 0 : number)

  useEffect(() => {
    if (!isVisible || !isNumeric) return

    let startTime = null
    const duration = 2000
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      setCount(Math.floor(progress * target))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, target, isNumeric])

  const displayValue = isNumeric
    ? count.toLocaleString() + number.replace(/^\d+/, '').replace(/[,]/g, '')
    : count

  return (
    <div
      className={`transition-all duration-1000 apple-ease ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`${theme === 'dark' ? 'glass' : 'glass-light'} rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-500 apple-ease`}>
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-2">{displayValue}</div>
        <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{label}</div>
      </div>
    </div>
  )
}

export default StatCard
