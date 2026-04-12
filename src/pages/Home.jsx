import Seo from '../components/Seo';
import Hero from '../components/Hero';
import GoogleReviewsSection from '../components/GoogleReviewsSection';
import IntroSection from '../components/IntroSection';
import ServicesGrid from '../components/ServicesGrid';
import HotelSection from '../components/HotelSection';
import RestaurantSection from '../components/RestaurantSection';
import MeublesSection from '../components/MeublesSection';
import TourismeTeaser from '../components/TourismeTeaser';
import { useLang } from '../i18n/LanguageContext';

const googleMapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Hotel+Restaurant+Les+Carillons+Cransac-les-Thermes';

export default function Home() {
  const { t } = useLang();
  return (
    <>
      <Seo
        title="Hôtel Restaurant à Cransac-les-Thermes"
        description="Hôtel Restaurant Les Carillons à Cransac-les-Thermes, Aveyron. 17 chambres, restaurant du terroir, piscine, parc arboré. Logis Hôtels ★★."
        path="/"
      />
      <Hero />
      <section className="bg-offwhite py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-center">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-black/10 bg-white/80 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-black/70 no-underline transition-colors hover:bg-white"
          >
            <span>{t('googleWidget.label')}</span>
            <span className="text-[#d8a93b]" aria-label="4,4 sur 5">★★★★☆</span>
            <span className="text-black/60">4,4/5</span>
          </a>
        </div>
      </section>
      <IntroSection />
      <ServicesGrid />
      <HotelSection />
      <RestaurantSection />
      <MeublesSection />
      <TourismeTeaser />
      <GoogleReviewsSection />
    </>
  );
}
