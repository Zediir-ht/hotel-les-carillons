import Photo from '../ui/Photo';
import SectionHeading from '../ui/SectionHeading';
import { ButtonLink } from '../ui/Links';
import { useLang } from '../../i18n/LanguageContext';

export default function TourismeTeaser() {
  const { t } = useLang();
  const sites = t('tourismePage.sites').map((s) => s.name.split(' — ')[0].split(' & ')[0]);
  return (
    <section className="relative flex items-center justify-center text-white text-center py-28 md:py-40 section-border overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Photo name="site-conques" alt="" sizes="100vw" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-deepbrown/80" />
      </div>

      <div className="relative z-10 max-w-3xl px-6">
        <SectionHeading overline={t('tourTeaser.overline')} title={t('tourTeaser.title')} tone="light">
          {t('tourTeaser.desc')}
        </SectionHeading>

        <ul className="flex flex-wrap justify-center gap-2 my-10 list-none p-0">
          {sites.map((site) => (
            <li key={site} className="border border-white/25 text-white/80 text-xs px-4 py-1.5 tracking-wide font-light">
              {site}
            </li>
          ))}
        </ul>

        <ButtonLink to="/tourisme" variant="gold" size="lg">
          {t('tourTeaser.cta')} <span aria-hidden="true">→</span>
        </ButtonLink>
      </div>
    </section>
  );
}
