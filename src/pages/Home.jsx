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
import { TextLink } from '../components/ui/Links';
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
        <TextLink to="/hotel#chambres" className="mt-2">
          {t('hotelSection.cta')}
        </TextLink>
      </EditorialCollage>

      <EditorialCollage
        reverse
        bg="bg-offwhite"
        title={t('restaurantSection.title')}
        photos={[
          { name: 'plat-1', alt: t('restaurantSection.imgAlt') },
          { name: 'plat-2', alt: '' },
          { name: 'plat-3', alt: '' },
        ]}
      >
        <p>{t('restaurantSection.p1')}</p>
        <p className="text-black">
          <span className="text-gold" aria-hidden="true">◆</span> {t('restaurantSection.highlight')} · {formatEuro(17, lang)}
        </p>
        <TextLink to="/restaurant#menus" className="mt-2">
          {t('restaurantSection.cta')}
        </TextLink>
      </EditorialCollage>

      <CuristesSection />

      <SplitSection
        photo="cedres-terrasse"
        photoAlt={t('meublesSection.imgAlt')}
        imageSide="right"
        bg="offwhite"
        title={t('meublesSection.title')}
      >
        <p>{t('meublesSection.p1')}</p>
        <ul className="space-y-2.5 list-none p-0">
          {t('meublesSection.features').map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rotate-45 bg-gold block shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <TextLink to="/meubles" className="mt-4">
          {t('meublesSection.cta')}
        </TextLink>
      </SplitSection>

      <TourismeTeaser />
      <GoogleReviewsSection data={reviews} />
    </>
  );
}
