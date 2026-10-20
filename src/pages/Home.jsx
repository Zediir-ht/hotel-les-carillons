import Seo from '../components/Seo';
import Hero from '../components/home/Hero';
import BookingBar from '../components/home/BookingBar';
import TrustBar from '../components/home/TrustBar';
import IntroSection from '../components/home/IntroSection';
import ServicesGrid from '../components/home/ServicesGrid';
import CuristesSection from '../components/home/CuristesSection';
import TourismeTeaser from '../components/home/TourismeTeaser';
import GoogleReviewsSection from '../components/home/GoogleReviewsSection';
import SplitSection from '../components/ui/SplitSection';
import EditorialCollage from '../components/ui/EditorialCollage';
import FeatureBanner from '../components/ui/FeatureBanner';
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
      <BookingBar />
      <TrustBar rating={reviews?.rating} />
      <IntroSection />
      <ServicesGrid />

      <EditorialCollage
        overline={t('hotelSection.overline')}
        title={t('hotelSection.title')}
        photos={[
          { name: 'chambre-double', alt: t('hotelSection.imgAlt') },
          { name: 'suite-familiale-2', alt: '' },
          { name: 'piscine-fleurs', alt: '' },
        ]}
      >
        <p>{t('hotelSection.p1')}</p>
        <p>{t('hotelSection.p2')}</p>
        <p className="text-black">
          {t('hotelSection.fromPrice')} <span className="text-gold text-3xl">{formatEuro(minRoomPrice, lang)}</span>
        </p>
        <ArrowLink to="/hotel#chambres" className="mt-2">
          {t('hotelSection.cta')}
        </ArrowLink>
      </EditorialCollage>

      <FeatureBanner
        photo="plat-7"
        photoAlt={t('restaurantSection.imgAlt')}
        side="right"
        overline={t('restaurantSection.overline')}
        title={t('restaurantSection.title')}
      >
        <p>{t('restaurantSection.p1')}</p>
        <p className="text-black">
          <span className="text-gold" aria-hidden="true">◆</span> {t('restaurantSection.highlight')} — {formatEuro(17, lang)}
        </p>
        <ArrowLink to="/restaurant#menus" className="mt-2">
          {t('restaurantSection.cta')}
        </ArrowLink>
      </FeatureBanner>

      <CuristesSection />

      <SplitSection
        photo="cedres-terrasse"
        photoAlt={t('meublesSection.imgAlt')}
        imageSide="right"
        bg="offwhite"
        overline={t('meublesSection.overline')}
        title={t('meublesSection.title')}
      >
        <p>{t('meublesSection.p1')}</p>
        <ul className="space-y-2.5 list-none p-0">
          {t('meublesSection.features').map((item) => (
            <li key={item} className="flex items-center gap-3">
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
