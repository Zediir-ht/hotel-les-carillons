import Seo from '../components/Seo';
import PageHero from '../components/ui/PageHero';
import SplitSection from '../components/ui/SplitSection';
import SectionHeading from '../components/ui/SectionHeading';
import Carousel from '../components/ui/Carousel';
import PhotoStrip from '../components/ui/PhotoStrip';
import { ArrowLink } from '../components/ui/Links';
import RoomsSection from '../components/hotel/RoomsSection';
import { useLang } from '../i18n/LanguageContext';

const icon = (children) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 mx-auto" aria-hidden="true">
    {children}
  </svg>
);

// Même ordre que hotelPage.equipItems (i18n)
const EQUIP_ICONS = [
  icon(<><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><circle cx="12" cy="20" r="1" /></>),
  icon(<><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></>),
  icon(<><path d="M2 20c1.5 0 1.5-2 3-2s1.5 2 3 2 1.5-2 3-2 1.5 2 3 2 1.5-2 3-2" /><path d="M2 16c1.5 0 1.5-2 3-2s1.5 2 3 2 1.5-2 3-2 1.5 2 3 2 1.5-2 3-2" /><circle cx="16" cy="6" r="2" /><path d="M16 8v5l-4 3" /></>),
  icon(<><path d="M17 8C8 10 5.9 16.17 3.82 22" /><path d="M9.5 6C11 4.67 12.5 4 12.5 4s1 3-1 6-4.5 5-5.5 5 0-3 0-3 1.5-1 2-4" /></>),
  icon(<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 16V8h3.5a2.5 2.5 0 0 1 0 5H9" /></>),
  icon(<><circle cx="12" cy="4.5" r="1.5" /><path d="M12 7v6h4l2 5" /><path d="M8.5 10.5a5 5 0 1 0 6.9 6.6" /></>),
  icon(<><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" /></>),
  icon(<><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><path d="M6 1v3M10 1v3M14 1v3" /></>),
];

export default function Hotel() {
  const { t } = useLang();
  const strip = t('hotelPage.stripAlts');
  const slides = t('hotelPage.petitDejSlides');

  return (
    <>
      <Seo page="hotel" path="/hotel" />
      <PageHero
        title={t('hotelPage.heroTitle')}
        subtitle={t('hotelPage.heroSub')}
        photo="piscine"
        photoAlt={strip[0]}
        breadcrumb={[{ label: t('nav.hotel') }]}
      />

      <SplitSection photo="bar-2" photoAlt={t('hotelPage.introImgAlt')} overline={t('hotelPage.section1Sub')} title={t('hotelPage.section1Title')}>
        <p>{t('hotelPage.section1P1')}</p>
        <p>{t('hotelPage.section1P2')}</p>
      </SplitSection>

      <RoomsSection />

      {/* Équipements + infos pratiques */}
      <section className="py-20 md:py-28 bg-beige section-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-14 lg:gap-16">
          <div>
            <SectionHeading overline={t('hotelPage.equipSub')} title={t('hotelPage.equipTitle')} align="left" size="md" className="mb-10" />
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 list-none p-0 m-0">
              {t('hotelPage.equipItems').map((label, i) => (
                <li key={label} className="bg-white p-5 text-center border border-black/5">
                  <div className="text-gold mb-3">{EQUIP_ICONS[i]}</div>
                  <span className="text-xs text-black/70 tracking-wide">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="infos-pratiques">
            <SectionHeading overline={t('hotelPage.infosSub')} title={t('hotelPage.infosTitle')} align="left" size="md" className="mb-10" />
            <dl className="bg-white border border-black/5 divide-y divide-black/5 m-0">
              {t('hotelPage.infos').map((info) => (
                <div key={info.label} className="flex justify-between gap-4 px-5 py-3.5 text-sm">
                  <dt className="text-black/55">{info.label}</dt>
                  <dd className="text-black text-right m-0">{info.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <PhotoStrip
        photos={[
          { name: 'piscine-terrasse', alt: strip[0] },
          { name: 'bar-1', alt: strip[1] },
          { name: 'jardin-1', alt: strip[2] },
        ]}
      />

      <SplitSection
        imageSide="right"
        bg="beige"
        overline={t('hotelPage.petitDejSub')}
        title={t('hotelPage.petitDejTitle')}
        media={
          <Carousel
            slides={[
              { photo: 'petit-dejeuner-1', alt: slides[0], caption: slides[0] },
              { photo: 'petit-dejeuner-2', alt: slides[1], caption: slides[1] },
            ]}
            aspectRatio="auto"
            className="absolute inset-0 h-full"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        }
      >
        <p>{t('hotelPage.petitDejP1')}</p>
        <p>{t('hotelPage.petitDejP2')}</p>
        <p className="text-black">{t('rooms.breakfast')}</p>
      </SplitSection>

      <SplitSection
        id="soiree-etape"
        photo="salle-restaurant-1"
        photoAlt={t('hotelPage.etapeImgAlt')}
        overline={t('hotelPage.etapeSub')}
        title={t('hotelPage.etapeTitle')}
      >
        <p>{t('hotelPage.etapeP')}</p>
        <ArrowLink to="/contact?sujet=chambre" className="mt-2">
          {t('hotelPage.etapeCta')}
        </ArrowLink>
      </SplitSection>
    </>
  );
}
