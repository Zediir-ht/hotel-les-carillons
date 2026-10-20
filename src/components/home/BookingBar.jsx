import { useState } from 'react';
import { useLang } from '../../i18n/LanguageContext';
import { SITE, bookingUrl } from '../../config/site';
import { Bell } from '../ui/Ornaments';

const NIGHT_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 10, 14, 18, 21]; // 18 / 21 nuits : durée d'une cure thermale

function isoDate(date) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

/**
 * Barre de réservation : date d'arrivée + nuits → ouvre le moteur Logis déjà pré-rempli
 * avec les chambres disponibles et leurs prix.
 */
export default function BookingBar() {
  const { t, lang } = useLang();
  const [arrival, setArrival] = useState('');
  const [nights, setNights] = useState(1);
  const today = isoDate(new Date());

  const submit = (e) => {
    e.preventDefault();
    window.open(bookingUrl(lang, { arrival: arrival || today, nights }), '_blank', 'noopener');
  };

  const fieldClass = 'w-full bg-transparent text-base text-black border-0 border-b border-black/20 focus:border-gold focus:outline-none py-2 cursor-pointer';

  return (
    <section className="relative z-20 px-4 sm:px-6 -mt-16 md:-mt-14">
      <form
        onSubmit={submit}
        className="relative max-w-4xl mx-auto bg-white shadow-[0_20px_50px_rgba(43,32,25,0.18)] p-6 md:p-8 pt-9 md:pt-10 grid grid-cols-2 md:grid-cols-[1.3fr_1fr_auto] gap-x-5 gap-y-4 items-end"
        aria-label={t('booking.title')}
      >
        <span className="pointer-events-none absolute inset-1.5 border border-gold/30" aria-hidden="true" />
        <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border border-gold/40 flex items-center justify-center text-gold" aria-hidden="true">
          <Bell className="w-5 h-5" />
        </span>
        <label className="col-span-1 block">
          <span className="block text-sm text-gray-mid mb-1">{t('booking.arrival')}</span>
          <input type="date" min={today} value={arrival} onChange={(e) => setArrival(e.target.value)} className={fieldClass} required={false} />
        </label>
        <label className="col-span-1 block">
          <span className="block text-sm text-gray-mid mb-1">{t('booking.nights')}</span>
          <select value={nights} onChange={(e) => setNights(+e.target.value)} className={fieldClass}>
            {NIGHT_OPTIONS.map((n) => (
              <option key={n} value={n}>
                {n} {n > 1 ? t('booking.nightsPlural') : t('booking.nightSingular')}
                {n === 21 ? ` · ${t('booking.cure')}` : ''}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className="col-span-2 md:col-span-1 bg-gold hover:bg-gold-dark text-white text-base px-7 py-3.5 transition-colors cursor-pointer whitespace-nowrap">
          {t('booking.submit')}
        </button>
        <p className="col-span-2 md:col-span-3 text-sm text-gray-mid -mt-1">
          {t('booking.orCall')}{' '}
          <a href={SITE.phone.href} className="text-gold hover:text-gold-dark no-underline whitespace-nowrap">
            {SITE.phone.display}
          </a>
        </p>
      </form>
    </section>
  );
}
