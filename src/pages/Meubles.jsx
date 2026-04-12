import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import SectionBlock from '../components/SectionBlock';
import Carousel from '../components/Carousel';
import Reveal from '../components/Reveal';
import { useLang } from '../i18n/LanguageContext';

const IMG = '/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC';

const extSlides = [
  { src: `${IMG}/hotel-les-carillons-jardins-et-terrasses-cransac-247020.jpg`,   alt: 'Terrasse et jardins Les Carillons', caption: 'La terrasse' },
  { src: `${IMG}/hotel-les-carillons-jardins-et-terrasses-cransac-247020 (1).jpg`, alt: 'Jardins de la résidence', caption: 'Les jardins' },
  { src: `${IMG}/logis-hotel-les-carillons-jardins-et-terrasses-cransac-82034.jpg`, alt: 'Parc arboré', caption: 'Parc arboré' },
  { src: `${IMG}/logis-hotel-les-carillons-jardins-et-terrasses-cransac-28636.jpg`, alt: 'Espaces verts', caption: 'Espaces verts' },
  { src: `${IMG}/logis-hotel-les-carillons-piscine-cransac-444210.jpg`, alt: 'Piscine extérieure', caption: 'La piscine' },
];

export default function Meubles() {
  const { t } = useLang();
  const floors = t('meublesPage.floors');
  const prices = ['195 €', '190 €', '185 €'];
  const detailItems = t('meublesPage.detailItems');
  return (
    <>
      <Seo
        title="Meublés Les Cèdres — 11 Appartements"
        description="Location meublée Les Cèdres à Cransac-les-Thermes. 11 appartements équipés avec piscine et parc arboré. Idéal curistes et séjours longue durée."
        path="/meubles"
      />
      <PageHero
        title={t('meublesPage.heroTitle')}
        subtitle={t('meublesPage.heroSub')}
        image={`${IMG}/logis-hotel-les-carillons-jardins-et-autres-exterieurs-crans.jpg`}
        breadcrumb={[{ label: t('nav.meubles') }]}
      />

      <SectionBlock
        title={t('meublesPage.section1Title')}
        subtitle={t('meublesPage.section1Sub')}
        image={`${IMG}/logis-hotel-les-carillons-jardins-et-terrasses-cransac-28636.jpg`}
        imageAlt="Parc et jardins de la résidence Les Cèdres"
        imageLeft
      >
        <p>{t('meublesPage.section1P1')}</p>
        <p>
          {t('meublesPage.section1P2').split('« 3 Cèdres »')[0]}
          <strong className="text-black font-normal">« 3 Cèdres »</strong>
          {t('meublesPage.section1P2').split('« 3 Cèdres »')[1] || t('meublesPage.section1P2').split('"3 Cedars"')[1] || ''}
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 mt-2 text-black font-normal text-xs tracking-[0.15em] uppercase no-underline hover:text-gold transition-colors border-b border-black pb-0.5"
        >
          {t('meublesPage.section1Cta')} <span className="text-gold">→</span>
        </Link>
      </SectionBlock>

      {/* Carrousel extérieurs */}
      <section className="py-24 md:py-32 bg-deepbrown section-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <Reveal className="w-full md:w-3/5" from="left">
              <Carousel
                slides={extSlides}
                autoPlay
                interval={4600}
                aspectRatio="4/3"
              />
            </Reveal>
            <Reveal className="w-full md:w-2/5" from="right" delay={150}>
              <p className="overline text-gold mb-4">{t('meublesPage.extSub')}</p>
              <h2
                className="text-3xl md:text-[44px] text-offwhite mb-5 leading-tight"
              >
                {t('meublesPage.extTitle')}
              </h2>
              <div className="w-12 h-px bg-gold mb-6" />
              <p className="text-offwhite/60 text-base leading-relaxed mb-3 font-light">
                {t('meublesPage.extP1')}
              </p>
              <p className="text-offwhite/60 text-base leading-relaxed font-light">
                {t('meublesPage.extP2')}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 md:py-28 bg-beige section-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <p className="overline text-gold mb-4">{t('meublesPage.tarifSub')}</p>
              <h2 className="text-3xl text-black mb-5">{t('meublesPage.tarifTitle')} <span className="text-lg font-light" style={{ fontFamily: 'var(--font-body)', textTransform: 'none' }}>({t('meublesPage.tarifWeek')})</span></h2>
              <div className="w-12 h-px bg-black mx-auto mb-3" />
              <p className="text-gray-mid text-xs tracking-wide font-light">* Taxe de séjour en sus</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
            {floors.map((label, i) => (
              <Reveal key={label} from="fade" delay={i * 100}>
                <div className="bg-white p-6 text-center border border-black/5">
                  <div className="w-8 h-px bg-gold mx-auto mb-4" />
                  <p className="text-xs font-normal tracking-[0.15em] uppercase text-black mb-3" style={{ fontFamily: 'var(--font-body)' }}>{label}</p>
                  <p className="text-2xl text-gold font-light">{prices[i]}</p>
                  <p className="text-xs text-gray-400 mt-1">/ {t('meublesPage.tarifWeek')}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-center text-gray-mid text-xs mt-8 font-light">
            {t('meublesPage.tarifNote')}
          </p>
        </div>
      </section>

      <SectionBlock
        title={t('meublesPage.detailTitle')}
        subtitle={t('meublesPage.detailSub')}
        image={`${IMG}/logis-hotel-les-carillons-facade-cransac-957618.jpg`}
        imageAlt="Façade de la résidence Les Cèdres"
      >
        <p>{t('meublesPage.detailP')}</p>
        <ul className="space-y-2.5 mt-2">
          {detailItems.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-gray-500">
              <span className="w-4 h-px bg-gold block shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 mt-4 text-black font-normal text-xs tracking-[0.15em] uppercase no-underline hover:text-gold transition-colors border-b border-black pb-0.5"
        >
          {t('meublesPage.detailCta')} <span className="text-gold">→</span>
        </Link>
      </SectionBlock>
    </>
  );
}
