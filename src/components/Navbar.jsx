import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/hotel', label: 'Hôtel' },
  { to: '/restaurant', label: 'Restaurant' },
  { to: '/meubles', label: 'Meublés' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/seminaire', label: 'Séminaire' },
  { to: '/tourisme', label: 'Tourisme' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `text-xs font-normal tracking-[0.15em] uppercase no-underline transition-colors whitespace-nowrap ${
      isActive
        ? scrolled ? 'text-gold border-b border-gold pb-0.5' : 'text-white border-b border-white/60 pb-0.5'
        : scrolled ? 'text-black/60 hover:text-black' : 'text-white/80 hover:text-white'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main nav */}
      <nav
        className={`transition-all duration-400 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5'
            : 'bg-white/5 backdrop-blur-[2px]'
        }`}
      >
        {/* Desktop */}
        <div className="hidden lg:block">
          <div className="h-20 relative flex items-center px-6 xl:px-12">

            {/* Logo — absolument centré sur la page */}
            <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none px-4 xl:px-10">
              <Link to="/" className="no-underline pointer-events-auto" onClick={() => setMenuOpen(false)}>
                <span
                  className={`text-2xl xl:text-3xl whitespace-nowrap transition-colors duration-300 uppercase tracking-[0.08em] italic ${scrolled ? 'text-black' : 'text-white'}`}
                  style={{ fontFamily: 'var(--font-logo)' }}
                >
                  Les Carillons
                </span>
                <span
                  className={`text-xs tracking-[0.15em] align-super ml-1 transition-colors duration-300 ${scrolled ? 'text-gold' : 'text-white/70'}`}
                  style={{ fontFamily: 'sans-serif' }}
                >
                  ★★
                </span>
              </Link>
            </div>

            {/* Gauche : liens poussés vers la gauche */}
            <div className="flex-1 flex items-center justify-end gap-4 xl:gap-8 pr-28 xl:pr-40">
              {navLinks.slice(0, 4).map((link) => (
                <NavLink key={link.to} to={link.to} className={linkClass}>
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Droite : liens poussés vers la droite */}
            <div className="flex-1 flex items-center justify-start gap-4 xl:gap-8 pl-28 xl:pl-40">
              {navLinks.slice(4).map((link) => (
                <NavLink key={link.to} to={link.to} className={linkClass}>
                  {link.label}
                </NavLink>
              ))}
              <a
                href="https://www.logishotels.com/fr/hotel/logis-hotel-les-carillons-4588"
                target="_blank"
                rel="noopener noreferrer"
                className={`shrink-0 text-xs font-normal px-4 py-2 tracking-[0.12em] uppercase transition-colors no-underline ${
                  scrolled
                    ? 'bg-gold hover:bg-gold-dark text-white'
                    : 'border border-white/40 text-white hover:bg-white/10'
                }`}
              >
                Réserver
              </a>
            </div>

          </div>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center justify-between h-16 px-4">
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          <Link to="/" className="no-underline absolute left-1/2 -translate-x-1/2" onClick={() => setMenuOpen(false)}>
            <span
              className={`text-xl uppercase tracking-[0.08em] italic transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}
              style={{ fontFamily: 'var(--font-logo)' }}
            >
              Les Carillons
            </span>
            <span
              className={`text-[10px] align-super ml-0.5 transition-colors duration-300 ${scrolled ? 'text-gold' : 'text-white/70'}`}
              style={{ fontFamily: 'sans-serif' }}
            >
              ★★
            </span>
          </Link>

          <a
            href="https://www.logishotels.com/fr/hotel/logis-hotel-les-carillons-4588"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs font-bold px-3 py-2 tracking-wider uppercase no-underline transition-colors ${
              scrolled ? 'bg-gold text-white' : 'border border-white/60 text-white'
            }`}
          >
            Réserver
          </a>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-offwhite border-t border-black/10">
            <div className="flex flex-col py-6 px-6 gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-normal tracking-[0.12em] uppercase py-3 border-b border-black/5 no-underline ${
                      isActive ? 'text-gold' : 'text-black/60'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a href="tel:+33565631475" className="mt-4 text-sm text-gray-400 no-underline">
                05 65 63 14 75
              </a>
            </div>
          </div>
        )}
      </nav>
      {/* Gradient fade-out below navbar */}
      <div
        className="pointer-events-none h-16"
        style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, transparent 100%)' }}
      />
    </header>
  );
}
