import { Link } from 'react-router-dom';

export default function HotelSection() {
  return (
    <section className="flex flex-col md:flex-row section-border" style={{ minHeight: '520px' }}>
      {/* Image — left half, full-bleed */}
      <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden img-card">
        <img
          src="/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC/logis-hotel-les-carillons-jardins-et-terrasses-cransac-82034.jpg"
          alt="Parc et jardins de l'hôtel Les Carillons"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Text — right half */}
      <div className="md:w-1/2 bg-white flex flex-col justify-center px-8 py-16 md:px-16 md:py-24">
        <p className="overline text-gold mb-4">
          Hébergement
        </p>
        <h2 className="text-3xl md:text-[44px] text-black mb-5 leading-tight">
          L'Hôtel
        </h2>
        <div className="w-16 h-px bg-black mb-7" />
        <p className="text-gray-mid leading-relaxed mb-4 text-base max-w-sm">
          Nos 17 chambres vous offrent un cadre calme et confortable à Cransac-les-Thermes.
          Literie de qualité, salle de bain privative, TV et Wi-Fi gratuit.
        </p>
        <p className="text-gray-mid leading-relaxed mb-9 text-base max-w-sm">
          Idéalement situé à proximité des thermes, l'hôtel est le point de départ
          parfait pour explorer l'Aveyron et ses trésors.
        </p>
        <Link
          to="/hotel"
          className="self-start inline-flex items-center gap-2 text-black font-normal text-xs tracking-[0.15em] uppercase no-underline hover:text-gold transition-colors border-b border-black pb-0.5"
        >
          Voir les chambres <span className="text-gold">→</span>
        </Link>
      </div>
    </section>
  );
}
