import { useLang } from '../../i18n/LanguageContext';
import { ROOMS } from '../../data/rooms';
import { MEUBLES_RATES, CURE_WEEKS } from '../../data/meubles';
import { formatEuro, fill } from '../../lib/format';
import { ButtonLink } from '../ui/Links';
import { Bell } from '../ui/Ornaments';

/** Prix le plus bas pour 3 semaines : hôtel en demi-pension (1 pers.) vs meublé. */
function cheapestPrices() {
  const halfBoard1 = ROOMS.map((r) => Number(r.halfBoard[1])).filter(Boolean);
  return {
    hotel: Math.min(...halfBoard1) * CURE_WEEKS * 7,
    meuble: Math.min(...MEUBLES_RATES.map((r) => r.price)) * CURE_WEEKS,
  };
}

/** Comparatif « Hôtel ou meublé ? » pour aider les curistes à choisir. */
export default function CompareTable({ onRequest }) {
  const { t, lang } = useLang();
  const m = (k) => t(`meublesPage.${k}`);
  const [hotelCol, meubleCol] = m('compareCols');
  const prices = cheapestPrices();
  const vars = { hotel: formatEuro(prices.hotel, lang), meuble: formatEuro(prices.meuble, lang) };

  return (
    <div className="max-w-4xl mx-auto overflow-x-auto">
      <table className="w-full border-collapse bg-white text-left min-w-[560px]">
        <thead>
          <tr>
            <th className="p-5 w-1/4" />
            {[hotelCol, meubleCol].map((col, i) => (
              <th key={col} scope="col" className={`p-5 align-bottom font-normal ${i === 1 ? 'bg-forest text-offwhite' : 'bg-beige text-black'}`}>
                <Bell className={`w-4 h-4 mb-2 ${i === 1 ? 'text-gold-light' : 'text-gold'}`} />
                <span className="block text-lg normal-case tracking-normal" style={{ fontFamily: 'var(--font-body)' }}>
                  {col}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {m('compareRows').map((row) => (
            <tr key={row.label} className="border-t border-gold/20">
              <th scope="row" className="p-5 text-sm text-gray-mid font-normal align-top">
                {row.label}
              </th>
              <td className="p-5 text-black/85 align-top">{fill(row.hotel, vars)}</td>
              <td className="p-5 text-black/85 align-top bg-forest/5">{fill(row.meuble, vars)}</td>
            </tr>
          ))}
          <tr className="border-t border-gold/20">
            <td />
            <td className="p-5">
              <ButtonLink to="/hotel#chambres" variant="outline">
                {m('compareHotelCta')}
              </ButtonLink>
            </td>
            <td className="p-5 bg-forest/5">
              <button type="button" onClick={onRequest} className="bg-gold hover:bg-gold-dark text-white px-7 py-3 transition-colors cursor-pointer">
                {m('compareMeubleCta')}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
