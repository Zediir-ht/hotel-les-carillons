import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import SectionBlock from '../components/SectionBlock';
import Carousel from '../components/Carousel';

const IMG = '/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC';

const sallesSlides = [
  { src: `${IMG}/logis-hotel-les-carillons-salles-de-seminaires-reception-cra.jpg`, alt: 'Salle de séminaire Les Carillons', caption: 'Configuration séminaire' },
  { src: `${IMG}/logis-hotel-les-carillons-salles-de-seminaires-reception-cra (1).jpg`, alt: 'Salle de réunion Les Carillons', caption: 'Disposition modulable' },
  { src: `${IMG}/logis-hotel-les-carillons-salles-de-seminaires-reception-cra (2).jpg`, alt: 'Salle équipée Les Carillons', caption: 'Accès Wi-Fi & écran tactile' },
  { src: `${IMG}/logis-hotel-les-carillons-salles-de-seminaires-reception-cra (3).jpg`, alt: 'Espace séminaire Les Carillons', caption: "Jusqu'à 40 personnes" },
  { src: `${IMG}/logis-hotel-les-carillons-salle-de-reception-cransac-571959.jpg`, alt: 'Grande salle de réception', caption: 'Banquets & événements' },
];

export default function Seminaire() {
  return (
    <>
      <Seo
        title="Séminaire & Réunions — Salle Équipée"
        description="Salle de séminaire climatisée jusqu'à 40 personnes à Cransac-les-Thermes. Accès PMR, Wi-Fi, écran tactile, hébergement et restauration sur place."
        path="/seminaire"
      />
      <PageHero
        title="Séminaire & Réunions"
        subtitle="Une salle climatisée jusqu'à 40 personnes, accessible PMR"
        breadcrumb={[{ label: 'Séminaire' }]}
      />

      <SectionBlock
        title="Une salle à votre disposition"
        subtitle="Entreprises & Associations"
        image="/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC/logis-hotel-les-carillons-salles-de-seminaires-reception-cra.jpg"
        imageAlt="Salle de séminaire de l'hôtel Les Carillons"
        imageLeft
      >
        <p>
          Pour les entreprises et les associations, notre salle de séminaire
          située en rez-de-chaussée permet d'accueillir les personnes à
          mobilité réduite.
        </p>
        <p>
          Climatisée, elle dispose d'un accès Wi-Fi et d'un <strong className="text-black font-normal">écran tactile</strong>,
          et peut recevoir jusqu'à <strong className="text-black font-normal">40 personnes</strong>.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 mt-2 text-black font-normal text-xs tracking-[0.15em] uppercase no-underline hover:text-gold transition-colors border-b border-black pb-0.5"
        >
          Demander un devis <span className="text-gold">→</span>
        </Link>
      </SectionBlock>

      <section className="py-20 md:py-28 bg-beige section-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="overline text-gold mb-4">Équipements & services</p>
            <h2 className="text-3xl text-black mb-5">Tout pour votre séminaire</h2>
            <div className="w-12 h-px bg-black mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                title: 'Salle équipée',
                items: [
                  'Écran tactile',
                  'Accès Wi-Fi haut débit',
                  'Climatisation',
                  'Accessible PMR (rez-de-chaussée)',
                  'Jusqu\'à 40 personnes',
                  'Disposition modulable',
                ],
              },
              {
                title: 'Hébergement & restauration',
                items: [
                  '17 chambres confortables sur place',
                  'Pension complète possible',
                  'Pauses café & collations',
                  'Dîner de gala sur demande',
                  'Accès piscine & parc arboré',
                ],
              },
            ].map((block) => (
              <div key={block.title} className="bg-white p-6 md:p-8 border border-black/5">
                <h3 className="text-sm font-normal text-black mb-5 tracking-wide uppercase" style={{ fontFamily: 'var(--font-body)' }}>{block.title}</h3>
                <div className="w-8 h-px bg-gold mb-5" />
                <ul className="space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-mid text-sm font-light">
                      <span className="w-4 h-px bg-gold block shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-white font-normal text-xs px-8 py-3.5 tracking-[0.15em] uppercase transition-colors no-underline"
            >
              Nous contacter pour tout renseignement
            </Link>
          </div>
        </div>
      </section>

      {/* Carrousel salles */}
      <section className="py-24 md:py-32 bg-white section-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="w-full md:w-3/5">
              <Carousel
                slides={sallesSlides}
                autoPlay
                interval={4800}
                aspectRatio="4/3"
              />
            </div>
            <div className="w-full md:w-2/5">
              <p className="overline text-gold mb-4">Nos espaces</p>
              <h2
                className="text-3xl md:text-[44px] text-black mb-5 leading-tight"
              >
                Des salles adaptées à chaque événement
              </h2>
              <div className="w-12 h-px bg-black mb-6" />
              <p className="text-gray-mid text-base leading-relaxed mb-4 font-light">
                Séminaire d'entreprise, réunion d'association, repas de famille,
                anniversaire ou banquet — nos salles s'adaptent à votre projet.
              </p>
              <p className="text-gray-mid text-base leading-relaxed font-light">
                La grande salle de réception peut accueillir des groupes pour
                des repas de gala ou des cérémonies.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-6 text-black font-normal text-xs tracking-[0.15em] uppercase no-underline hover:text-gold transition-colors border-b border-black pb-0.5"
              >
                Demander un devis <span className="text-gold">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
