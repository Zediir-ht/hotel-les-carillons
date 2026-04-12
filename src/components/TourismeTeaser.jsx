import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

const sites = [
  'Conques', 'Belcastel', 'Rodez', 'Millau',
  'Figeac', 'Decazeville', 'Villefranche-de-Rouergue', 'Najac',
];

export default function TourismeTeaser() {
  const { t } = useLang();
  return (
    <section className="relative flex items-center justify-center text-white text-center py-32 md:py-40 section-border">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC/logis-hotel-les-carillons-jardins-et-autres-exterieurs-crans.jpg"
          alt={t('tourTeaser.imgAlt')}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(75,56,46,0.75)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <p className="overline text-gold mb-6">
          {t('tourTeaser.overline')}
        </p>
        <h2 className="text-3xl md:text-5xl text-white mb-5 leading-tight">
          {t('tourTeaser.title').split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mb-7" />
        <p className="text-white/70 max-w-xl mx-auto mb-10 leading-relaxed text-base font-light">
          {t('tourTeaser.desc')}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {sites.map((site) => (
            <span
              key={site}
              className="border border-white/20 text-white/70 text-xs px-4 py-1.5 tracking-wide font-light"
            >
              {site}
            </span>
          ))}
        </div>

        <Link
          to="/tourisme"
          className="inline-flex items-center gap-2 border border-gold/60 text-gold font-normal text-xs tracking-[0.2em] uppercase no-underline hover:bg-gold hover:text-white transition-colors px-10 py-4"
        >
          {t('tourTeaser.cta')} <span>→</span>
        </Link>
      </div>
    </section>
  );
}
