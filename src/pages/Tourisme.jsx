import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import { useLang } from '../i18n/LanguageContext';

const sitesMeta = [
  { distance: '30 km', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Abbatiale_Sainte-Foy_de_Conques_(vue_g%C3%A9n%C3%A9rale).jpg?width=800', url: 'https://www.tourisme-conques.fr/' },
  { distance: '40 km', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Belcastel-panorama.jpg?width=800', url: 'https://www.aveyron-tourisme.com/fr/decouvrir/villes-et-villages/belcastel' },
  { distance: '50 km', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cathedral_of_Our_Lady_of_Rodez_79.jpg?width=800', url: 'https://www.rodez-tourisme.fr/' },
  { distance: '40 km', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/5_Place_Champollion_in_Figeac_01.jpg?width=800', url: 'https://www.tourisme-figeac.com/' },
  { distance: '10 km', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Vue_partielle_sur_Aubin.jpg?width=800', url: 'https://www.tourisme-paysdecazevillois.fr/decouvrir/villes-villages/aubin/' },
  { distance: '100 km', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Viaduc_de_Millau_2015.jpg?width=800', url: 'https://www.explore-millau.com/' },
  { distance: '55 km', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Castle_of_Najac_04.jpg?width=800', url: 'https://www.aveyron-tourisme.com/fr/decouvrir/villes-et-villages/najac' },
  { distance: '45 km', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Villefranche-de-Rouergue_place_Notre-Dame.jpg?width=800', url: 'https://www.villefranche-tourisme.com/' },
];

const agendaUrls = [null, null, 'http://festival-decazeville.com/', 'http://www.hierunvillage.com/fr/'];

export default function Tourisme() {
  const { t } = useLang();
  const sitesData = t('tourismePage.sites');
  const agendaData = t('tourismePage.agenda');
  return (
    <>
      <Seo
        title="Tourisme en Aveyron — Sites & Activités"
        description="Découvrez l'Aveyron depuis Cransac-les-Thermes : Conques, Belcastel, Rodez, Figeac, thermes. Point de départ idéal pour vos excursions."
        path="/tourisme"
      />
      <PageHero
        title={t('tourismePage.heroTitle')}
        subtitle={t('tourismePage.heroSub')}
        image="/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC/logis-hotel-les-carillons-facade-cransac-957618.jpg"
        breadcrumb={[{ label: t('nav.tourisme') }]}
      />

      {/* Intro Cransac */}
      <section className="py-20 md:py-28 bg-white section-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="overline text-gold mb-5">{t('tourismePage.introSub')}</p>
              <h2 className="text-3xl md:text-[44px] text-black leading-tight mb-5">
                {t('tourismePage.introTitle').split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h2>
              <div className="w-12 h-px bg-black mb-7" />
              <p className="text-gray-mid leading-relaxed mb-4 text-base font-light">
                {t('tourismePage.introP1')}
              </p>
              <p className="text-gray-mid leading-relaxed mb-4 text-base font-light">
                {t('tourismePage.introP2')}
              </p>
              <a
                href="http://www.chainethermale.fr/cransac-les-thermes.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-black font-normal text-xs tracking-[0.15em] uppercase no-underline hover:text-gold transition-colors border-b border-black pb-0.5"
              >
                {t('tourismePage.introCta')} <span className="text-gold">→</span>
              </a>
            </div>
            <div>
              <img
              src="/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC/hotel-les-carillons-restaurant-cransac-678263%20(1).jpg"
              alt="L'hôtel Les Carillons, point de départ idéal pour explorer l'Aveyron"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sites touristiques */}
      <section className="py-20 md:py-28 bg-beige section-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="overline text-gold mb-4">{t('tourismePage.sitesSub')}</p>
            <h2 className="text-3xl md:text-[44px] text-black mb-5">
              {t('tourismePage.sitesTitle')}
            </h2>
            <div className="w-12 h-px bg-black mx-auto mb-5" />
            <p className="text-gray-mid max-w-2xl mx-auto leading-relaxed text-sm font-light">
              {t('tourismePage.sitesDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {sitesData.map((site, i) => (
              <a
                key={site.name}
                href={sitesMeta[i].url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white overflow-hidden border border-black/5 hover:border-gold/30 transition-colors no-underline"
                aria-label={`${t('tourismePage.discover')} ${site.name}`}
              >
                <img
                  src={sitesMeta[i].image}
                  alt={site.name}
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-normal text-black tracking-wide leading-tight" style={{ fontFamily: 'var(--font-body)', textTransform: 'none' }}>{site.name}</h3>
                    <span className="text-xs text-gold font-light shrink-0 ml-2">{sitesMeta[i].distance}</span>
                  </div>
                  <div className="w-5 h-px bg-gold mb-3" />
                  <p className="text-gray-mid text-sm leading-relaxed font-light">{site.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-gold text-xs transition-colors group-hover:text-gold-dark">
                    {t('tourismePage.seeMore')} <span>→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda local */}
      <section className="py-20 md:py-28 bg-white section-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="overline text-gold mb-4">{t('tourismePage.agendaSub')}</p>
            <h2 className="text-3xl text-black mb-5">{t('tourismePage.agendaTitle')}</h2>
            <div className="w-12 h-px bg-black mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {agendaData.map((item, i) => (
              <div key={item.title} className="bg-beige p-6 md:p-8 border border-black/5">
                <h3 className="text-sm font-normal text-black mb-4 tracking-wide uppercase" style={{ fontFamily: 'var(--font-body)' }}>{item.title}</h3>
                <div className="w-8 h-px bg-gold mb-4" />
                <p className="text-gray-mid text-sm leading-relaxed font-light">{item.desc}</p>
                {agendaUrls[i] && (
                  <a
                    href={agendaUrls[i]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-gold text-xs no-underline hover:text-gold-dark transition-colors"
                  >
                    {t('tourismePage.seeMore')} <span>→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-mid text-xs mt-10 font-light">
            {t('tourismePage.moreInfo')} :{' '}
            <a href="http://www.aveyron-tourisme.fr" target="_blank" rel="noopener noreferrer" className="text-gold no-underline hover:text-gold-dark">aveyron-tourisme.fr</a>
            {' · '}
            <a href="http://www.cransac-les-thermes.fr" target="_blank" rel="noopener noreferrer" className="text-gold no-underline hover:text-gold-dark">cransac-les-thermes.fr</a>
          </p>
        </div>
      </section>
    </>
  );
}
