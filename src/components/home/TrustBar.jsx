import { useLang } from '../../i18n/LanguageContext';
import { SITE, LINKS, logisPageUrl } from '../../config/site';

/** Bandeau de réassurance sous le hero : label, note Google, chambres, équipements. */
export default function TrustBar({ rating }) {
  const { t, lang } = useLang();
  const value = (rating ?? SITE.googleRating.value).toLocaleString(lang === 'en' ? 'en-GB' : 'fr-FR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const items = [
    { key: 'logis', content: t('trust.logis'), href: logisPageUrl(lang) },
    {
      key: 'google',
      content: (
        <>
          <span className="text-[#d8a93b]" aria-hidden="true">★</span> {value}/5 {t('trust.google')}
        </>
      ),
      href: LINKS.googleMaps,
    },
    { key: 'rooms', content: t('trust.rooms') },
    { key: 'parking', content: t('trust.parking') },
  ];

  return (
    <section className="bg-white border-b border-black/10">
      <ul className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 list-none m-0 p-0">
        {items.map((item, i) => {
          const inner = <span className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-black/70">{item.content}</span>;
          return (
            <li
              key={item.key}
              className={`flex items-center justify-center text-center py-5 px-2 ${i % 2 === 1 ? 'border-l' : ''} ${i >= 2 ? 'border-t md:border-t-0' : ''} ${i === 2 ? 'md:border-l' : ''} border-black/10`}
            >
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
