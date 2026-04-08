import { Link } from 'react-router-dom';

const sites = [
  'Conques', 'Belcastel', 'Rodez', 'Millau',
  'Figeac', 'Decazeville', 'Villefranche-de-Rouergue', 'Najac',
];

export default function TourismeTeaser() {
  return (
    <section className="relative flex items-center justify-center text-white text-center py-32 md:py-40 section-border">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC/logis-hotel-les-carillons-jardins-et-autres-exterieurs-crans.jpg"
          alt="Extérieurs et jardins de l'hôtel Les Carillons"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(75,56,46,0.75)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <p className="overline text-gold mb-6">
          Tourisme
        </p>
        <h2 className="text-3xl md:text-5xl text-white mb-5 leading-tight">
          Aux confins du Lot,<br />du Cantal et de l'Aveyron
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mb-7" />
        <p className="text-white/70 max-w-xl mx-auto mb-10 leading-relaxed text-base font-light">
          Cransac-les-Thermes est idéalement situé pour découvrir les plus beaux
          sites du sud-ouest. Entre causses, vallées et villages classés, l'Aveyron
          regorge de trésors à explorer.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {sites.map((site) => (
            <span
              key={site}
              className="border border-white/20 text-white/70 text-xs px-4 py-1.5 tracking-wide font-light"
            >
              {site}
            </span>
          ))}
        </div>

        <Link
          to="/tourisme"
          className="inline-flex items-center gap-2 border border-gold/60 text-gold font-normal text-xs tracking-[0.2em] uppercase no-underline hover:bg-gold hover:text-white transition-colors px-10 py-4"
        >
          Découvrir la région <span>→</span>
        </Link>
      </div>
    </section>
  );
}
