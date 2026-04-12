import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

export default function MeublesSection() {
  const { t } = useLang();
  return (
    <section className="flex flex-col md:flex-row section-border" style={{ minHeight: '520px' }}>
      {/* Image — left half, full-bleed */}
      <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden img-card">
        <img
          src="/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC/logis-hotel-les-carillons-jardins-et-terrasses-cransac-28636.jpg"
          alt={t('meublesSection.imgAlt')}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Text — right half */}
      <div className="md:w-1/2 bg-white flex flex-col justify-center px-8 py-16 md:px-16 md:py-24">
        <p className="overline text-gold mb-4">
          {t('meublesSection.overline')}
        </p>
        <h2 className="text-3xl md:text-[44px] text-black mb-5 leading-tight">
          {t('meublesSection.title')}
        </h2>
        <div className="w-16 h-px bg-black mb-7" />
        <p className="text-gray-mid leading-relaxed mb-6 text-base max-w-sm">
          {t('meublesSection.p1')}
        </p>
        <ul className="space-y-2.5 mb-9">
          {t('meublesSection.features').map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-gray-mid">
              <span className="w-4 h-px bg-gold block shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          to="/meubles"
          className="self-start inline-flex items-center gap-2 text-black font-normal text-xs tracking-[0.15em] uppercase no-underline hover:text-gold transition-colors border-b border-black pb-0.5"
        >
          {t('meublesSection.cta')} <span className="text-gold">→</span>
        </Link>
      </div>
    </section>
  );
}
