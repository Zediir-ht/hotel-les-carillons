import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Carousel from '../components/Carousel';
import { useLang } from '../i18n/LanguageContext';

const IMG = '/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC';

const themeSlides = {
  plats: [
    { src: `${IMG}/logis-hotel-les-carillons-plats-cransac-013132.jpg`, alt: 'Plat du terroir', caption: 'Cuisine du terroir' },
    { src: `${IMG}/logis-hotel-les-carillons-plats-cransac-260904.jpg`, alt: 'Assiette gastronomique', caption: 'Créations de saison' },
    { src: `${IMG}/logis-hotel-les-carillons-plats-cransac-285852.jpg`, alt: 'Plat maison', caption: 'Fait maison' },
    { src: `${IMG}/logis-hotel-les-carillons-plats-cransac-310975.jpg`, alt: 'Plat signature', caption: 'Produits locaux' },
    { src: `${IMG}/logis-hotel-les-carillons-plats-cransac-492855.jpg`, alt: 'Saveurs aveyronnaises', caption: 'Saveurs aveyronnaises' },
    { src: `${IMG}/logis-hotel-les-carillons-plats-cransac-597498.jpg`, alt: 'Plat gastronomique', caption: 'À la carte' },
    { src: `${IMG}/logis-hotel-les-carillons-plats-cransac-854284.jpg`, alt: 'Notre spécialité', caption: 'Spécialités maison' },
    { src: `${IMG}/logis-hotel-les-carillons-plats-cransac-991669.jpg`, alt: 'Plat du jour', caption: 'Menu du jour' },
  ],
  petitdej: [
    { src: `${IMG}/logis-hotel-les-carillons-petit-dejeuner-cransac-064409.jpg`, alt: 'Petit-déjeuner buffet', caption: 'Buffet du matin' },
    { src: `${IMG}/logis-hotel-les-carillons-petit-dejeuner-cransac-573526.jpg`, alt: 'Petit-déjeuner Les Carillons', caption: 'Produits frais' },
    { src: `${IMG}/logis-hotel-les-carillons-petit-dejeuner-cransac-573526 (1).jpg`, alt: 'Table du petit-déjeuner', caption: 'Chaque matin' },
  ],
  exterieur: [
    { src: `${IMG}/hotel-les-carillons-jardins-et-terrasses-cransac-247020.jpg`, alt: 'Terrasse des Carillons', caption: 'La terrasse' },
    { src: `${IMG}/hotel-les-carillons-jardins-et-terrasses-cransac-247020 (1).jpg`, alt: "Jardins de l'hôtel", caption: 'Les jardins' },
    { src: `${IMG}/logis-hotel-les-carillons-jardins-et-terrasses-cransac-28636.jpg`, alt: 'Parc arboré', caption: 'Parc arboré' },
    { src: `${IMG}/logis-hotel-les-carillons-jardins-et-terrasses-cransac-82034.jpg`, alt: 'Espaces verts', caption: 'Espaces verts' },
    { src: `${IMG}/logis-hotel-les-carillons-jardins-et-autres-exterieurs-crans.jpg`, alt: 'Extérieurs Les Carillons', caption: 'Extérieurs' },
    { src: `${IMG}/logis-hotel-les-carillons-piscine-cransac-444210.jpg`, alt: "Piscine de l'hôtel", caption: 'La piscine' },
  ],
  salle: [
    { src: `${IMG}/hotel-les-carillons-bar-reception-cransac-325163.jpg`, alt: 'Bar réception Les Carillons', caption: 'Le bar' },
    { src: `${IMG}/hotel-les-carillons-bar-reception-cransac-581553.jpg`, alt: "Réception de l'hôtel", caption: 'La réception' },
    { src: `${IMG}/logis-hotel-les-carillons-bar-reception-cransac-031503.jpg`, alt: 'Accueil Les Carillons', caption: 'Notre accueil' },
    { src: `${IMG}/logis-hotel-les-carillons-bar-reception-cransac-520411.jpg`, alt: "Bar de l'hôtel", caption: 'Bar & lounge' },
    { src: `${IMG}/logis-hotel-les-carillons-salle-de-reception-cransac-094667.jpg`, alt: 'Salle de réception', caption: 'Salle de réception' },
    { src: `${IMG}/logis-hotel-les-carillons-salle-de-reception-cransac-571959.jpg`, alt: 'Grande salle', caption: 'Banquets & groupes' },
  ],
};

const themeIds = ['plats', 'petitdej', 'exterieur', 'salle'];

export default function Galerie() {
  const { t } = useLang();
  return (
    <>
      <Seo
        title="Galerie Photos"
        description="Découvrez en images l'Hôtel Restaurant Les Carillons : chambres, restaurant, cuisine, piscine, parc arboré et terrasses à Cransac-les-Thermes."
        path="/galerie"
      />
      <PageHero
        title={t('galeriePage.heroTitle')}
        subtitle={t('galeriePage.heroSub')}
        image={`${IMG}/logis-hotel-les-carillons-facade-cransac-957618.jpg`}
        breadcrumb={[{ label: t('nav.galerie') }]}
      />

      {themeIds.map((id, idx) => (
        <section
          key={id}
          className={`py-24 md:py-32 ${idx % 2 === 0 ? 'bg-beige' : 'bg-white'} section-border`}
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className={`flex flex-col md:flex-row gap-12 md:gap-16 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-3/5">
                <Carousel
                  slides={themeSlides[id]}
                  autoPlay
                  interval={4000 + idx * 300}
                  aspectRatio="4/3"
                />
              </div>
              <div className="w-full md:w-2/5">
                <p className="overline text-gold mb-4">
                  {t(`galeriePage.themes.${id}.label`)}
                </p>
                <h2 className="text-3xl md:text-[44px] text-black mb-5 leading-tight">
                  {t(`galeriePage.themes.${id}.title`)}
                </h2>
                <div className="w-12 h-px bg-black mb-6" />
                <p className="text-gray-mid text-base leading-relaxed font-light">
                  {t(`galeriePage.themes.${id}.desc`)}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="overflow-hidden h-64 md:h-80 relative section-border">
        <img
          src={`${IMG}/logis-hotel-les-carillons-facade-cransac-735654.jpg`}
          alt="Façade de l'hôtel Les Carillons à Cransac-les-Thermes"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <p
            className="text-offwhite text-3xl md:text-5xl tracking-[0.08em] uppercase"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Les Carillons
          </p>
        </div>
      </section>
    </>
  );
}
