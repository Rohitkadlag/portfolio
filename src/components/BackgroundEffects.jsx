function BackgroundEffects({ mousePosition }) {
  return (
    <>
      <div
        className="absolute w-96 h-96 opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #667eea 0%, #764ba2 100%)',
          filter: 'blur(80px)',
          borderRadius: '50%',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          transition: 'transform 0.3s ease-out',
          left: '-10%',
          top: '10%',
          zIndex: 0,
        }}
      />
      <div
        className="absolute w-80 h-80 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #764ba2 0%, #667eea 100%)',
          filter: 'blur(80px)',
          borderRadius: '50%',
          transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)`,
          transition: 'transform 0.3s ease-out',
          right: '10%',
          top: '20%',
          zIndex: 0,
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
    </>
  );
}

export default BackgroundEffects;
