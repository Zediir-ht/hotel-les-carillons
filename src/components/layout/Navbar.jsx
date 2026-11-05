import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';
import { SITE, bookingUrl } from '../../config/site';
import { NAV_ITEMS } from '../../config/navigation';

function Logo({ scrolled, size = 'lg' }) {
  return (
    <>
      <span
        className={`${size === 'lg' ? 'text-2xl xl:text-3xl' : 'text-[min(1.125rem,4.7vw)]'} whitespace-nowrap transition-colors duration-300 uppercase tracking-[0.08em] italic ${scrolled ? 'text-black' : 'text-white'}`}
        style={{ fontFamily: 'var(--font-logo)' }}
      >
        {SITE.shortName}
      </span>
      <span
        className={`${size === 'lg' ? 'text-xs ml-1' : 'text-xs ml-0.5'} align-super transition-colors duration-300 ${scrolled ? 'text-gold' : 'text-white/70'}`}
        style={{ fontFamily: 'sans-serif' }}
      >
        ★★
      </span>
    </>
  );
}

export default function Navbar() {
  const { lang, switchLang, t } = useLang();
  const { pathname } = useLocation();
  const [scrolledDown, setScrolledDown] = useState(false);
  // Le menu mobile est « ouvert sur une page donnée » : il se referme tout seul quand on change de page.
  const [menuOpenOn, setMenuOpenOn] = useState(null);
  const menuOpen = menuOpenOn === pathname;
  const setMenuOpen = (open) => setMenuOpenOn(open ? pathname : null);
  const links = NAV_ITEMS.map((n) => ({ to: n.to, label: t(`nav.${n.key}`), desktop: n.desktop, wide: n.wide }));
  const otherLang = lang === 'fr' ? 'en' : 'fr';

  // Seul l'accueil a une grande photo d'en-tête : partout ailleurs la barre est claire d'emblée.
  const solidPage = pathname !== '/';
  const scrolled = scrolledDown || solidPage || menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolledDown(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Échap ferme le menu ; le fond ne défile pas quand le menu est ouvert
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpenOn(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const linkClass = ({ isActive }) =>
    `text-[0.9375rem] no-underline transition-colors whitespace-nowrap pb-0.5 border-b ${
      isActive
        ? scrolled
          ? 'text-gold border-gold'
          : 'text-white border-white/60'
        : scrolled
          ? 'text-black/60 hover:text-black border-transparent'
          : 'text-white hover:text-white border-transparent'
    }`;

  const langButton = (extra) => (
    <button
      type="button"
      onClick={() => switchLang(otherLang)}
      className={`shrink-0 px-3 py-2 press cursor-pointer border ${
        scrolled ? 'text-black/60 hover:text-black border-black/15' : 'text-white hover:text-white border-white/50'
      } ${extra}`}
      aria-label={t('nav.switchLang')}
      lang={otherLang}
    >
      {otherLang.toUpperCase()}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        aria-label="Navigation principale"
        className={`transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5' : 'bg-gradient-to-b from-black/80 via-black/50 to-transparent text-on-photo'
        }`}
      >
        {/* Bureau */}
        <div className="hidden lg:flex h-20 items-center px-6 xl:px-12">
          <div className="flex-1 flex items-center justify-end gap-6 xl:gap-10 pr-32 xl:pr-44">
            {links.filter((l) => l.desktop === 'left').map((link) => (
              <NavLink key={link.to} to={link.to} className={(state) => `${linkClass(state)}${link.wide ? ' max-2xl:hidden' : ''}`}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <Link to="/" className="absolute left-1/2 -translate-x-1/2 no-underline" aria-label={`${SITE.name}, ${t('nav.home')}`}>
            <Logo scrolled={scrolled} />
          </Link>

          <div className="flex-1 flex items-center justify-start gap-6 xl:gap-10 pl-32 xl:pl-44">
            {links.filter((l) => l.desktop === 'right').map((link) => (
              <NavLink key={link.to} to={link.to} className={(state) => `${linkClass(state)}${link.wide ? ' max-2xl:hidden' : ''}`}>
                {link.label}
              </NavLink>
            ))}
            <a
              href={bookingUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className={`shrink-0 text-[0.9375rem] px-5 py-2 press no-underline border ${
                scrolled ? 'bg-gold border-gold hover:bg-gold-dark text-white' : 'border-white/50 text-white hover:bg-white/10'
              }`}
            >
              {t('nav.book')}
            </a>
            {langButton('text-sm')}
          </div>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center justify-between h-16 px-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex flex-col justify-center gap-[6px] w-[44px] h-[44px] -ml-2 items-center shrink-0 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={t('nav.menu')}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {[menuOpen ? 'rotate-45 translate-y-[8px]' : '', menuOpen ? 'opacity-0' : '', menuOpen ? '-rotate-45 -translate-y-[8px]' : ''].map((state, i) => (
                <span key={i} className={`block w-[24px] h-[2px] transition-[translate,rotate,opacity,background-color] duration-300 ease-(--ease-out) ${scrolled ? 'bg-black' : 'bg-white'} ${state}`} />
              ))}
            </button>
            <Link to="/" className="no-underline flex items-baseline" aria-label={`${SITE.name}, ${t('nav.home')}`}>
              <Logo scrolled={scrolled} size="sm" />
            </Link>
          </div>
          {langButton('px-2.5 text-[min(0.9375rem,3.9vw)]')}
        </div>

        <div
          id="mobile-menu"
          data-open={menuOpen}
          className="mobile-menu lg:hidden absolute top-full inset-x-0 bg-offwhite border-t border-black/10 h-[calc(100dvh-4rem)] overflow-y-auto"
        >
          <div className="flex flex-col py-6 px-6 gap-1">
            {[{ to: '/', label: t('nav.home') }, ...links].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end
                className={({ isActive }) =>
                  `text-lg py-3.5 border-b border-black/5 no-underline ${isActive ? 'text-gold' : 'text-black/70'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a href={SITE.phone.href} className="mt-6 text-base text-black/70 no-underline">
              {SITE.phone.display}
            </a>
            <a href={`mailto:${SITE.email}`} className="text-sm text-black/65 no-underline">
              {SITE.email}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
