import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import SectionBlock from '../components/SectionBlock';
import Carousel from '../components/Carousel';
import { useLang } from '../i18n/LanguageContext';

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
  const { t } = useLang();
  const horaires = t('restaurantPage.horaires');
  const menusList = t('restaurantPage.menus');
  return (
    <>
      <Seo
        title="Restaurant — Cuisine du Terroir Aveyronnais"
        description="Restaurant Les Carillons à Cransac-les-Thermes. Cuisine familiale faite maison, produits du terroir, menu du jour, carte gastronomique, spécialité Stockfish."
        path="/restaurant"
      />
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
          <p className="text-[11px] tracking-[0.35em] uppercase text-offwhite/70 mb-5">{t('restaurantPage.heroOverline')}</p>
          <h1 className="text-offwhite text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-5">
            {t('restaurantPage.heroTitle1')}
            <br />
            <span className="text-gold">{t('restaurantPage.heroTitle2')}</span>
          </h1>
          <div className="w-24 h-px bg-gold mb-6" />
          <p className="text-offwhite/80 text-sm md:text-lg leading-relaxed max-w-xl">
            {t('restaurantPage.heroDesc')}
          </p>

          <div className="hidden lg:block absolute right-14 bottom-12 w-[340px] xl:w-[380px]">
            <div className="bg-offwhite/95 p-3 shadow-2xl border border-gold/30">
              <img
                src={`${IMG}/logis-hotel-les-carillons-plats-cransac-492855.jpg`}
                alt="Assiette signature du restaurant Les Carillons"
                className="w-full h-48 object-cover"
              />
              <p className="text-[10px] tracking-[0.28em] uppercase text-deepbrown/70 mt-3 text-center">
                {t('restaurantPage.heroCaption')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionBlock
        title={t('restaurantPage.section1Title')}
        subtitle={t('restaurantPage.section1Sub')}
        image={`${IMG}/hotel-les-carillons-restaurant-cransac-678263.jpg`}
        imageAlt="Salle du restaurant Les Carillons"
        imageLeft
      >
        <p>{t('restaurantPage.section1P1')}</p>
        <p>{t('restaurantPage.section1P2')}</p>
        <p>{t('restaurantPage.section1P3')}</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 mt-2 text-black font-normal text-xs tracking-[0.15em] uppercase no-underline hover:text-gold transition-colors border-b border-black pb-0.5"
        >
          {t('restaurantPage.section1Cta')} <span className="text-gold">&rarr;</span>
        </Link>
      </SectionBlock>

      {/* Horaires & infos */}
      <section className="py-20 md:py-28 bg-beige section-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <p className="overline text-gold mb-4">{t('restaurantPage.horairesSub')}</p>
              <h2 className="text-2xl md:text-[32px] text-black mb-5">{t('restaurantPage.horairesTitle')}</h2>
              <div className="w-12 h-px bg-black mb-7" />
              <ul className="space-y-4">
                {horaires.map((item) => (
                  <li key={item.label} className="flex gap-4 text-sm">
                    <span className="w-4 h-px bg-gold block shrink-0 mt-2.5" />
                    <div>
                      <span className="font-normal text-black">{item.label} &mdash; </span>
                      <span className="text-gray-mid">{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="overline text-gold mb-4">{t('restaurantPage.menusSub')}</p>
              <h2 className="text-2xl md:text-[32px] text-black mb-5">{t('restaurantPage.menusTitle')}</h2>
              <div className="w-12 h-px bg-black mb-7" />
              <ul className="space-y-4">
                {menusList.map((item) => (
                  <li key={item.title}>
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
              alt="Salle de reception Les Carillons"
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
            <p className="overline text-gold mb-4">{t('restaurantPage.galerieSub')}</p>
            <h2 className="text-4xl md:text-5xl text-offwhite mb-5">
              {t('restaurantPage.galerieTitle')}
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mb-5" />
            <p className="text-offwhite/50 text-sm max-w-md mx-auto leading-relaxed font-light">
              {t('restaurantPage.galerieDesc')}
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
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold/70 mb-6 font-light">{t('restaurantPage.nosMenusOverline')}</p>
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="w-20 h-px bg-gold/30" />
              <span className="text-gold text-lg">&starf;</span>
              <div className="w-20 h-px bg-gold/30" />
            </div>
            <h2 className="text-4xl md:text-6xl text-offwhite mb-6 leading-tight">
              {t('restaurantPage.nosMenusTitle')}
            </h2>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-20 h-px bg-gold/30" />
              <span className="text-gold text-lg">&starf;</span>
              <div className="w-20 h-px bg-gold/30" />
            </div>
            <p className="text-offwhite/40 text-sm max-w-lg mx-auto leading-relaxed font-light italic">
              {t('restaurantPage.nosMenusDisclaimer')}
            </p>
          </div>

          <div className="space-y-16">

            {/* Menu Terroir & Gastronomique */}
            <div className="relative border border-gold/20 bg-deepbrown">
              <div className="absolute -top-px -left-px -right-px -bottom-px border border-gold/10 m-2 pointer-events-none" />
              <div className="relative p-8 md:p-12">
                <div className="text-center mb-10">
                  <p className="text-[10px] tracking-[0.4em] uppercase text-gold/60 mb-4 font-light">{t('restaurantPage.terroirOverline')}</p>
                  <h3 className="text-2xl md:text-3xl text-offwhite tracking-wide mb-3">
                    {t('restaurantPage.terroirTitle')}
                  </h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-12 h-px bg-gold/40" />
                    <span className="text-gold text-sm">{t('restaurantPage.terroirPrice')}</span>
                    <div className="w-12 h-px bg-gold/40" />
                  </div>
                  <p className="text-offwhite/30 text-xs italic max-w-md mx-auto leading-relaxed">
                    {t('restaurantPage.terroirDisclaimer')}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-px bg-gold/40" />
                      <p className="text-[11px] tracking-[0.35em] uppercase text-gold font-normal">{t('restaurantPage.entreesLabel')}</p>
                      <div className="flex-1 h-px bg-gold/15" />
                    </div>
                    <ul className="space-y-4">
                      {[
                        { label: "Assiette de charcuterie de l'Aveyron" },
                        { label: "Croustillant de Rocamadour aux noix" },
                        { label: "Salade de g\u00E9siers d'oie" },
                        { label: "Duo de foie gras mi-cuit et sa confiture", sup: "+4 \u20AC" },
                        { label: "Carpaccio de saumon" },
                        { label: "Escalope de foie gras et son chutney du moment", sup: "+6 \u20AC" },
                        { label: "Carpaccio de tomates au pesto et sa burrata" },
                        { label: "Press\u00E9 de b\u0153uf aux petits l\u00E9gumes sauce ravigote" },
                        { label: "Nage de la mer et ses Saint-Jacques", sup: "+5 \u20AC" },
                      ].map((item) => (
                        <li key={item.label} className="flex items-start gap-3 text-sm text-offwhite/60 leading-relaxed">
                          <span className="text-gold/50 text-[8px] mt-1.5 shrink-0">&diams;</span>
                          <span className="flex-1">{item.label}</span>
                          {item.sup && <span className="text-gold text-xs shrink-0 mt-0.5">{item.sup}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-px bg-gold/40" />
                      <p className="text-[11px] tracking-[0.35em] uppercase text-gold font-normal">{t('restaurantPage.platsLabel')}</p>
                      <div className="flex-1 h-px bg-gold/15" />
                    </div>
                    <ul className="space-y-4">
                      {[
                        { label: "Pot au feu de canard et ses l\u00E9gumes" },
                        { label: "Notre sp\u00E9cialit\u00E9 \u2014 Estofinade Aveyronnaise" },
                        { label: "Filet mignon de porc, farce fine de veau au chorizo, cr\u00E9meux de patate douce" },
                        { label: "Ris de veau aux Morilles sauce mad\u00E8re et pommes grenailles confites", sup: "+8 \u20AC" },
                        { label: "Magret de canard entier, sauce du moment et millefeuille de pomme de terre", sup: "+4 \u20AC" },
                        { label: "Cabillaud sauce \u00E0 l'ail vanill\u00E9e et son risotto", sup: "+3 \u20AC" },
                        { label: "Souris d'agneau confite au pain d'\u00E9pice et l\u00E9gumes de saison", sup: "+4 \u20AC" },
                        { label: "Tournedos Rossini, sauce mad\u00E9ris\u00E9e au foie gras et l\u00E9gumes de saison", sup: "+10 \u20AC" },
                      ].map((item) => (
                        <li key={item.label} className="flex items-start gap-3 text-sm text-offwhite/60 leading-relaxed">
                          <span className="text-gold/50 text-[8px] mt-1.5 shrink-0">&diams;</span>
                          <span className="flex-1">{item.label}</span>
                          {item.sup && <span className="text-gold text-xs shrink-0 mt-0.5">{item.sup}</span>}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-offwhite/25 italic mt-5 pl-5">{t('restaurantPage.platsNote')}</p>
                  </div>
                </div>

                <div className="border-t border-gold/15 mt-10 pt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-8 h-px bg-gold/40" />
                      <p className="text-[11px] tracking-[0.35em] uppercase text-gold font-normal">{t('restaurantPage.fromagesLabel')}</p>
                      <div className="flex-1 h-px bg-gold/15" />
                    </div>
                    <p className="text-sm text-offwhite/60 pl-5">{t('restaurantPage.fromagesDesc')}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-8 h-px bg-gold/40" />
                      <p className="text-[11px] tracking-[0.35em] uppercase text-gold font-normal">{t('restaurantPage.dessertsLabel')}</p>
                      <div className="flex-1 h-px bg-gold/15" />
                    </div>
                    <ul className="space-y-3">
                      {["Salade de fruits frais","Fondant au chocolat et sa boule de glace","Nougat glac\u00E9","Dame blanche","Caf\u00E9 ou chocolat li\u00E9geois","P\u00EAche Melba","Large choix de glaces ou sorbets"].map((d) => (
                        <li key={d} className="flex items-center gap-3 text-sm text-offwhite/60">
                          <span className="text-gold/50 text-[8px] shrink-0">&diams;</span>{d}
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
                  <p className="text-[10px] tracking-[0.4em] uppercase text-gold/60 mb-4 font-light">{t('restaurantPage.stockfishOverline')}</p>
                  <h3 className="text-2xl md:text-3xl text-offwhite tracking-wide mb-3">
                    {t('restaurantPage.stockfishTitle')}
                  </h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-12 h-px bg-gold/40" />
                    <span className="text-gold text-sm">{t('restaurantPage.stockfishPrice')}</span>
                    <div className="w-12 h-px bg-gold/40" />
                  </div>
                  <p className="text-offwhite/30 text-xs italic max-w-sm mx-auto leading-relaxed">
                    {t('restaurantPage.stockfishNote')}
                  </p>
                </div>
                <ul className="space-y-4 max-w-sm mx-auto">
                  {["Kir","Potage","Poule farcie ou t\u00EAte de veau ou charcuterie","Estofinade \u2014 notre sp\u00E9cialit\u00E9","Plateau de fromages","Dessert","Vin et caf\u00E9 compris"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-offwhite/60">
                      <span className="text-gold/50 text-[8px] shrink-0">&diams;</span>{item}
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
                  <p className="text-[10px] tracking-[0.4em] uppercase text-gold/60 mb-4 font-light">{t('restaurantPage.jourOverline')}</p>
                  <h3 className="text-2xl md:text-3xl text-offwhite tracking-wide mb-3">
                    {t('restaurantPage.jourTitle')}
                  </h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-12 h-px bg-gold/40" />
                    <span className="text-gold text-sm">{t('restaurantPage.jourPrice')}</span>
                    <div className="w-12 h-px bg-gold/40" />
                  </div>
                  <p className="text-offwhite/30 text-xs italic max-w-md mx-auto leading-relaxed">
                    {t('restaurantPage.jourNote')}<br />
                    {t('restaurantPage.jourWinter')}
                  </p>
                </div>
                <div className="max-w-sm mx-auto">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-8 h-px bg-gold/40" />
                    <p className="text-[11px] tracking-[0.35em] uppercase text-gold font-normal">{t('restaurantPage.thursdayLabel')}</p>
                    <div className="flex-1 h-px bg-gold/15" />
                  </div>
                  <ul className="space-y-4">
                    {[
                      "1er jeudi \u2014 T\u00EAte de veau",
                      "2\u00E8me jeudi \u2014 Poule farcie",
                      "3\u00E8me jeudi \u2014 Choux farcis",
                      "4\u00E8me jeudi \u2014 Aligot saucisse \u00E0 l'ail des ours",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-offwhite/60">
                        <span className="text-gold/50 text-[8px] shrink-0">&diams;</span>{item}
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
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold/70 mb-6 font-light">{t('restaurantPage.carteOverline')}</p>
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="w-20 h-px bg-gold/30" />
              <span className="text-gold text-lg">&starf;</span>
              <div className="w-20 h-px bg-gold/30" />
            </div>
            <h2 className="text-4xl md:text-6xl text-black mb-6 leading-tight">
              {t('restaurantPage.carteTitle')}
            </h2>
            <div className="flex items-center justify-center gap-6">
              <div className="w-20 h-px bg-gold/30" />
              <span className="text-gold text-lg">&starf;</span>
              <div className="w-20 h-px bg-gold/30" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 border border-black/10">
            {/* Entrees */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-black/10 bg-white">
              <div className="text-center mb-8">
                <p className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3 font-normal">{t('restaurantPage.entreesLabel')}</p>
                <div className="w-10 h-px bg-gold/40 mx-auto" />
              </div>
              <ul className="space-y-5">
                {[
                  { label: "Duo de foie gras et sa confiture", prix: "15 \u20AC" },
                  { label: "Carpaccio de saumon aux kiwis mangues", prix: "14 \u20AC" },
                  { label: "Noix de Saint-Jacques flamb\u00E9es aux kiwis", prix: "17 \u20AC" },
                  { label: "Assiette de charcuterie de l'Aveyron", prix: "11 \u20AC" },
                  { label: "Os \u00E0 moelle gratin\u00E9 aux champignons et son escalope de foie gras", prix: "19 \u20AC" },
                  { label: "Ris d'agneau \u00E0 la cr\u00E8me d'ail", prix: "16 \u20AC" },
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
                <p className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3 font-normal">{t('restaurantPage.platsLabel')}</p>
                <div className="w-10 h-px bg-gold/40 mx-auto" />
              </div>
              <ul className="space-y-5">
                {[
                  { label: "Confit de canard, l\u00E9gumes ou aligot", prix: "16 \u20AC" },
                  { label: "Pot au feu de canard et ses l\u00E9gumes", prix: "18 \u20AC" },
                  { label: "Estofinade \u2014 notre sp\u00E9cialit\u00E9", prix: "20 \u20AC" },
                  { label: "Ris de veau sauce mad\u00E8re, l\u00E9gumes et aligot", prix: "28 \u20AC" },
                  { label: "Entrec\u00F4te d'Aubrac ou Charolaise, l\u00E9gumes ou aligot", prix: "26 \u20AC" },
                  { label: "Souris d'agneau confite au pain d'\u00E9pice", prix: "24 \u20AC" },
                  { label: "Tournedos Rossini sauce mad\u00E9ris\u00E9e au foie gras", prix: "30 \u20AC" },
                  { label: "Magret de canard entier et sa sauce du moment", prix: "24 \u20AC" },
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
              <p className="text-[10px] text-black/30 italic mt-6 text-center">{t('restaurantPage.platsNote')}</p>
            </div>

            {/* Salades */}
            <div className="p-8 md:p-10 bg-white">
              <div className="text-center mb-8">
                <p className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3 font-normal">{t('restaurantPage.saladesLabel')}</p>
                <div className="w-10 h-px bg-gold/40 mx-auto" />
              </div>
              <ul className="space-y-5">
                {[
                  { label: "Salade de Rocamadour chaud", prix: "13 \u20AC" },
                  { label: "Salade Aveyronnaise Roquefort", prix: "13 \u20AC" },
                  { label: "Salade de charcuterie", prix: "15 \u20AC" },
                  { label: "Salade de g\u00E9siers d'oie", prix: "13 \u20AC" },
                  { label: "Salade baltique saumon", prix: "18 \u20AC" },
                  { label: "Salade de duo de foie gras mi-cuit", prix: "21 \u20AC" },
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
              <p className="text-[10px] text-black/30 italic mt-6 text-center">{t('restaurantPage.saladesNote')}</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-block bg-deepbrown hover:bg-black text-offwhite font-normal text-xs px-12 py-5 tracking-[0.25em] uppercase transition-colors no-underline"
            >
              {t('restaurantPage.reserveCta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}