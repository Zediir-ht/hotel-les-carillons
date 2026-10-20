import { useLang } from '../../i18n/LanguageContext';
import { MEUBLES_RATES, CURE_WEEKS } from '../../data/meubles';
import { formatEuro } from '../../lib/format';
import { OrnateFrame, Bell } from '../ui/Ornaments';

const WEEK_OPTIONS = [1, 2, 3, 4];

/**
 * Calculateur « Ma cure en meublé » : étage + nombre de semaines → total.
 * L'état (floor, weeks) est tenu par la page pour pré-remplir la demande de réservation.
 */
export default function CureCalculator({ floor, weeks, onChange, onRequest }) {
  const { t, lang } = useLang();
  const m = (k) => t(`meublesPage.${k}`);
  const floors = m('floors');
  const rate = MEUBLES_RATES.find((r) => r.floor === floor) ?? MEUBLES_RATES[0];
  const weekLabel = (n) => `${n} ${n > 1 ? m('weeksPlural') : m('weekSingular')}`;

  const choiceClass = (active) =>
    `px-4 py-3 border text-left transition-colors cursor-pointer ${active ? 'bg-deepbrown text-offwhite border-deepbrown' : 'bg-white text-black/80 border-gold/30 hover:border-gold'}`;

  return (
    <OrnateFrame className="bg-white shadow-[0_20px_50px_rgba(75,56,46,0.10)] max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 p-8 md:p-12">
        <div className="space-y-8">
          <fieldset>
            <legend className="text-black mb-3">{m('calcFloor')}</legend>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {MEUBLES_RATES.map((r) => (
                <button key={r.floor} type="button" aria-pressed={floor === r.floor} onClick={() => onChange({ floor: r.floor, weeks })} className={choiceClass(floor === r.floor)}>
                  <span className="block">{floors[r.floor]}</span>
                  <span className={`block text-sm ${floor === r.floor ? 'text-gold-light' : 'text-gold'}`}>
                    {formatEuro(r.price, lang)} / {m('calcPerWeek')}
                  </span>
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-black mb-3">{m('calcWeeks')}</legend>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {WEEK_OPTIONS.map((n) => (
                <button key={n} type="button" aria-pressed={weeks === n} onClick={() => onChange({ floor, weeks: n })} className={`${choiceClass(weeks === n)} text-center`}>
                  <span className="block">{weekLabel(n)}</span>
                  {n === CURE_WEEKS && <span className={`block text-xs ${weeks === n ? 'text-gold-light' : 'text-gold'}`}>{m('calcCureTag')}</span>}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="flex flex-col items-center justify-center text-center bg-offwhite p-8 border border-gold/20" aria-live="polite">
          <Bell className="w-5 h-5 text-gold mb-3" />
          <p className="text-gray-mid m-0">{m('calcTotal')}</p>
          <p className="text-black text-sm mt-1 mb-0">
            {floors[rate.floor]} · {weekLabel(weeks)}
          </p>
          <p className="text-5xl text-gold my-4 m-0">{formatEuro(rate.price * weeks, lang)}</p>
          <p className="text-sm text-gray-mid m-0">{m('calcTax')}</p>
          <button type="button" onClick={onRequest} className="mt-6 bg-gold hover:bg-gold-dark text-white px-7 py-3 transition-colors cursor-pointer">
            {m('calcCta')}
          </button>
        </div>
      </div>
    </OrnateFrame>
  );
}
