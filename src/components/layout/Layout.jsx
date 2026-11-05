import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileActionBar from './MobileActionBar';
import { useLang } from '../../i18n/LanguageContext';

/** Remonte en haut à chaque changement de page, ou descend jusqu'à l'ancre (#menus…). */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function ScrollProgress() {
  const bar = useRef(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      // transform (et non width) : pas de recalcul de mise en page, et aucun re-rendu React par défilement
      if (bar.current) bar.current.style.transform = `scaleX(${h > 0 ? Math.min(1, window.scrollY / h) : 0})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return <div ref={bar} className="fixed top-0 left-0 z-[9999] h-[2px] w-full origin-left bg-gold" style={{ transform: 'scaleX(0)' }} aria-hidden="true" />;
}

export default function Layout() {
  const { t } = useLang();
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[10001] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:border focus:border-gold"
      >
        {t('nav.skip')}
      </a>
      <ScrollProgress />
      <ScrollManager />
      <Navbar />
      <main id="contenu" className="min-h-screen" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
