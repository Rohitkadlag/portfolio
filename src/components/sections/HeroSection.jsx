function HeroSection({ mousePosition }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'linear-gradient(225deg, #764ba2 0%, #667eea 100%)',
          transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)`,
          transition: 'transform 0.3s ease-out',
          right: '10%',
          top: '20%',
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 sm:mb-6 md:mb-8">
          ROHIT KADLAG
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gradient font-semibold mb-3 sm:mb-4 md:mb-6">
          Software Engineer
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
          Building intelligent systems. Crafting pixel-perfect experiences.
        </p>
      </div>

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
