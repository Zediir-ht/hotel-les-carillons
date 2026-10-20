import Seo from '../components/Seo';
import PageHero from '../components/ui/PageHero';
import SplitSection from '../components/ui/SplitSection';
import SectionHeading from '../components/ui/SectionHeading';
import Carousel from '../components/ui/Carousel';
import Reveal from '../components/ui/Reveal';
import { ArrowLink } from '../components/ui/Links';
import { useLang } from '../i18n/LanguageContext';
import { MEUBLES_RATES } from '../data/meubles';
import { formatEuro } from '../lib/format';

const EXT_PHOTOS = ['piscine-terrasse', 'piscine', 'jardin-3', 'jardin-1'];

export default function Meubles() {
  const { t, lang } = useLang();
  const floors = t('meublesPage.floors');
  const extSlides = t('meublesPage.extSlides');

  return (
    <>
      <Seo page="meubles" path="/meubles" />
      <PageHero
        title={t('meublesPage.heroTitle')}
        subtitle={t('meublesPage.heroSub')}
        photo="jardin-3"
        photoAlt={t('meublesPage.detailImgAlt')}
        breadcrumb={[{ label: t('nav.meubles') }]}
      />

      <SplitSection
        photo="piscine-terrasse"
        photoAlt={t('meublesPage.section1ImgAlt')}
        overline={t('meublesPage.section1Sub')}
        title={t('meublesPage.section1Title')}
      >
        <p>{t('meublesPage.section1P1')}</p>
        <p>{t('meublesPage.section1P2')}</p>
        <ArrowLink to="/contact?sujet=meubles" className="mt-2">
          {t('meublesPage.section1Cta')}
        </ArrowLink>
      </SplitSection>

      {/* Tarifs */}
      <section id="tarifs" className="py-20 md:py-28 bg-beige section-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHeading overline={t('meublesPage.tarifSub')} title={t('meublesPage.tarifTitle')} className="mb-12">
            {t('meublesPage.tarifTax')}
          </SectionHeading>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto list-none p-0 m-0">
            {MEUBLES_RATES.map((rate, i) => (
              <Reveal as="li" key={rate.floor} from="fade" delay={i * 100} className="bg-white p-6 text-center border border-black/5">
                <div className="w-8 h-px bg-gold mx-auto mb-4" />
                <p className="text-xs tracking-[0.15em] uppercase text-black mb-3">{floors[rate.floor]}</p>
                <p className="text-3xl text-gold font-light">{formatEuro(rate.price, lang)}</p>
                <p className="text-xs text-gray-mid mt-1">{t('meublesPage.tarifWeek')}</p>
              </Reveal>
            ))}
          </ul>
          <p className="text-center text-gray-mid text-sm mt-8 font-light">{t('meublesPage.tarifNote')}</p>
        </div>
      </section>

      <SplitSection
        imageSide="right"
        bg="white"
        overline={t('meublesPage.detailSub')}
        title={t('meublesPage.detailTitle')}
        photo="jardin-1"
        photoAlt={t('meublesPage.detailImgAlt')}
      >
        <p>{t('meublesPage.detailP')}</p>
        <ul className="space-y-2.5 list-none p-0">
          {t('meublesPage.detailItems').map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm">
              <span className="w-4 h-px bg-gold block shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <ArrowLink to="/contact?sujet=meubles" className="mt-4">
          {t('meublesPage.detailCta')}
        </ArrowLink>
      </SplitSection>

      {/* Cadre */}
      <section className="py-20 md:py-28 bg-deepbrown section-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <Reveal className="w-full md:w-3/5" from="left">
            <Carousel slides={EXT_PHOTOS.map((photo, i) => ({ photo, alt: extSlides[i], caption: extSlides[i] }))} aspectRatio="4/3" />
          </Reveal>
          <Reveal className="w-full md:w-2/5" from="right" delay={150}>
            <SectionHeading overline={t('meublesPage.extSub')} title={t('meublesPage.extTitle')} tone="light" align="left" />
            <p className="text-offwhite/70 leading-relaxed mt-6 mb-3 font-light">{t('meublesPage.extP1')}</p>
            <p className="text-offwhite/70 leading-relaxed font-light">{t('meublesPage.extP2')}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
