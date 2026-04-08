import { Link } from 'react-router-dom';

export default function RestaurantSection() {
  return (
    <section className="flex flex-col md:flex-row-reverse section-border" style={{ minHeight: '520px' }}>
      {/* Image — right half, full-bleed */}
      <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden order-1 md:order-none img-card">
        <img
          src="/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC/logis-hotel-les-carillons-plats-cransac-285852.jpg"
          alt="Plat du restaurant Les Carillons, cuisine du terroir aveyronnais"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Text — left half */}
      <div className="md:w-1/2 bg-beige flex flex-col justify-center px-8 py-16 md:px-16 md:py-24 order-2 md:order-none">
        <p className="overline text-gold mb-4">
          Gastronomie
        </p>
        <h2 className="text-3xl md:text-[44px] text-black mb-5 leading-tight">
          Le Restaurant
        </h2>
        <div className="w-16 h-px bg-black mb-7" />
        <p className="text-gray-mid leading-relaxed mb-4 text-base max-w-sm">
          Notre chef vous propose une cuisine maison généreuse, élaborée à partir
          de produits frais et locaux. Savourez les saveurs du terroir aveyronnais
          dans une ambiance conviviale et familiale.
        </p>
        <p className="text-gray-mid leading-relaxed mb-9 text-base max-w-sm">
          Menus, carte et repas à thèmes vous attendent tout au long de l'année.
          Ouvert aux résidents et aux visiteurs extérieurs.
        </p>
        <Link
          to="/restaurant"
          className="self-start inline-flex items-center gap-2 text-black font-normal text-xs tracking-[0.15em] uppercase no-underline hover:text-gold transition-colors border-b border-black pb-0.5"
        >
          Voir la carte <span className="text-gold">→</span>
        </Link>
      </div>
    </section>
  );
}
