import { useLang } from '../../i18n/LanguageContext';
import { SITE } from '../../config/site';
import { MEUBLES_RATES, MEUBLES_INFO, CURE_WEEKS } from '../../data/meubles';
import { formatEuro, fill } from '../../lib/format';

/**
 * FAQ des meublés en accordéon (<details>) + balisage FAQPage pour Google.
 * Questions confirmées (i18n meublesPage.faq) + questions dont la réponse vient de MEUBLES_INFO,
 * ajoutées automatiquement dès que l'hôtel a répondu.
 */
export default function MeublesFaq() {
  const { t, pick, lang } = useLang();
  const m = (k) => t(`meublesPage.${k}`);
  const prices = MEUBLES_RATES.map((r) => r.price * CURE_WEEKS);
  const vars = { min: formatEuro(Math.min(...prices), lang), max: formatEuro(Math.max(...prices), lang), phone: SITE.phone.display };

  const items = [
    ...m('faq').map((item) => ({ q: item.q, a: fill(item.a, vars) })),
    ...Object.entries(m('faqFromInfo'))
      .filter(([key]) => MEUBLES_INFO[key])
      .map(([key, q]) => ({ q, a: pick(MEUBLES_INFO[key]) })),
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="divide-y divide-gold/25 border-y border-gold/25">
        {items.map((item) => (
          <details key={item.q} className="group py-1">
            <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer list-none text-black text-lg [&::-webkit-details-marker]:hidden">
              {item.q}
              <span className="text-gold text-2xl leading-none transition-transform group-open:rotate-45 shrink-0" aria-hidden="true">
                +
              </span>
            </summary>
            <p className="text-gray-mid pb-5 pr-10 m-0">{item.a}</p>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
