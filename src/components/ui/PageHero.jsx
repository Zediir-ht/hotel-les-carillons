import { Link } from 'react-router-dom';
import { Bell, OrnamentRule } from './Ornaments';
import { useLang } from '../../i18n/LanguageContext';

/**
 * En-tête des pages intérieures, sur fond crème : fil d'Ariane, très grand titre, sous-titre.
 * Pas de photo : seule la page d'accueil a une grande image d'en-tête.
 */
export default function PageHero({ title, subtitle, breadcrumb = [], children }) {
  const { t } = useLang();
  return (
    <section className="bg-offwhite overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-10 md:pb-16">
        {/* Cloche en filigrane : le clin d'œil Belle Époque des Carillons */}
        <Bell className="hidden md:block absolute right-10 top-24 lg:top-28 w-44 lg:w-60 h-auto text-gold opacity-[0.12] pointer-events-none" />
        <div className="hero-reveal relative">
          {breadcrumb.length > 0 && (
            <nav aria-label="Fil d'Ariane" className="mb-4 text-xs text-gray-mid">
              <ol className="flex items-center gap-2 list-none p-0 m-0">
                <li>
                  <Link to="/" className="inline-block py-2 -my-2 text-gray-mid hover:text-gold no-underline transition-colors">
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-black leading-[1.05] break-words">{title}</h1>
          {subtitle && <p className="text-gray-mid text-base md:text-lg mt-6 max-w-xl leading-relaxed">{subtitle}</p>}
          {children}
          <OrnamentRule className="mt-10 md:mt-14 max-w-sm" />
        </div>
      </div>
    </section>
  );
}
