import { useState, useEffect } from 'react'

function StatCard({ number, label, delay, isVisible }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true)
      const isNumeric = /^\d+/.test(number)
      
      if (isNumeric) {
        const target = parseInt(number.replace(/[^0-9]/g, ''))
        const duration = 2000
        const steps = 60
        const increment = target / steps
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            setCount(target)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)

        return () => clearInterval(timer)
      }
    }
  }, [isVisible, number, hasAnimated])

  const displayValue = /^\d+/.test(number) 
    ? count.toLocaleString() + number.replace(/^\d+/, '').replace(/[,]/g, '')
    : number

  return (
    <div
      className={`transition-all duration-1000 apple-ease ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="glass rounded-2xl p-4 sm:p-6 hover:scale-105 transition-transform duration-500 apple-ease">
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-2">{displayValue}</div>
        <div className="text-xs sm:text-sm text-gray-400">{label}</div>
      </div>
    </div>
  )
}

export default StatCard
