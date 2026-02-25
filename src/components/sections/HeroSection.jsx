import BackgroundEffects from '../BackgroundEffects';
import CrowdCanvas from '../CrowdCanvas';

function HeroSection({ mousePosition }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <BackgroundEffects mousePosition={mousePosition} />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter mb-4 sm:mb-6 md:mb-8 leading-tight">
          ROHIT KADLAG
        </h1>
        <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-gradient font-semibold mb-3 sm:mb-4 md:mb-6">
          Software Engineer
        </p>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-2 sm:px-4">
          Building intelligent systems. Crafting pixel-perfect experiences.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-0 hidden sm:block">
        <CrowdCanvas src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png" rows={15} cols={7} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-0 block sm:hidden">
        <CrowdCanvas src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png" rows={8} cols={4} />
      </div>

    </section>
  )
}

export default HeroSection
