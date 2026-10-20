import { useLang } from '../../i18n/LanguageContext';
import { SITE, bookingUrl } from '../../config/site';
import Photo from '../ui/Photo';
import { ButtonLink } from '../ui/Links';

export default function Hero() {
  const { t, lang } = useLang();
  return (
    <section className="relative h-svh min-h-[600px] flex flex-col items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden bg-deepbrown">
        <Photo name="piscine-terrasse" alt={t('hero.imgAlt')} priority sizes="100vw" className="w-full h-full object-cover ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/70" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 max-w-4xl hero-reveal">
        <p className="text-xs sm:text-sm tracking-[0.3em] uppercase mb-8 md:mb-12 font-light text-white/80">{t('hero.overline')}</p>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] leading-none mb-6 md:mb-8 uppercase tracking-[0.06em] italic text-offwhite"
          style={{ fontFamily: 'var(--font-logo)' }}
        >
          {SITE.shortName}
          <span className="sr-only"> — {SITE.name}, Cransac-les-Thermes</span>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl align-super ml-2 not-italic text-white" style={{ fontFamily: 'sans-serif' }} aria-hidden="true">
            ★★
          </span>
        </h1>

        <div className="w-20 h-px mb-8 bg-gold" />

        <p className="text-sm sm:text-base md:text-lg mb-10 max-w-xs sm:max-w-xl leading-relaxed font-light tracking-wide text-white/85">{t('hero.tagline')}</p>

        <div className="flex flex-col sm:flex-row gap-3">
          <ButtonLink href={bookingUrl(lang)} variant="gold" size="lg">
            {t('hero.ctaBook')}
          </ButtonLink>
          <ButtonLink to="/hotel" variant="outline-light" size="lg">
            {t('hero.ctaDiscover')}
          </ButtonLink>
        </div>
      </div>

      <a
        href="#bienvenue"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 animate-bounce text-white/50 hover:text-white"
        aria-label={t('hero.scroll')}
      >
        <span className="w-px h-8 bg-current" />
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
