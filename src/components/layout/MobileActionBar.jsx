import { useLang } from '../../i18n/LanguageContext';
import { SITE, LINKS, bookingUrl } from '../../config/site';

const icons = {
  call: 'M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .95.68l1.5 4.49a1 1 0 0 1-.5 1.21l-2.26 1.13a11.04 11.04 0 0 0 5.52 5.52l1.13-2.26a1 1 0 0 1 1.21-.5l4.49 1.5a1 1 0 0 1 .68.95V19a2 2 0 0 1-2 2h-1C9.72 21 3 14.28 3 6V5z',
  directions: 'M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  book: 'M8 7V3m8 4V3M4 11h16M5 5h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z',
};

function Icon({ d }) {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

/**
 * Barre d'actions fixe en bas de l'écran sur mobile : Appeler · Itinéraire · Réserver.
 * Sur mobile, la plupart des réservations d'hôtel indépendant se font par téléphone.
 */
export default function MobileActionBar() {
  const { t, lang } = useLang();
  const item = 'flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] tracking-[0.15em] uppercase no-underline';

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex bg-white/95 backdrop-blur-md border-t border-black/10 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a href={SITE.phone.href} className={`${item} text-black/75`}>
        <Icon d={icons.call} />
        {t('mobileBar.call')}
      </a>
      <a href={LINKS.directions} target="_blank" rel="noopener noreferrer" className={`${item} text-black/75 border-x border-black/10`}>
        <Icon d={icons.directions} />
        {t('mobileBar.directions')}
      </a>
      <a href={bookingUrl(lang)} target="_blank" rel="noopener noreferrer" className={`${item} bg-gold text-white`}>
        <Icon d={icons.book} />
        {t('mobileBar.book')}
      </a>
    </div>
  );
}
