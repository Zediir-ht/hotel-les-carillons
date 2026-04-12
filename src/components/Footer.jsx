import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

const footerNavKeys = [
  { to: '/hotel', key: 'hotel' },
  { to: '/restaurant', key: 'restaurant' },
  { to: '/meubles', key: 'meubles' },
  { to: '/seminaire', key: 'seminaire' },
  { to: '/tourisme', key: 'tourisme' },
  { to: '/contact', key: 'contact' },
];

export default function Footer() {
  const { t } = useLang();
  const footerNav = footerNavKeys.map((n) => ({ to: n.to, label: t(`footer.navLinks.${n.key}`) }));
  return (
    <footer className="bg-deepbrown text-white">
      {/* Top structural border */}
      <div className="h-px bg-black" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Col 1 — Brand */}
          <div>
            <Link to="/" className="no-underline">
              <span
                className="text-2xl text-white block mb-4 uppercase tracking-[0.08em]"
                style={{ fontFamily: 'var(--font-logo)' }}
              >
                Les Carillons
              </span>
            </Link>
            <div className="w-12 h-px bg-gold mb-5" />
            <p className="text-white/50 text-sm leading-relaxed font-light">
              {t('footer.brand').split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-gold font-normal mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              {t('footer.navTitle')}
            </h4>
            <ul className="list-none p-0 m-0 space-y-3">
              {footerNav.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/50 hover:text-white text-sm no-underline transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Coordonnées */}
          <div>
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-gold font-normal mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              {t('footer.coordTitle')}
            </h4>
            <address className="not-italic text-sm text-white/50 leading-relaxed space-y-3 font-light">
              <p>Route de Figeac<br />12110 Cransac-les-Thermes</p>
              <p>
                <a href="tel:+33565631475" className="text-white/50 hover:text-white no-underline transition-colors">
                  05 65 63 14 75
                </a>
              </p>
            </address>
            <div className="mt-6">
              <a
                href="https://www.logishotels.com/fr/hotel/logis-hotel-les-carillons-4588"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-gold/40 text-gold text-xs font-normal px-5 py-2.5 tracking-[0.15em] uppercase no-underline hover:bg-gold hover:text-white transition-colors"
              >
                Réserver
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30 font-light">
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
          <Link to="/mentions-legales" className="text-white/30 hover:text-white/60 no-underline transition-colors">
            {t('footer.legal')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
