import { Link } from 'react-router-dom';

export default function RestaurantSection() {
  return (
    <section className="flex flex-col md:flex-row-reverse" style={{ minHeight: '520px' }}>
      {/* Image — right half, full-bleed */}
      <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden order-1 md:order-none">
        <img
          src="/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC/logis-hotel-les-carillons-plats-cransac-285852.jpg"
          alt="Plat du restaurant Les Carillons, cuisine du terroir aveyronnais"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Text — left half */}
      <div className="md:w-1/2 bg-warm flex flex-col justify-center px-8 py-14 md:px-16 md:py-20 order-2 md:order-none">
        <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold mb-4">
          Gastronomie
        </p>
        <h2 className="text-3xl md:text-4xl text-brown mb-5 leading-tight">
          Le Restaurant
        </h2>
        <div className="w-10 h-px bg-gold mb-7" />
        <p className="text-gray-500 leading-relaxed mb-4 text-[15px] max-w-sm">
          Notre chef vous propose une cuisine maison généreuse, élaborée à partir
          de produits frais et locaux. Savourez les saveurs du terroir aveyronnais
          dans une ambiance conviviale et familiale.
        </p>
        <p className="text-gray-500 leading-relaxed mb-9 text-[15px] max-w-sm">
          Menus, carte et repas à thèmes vous attendent tout au long de l'année.
          Ouvert aux résidents et aux visiteurs extérieurs.
        </p>
        <Link
          to="/restaurant"
          className="self-start inline-flex items-center gap-2 text-brown font-semibold text-xs tracking-[0.15em] uppercase no-underline hover:text-gold transition-colors border-b border-gold pb-0.5"
        >
          Voir la carte <span className="text-gold">→</span>
        </Link>
      </div>
    </section>
  );
}
