import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { ArrowLink } from '../ui/Links';
import { OrnateFrame } from '../ui/Ornaments';
import { useLang } from '../../i18n/LanguageContext';
import { LINKS } from '../../config/site';
import { MEUBLES_RATES } from '../../data/meubles';
import { formatEuro } from '../../lib/format';

/**
 * Section dédiée aux curistes : la clientèle principale d'un hôtel à Cransac-les-Thermes.
 * Regroupe les trois offres existantes (demi-pension, meublés, restaurant le dimanche).
 */
export default function CuristesSection() {
  const { t, lang } = useLang();
  const cards = t('curistes.cards');
  const minWeek = Math.min(...MEUBLES_RATES.map((r) => r.price));
  const targets = ['/hotel#chambres', '/meubles', '/restaurant#horaires'];

  return (
    <section className="py-20 md:py-28 bg-forest pattern-belle">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading overline={t('curistes.overline')} title={t('curistes.title')} tone="light" className="mb-14">
          {t('curistes.desc')}
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 100} className="flex">
              <OrnateFrame tone="light" className="bg-forest p-9 md:p-10 flex-1 flex flex-col [&>div]:flex [&>div]:flex-col [&>div]:flex-1">
              <p className="text-gold-light text-xs mb-4" aria-hidden="true">
                0{i + 1}
              </p>
              <h3 className="text-lg text-offwhite mb-3 normal-case tracking-normal" style={{ fontFamily: 'var(--font-body)' }}>
                {card.title}
              </h3>
              <p className="text-offwhite/65 text-sm leading-relaxed flex-1">{card.desc}</p>
              {i === 1 && (
                <p className="text-gold-light text-sm mt-4">
                  {t('curistes.weekFrom')} {formatEuro(minWeek, lang)} {t('curistes.week')}
                </p>
              )}
              <ArrowLink to={targets[i]} tone="light" className="mt-6">
                {card.cta}
              </ArrowLink>
              </OrnateFrame>
            </Reveal>
          ))}
        </div>

        <p className="text-center mt-12">
          <ArrowLink href={LINKS.thermes} tone="light">
            {t('curistes.thermesCta')}
          </ArrowLink>
        </p>
      </div>
    </section>
  );
}
