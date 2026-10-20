import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';
import Photo from './Photo';

/** En-tête des pages intérieures : grande photo, fil d'Ariane, titre. */
export default function PageHero({ title, subtitle, photo, photoAlt, breadcrumb = [], children }) {
  const { t } = useLang();
  return (
    <section className="relative min-h-80 md:min-h-[460px] flex items-end text-white">
      <div className="absolute inset-0 z-0 overflow-hidden bg-deepbrown">
        {photo && (
          <Photo name={photo} alt={photoAlt || ''} priority sizes="100vw" className="w-full h-full object-cover ken-burns" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/45" />
      </div>

      <div className="relative z-10 w-full pt-28 pb-10 md:pb-14 px-6 md:px-16 max-w-6xl mx-auto hero-reveal">
        {breadcrumb.length > 0 && (
          <nav aria-label="Fil d'Ariane" className="mb-3 text-xs text-white/60">
            <ol className="flex items-center gap-2 list-none p-0 m-0">
              <li>
                <Link to="/" className="text-white/60 hover:text-white no-underline transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              {breadcrumb.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {item.to ? (
                    <Link to={item.to} className="text-white/60 hover:text-white no-underline transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white/85" aria-current="page">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-3xl md:text-5xl font-normal text-white leading-tight">{title}</h1>
        {subtitle && <p className="text-white/80 text-sm md:text-base mt-4 max-w-xl normal-case tracking-normal">{subtitle}</p>}
        <div className="w-16 h-px bg-gold mt-5" />
        {children}
      </div>
    </section>
  );
}
