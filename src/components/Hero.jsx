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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 max-w-4xl">

        <div className="flex flex-col items-center px-4 py-8 md:px-16 md:py-12 hero-reveal" style={{ animationDelay: '0.15s' }}>
          <div className="flex flex-col items-center">
            {/* Overline */}
            <p className="text-xs sm:text-sm tracking-[0.35em] uppercase mb-8 md:mb-12 font-light text-white/70" style={{ fontFamily: 'var(--font-body)' }}>
              Cransac-les-Thermes · Aveyron · Logis Hôtels
            </p>

            {/* Hotel name — Goudy Titling */}
            <h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-[8rem] leading-none mb-6 md:mb-8 uppercase tracking-[0.06em] italic"
              style={{ fontFamily: 'var(--font-logo)', color: '#f5f2ee' }}
            >
              Les Carillons
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl align-super ml-2 not-italic" style={{ fontFamily: 'sans-serif', color: '#ffffff' }}>★★</span>
            </h1>

            {/* Gold thin divider */}
            <div className="w-20 h-px mb-9" style={{ background: '#8c6e47' }} />

            {/* Tagline */}
            <p className="text-sm sm:text-base md:text-lg mb-10 max-w-xs sm:max-w-xl leading-relaxed font-light tracking-wide text-white/80" style={{ fontFamily: 'var(--font-body)' }}>
              Hôtel restaurant familial · 17 chambres · Piscine & Parc
            </p>

            {/* CTA */}
            <Link
              to="/hotel"
              className="border border-white/40 text-white text-xs font-normal tracking-[0.2em] uppercase no-underline hover:bg-white/10 transition-colors px-10 py-4"
            >
              Explorer
            </Link>
          </div>
        </div>

      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-white/30" />
        <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
