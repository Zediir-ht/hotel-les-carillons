import { Link } from 'react-router-dom';
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
      <section className="relative min-h-[520px] md:min-h-[680px] flex items-end overflow-hidden section-border">
        <div className="absolute inset-0">
          <img
            src="/images/restaurant-hero-terroir.svg"
            alt="Illustration chic et terroir du restaurant Les Carillons"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pb-14 md:pb-20 pt-28 md:pt-40">
          <p className="text-[11px] tracking-[0.35em] uppercase text-offwhite/70 mb-5">Restaurant</p>
          <h1 className="text-offwhite text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-5">
            Le Restaurant
            <br />
            <span className="text-gold">Les Carillons</span>
          </h1>
          <div className="w-24 h-px bg-gold mb-6" />
          <p className="text-offwhite/80 text-sm md:text-lg leading-relaxed max-w-xl">
            Cuisine familiale faite maison, produits du terroir aveyronnais,
            service chaleureux et ambiance de maison de famille.
          </p>

          <div className="hidden lg:block absolute right-14 bottom-12 w-[340px] xl:w-[380px]">
            <div className="bg-offwhite/95 p-3 shadow-2xl border border-gold/30">
              <img
                src={`${IMG}/logis-hotel-les-carillons-plats-cransac-492855.jpg`}
                alt="Assiette signature du restaurant Les Carillons"
                className="w-full h-48 object-cover"
              />
              <p className="text-[10px] tracking-[0.28em] uppercase text-deepbrown/70 mt-3 text-center">
                Saveurs du terroir
              </p>
            </div>
          </div>
        </div>
      </section>

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
          le <strong className="text-black font-normal">Stockfish</strong>.
        </p>
        <p>
          Nous contacter pour les repas de famille, anniversaires, banquets,
          menu Stockfish.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 mt-2 text-black font-normal text-xs tracking-[0.15em] uppercase no-underline hover:text-gold transition-colors border-b border-black pb-0.5"
        >
          Nous contacter <span className="text-gold">→</span>
        </Link>
      </SectionBlock>

      {/* Horaires & infos */}
      <section className="py-20 md:py-28 bg-beige section-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <p className="overline text-gold mb-4">Horaires</p>
              <h2 className="text-2xl md:text-[32px] text-black mb-5">Quand nous rendre visite ?</h2>
              <div className="w-12 h-px bg-black mb-7" />
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
                      <span className="font-normal text-black">{item.label} — </span>
                      <span className="text-gray-mid">{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="overline text-gold mb-4">Nos menus</p>
              <h2 className="text-2xl md:text-[32px] text-black mb-5">Menus & carte</h2>
              <div className="w-12 h-px bg-black mb-7" />
              <ul className="space-y-4">
                {[
                  { title: 'Menu du Terroir & Gastronomique', desc: 'Servi le soir ou le samedi sur réservation, à base de produits du terroir aveyronnais.' },
                  { title: 'Menu Stockfish', desc: 'Notre spécialité maison, disponible toute l’année sur réservation.' },
                  { title: 'Menu du Jour', desc: 'Servi uniquement le midi du lundi au vendredi, renouvelé selon les arrivées et la saison.' },
                ].map((item) => (
                  <li key={item.title} className="">
                    <h4 className="text-sm font-normal text-black mb-1" style={{ fontFamily: 'var(--font-body)', textTransform: 'none' }}>{item.title}</h4>
                    <p className="text-gray-mid text-sm leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BANDE PHOTOS ===== */}
      <section className="overflow-hidden section-border">
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
      <section className="py-24 md:py-32 bg-deepbrown section-border" id="galerie-plats">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="overline text-gold mb-4">Les Carillons</p>
            <h2
              className="text-4xl md:text-5xl text-offwhite mb-5"
            >
              Nos Créations
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mb-5" />
            <p className="text-offwhite/50 text-sm max-w-md mx-auto leading-relaxed font-light">
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
      <section className="py-24 md:py-32 bg-deepbrown section-border relative overflow-hidden" id="menus">
        {/* Texture de fond subtile */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold/70 mb-6 font-light">Restaurant Les Carillons</p>
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="w-20 h-px bg-gold/30" />
              <span className="text-gold text-lg">✦</span>
              <div className="w-20 h-px bg-gold/30" />
            </div>
            <h2 className="text-4xl md:text-6xl text-offwhite mb-6 leading-tight">
              Nos Menus
            </h2>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-20 h-px bg-gold/30" />
              <span className="text-gold text-lg">✦</span>
              <div className="w-20 h-px bg-gold/30" />
            </div>
            <p className="text-offwhite/40 text-sm max-w-lg mx-auto leading-relaxed font-light italic">
              Ceci est un exemple de menu susceptible d&apos;évoluer en fonction des arrivages et de la saison.
            </p>
          </div>

          <div className="space-y-16">

            {/* Menu Terroir & Gastronomique */}
            <div className="relative border border-gold/20 bg-deepbrown">
              <div className="absolute -top-px -left-px -right-px -bottom-px border border-gold/10 m-2 pointer-events-none" />
              <div className="relative p-8 md:p-12">
                <div className="text-center mb-10">
                  <p className="text-[10px] tracking-[0.4em] uppercase text-gold/60 mb-4 font-light">La Table</p>
                  <h3 className="text-2xl md:text-3xl text-offwhite tracking-wide mb-3">
                    Menu du Terroir &amp; Gastronomique
                  </h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-12 h-px bg-gold/40" />
                    <span className="text-gold text-sm">à partir de 26 €</span>
                    <div className="w-12 h-px bg-gold/40" />
                  </div>
                  <p className="text-offwhite/30 text-xs italic max-w-md mx-auto leading-relaxed">
                    Composez votre menu : entrée, plat, fromage et dessert. La carte peut varier suivant l&apos;humeur de Florian et Assia.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-px bg-gold/40" />
                      <p className="text-[11px] tracking-[0.35em] uppercase text-gold font-normal">Entrées</p>
                      <div className="flex-1 h-px bg-gold/15" />
                    </div>
                    <ul className="space-y-4">
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
                        <li key={item.label} className="flex items-start gap-3 text-sm text-offwhite/60 leading-relaxed">
                          <span className="text-gold/50 text-[8px] mt-1.5 shrink-0">◆</span>
                          <span className="flex-1">{item.label}</span>
                          {item.sup && <span className="text-gold text-xs shrink-0 mt-0.5">{item.sup}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-px bg-gold/40" />
                      <p className="text-[11px] tracking-[0.35em] uppercase text-gold font-normal">Plats</p>
                      <div className="flex-1 h-px bg-gold/15" />
                    </div>
                    <ul className="space-y-4">
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
                        <li key={item.label} className="flex items-start gap-3 text-sm text-offwhite/60 leading-relaxed">
                          <span className="text-gold/50 text-[8px] mt-1.5 shrink-0">◆</span>
                          <span className="flex-1">{item.label}</span>
                          {item.sup && <span className="text-gold text-xs shrink-0 mt-0.5">{item.sup}</span>}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-offwhite/25 italic mt-5 pl-5">Tous nos plats sont accompagnés de légumes de saison ou aligot.</p>
                  </div>
                </div>

                <div className="border-t border-gold/15 mt-10 pt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-8 h-px bg-gold/40" />
                      <p className="text-[11px] tracking-[0.35em] uppercase text-gold font-normal">Fromages</p>
                      <div className="flex-1 h-px bg-gold/15" />
                    </div>
                    <p className="text-sm text-offwhite/60 pl-5">Plateau de fromages du terroir</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-8 h-px bg-gold/40" />
                      <p className="text-[11px] tracking-[0.35em] uppercase text-gold font-normal">Desserts</p>
                      <div className="flex-1 h-px bg-gold/15" />
                    </div>
                    <ul className="space-y-3">
                      {["Salade de fruits frais","Fondant au chocolat et sa boule de glace","Nougat glacé","Dame blanche","Café ou chocolat liégeois","Pêche Melba","Large choix de glaces ou sorbets"].map((d) => (
                        <li key={d} className="flex items-center gap-3 text-sm text-offwhite/60">
                          <span className="text-gold/50 text-[8px] shrink-0">◆</span>{d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Stockfish */}
            <div className="relative border border-gold/20 bg-deepbrown">
              <div className="absolute -top-px -left-px -right-px -bottom-px border border-gold/10 m-2 pointer-events-none" />
              <div className="relative p-8 md:p-12">
                <div className="text-center mb-10">
                  <p className="text-[10px] tracking-[0.4em] uppercase text-gold/60 mb-4 font-light">Spécialité Maison</p>
                  <h3 className="text-2xl md:text-3xl text-offwhite tracking-wide mb-3">
                    Menu Stockfish
                  </h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-12 h-px bg-gold/40" />
                    <span className="text-gold text-sm">30 € · vin &amp; café compris</span>
                    <div className="w-12 h-px bg-gold/40" />
                  </div>
                  <p className="text-offwhite/30 text-xs italic max-w-sm mx-auto leading-relaxed">
                    Menu de groupe, sur réservation. Nous accueillons les cars.
                  </p>
                </div>
                <ul className="space-y-4 max-w-sm mx-auto">
                  {["Kir","Potage","Poule farcie ou tête de veau ou charcuterie","Estofinade — notre spécialité","Plateau de fromages","Dessert","Vin et café compris"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-offwhite/60">
                      <span className="text-gold/50 text-[8px] shrink-0">◆</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Menu du Jour */}
            <div className="relative border border-gold/20 bg-deepbrown">
              <div className="absolute -top-px -left-px -right-px -bottom-px border border-gold/10 m-2 pointer-events-none" />
              <div className="relative p-8 md:p-12">
                <div className="text-center mb-10">
                  <p className="text-[10px] tracking-[0.4em] uppercase text-gold/60 mb-4 font-light">Chaque Midi</p>
                  <h3 className="text-2xl md:text-3xl text-offwhite tracking-wide mb-3">
                    Menu du Jour
                  </h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-12 h-px bg-gold/40" />
                    <span className="text-gold text-sm">17 € · ¼ vin &amp; café compris</span>
                    <div className="w-12 h-px bg-gold/40" />
                  </div>
                  <p className="text-offwhite/30 text-xs italic max-w-md mx-auto leading-relaxed">
                    Servi chaque midi du lundi au vendredi · 3 entrées, 3 plats, fromage et desserts au choix.<br />
                    Un potage vous sera proposé en hiver.
                  </p>
                </div>
                <div className="max-w-sm mx-auto">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-8 h-px bg-gold/40" />
                    <p className="text-[11px] tracking-[0.35em] uppercase text-gold font-normal">Thèmes du jeudi</p>
                    <div className="flex-1 h-px bg-gold/15" />
                  </div>
                  <ul className="space-y-4">
                    {[
                      "1er jeudi — Tête de veau",
                      "2ème jeudi — Poule farcie",
                      "3ème jeudi — Choux farcis",
                      "4ème jeudi — Aligot saucisse à l'ail des ours",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-offwhite/60">
                        <span className="text-gold/50 text-[8px] shrink-0">◆</span>{item}
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
      <section className="py-24 md:py-32 bg-offwhite section-border relative overflow-hidden" id="carte">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold/70 mb-6 font-light">À la Carte</p>
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="w-20 h-px bg-gold/30" />
              <span className="text-gold text-lg">✦</span>
              <div className="w-20 h-px bg-gold/30" />
            </div>
            <h2 className="text-4xl md:text-6xl text-black mb-6 leading-tight">
              Nos Plats à la Carte
            </h2>
            <div className="flex items-center justify-center gap-6">
              <div className="w-20 h-px bg-gold/30" />
              <span className="text-gold text-lg">✦</span>
              <div className="w-20 h-px bg-gold/30" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 border border-black/10">
            {/* Entrées */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-black/10 bg-white">
              <div className="text-center mb-8">
                <p className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3 font-normal">Entrées</p>
                <div className="w-10 h-px bg-gold/40 mx-auto" />
              </div>
              <ul className="space-y-5">
                {[
                  { label: "Duo de foie gras et sa confiture", prix: "15 €" },
                  { label: "Carpaccio de saumon aux kiwis mangues", prix: "14 €" },
                  { label: "Noix de Saint-Jacques flambées aux kiwis", prix: "17 €" },
                  { label: "Assiette de charcuterie de l'Aveyron", prix: "11 €" },
                  { label: "Os à moelle gratiné aux champignons et son escalope de foie gras", prix: "19 €" },
                  { label: "Ris d'agneau à la crème d'ail", prix: "16 €" },
                ].map((item) => (
                  <li key={item.label} className="group">
                    <div className="flex items-end gap-2 text-sm">
                      <span className="text-black/70 leading-snug flex-1">{item.label}</span>
                      <span className="border-b border-dotted border-black/15 flex-1 min-w-4 mb-1" />
                      <span className="text-gold font-normal shrink-0 text-sm">{item.prix}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Plats */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-black/10 bg-white">
              <div className="text-center mb-8">
                <p className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3 font-normal">Plats</p>
                <div className="w-10 h-px bg-gold/40 mx-auto" />
              </div>
              <ul className="space-y-5">
                {[
                  { label: "Confit de canard, légumes ou aligot", prix: "16 €" },
                  { label: "Pot au feu de canard et ses légumes", prix: "18 €" },
                  { label: "Estofinade — notre spécialité", prix: "20 €" },
                  { label: "Ris de veau sauce madère, légumes et aligot", prix: "28 €" },
                  { label: "Entrecôte d'Aubrac ou Charolaise, légumes ou aligot", prix: "26 €" },
                  { label: "Souris d'agneau confite au pain d'épice", prix: "24 €" },
                  { label: "Tournedos Rossini sauce madérisée au foie gras", prix: "30 €" },
                  { label: "Magret de canard entier et sa sauce du moment", prix: "24 €" },
                  { label: "Poisson du moment", prix: "carte" },
                ].map((item) => (
                  <li key={item.label} className="group">
                    <div className="flex items-end gap-2 text-sm">
                      <span className="text-black/70 leading-snug flex-1">{item.label}</span>
                      <span className="border-b border-dotted border-black/15 flex-1 min-w-4 mb-1" />
                      <span className="text-gold font-normal shrink-0 text-sm">{item.prix}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-[10px] text-black/30 italic mt-6 text-center">Tous nos plats sont accompagnés de légumes de saison ou aligot.</p>
            </div>

            {/* Salades */}
            <div className="p-8 md:p-10 bg-white">
              <div className="text-center mb-8">
                <p className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3 font-normal">Salades</p>
                <div className="w-10 h-px bg-gold/40 mx-auto" />
              </div>
              <ul className="space-y-5">
                {[
                  { label: "Salade de Rocamadour chaud", prix: "13 €" },
                  { label: "Salade Aveyronnaise Roquefort", prix: "13 €" },
                  { label: "Salade de charcuterie", prix: "15 €" },
                  { label: "Salade de gésiers d'oie", prix: "13 €" },
                  { label: "Salade baltique saumon", prix: "18 €" },
                  { label: "Salade de duo de foie gras mi-cuit", prix: "21 €" },
                ].map((item) => (
                  <li key={item.label} className="group">
                    <div className="flex items-end gap-2 text-sm">
                      <span className="text-black/70 leading-snug flex-1">{item.label}</span>
                      <span className="border-b border-dotted border-black/15 flex-1 min-w-4 mb-1" />
                      <span className="text-gold font-normal shrink-0 text-sm">{item.prix}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-[10px] text-black/30 italic mt-6 text-center">Accompagnées suivant le thème et la saison.</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-block bg-deepbrown hover:bg-black text-offwhite font-normal text-xs px-12 py-5 tracking-[0.25em] uppercase transition-colors no-underline"
            >
              Réserver une table
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}