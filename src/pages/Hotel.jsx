import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionBlock from '../components/SectionBlock';
import Carousel from '../components/Carousel';

const IMG = '/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC';

const petitDejSlides = [
  { src: `${IMG}/logis-hotel-les-carillons-petit-dejeuner-cransac-064409.jpg`, alt: 'Buffet petit-déjeuner Les Carillons', caption: 'Buffet du matin' },
  { src: `${IMG}/logis-hotel-les-carillons-petit-dejeuner-cransac-573526.jpg`, alt: 'Petit-déjeuner Les Carillons', caption: 'Produits frais' },
  { src: `${IMG}/logis-hotel-les-carillons-petit-dejeuner-cransac-573526 (1).jpg`, alt: 'Table du petit-déjeuner', caption: 'Chaque matin dès 7h30' },
];

export default function Hotel() {
  return (
    <>
      <PageHero
        title="L'Hôtel"
        subtitle="17 chambres confortables, piscine, parc arboré — Logis Hôtels ★★"
        image={`${IMG}/hotel-les-carillons-jardins-et-terrasses-cransac-247020%20(1).jpg`}
        breadcrumb={[{ label: 'Hôtel' }]}
      />

      <SectionBlock
        title="17 chambres de confort"
        subtitle="Hébergement"
        image={`${IMG}/logis-hotel-les-carillons-bar-reception-cransac-520411.jpg`}
        imageAlt="Bar et réception de l'hôtel Les Carillons"
        imageLeft
      >
        <p>
          L'hôtel Les Carillons vous propose 17 chambres confortables et
          parfaitement équipées. Chaque chambre dispose d'une salle de bain
          privative, d'une literie de qualité, de la TV et du Wi-Fi gratuit.
        </p>
        <p>
          Que vous soyez en cure thermale, en déplacement professionnel ou en
          vacances, vous apprécierez le calme et la sérénité de notre
          établissement, labellisé <strong className="text-black font-normal">Logis Hôtels</strong>.
        </p>
      </SectionBlock>

      <section className="py-20 md:py-28 bg-beige section-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="overline text-gold mb-4">Équipements</p>
            <h2 className="text-3xl text-black">Nos services & équipements</h2>
            <div className="w-16 h-px bg-black mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 mx-auto"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>, label: 'Wi-Fi gratuit' },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 mx-auto"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>, label: 'TV écran plat' },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 mx-auto"><path d="M2 20c1.5 0 1.5-2 3-2s1.5 2 3 2 1.5-2 3-2 1.5 2 3 2 1.5-2 3-2"/><path d="M2 16c1.5 0 1.5-2 3-2s1.5 2 3 2 1.5-2 3-2 1.5 2 3 2 1.5-2 3-2"/><circle cx="16" cy="6" r="2"/><path d="M16 8v5l-4 3"/></svg>, label: 'Piscine extérieure' },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 mx-auto"><path d="M17 8C8 10 5.9 16.17 3.82 22"/><path d="M9.5 6C11 4.67 12.5 4 12.5 4s1 3-1 6-4.5 5-5.5 5 0-3 0-3 1.5-1 2-4"/></svg>, label: 'Parc arboré' },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 mx-auto"><rect x="3" y="11" width="18" height="10" rx="1"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1"/></svg>, label: 'Parking gratuit' },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 mx-auto"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/><path d="M3 15h3"/><path d="M18 15h3"/></svg>, label: 'Accès PMR' },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 mx-auto"><path d="M3 11l19-9-9 19L11 13z"/></svg>, label: 'Restaurant sur place' },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 mx-auto"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>, label: 'Petit-déjeuner buffet' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white p-5 text-center group border border-black/5 hover:border-gold/30 transition-colors"
              >
                <div className="text-gold mb-3">{item.icon}</div>
                <div className="w-5 h-px bg-gold mx-auto mb-2" />
                <span className="text-xs font-normal text-black/70 tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bande photos : piscine, bar, accueil */}
      <section className="overflow-hidden section-border">
        <div className="grid grid-cols-3 h-56 md:h-72">
          {[
            { src: `${IMG}/logis-hotel-les-carillons-piscine-cransac-444210.jpg`, alt: 'Piscine extérieure de l\'hôtel Les Carillons' },
            { src: `${IMG}/logis-hotel-les-carillons-bar-reception-cransac-031503.jpg`, alt: 'Bar et accueil de l\'hôtel Les Carillons' },
            { src: `${IMG}/hotel-les-carillons-bar-reception-cransac-581553.jpg`, alt: 'Réception de l\'hôtel Les Carillons' },
          ].map((img) => (
            <div key={img.src} className="relative overflow-hidden group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Petit-déjeuner */}
      <section className="flex flex-col md:flex-row-reverse section-border" style={{ minHeight: '460px' }}>
        <div className="md:w-1/2 h-56 md:h-auto">
          <Carousel
            slides={petitDejSlides}
            autoPlay
            interval={4200}
            aspectRatio="4/3"
            className="h-full"
          />
        </div>
        <div className="md:w-1/2 bg-beige flex flex-col justify-center px-8 py-14 md:px-16 md:py-20">
          <p className="overline text-gold mb-4">Chaque matin</p>
          <h2 className="text-2xl md:text-[32px] text-black mb-4 leading-tight">Le Petit-Déjeuner</h2>
          <div className="w-12 h-px bg-black mb-6" />
          <div className="text-gray-mid leading-relaxed space-y-3 text-base max-w-sm">
            <p>
              Commencez votre journée avec notre buffet gourmand : viennoiseries fraîches,
              confitures maison, fromages, charcuteries, jus de fruits et boissons chaudes.
            </p>
            <p>
              Servi chaque matin dans la salle de restaurant, dans une ambiance chaleureuse
              et familiale.
            </p>
          </div>
        </div>
      </section>

      <SectionBlock
        title="Soirée étape"
        subtitle="Professionnels"
        image={`${IMG}/logis-hotel-les-carillons-petit-dejeuner-cransac-064409.jpg`}
        imageAlt="Petit-déjeuner buffet inclus dans la formule soirée étape"
      >
        <p>
          Professionnels en déplacement ? Notre formule soirée étape comprend
          le dîner, la nuit en chambre confort et le petit-déjeuner buffet, à un
          tarif préférentiel. Idéal pour les VRP et commerciaux de passage
          en Aveyron.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 mt-6 text-black font-normal text-xs tracking-[0.15em] uppercase no-underline hover:text-gold transition-colors border-b border-black pb-0.5"
        >
          Nous contacter <span className="text-gold">→</span>
        </Link>
      </SectionBlock>
    </>
  );
}
