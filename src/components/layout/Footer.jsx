import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';
import { SITE, LINKS, bookingUrl, logisPageUrl } from '../../config/site';
import { NAV_ITEMS } from '../../config/navigation';
import MultiLine from '../ui/MultiLine';

function ColumnTitle({ children }) {
  return (
    <h2 className="text-xs text-gold-light font-normal mb-6" style={{ fontFamily: 'var(--font-body)' }}>
      {children}
    </h2>
  );
}

export default function Footer() {
  const { t, lang } = useLang();
  const linkClass = 'text-white/60 hover:text-white no-underline transition-colors';

  return (
    <footer className="bg-deepbrown text-white pb-20 lg:pb-0">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          <div>
            <Link to="/" className="no-underline">
              <span className="text-2xl text-white block mb-4 uppercase tracking-[0.08em] italic" style={{ fontFamily: 'var(--font-logo)' }}>
                {SITE.shortName} <span className="not-italic text-sm text-gold-light align-super" style={{ fontFamily: 'sans-serif' }}>★★</span>
              </span>
            </Link>
            <div className="w-12 h-px bg-gold-light/70 mb-5" />
            <p className="text-white/60 text-sm leading-relaxed">
              <MultiLine text={t('footer.brand')} />
            </p>
            <a href={logisPageUrl(lang)} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-block mt-5 text-xs`}>
              {t('footer.logis')} ↗
            </a>
          </div>

          <nav aria-label={t('footer.navTitle')}>
            <ColumnTitle>{t('footer.navTitle')}</ColumnTitle>
            <ul className="list-none p-0 m-0 space-y-3 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={linkClass}>
                    {t(`footer.navLinks.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <ColumnTitle>{t('footer.coordTitle')}</ColumnTitle>
            <address className="not-italic text-sm leading-relaxed space-y-3 text-white/60">
              <p>
                {SITE.address.street}
                <br />
                {SITE.address.postalCode} {SITE.address.city}
              </p>
              <p>
                <a href={SITE.phone.href} className={linkClass}>
                  {SITE.phone.display}
                </a>
                <br />
                <a href={`mailto:${SITE.email}`} className={linkClass}>
                  {SITE.email}
                </a>
              </p>
              <p>
                <a href={LINKS.directions} target="_blank" rel="noopener noreferrer" className={`${linkClass} text-xs`}>
                  {t('footer.directions')} ↗
                </a>
              </p>
            </address>
          </div>

          <div>
            <ColumnTitle>{t('footer.hoursTitle')}</ColumnTitle>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              <MultiLine text={t('footer.hours')} />
            </p>
            <a
              href={bookingUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gold-light/50 text-gold-light text-xs font-normal px-5 py-2.5 no-underline hover:bg-gold-light hover:text-deepbrown transition-colors"
            >
              {t('footer.book')}
            </a>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <Link to="/mentions-legales" className="text-white/40 hover:text-white/70 no-underline transition-colors">
            {t('footer.legal')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
