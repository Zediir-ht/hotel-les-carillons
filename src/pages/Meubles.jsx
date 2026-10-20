import Seo from '../components/Seo';
import PageHero from '../components/ui/PageHero';
import SplitSection from '../components/ui/SplitSection';
import SectionHeading from '../components/ui/SectionHeading';
import PhotoGrid from '../components/ui/PhotoGrid';
import { ArrowLink } from '../components/ui/Links';
import { useLang } from '../i18n/LanguageContext';
import { MEUBLES_RATES } from '../data/meubles';
import { formatEuro } from '../lib/format';

// Photos des appartements (même ordre que meublesPage.photos dans i18n)
const APARTMENT_PHOTOS = ['meuble-cuisine-1', 'meuble-chambre-1', 'meuble-sejour-1', 'meuble-salon-2', 'meuble-cuisine-2', 'meuble-chambre-2', 'meuble-salon-3', 'meuble-repas'];

export default function Meubles() {
  const { t, lang } = useLang();
  const floors = t('meublesPage.floors');
  const photoAlts = t('meublesPage.photos');
  const residenceAlts = t('meublesPage.residenceAlts');

  return (
    <>
      <Seo page="meubles" path="/meubles" image="/images/photos/meuble-cuisine-1-1600.webp" />
      <PageHero
        title={t('meublesPage.heroTitle')}
        subtitle={t('meublesPage.heroSub')}
        photo="meuble-cuisine-1"
        photoAlt={t('meublesPage.heroImgAlt')}
        breadcrumb={[{ label: t('nav.meubles') }]}
      />

      <SplitSection photo="cedres-facade" photoAlt={residenceAlts[0]} overline={t('meublesPage.section1Sub')} title={t('meublesPage.section1Title')}>
        <p>{t('meublesPage.section1P1')}</p>
        <p>{t('meublesPage.section1P2')}</p>
        <ArrowLink to="/contact?sujet=meubles" className="mt-2">
          {t('meublesPage.section1Cta')}
        </ArrowLink>
      </SplitSection>

      {/* Les appartements en images */}
      <section id="appartements" className="py-20 md:py-28 bg-offwhite">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHeading overline={t('meublesPage.apartmentsSub')} title={t('meublesPage.apartmentsTitle')} className="mb-12">
            {t('meublesPage.apartmentsDesc')}
          </SectionHeading>
          <PhotoGrid items={APARTMENT_PHOTOS.map((photo, i) => ({ photo, alt: photoAlts[i] }))} />
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="py-20 md:py-28 bg-beige">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHeading overline={t('meublesPage.tarifSub')} title={t('meublesPage.tarifTitle')} className="mb-12">
            {t('meublesPage.tarifTax')}
          </SectionHeading>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto list-none p-0 m-0">
            {MEUBLES_RATES.map((rate) => (
              <li key={rate.floor} className="bg-white p-7 text-center">
                <p className="text-black mb-3">{floors[rate.floor]}</p>
                <p className="text-4xl text-gold">{formatEuro(rate.price, lang)}</p>
                <p className="text-sm text-gray-mid mt-1">{t('meublesPage.tarifWeek')}</p>
              </li>
            ))}
          </ul>
          <p className="text-center text-gray-mid mt-8">{t('meublesPage.tarifNote')}</p>
        </div>
      </section>

      <SplitSection
        imageSide="right"
        bg="white"
        overline={t('meublesPage.detailSub')}
        title={t('meublesPage.detailTitle')}
        photo="meuble-chambre-1"
        photoAlt={t('meublesPage.detailImgAlt')}
      >
        <p>{t('meublesPage.detailP')}</p>
        <ul className="space-y-2.5 list-none p-0">
          {t('meublesPage.detailItems').map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="w-4 h-px bg-gold block shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <ArrowLink to="/contact?sujet=meubles" className="mt-4">
          {t('meublesPage.detailCta')}
        </ArrowLink>
      </SplitSection>

      {/* Cadre : terrasse, jardin, piscine */}
      <section className="py-20 md:py-28 bg-forest pattern-belle">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHeading overline={t('meublesPage.extSub')} title={t('meublesPage.extTitle')} tone="light" className="mb-12">
            {t('meublesPage.extP1')} {t('meublesPage.extP2')}
          </SectionHeading>
          <PhotoGrid
            columns="columns-1 sm:columns-2 lg:columns-4"
            items={[
              { photo: 'cedres-terrasse', alt: residenceAlts[1] },
              { photo: 'piscine-fleurs', alt: t('meublesPage.extSlides')[1] },
              { photo: 'cedres-jardin', alt: residenceAlts[2] },
              { photo: 'piscine-terrasse', alt: t('meublesPage.extSlides')[0] },
            ]}
          />
        </div>
      </section>
    </>
  );
}
