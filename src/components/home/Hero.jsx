import { useLang } from '../../i18n/LanguageContext';
import { SITE } from '../../config/site';
import Photo from '../ui/Photo';
import { ButtonLink } from '../ui/Links';

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="relative h-[88svh] min-h-[560px] max-h-[900px] flex flex-col items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden bg-deepbrown">
        <Photo name="piscine-terrasse" alt={t('hero.imgAlt')} priority sizes="100vw" className="w-full h-full object-cover ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/60" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 max-w-4xl hero-reveal -mt-6">
        <h1
          className="text-[2.1rem] min-[400px]:text-[2.4rem] sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-none mb-6 whitespace-nowrap uppercase tracking-[0.06em] italic text-offwhite"
          style={{ fontFamily: 'var(--font-logo)' }}
        >
          {SITE.shortName}
          <span className="sr-only"> — {SITE.name}, Cransac-les-Thermes</span>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl align-super ml-2 not-italic text-white" style={{ fontFamily: 'sans-serif' }} aria-hidden="true">
            ★★
          </span>
        </h1>

        <div className="w-20 h-px mb-6 bg-gold-light" />

        <p className="text-lg md:text-2xl mb-9 max-w-xl leading-snug text-white">{t('hero.tagline')}</p>

        <ButtonLink to="/hotel" variant="outline-light" size="lg">
          {t('hero.ctaDiscover')}
        </ButtonLink>
      </div>
    </section>
  );
}
