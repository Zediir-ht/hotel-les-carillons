import { Link } from 'react-router-dom';

export default function PageHero({ title, subtitle, image, breadcrumb = [] }) {
  return (
    <section className="relative h-64 md:h-[380px] flex items-end text-white mt-16 md:mt-[72px]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={image || '/images/placeholder.jpg'}
          alt={title}
          className="w-full h-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10" />
      </div>

      <div className="relative z-10 w-full pb-10 md:pb-14 px-6 md:px-16 max-w-6xl mx-auto hero-reveal" style={{ animationDelay: '0.1s' }}>
        {breadcrumb.length > 0 && (
          <nav className="mb-3 text-xs text-white/45 tracking-[0.15em] uppercase flex items-center gap-2 font-light">
            <Link to="/" className="text-white/45 hover:text-white no-underline transition-colors">
              Accueil
            </Link>
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                {item.to ? (
                  <Link to={item.to} className="text-white/45 hover:text-white no-underline transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white/70">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl md:text-5xl font-normal text-white leading-tight mb-2">{title}</h1>
        {subtitle && (
          <p className="text-white/60 text-sm md:text-base font-light mt-3 max-w-xl" style={{ fontFamily: 'var(--font-body)', textTransform: 'none' }}>{subtitle}</p>
        )}
        <div className="w-16 h-px bg-gold mt-5" />
      </div>
    </section>
  );
}
