import Seo from '../components/Seo';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import IntroSection from '../components/home/IntroSection';
import ServicesGrid from '../components/home/ServicesGrid';
import CuristesSection from '../components/home/CuristesSection';
import TourismeTeaser from '../components/home/TourismeTeaser';
import GoogleReviewsSection from '../components/home/GoogleReviewsSection';
import SplitSection from '../components/ui/SplitSection';
import { ArrowLink } from '../components/ui/Links';
import { useLang } from '../i18n/LanguageContext';
import { useGoogleReviews } from '../lib/useGoogleReviews';
import { ROOMS } from '../data/rooms';
import { formatEuro } from '../lib/format';

export default function Home() {
  const { t, lang } = useLang();
  const reviews = useGoogleReviews(lang);
  const minRoomPrice = Math.min(...ROOMS.map((r) => r.price.from));

  return (
    <>
      <Seo page="home" path="/" />
      <Hero />
      <TrustBar rating={reviews?.rating} />
      <IntroSection />
      <ServicesGrid />

      <SplitSection
        photo="chambre-double"
        photoAlt={t('hotelSection.imgAlt')}
        overline={t('hotelSection.overline')}
        title={t('hotelSection.title')}
      >
        <p>{t('hotelSection.p1')}</p>
        <p>{t('hotelSection.p2')}</p>
        <p className="text-black">
          {t('hotelSection.fromPrice')} <span className="text-gold text-2xl font-light">{formatEuro(minRoomPrice, lang)}</span>
        </p>
        <ArrowLink to="/hotel#chambres" className="mt-2">
          {t('hotelSection.cta')}
        </ArrowLink>
      </SplitSection>

      <SplitSection
        photo="plat-7"
        photoAlt={t('restaurantSection.imgAlt')}
        imageSide="right"
        bg="beige"
        overline={t('restaurantSection.overline')}
        title={t('restaurantSection.title')}
      >
        <p>{t('restaurantSection.p1')}</p>
        <p>{t('restaurantSection.p2')}</p>
        <p className="text-black text-sm uppercase tracking-[0.12em]">
          <span className="text-gold">◆</span> {t('restaurantSection.highlight')} — {formatEuro(17, lang)}
        </p>
        <ArrowLink to="/restaurant#menus" className="mt-2">
          {t('restaurantSection.cta')}
        </ArrowLink>
      </SplitSection>

      <CuristesSection />

      <SplitSection
        photo="jardin-3"
        photoAlt={t('meublesSection.imgAlt')}
        overline={t('meublesSection.overline')}
        title={t('meublesSection.title')}
      >
        <p>{t('meublesSection.p1')}</p>
        <ul className="space-y-2.5 list-none p-0">
          {t('meublesSection.features').map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm">
              <span className="w-4 h-px bg-gold block shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <ArrowLink to="/meubles" className="mt-4">
          {t('meublesSection.cta')}
        </ArrowLink>
      </SplitSection>

      <TourismeTeaser />
      <GoogleReviewsSection data={reviews} />
    </>
  );
}
