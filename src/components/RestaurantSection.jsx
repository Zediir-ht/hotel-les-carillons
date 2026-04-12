import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

export default function RestaurantSection() {
  const { t } = useLang();
  return (
    <section className="flex flex-col md:flex-row-reverse section-border" style={{ minHeight: '520px' }}>
      {/* Image — right half, full-bleed */}
      <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden order-1 md:order-none img-card">
        <img
          src="/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC/logis-hotel-les-carillons-plats-cransac-285852.jpg"
          alt={t('restaurantSection.imgAlt')}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Text — left half */}
      <div className="md:w-1/2 bg-beige flex flex-col justify-center px-8 py-16 md:px-16 md:py-24 order-2 md:order-none">
        <p className="overline text-gold mb-4">
          {t('restaurantSection.overline')}
        </p>
        <h2 className="text-3xl md:text-[44px] text-black mb-5 leading-tight">
          {t('restaurantSection.title')}
        </h2>
        <div className="w-16 h-px bg-black mb-7" />
        <p className="text-gray-mid leading-relaxed mb-4 text-base max-w-sm">
          {t('restaurantSection.p1')}
        </p>
        <p className="text-gray-mid leading-relaxed mb-9 text-base max-w-sm">
          {t('restaurantSection.p2')}
        </p>
        <Link
          to="/restaurant"
          className="self-start inline-flex items-center gap-2 text-black font-normal text-xs tracking-[0.15em] uppercase no-underline hover:text-gold transition-colors border-b border-black pb-0.5"
        >
          {t('restaurantSection.cta')} <span className="text-gold">→</span>
        </Link>
      </div>
    </section>
  );
}
