import Reveal from './Reveal';
import { useLang } from '../i18n/LanguageContext';

export default function IntroSection() {
  const { t } = useLang();
  return (
    <section className="py-24 md:py-32 bg-offwhite section-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <Reveal from="left">
          <div>
            <p className="overline text-gold mb-5">
              {t('intro.overline')}
            </p>
            <h2 className="text-3xl md:text-[44px] text-black leading-tight mb-5">
              {t('intro.title').split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
            </h2>
            <div className="w-16 h-px bg-black mb-7" />
            <p className="text-gray-mid leading-relaxed mb-4 text-base">
              {t('intro.p1')}
            </p>
            <p className="text-gray-mid leading-relaxed mb-8 text-base">
              {t('intro.p2')}
            </p>
            <a
              href="https://www.logishotels.com/fr/hotel/logis-hotel-les-carillons-4588"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black font-normal text-xs tracking-[0.15em] uppercase no-underline hover:text-gold transition-colors border-b border-black pb-0.5"
            >
              {t('intro.cta')} <span className="text-gold">→</span>
            </a>
          </div>
          </Reveal>

          {/* Photo */}
          <Reveal from="right" delay={150}>
          <div className="relative overflow-hidden img-card">
            <img
              src="/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC/logis-hotel-les-carillons-facade-cransac-735654.jpg"
              alt={t('intro.imgAlt')}
              className="w-full object-cover"
              loading="lazy"
              style={{ aspectRatio: '0.85' }}
            />
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
