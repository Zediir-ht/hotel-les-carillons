import Reveal from './Reveal';

export default function IntroSection() {
  return (
    <section className="py-24 md:py-32 bg-offwhite section-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <Reveal from="left">
          <div>
            <p className="overline text-gold mb-5">
              Bienvenue
            </p>
            <h2 className="text-3xl md:text-[44px] text-black leading-tight mb-5">
              Un accueil familial<br />au cœur de l'Aveyron
            </h2>
            <div className="w-16 h-px bg-black mb-7" />
            <p className="text-gray-mid leading-relaxed mb-4 text-base">
              Nathalie, Florian et Assia vous accueillent dans leur hôtel-restaurant
              familial, niché au cœur de Cransac-les-Thermes en Aveyron. Depuis
              plusieurs années, la famille perpétue une tradition d'hospitalité chaleureuse
              et authentique, dans un cadre verdoyant et reposant.
            </p>
            <p className="text-gray-mid leading-relaxed mb-8 text-base">
              Labellisé <strong className="text-black font-normal">Logis Hôtels</strong>, Les Carillons vous offre le confort
              d'un établissement de qualité avec l'âme d'une maison de famille.
            </p>
            <a
              href="https://www.logishotels.com/fr/hotel/logis-hotel-les-carillons-4588"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black font-normal text-xs tracking-[0.15em] uppercase no-underline hover:text-gold transition-colors border-b border-black pb-0.5"
            >
              Label Logis Hôtels <span className="text-gold">→</span>
            </a>
          </div>
          </Reveal>

          {/* Photo */}
          <Reveal from="right" delay={150}>
          <div className="relative overflow-hidden img-card">
            <img
              src="/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC/logis-hotel-les-carillons-facade-cransac-735654.jpg"
              alt="Façade de l'hôtel Les Carillons à Cransac-les-Thermes"
              className="w-full object-cover"
              style={{ aspectRatio: '0.85' }}
            />
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
