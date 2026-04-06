import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionBlock from '../components/SectionBlock';
import Carousel from '../components/Carousel';

const IMG = '/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC';

const platsSlides = [
  { src: `${IMG}/logis-hotel-les-carillons-plats-cransac-013132.jpg`, alt: 'Plat du terroir aveyronnais', caption: 'Cuisine du terroir' },
  { src: `${IMG}/logis-hotel-les-carillons-plats-cransac-260904.jpg`, alt: 'Plat gastronomique Les Carillons', caption: 'Créations de saison' },
  { src: `${IMG}/logis-hotel-les-carillons-plats-cransac-310975.jpg`, alt: 'Assiette restaurant Les Carillons', caption: 'Produits locaux' },
  { src: `${IMG}/logis-hotel-les-carillons-plats-cransac-310975 (1).jpg`, alt: 'Plat du terroir', caption: 'Saveurs aveyronnaises' },
  { src: `${IMG}/logis-hotel-les-carillons-plats-cransac-492855.jpg`, alt: 'Plat signature Les Carillons', caption: 'Saveurs aveyronnaises' },
  { src: `${IMG}/logis-hotel-les-carillons-plats-cransac-597498.jpg`, alt: 'Plat gastronomique', caption: 'Fait maison' },
  { src: `${IMG}/logis-hotel-les-carillons-plats-cransac-854284.jpg`, alt: 'Plat signature terroir', caption: 'Notre cuisine' },
  { src: `${IMG}/logis-hotel-les-carillons-plats-cransac-991669.jpg`, alt: 'Spécialité maison', caption: 'Spécialités maison' },
];

export default function Restaurant() {
  return (
    <>
      <PageHero
        title="Le Restaurant"
        subtitle="Cuisine familiale faite maison, produits de la région"
        image={`${IMG}/hotel-les-carillons-restaurant-cransac-562674.jpg`}
        breadcrumb={[{ label: 'Restaurant' }]}
      />

      <SectionBlock
        title="Cuisine familiale & terroir aveyronnais"
        subtitle="Restaurant"
        image={`${IMG}/hotel-les-carillons-restaurant-cransac-678263.jpg`}
        imageAlt="Salle du restaurant Les Carillons"
        imageLeft
      >
        <p>
          Restaurant et terrasse climatisés. Cuisine familiale, faite maison,
          préparée avec les produits de la région. Tête de veau, poule farcie,
          stockfish… des plats authentiques cuisinés avec soin.
        </p>
        <p>
          Venez déguster notre spécialité toute l’année :
          le <strong className="text-brown font-semibold">Stockfish</strong>.
        </p>
        <p>
          Nous contacter pour les repas de famille, anniversaires, banquets,
          menu Stockfish.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 mt-2 text-brown font-semibold text-xs tracking-[0.15em] uppercase no-underline hover:text-gold transition-colors border-b border-gold pb-0.5"
        >
          Nous contacter <span className="text-gold">→</span>
        </Link>
      </SectionBlock>

      {/* Horaires & infos */}
      <section className="py-16 md:py-24 bg-warm">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold mb-4">Horaires</p>
              <h2 className="text-2xl md:text-3xl text-brown mb-5">Quand nous rendre visite ?</h2>
              <div className="w-10 h-px bg-gold mb-7" />
              <ul className="space-y-4">
                {[
                  { label: 'Ouverture', value: 'Toute l’année, du lundi au samedi soir' },
                  { label: 'Fermeture', value: 'Dimanche (hors curistes et marcheurs)' },
                  { label: 'Menu du jour', value: 'Le midi uniquement, du lundi au vendredi (hors week-end et jours fériés)' },
                  { label: 'Menu Terroir & carte', value: 'Le soir ou le samedi, sur réservation' },
                ].map((item) => (
                  <li key={item.label} className="flex gap-4 text-sm">
                    <span className="w-4 h-px bg-gold block shrink-0 mt-2.5" />
                    <div>
                      <span className="font-semibold text-brown">{item.label} — </span>
                      <span className="text-gray-500">{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold mb-4">Nos menus</p>
              <h2 className="text-2xl md:text-3xl text-brown mb-5">Menus & carte</h2>
              <div className="w-10 h-px bg-gold mb-7" />
              <ul className="space-y-4">
                {[
                  { title: 'Menu du Terroir & Gastronomique', desc: 'Servi le soir ou le samedi sur réservation, à base de produits du terroir aveyronnais.' },
                  { title: 'Menu Stockfish', desc: 'Notre spécialité maison, disponible toute l’année sur réservation.' },
                  { title: 'Menu du Jour', desc: 'Servi uniquement le midi du lundi au vendredi, renouvelé selon les arrivées et la saison.' },
                ].map((item) => (
                  <li key={item.title} className="">
                    <h4 className="text-sm font-semibold text-brown mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BANDE PHOTOS ===== */}
      <section className="overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 h-56 md:h-72">
          <div className="relative overflow-hidden group">
            <img
              src={`${IMG}/hotel-les-carillons-jardins-et-terrasses-cransac-247020.jpg`}
              alt="Terrasse du restaurant Les Carillons"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
          </div>
          <div className="relative overflow-hidden group">
            <img
              src={`${IMG}/logis-hotel-les-carillons-salle-de-reception-cransac-094667.jpg`}
              alt="Salle de réception Les Carillons"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
          </div>
          <div className="relative overflow-hidden group">
            <img
              src={`${IMG}/logis-hotel-les-carillons-bar-reception-cransac-325163.jpg`}
              alt="Bar et accueil Les Carillons"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
          </div>
          <div className="relative overflow-hidden group hidden lg:block">
            <img
              src={`${IMG}/hotel-les-carillons-restaurant-cransac-562674%20(1).jpg`}
              alt="Salle du restaurant Les Carillons"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
          </div>
        </div>
      </section>

      {/* ===== CARROUSEL NOS PLATS ===== */}
      <section className="py-20 md:py-28 bg-brown" id="galerie-plats">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold mb-4">Les Carillons</p>
            <h2
              className="text-4xl md:text-5xl text-[#E3DED1] mb-5"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Nos Créations
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mb-5" />
            <p className="text-[#E3DED1]/60 text-sm italic max-w-md mx-auto leading-relaxed">
              Des assiettes soignées, composées selon les saisons et les arrivées du marché.
            </p>
          </div>
          <Carousel
            slides={platsSlides}
            autoPlay
            interval={4500}
            aspectRatio="16/9"
            className="max-w-3xl mx-auto"
          />
        </div>
      </section>

      {/* ===== NOS MENUS ===== */}
      <section className="py-20 md:py-28 bg-warm" id="menus">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold mb-4">Les Carillons</p>
            <h2 className="text-4xl md:text-5xl text-brown mb-5" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              Nos Menus
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mb-5" />
            <p className="text-gray-400 text-sm italic max-w-xl mx-auto leading-relaxed">
              Ceci est un exemple de menu susceptible d&apos;évoluer en fonction des arrivages et de la saison.
            </p>
          </div>

          <div className="space-y-12">

            {/* Menu Terroir & Gastronomique */}
            <div className="bg-white">
              <div className="bg-brown px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-white text-base tracking-[0.1em] uppercase" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                  Menu du Terroir &amp; Gastronomique
                </h3>
                <span className="text-gold font-light text-sm tracking-widest">à partir de 26 €</span>
              </div>
              <div className="px-8 py-8">
                <p className="text-gray-400 text-xs italic mb-8 border-l-2 border-gold pl-4">
                  Composez votre menu : entrée, plat, fromage et dessert. La carte peut varier suivant l&apos;humeur de Florian et Assia.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold mb-4">Entrées</p>
                    <ul className="space-y-3">
                      {[
                        { label: "Assiette de charcuterie de l'Aveyron" },
                        { label: "Croustillant de Rocamadour aux noix" },
                        { label: "Salade de gésiers d'oie" },
                        { label: "Duo de foie gras mi-cuit et sa confiture", sup: "+4 €" },
                        { label: "Carpaccio de saumon" },
                        { label: "Escalope de foie gras et son chutney du moment", sup: "+6 €" },
                        { label: "Carpaccio de tomates au pesto et sa burrata" },
                        { label: "Pressé de bœuf aux petits légumes sauce ravigote" },
                        { label: "Nage de la mer et ses Saint-Jacques", sup: "+5 €" },
                      ].map((item) => (
                        <li key={item.label} className="flex items-start gap-3 text-sm text-gray-600">
                          <span className="w-3 h-px bg-gold block shrink-0 mt-2.5" />
                          <span>{item.label}{item.sup && <span className="text-gold ml-1 text-xs">{item.sup}</span>}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold mb-4">Plats</p>
                    <ul className="space-y-3">
                      {[
                        { label: "Pot au feu de canard et ses légumes" },
                        { label: "Notre spécialité — Estofinade Aveyronnaise" },
                        { label: "Filet mignon de porc, farce fine de veau au chorizo, crémeux de patate douce" },
                        { label: "Ris de veau aux Morilles sauce madère et pommes grenailles confites", sup: "+8 €" },
                        { label: "Magret de canard entier, sauce du moment et millefeuille de pomme de terre", sup: "+4 €" },
                        { label: "Cabillaud sauce à l'ail vanillée et son risotto", sup: "+3 €" },
                        { label: "Souris d'agneau confite au pain d'épice et légumes de saison", sup: "+4 €" },
                        { label: "Tournedos Rossini, sauce madérisée au foie gras et légumes de saison", sup: "+10 €" },
                      ].map((item) => (
                        <li key={item.label} className="flex items-start gap-3 text-sm text-gray-600">
                          <span className="w-3 h-px bg-gold block shrink-0 mt-2.5" />
                          <span>{item.label}{item.sup && <span className="text-gold ml-1 text-xs">{item.sup}</span>}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-gray-400 italic mt-4 pl-6">Tous nos plats sont accompagnés de légumes de saison ou aligot.</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 mt-8 pt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold mb-3">Fromages</p>
                    <p className="text-sm text-gray-600">Plateau de fromages du terroir</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold mb-3">Desserts</p>
                    <ul className="space-y-2">
                      {["Salade de fruits frais","Fondant au chocolat et sa boule de glace","Nougat glacé","Dame blanche","Café ou chocolat liégeois","Pêche Melba","Large choix de glaces ou sorbets"].map((d) => (
                        <li key={d} className="flex items-center gap-3 text-sm text-gray-600">
                          <span className="w-3 h-px bg-gold block shrink-0" />{d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Stockfish */}
            <div className="bg-white">
              <div className="bg-gold px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-white text-base tracking-[0.1em] uppercase" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                  Menu Stockfish
                </h3>
                <span className="text-white/80 font-light text-sm tracking-widest">30 € · vin &amp; café compris</span>
              </div>
              <div className="px-8 py-8">
                <p className="text-gray-400 text-xs italic mb-8 border-l-2 border-gold pl-4">
                  Menu de groupe, sur réservation. Nous accueillons les cars.
                </p>
                <ul className="space-y-3 max-w-md">
                  {["Kir","Potage","Poule farcie ou tête de veau ou charcuterie","Estofinade — notre spécialité","Plateau de fromages","Dessert","Vin et café compris"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="w-3 h-px bg-gold block shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Menu du Jour */}
            <div className="bg-white">
              <div className="bg-sage px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-white text-base tracking-[0.1em] uppercase" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                  Menu du Jour
                </h3>
                <span className="text-white/80 font-light text-sm tracking-widest">17 € · ¼ vin &amp; café compris</span>
              </div>
              <div className="px-8 py-8">
                <p className="text-gray-400 text-xs italic mb-8 border-l-2 border-gold pl-4">
                  Servi chaque midi du lundi au vendredi · 3 entrées, 3 plats, fromage et desserts au choix.<br />
                  Un potage vous sera proposé en hiver.
                </p>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold mb-4">Thèmes du jeudi</p>
                  <ul className="space-y-3">
                    {[
                      "1er jeudi — Tête de veau",
                      "2ème jeudi — Poule farcie",
                      "3ème jeudi — Choux farcis",
                      "4ème jeudi — Aligot saucisse à l'ail des ours",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                        <span className="w-3 h-px bg-gold block shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== NOS PLATS A LA CARTE ===== */}
      <section className="py-20 md:py-28 bg-white" id="carte">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold mb-4">Les Carillons</p>
            <h2 className="text-4xl md:text-5xl text-brown mb-5" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              Nos Plats à la Carte
            </h2>
            <div className="w-16 h-px bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold mb-2">Entrées</p>
              <div className="w-8 h-px bg-gold mb-6" />
              <ul className="space-y-4">
                {[
                  { label: "Duo de foie gras et sa confiture", prix: "15 €" },
                  { label: "Carpaccio de saumon aux kiwis mangues", prix: "14 €" },
                  { label: "Noix de Saint-Jacques flambées aux kiwis", prix: "17 €" },
                  { label: "Assiette de charcuterie de l'Aveyron", prix: "11 €" },
                  { label: "Os à moelle gratiné aux champignons et son escalope de foie gras", prix: "19 €" },
                  { label: "Ris d'agneau à la crème d'ail", prix: "16 €" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start justify-between gap-4 text-sm border-b border-gray-100 pb-3">
                    <span className="text-gray-600 leading-snug">{item.label}</span>
                    <span className="text-gold font-light shrink-0">{item.prix}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold mb-2">Plats</p>
              <div className="w-8 h-px bg-gold mb-6" />
              <ul className="space-y-4">
                {[
                  { label: "Confit de canard, légumes ou aligot", prix: "16 €" },
                  { label: "Pot au feu de canard et ses légumes", prix: "18 €" },
                  { label: "Estofinade — notre spécialité", prix: "20 €" },
                  { label: "Ris de veau sauce madère, légumes et aligot", prix: "28 €" },
                  { label: "Entrecôte d'Aubrac ou Charolaise, légumes ou aligot", prix: "26 €" },
                  { label: "Souris d'agneau confite au pain d'épice", prix: "24 €" },
                  { label: "Tournedos Rossini sauce madérisée au foie gras", prix: "30 €" },
                  { label: "Magret de canard entier et sa sauce du moment", prix: "24 €" },
                  { label: "Poisson du moment", prix: "sur carte" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start justify-between gap-4 text-sm border-b border-gray-100 pb-3">
                    <span className="text-gray-600 leading-snug">{item.label}</span>
                    <span className="text-gold font-light shrink-0">{item.prix}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 italic mt-4">Tous nos plats sont accompagnés de légumes de saison ou aligot.</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold mb-2">Salades</p>
              <div className="w-8 h-px bg-gold mb-6" />
              <ul className="space-y-4">
                {[
                  { label: "Salade de Rocamadour chaud", prix: "13 €" },
                  { label: "Salade Aveyronnaise Roquefort", prix: "13 €" },
                  { label: "Salade de charcuterie", prix: "15 €" },
                  { label: "Salade de gésiers d'oie", prix: "13 €" },
                  { label: "Salade baltique saumon", prix: "18 €" },
                  { label: "Salade de duo de foie gras mi-cuit", prix: "21 €" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start justify-between gap-4 text-sm border-b border-gray-100 pb-3">
                    <span className="text-gray-600 leading-snug">{item.label}</span>
                    <span className="text-gold font-light shrink-0">{item.prix}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 italic mt-4">Toutes nos salades sont accompagnées suivant le thème et la saison.</p>
            </div>
          </div>
          <div className="text-center mt-14">
            <Link
              to="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-white font-bold text-xs px-10 py-4 tracking-[0.2em] uppercase transition-colors no-underline"
            >
              Réserver une table
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}