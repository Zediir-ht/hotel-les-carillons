import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-center text-center text-white overflow-x-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/placeholder.jpg"
          alt="L'hôtel Les Carillons et son parc arboré à Cransac-les-Thermes"
          className="w-full h-full object-cover ken-burns"
        />
        {/* Gradient: dark bottom, lighter top */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 max-w-4xl">

        <div className="flex flex-col items-center px-4 py-8 md:px-16 md:py-12 hero-reveal" style={{ animationDelay: '0.15s' }}>
          {/* Content */}
          <div className="flex flex-col items-center">
            {/* Pre-heading label */}
            <p className="text-xs sm:text-sm md:text-base tracking-[0.25em] sm:tracking-[0.35em] uppercase mb-6 md:mb-10 font-light" style={{ color: '#E3DED1' }}>
              Cransac-les-Thermes · Aveyron · Logis Hôtels
            </p>

            {/* Hotel name */}
            <h1
              className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-none mb-6 md:mb-8 inline-flex items-start gap-1 sm:gap-2"
              style={{ fontFamily: 'var(--font-logo)', color: '#E3DED1' }}
            >
              Les Carillons
              <span className="text-xl sm:text-2xl md:text-4xl align-super mt-1 sm:mt-2" style={{ fontFamily: 'sans-serif', fontWeight: 400, color: '#E3DED1' }}>★★</span>
            </h1>

            {/* Gold thin divider */}
            <div className="w-20 h-px mb-9" style={{ background: 'rgba(166,123,91,0.8)' }} />

            {/* Tagline */}
            <p className="text-sm sm:text-base md:text-lg mb-0 max-w-xs sm:max-w-xl leading-relaxed font-light tracking-wide" style={{ color: '#E3DED1' }}>
              Hôtel restaurant familial · 17 chambres · Piscine & Parc
            </p>
          </div>
        </div>

      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-white/40" />
        <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
