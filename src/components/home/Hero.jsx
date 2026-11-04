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
        {/* Voile : uniforme, plus sombre en haut (barre de navigation) et au centre (titre) */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/75 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.45),transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 max-w-4xl hero-reveal text-on-photo -mt-6">
        <h1
          className="text-[1.85rem] min-[360px]:text-[2.1rem] min-[400px]:text-[2.4rem] sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-none mb-6 whitespace-nowrap uppercase tracking-[0.06em] italic text-offwhite"
          style={{ fontFamily: 'var(--font-logo)' }}
        >
          {SITE.shortName}
          <span className="sr-only">, {SITE.name}, Cransac-les-Thermes</span>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl align-super ml-2 not-italic text-white" style={{ fontFamily: 'sans-serif' }} aria-hidden="true">
            ★★
          </span>
        </h1>

        <p className="text-lg md:text-2xl font-medium mt-6 mb-9 max-w-xl leading-snug text-white">{t('hero.tagline')}</p>

        <ButtonLink to="/hotel" variant="outline-light" size="lg">
          {t('hero.ctaDiscover')}
        </ButtonLink>
      </div>
    </section>
  );
}
