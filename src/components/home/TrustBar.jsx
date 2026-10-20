import { useLang } from '../../i18n/LanguageContext';
import { SITE, LINKS, logisPageUrl } from '../../config/site';

const icons = {
  logis: 'M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z',
  google: 'M21 12a9 9 0 1 1-3-6.7M21 4v5h-5',
  rooms: 'M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18h18M3 18v2m18-2v2M7 10V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3',
  parking: 'M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm5 13V8h3a2.5 2.5 0 0 1 0 5h-3',
};

/** Bandeau de réassurance : label, note Google, chambres, équipements. */
export default function TrustBar({ rating }) {
  const { t, lang } = useLang();
  const value = (rating ?? SITE.googleRating.value).toLocaleString(lang === 'en' ? 'en-GB' : 'fr-FR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const items = [
    { key: 'logis', content: t('trust.logis'), href: logisPageUrl(lang) },
    { key: 'google', content: `${value}/5 ${t('trust.google')}`, href: LINKS.googleMaps },
    { key: 'rooms', content: t('trust.rooms') },
    { key: 'parking', content: t('trust.parking') },
  ];

  return (
    <section className="bg-offwhite pt-12 pb-4 md:pt-14">
      <ul className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 list-none m-0">
        {items.map((item) => {
          const inner = (
            <span className="flex items-center gap-3 text-sm text-black/80">
              <svg className="w-6 h-6 text-gold shrink-0" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d={icons[item.key]} />
              </svg>
              {item.content}
            </span>
          );
          return (
            <li key={item.key} className="flex justify-center md:justify-start">
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-70 transition-opacity">
                  {inner}
                </a>
              ) : (
                inner
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
