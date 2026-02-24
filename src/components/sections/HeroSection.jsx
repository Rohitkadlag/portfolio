import BackgroundEffects from '../BackgroundEffects';
import CrowdCanvas from '../CrowdCanvas';

function HeroSection({ mousePosition }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <BackgroundEffects mousePosition={mousePosition} />

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

      <div className="absolute bottom-0 left-0 right-0 z-0">
        <CrowdCanvas src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png" rows={15} cols={7} />
      </div>

    </section>
  )
}

export default HeroSection
