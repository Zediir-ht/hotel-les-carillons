import { useState } from 'react';
import { useLang } from '../../i18n/LanguageContext';
import { SITE } from '../../config/site';
import { THURSDAY_SPECIALS } from '../../data/menus';
import { restaurantToday } from '../../lib/restaurantToday';
import { Bell } from '../ui/Ornaments';

/**
 * Bandeau « Aujourd'hui » : ouverture du jour + jeudi à thème.
 * Calculé dans le navigateur uniquement (le HTML pré-rendu ne doit pas figer une date).
 */
export default function TodayBanner() {
  const { t, pick } = useLang();
  const [today] = useState(() => (typeof window === 'undefined' ? null : restaurantToday(new Date())));
  if (!today) return null;

  const thursday = today.thursday && THURSDAY_SPECIALS[today.thursday.index];
  // « 2e jeudi — Poule farcie » → « Poule farcie »
  const thursdayDish = thursday ? pick(thursday.name).split(' — ').pop() : null;

  return (
    <div className="bg-white border-b border-gold/25" role="status">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
        <p className="flex items-start gap-3 flex-1 text-black m-0">
          <Bell className="w-5 h-5 text-gold shrink-0 mt-0.5" />
          <span>
            <strong className="font-normal text-gold">{t('restaurantPage.today.label')} · </strong>
            {t(`restaurantPage.today.${today.status}`)}
            {thursdayDish && (
              <span className="block md:inline text-gray-mid md:ml-2">
                {today.thursday.when === 'today' ? t('restaurantPage.today.thursdayToday') : t('restaurantPage.today.thursdayNext')} {thursdayDish.toLowerCase()}
              </span>
            )}
          </span>
        </p>
        {today.status !== 'sunday' && (
          <a href={SITE.phone.href} className="self-start md:self-auto text-gold hover:text-gold-dark no-underline whitespace-nowrap">
            {t('restaurantPage.today.call')} · {SITE.phone.display}
          </a>
        )}
      </div>
    </div>
  );
}
