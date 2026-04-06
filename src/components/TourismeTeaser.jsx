import { Link } from 'react-router-dom';

const sites = [
  'Conques', 'Belcastel', 'Rodez', 'Millau',
  'Figeac', 'Decazeville', 'Villefranche-de-Rouergue', 'Najac',
];

export default function TourismeTeaser() {
  return (
    <section className="relative flex items-center justify-center text-white text-center py-28 md:py-36">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC/logis-hotel-les-carillons-jardins-et-autres-exterieurs-crans.jpg"
          alt="Extérieurs et jardins de l'hôtel Les Carillons"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(45,45,45,0.70)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold mb-6">
          Tourisme
        </p>
        <h2 className="text-3xl md:text-5xl text-white mb-5 leading-tight">
          Aux confins du Lot,<br />du Cantal et de l'Aveyron
        </h2>
        <div className="w-10 h-px bg-gold mx-auto mb-7" />
        <p className="text-white/80 max-w-xl mx-auto mb-10 leading-relaxed text-[15px] font-light">
          Cransac-les-Thermes est idéalement situé pour découvrir les plus beaux
          sites du sud-ouest. Entre causses, vallées et villages classés, l'Aveyron
          regorge de trésors à explorer.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {sites.map((site) => (
            <span
              key={site}
              className="border border-white/30 text-white/80 text-xs px-4 py-1.5 tracking-wide"
            >
              {site}
            </span>
          ))}
        </div>

        <Link
          to="/tourisme"
          className="inline-flex items-center gap-2 border border-gold text-gold font-semibold text-xs tracking-[0.2em] uppercase no-underline hover:bg-gold hover:text-white transition-colors px-8 py-3.5"
        >
          Découvrir la région <span>→</span>
        </Link>
      </div>
    </section>
  );
}
