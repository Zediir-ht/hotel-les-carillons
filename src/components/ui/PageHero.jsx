import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';
import Photo from './Photo';
import { ArchFrame } from './Ornaments';

/**
 * En-tête des pages intérieures, sur fond crème : fil d'Ariane, titre, sous-titre
 * et une photo en arche, montrée sans voile.
 * (Seule la page d'accueil a une grande photo plein écran.)
 */
export default function PageHero({ title, subtitle, photo, photoAlt, breadcrumb = [], children }) {
  const { t } = useLang();
  return (
    <section className="bg-offwhite overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-14 md:pb-20 grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
        <div className="hero-reveal">
          {breadcrumb.length > 0 && (
            <nav aria-label="Fil d'Ariane" className="mb-4 text-xs text-gray-mid">
              <ol className="flex items-center gap-2 list-none p-0 m-0">
                <li>
                  <Link to="/" className="text-gray-mid hover:text-gold no-underline transition-colors">
                    {t('nav.home')}
                  </Link>
                </li>
                {breadcrumb.map((item) => (
                  <li key={item.label} className="flex items-center gap-2">
                    <span aria-hidden="true">/</span>
                    {item.to ? (
                      <Link to={item.to} className="text-gray-mid hover:text-gold no-underline transition-colors">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-gold" aria-current="page">
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <h1 className="text-4xl md:text-6xl font-normal text-black leading-[1.05]">{title}</h1>
          {subtitle && <p className="text-gray-mid text-base md:text-lg mt-5 max-w-lg leading-relaxed">{subtitle}</p>}
          {children}
        </div>

        {photo && (
          <ArchFrame className="w-full max-w-sm mx-auto md:mx-0 aspect-[4/3] md:aspect-[4/5] md:w-[340px] lg:w-[380px] md:max-w-none">
            <Photo name={photo} alt={photoAlt || ''} priority sizes="(min-width: 768px) 380px, 100vw" className="w-full h-full object-cover" />
          </ArchFrame>
        )}
      </div>
    </section>
  );
}
