import PageHero from '../components/PageHero';

const sites = [
  {
    name: 'Conques',
    desc: 'Monument majeur du patrimoine sur le chemin de Saint-Jacques-de-Compostelle. Son abbatiale abrite un trésor incomparable de sculptures romanes.',
    distance: '30 km',
    url: 'http://www.tourisme-conques.fr/',
  },
  {
    name: 'Belcastel',
    desc: 'L\'un des plus beaux villages de France, lové au fond de la vallée de l\'Aveyron. Patrimoine médiéval d\'une richesse rare.',
    distance: '40 km',
    url: 'http://www.mairie-belcastel.fr/',
  },
  {
    name: 'Rodez & Musée Soulages',
    desc: 'Fondée il y a plus de 2000 ans, Rodez et sa cathédrale vous accueillent. Le musée Soulages attire des visiteurs du monde entier.',
    distance: '50 km',
    url: 'http://tourisme.grand-rodez.com/',
  },
  {
    name: 'Figeac — Cité de Champollion',
    desc: 'Labellisée Ville d\'art et d\'histoire, Figeac est la patrie de Champollion, déchiffreur des hiéroglyphes.',
    distance: '40 km',
    url: 'http://www.tourisme-figeac.com/',
  },
  {
    name: 'Aubin',
    desc: 'L\'une des plus anciennes villes du Rouergue. Découvrez le site du Fort et du Vieil Aubin ainsi que le Musée de la Mine.',
    distance: '10 km',
    url: 'http://www.aubin12.com/',
  },
  {
    name: 'Millau',
    desc: 'Porte d\'entrée des Gorges du Tarn, connue pour son viaduc spectaculaire et ses paysages grandioses.',
    distance: '100 km',
  },
  {
    name: 'Vallées & Nature',
    desc: 'Vallée du Lot, Gorges du Tarn et de l\'Aveyron, Laguiole, Aubrac… des paysages d\'une rare diversité.',
    distance: 'Région',
  },
  {
    name: 'Sites emblématiques',
    desc: 'Caves de Roquefort, Rocamadour, Padirac, Saint-Cirq-Lapopie, Cahors… un patrimoine exceptionnel à portée de main.',
    distance: 'Région',
  },
];

const agenda = [
  {
    title: 'Marché hebdomadaire',
    desc: 'Le samedi de 13h à 15h30, Place Jean Jaurès — primeurs, fromagers, bouchers, vêtements, fleurs…',
  },
  {
    title: 'Marchés de producteurs de pays',
    desc: 'De juin à septembre, le mardi tous les 15 jours à 18h, Place Jean Jaurès. Producteurs fermiers et artisanaux.',
  },
  {
    title: 'Festival de feux d\'artifice',
    desc: 'Au cœur de l\'ancienne mine à ciel ouvert de Decazeville, les meilleurs artificiers du monde s\'affrontent.',
    url: 'http://festival-decazeville.com/',
  },
  {
    title: 'Hier un village à Flagnac',
    desc: 'Spectacle vivant retraçant la vie rurale aveyronnaise du siècle dernier, porté par le personnage de Jeannou.',
    url: 'http://www.hierunvillage.com/fr/',
  },
];

export default function Tourisme() {
  return (
    <>
      <PageHero
        title="Tourisme en Aveyron"
        subtitle="Aux confins du Lot, du Cantal et de l'Aveyron"
        image="/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC/logis-hotel-les-carillons-facade-cransac-957618.jpg"
        breadcrumb={[{ label: 'Tourisme' }]}
      />

      {/* Intro Cransac */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold mb-5">Bienvenue</p>
              <h2 className="text-3xl md:text-4xl text-brown leading-tight mb-5">
                Bienvenue à<br />Cransac-les-Thermes
              </h2>
              <div className="w-10 h-px bg-gold mb-7" />
              <p className="text-gray-500 leading-relaxed mb-4 text-[15px]">
                Charmante petite station thermale ensoleillée, aux confins du Lot,
                du Cantal et de l'Aveyron, au cœur d'une nature préservée et
                généreuse, offrant des paysages d'une rare diversité, propice à la
                pratique de nombreux sports et loisirs.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4 text-[15px]">
                Avec des thermes modernes gérés par la{' '}
                <strong className="text-brown font-semibold">Chaîne Thermale du Soleil</strong>,
                des équipements adaptés et un thermalisme unique et original,
                Cransac-les-Thermes entre dans le XXIème siècle sous le signe
                d'une vitalité nouvelle.
              </p>
              <a
                href="http://www.chainethermale.fr/cransac-les-thermes.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brown font-semibold text-xs tracking-[0.15em] uppercase no-underline hover:text-gold transition-colors border-b border-gold pb-0.5"
              >
                Les thermes de Cransac <span className="text-gold">→</span>
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
      <section className="py-16 md:py-24 bg-warm">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold mb-4">À proximité</p>
            <h2 className="text-3xl md:text-4xl text-brown mb-5">
              Sites touristiques exceptionnels
            </h2>
            <div className="w-10 h-px bg-gold mx-auto mb-5" />
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm">
              Point de départ idéal pour la visite d'une multitude de sites
              touristiques exceptionnels — villages classés, villes d'art,
              gorges et paysages d'Aveyron.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {sites.map((site) => (
              <div
                key={site.name}
                className="bg-white overflow-hidden hover:shadow-sm transition-shadow"
              >
                <img
                  src="/images/placeholder.jpg"
                  alt={`Vue de ${site.name}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-brown tracking-wide leading-tight">{site.name}</h3>
                    <span className="text-xs text-gold font-light shrink-0 ml-2">{site.distance}</span>
                  </div>
                  <div className="w-5 h-px bg-gold mb-3" />
                  <p className="text-gray-500 text-sm leading-relaxed">{site.desc}</p>
                  {site.url && (
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-gold text-xs no-underline hover:text-gold-dark transition-colors"
                    >
                      Voir le site <span>→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda local */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold mb-4">Animations</p>
            <h2 className="text-3xl text-brown mb-5">Vie locale & animations</h2>
            <div className="w-10 h-px bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {agenda.map((item) => (
              <div key={item.title} className="bg-warm p-6 md:p-8">
                <h3 className="text-sm font-semibold text-brown mb-4 tracking-wide uppercase">{item.title}</h3>
                <div className="w-8 h-px bg-gold mb-4" />
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-gold text-xs no-underline hover:text-gold-dark transition-colors"
                  >
                    Voir le site <span>→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-10">
            Plus d'infos :{' '}
            <a href="http://www.aveyron-tourisme.fr" target="_blank" rel="noopener noreferrer" className="text-gold no-underline hover:text-gold-dark">aveyron-tourisme.fr</a>
            {' · '}
            <a href="http://www.cransac-les-thermes.fr" target="_blank" rel="noopener noreferrer" className="text-gold no-underline hover:text-gold-dark">cransac-les-thermes.fr</a>
          </p>
        </div>
      </section>
    </>
  );
}
