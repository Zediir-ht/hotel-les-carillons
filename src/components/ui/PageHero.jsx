import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';

/**
 * En-tête des pages intérieures, sur fond crème : fil d'Ariane, très grand titre, sous-titre.
 * Pas de photo : seule la page d'accueil a une grande image d'en-tête.
 */
export default function PageHero({ title, subtitle, breadcrumb = [], children }) {
  const { t } = useLang();
  return (
    <section className="bg-offwhite overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-32 md:pt-44 pb-14 md:pb-24">
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
          <h1 className="text-[2.6rem] min-[400px]:text-5xl sm:text-6xl md:text-8xl lg:text-[8.5rem] font-normal text-black leading-[0.95] break-words">{title}</h1>
          {subtitle && <p className="text-gray-mid text-base md:text-lg mt-8 max-w-xl leading-relaxed">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
