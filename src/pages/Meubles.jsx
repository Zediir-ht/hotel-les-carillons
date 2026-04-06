import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionBlock from '../components/SectionBlock';
import Carousel from '../components/Carousel';
import Reveal from '../components/Reveal';

const IMG = '/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC';

const extSlides = [
  { src: `${IMG}/hotel-les-carillons-jardins-et-terrasses-cransac-247020.jpg`,   alt: 'Terrasse et jardins Les Carillons', caption: 'La terrasse' },
  { src: `${IMG}/hotel-les-carillons-jardins-et-terrasses-cransac-247020 (1).jpg`, alt: 'Jardins de la résidence', caption: 'Les jardins' },
  { src: `${IMG}/logis-hotel-les-carillons-jardins-et-terrasses-cransac-82034.jpg`, alt: 'Parc arboré', caption: 'Parc arboré' },
  { src: `${IMG}/logis-hotel-les-carillons-jardins-et-terrasses-cransac-28636.jpg`, alt: 'Espaces verts', caption: 'Espaces verts' },
  { src: `${IMG}/logis-hotel-les-carillons-piscine-cransac-444210.jpg`, alt: 'Piscine extérieure', caption: 'La piscine' },
];

export default function Meubles() {
  return (
    <>
      <PageHero
        title="Meublés Les Cèdres"
        subtitle="11 appartements équipés avec piscine et parc"
        image={`${IMG}/logis-hotel-les-carillons-jardins-et-autres-exterieurs-crans.jpg`}
        breadcrumb={[{ label: 'Meublés' }]}
      />

      <SectionBlock
        title="11 appartements tout confort"
        subtitle="Résidence Les Cèdres"
        image={`${IMG}/logis-hotel-les-carillons-jardins-et-terrasses-cransac-28636.jpg`}
        imageAlt="Parc et jardins de la résidence Les Cèdres"
        imageLeft
      >
        <p>
          Chaque appartement comprend une cuisine équipée, une salle de bain,
          un salon et une chambre. Idéaux pour les curistes, les familles ou
          les séjours longue durée.
        </p>
        <p>
          La piscine de l'hôtel est à votre disposition, ainsi que le magnifique
          parc des <strong className="text-brown font-semibold">« 3 Cèdres »</strong>, planté de cèdres centenaires.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 mt-2 text-brown font-semibold text-xs tracking-[0.15em] uppercase no-underline hover:text-gold transition-colors border-b border-gold pb-0.5"
        >
          Nous contacter <span className="text-gold">→</span>
        </Link>
      </SectionBlock>

      {/* Carrousel extérieurs */}
      <section className="py-20 md:py-28 bg-brown">
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
              <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold mb-4">Cadre d'exception</p>
              <h2
                className="text-3xl md:text-4xl text-[#E3DED1] mb-5 leading-tight"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Parc, piscine & terrasse
              </h2>
              <div className="w-10 h-px bg-gold mb-6" />
              <p className="text-[#E3DED1]/70 text-[15px] leading-relaxed mb-3">
                Profitez d'un cadre verdoyant avec un parc planté de cèdres centenaires,
                une piscine extérieure et une terrasse ombragée.
              </p>
              <p className="text-[#E3DED1]/70 text-[15px] leading-relaxed">
                Un environnement idéal pour se ressourcer à Cransac-les-Thermes.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16 md:py-24 bg-warm">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold mb-4">Tarification</p>
              <h2 className="text-3xl text-brown mb-5">Nos tarifs <span className="text-lg font-light">(à la semaine)</span></h2>
              <div className="w-10 h-px bg-gold mx-auto mb-3" />
              <p className="text-gray-400 text-xs tracking-wide">* Taxe de séjour en sus</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
            {[
              { label: 'Rez-de-chaussée', prix: '195 €' },
              { label: '1er étage', prix: '190 €' },
              { label: '2ème étage', prix: '185 €' },
            ].map((item, i) => (
              <Reveal key={item.label} from="fade" delay={i * 100}>
                <div className="bg-white p-6 text-center">
                  <div className="w-8 h-px bg-gold mx-auto mb-4" />
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-brown mb-3">{item.label}</p>
                  <p className="text-2xl text-gold font-light">{item.prix}</p>
                  <p className="text-xs text-gray-400 mt-1">/ semaine</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-8">
            N'hésitez pas à nous contacter pour tout renseignement.
          </p>
        </div>
      </section>

      <SectionBlock
        title="Appartements — équipements"
        subtitle="Détail"
        image={`${IMG}/logis-hotel-les-carillons-facade-cransac-957618.jpg`}
        imageAlt="Façade de la résidence Les Cèdres"
      >
        <p>
          Les appartements (numérotés RDC, N°2 à N°10) sont répartis
          sur trois niveaux. Chacun dispose de tout le nécessaire pour
          un séjour confortable en toute autonomie.
        </p>
        <ul className="space-y-2.5 mt-2">
          {[
            'Cuisine équipée (plaques, réfrigérateur, vaisselle)',
            'Salle de bain avec douche',
            'Salon avec coin repas',
            'Chambre',
            'Linge de maison fourni',
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-gray-500">
              <span className="w-4 h-px bg-gold block shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 mt-4 text-brown font-semibold text-xs tracking-[0.15em] uppercase no-underline hover:text-gold transition-colors border-b border-gold pb-0.5"
        >
          Vérifier les disponibilités <span className="text-gold">→</span>
        </Link>
      </SectionBlock>
    </>
  );
}
