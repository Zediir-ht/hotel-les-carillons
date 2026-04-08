import { Link } from 'react-router-dom';

export default function MeublesSection() {
  return (
    <section className="flex flex-col md:flex-row section-border" style={{ minHeight: '520px' }}>
      {/* Image — left half, full-bleed */}
      <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden img-card">
        <img
          src="/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC/logis-hotel-les-carillons-jardins-et-terrasses-cransac-28636.jpg"
          alt="Jardins et parc de la résidence Les Cèdres"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Text — right half */}
      <div className="md:w-1/2 bg-white flex flex-col justify-center px-8 py-16 md:px-16 md:py-24">
        <p className="overline text-gold mb-4">
          Meublés
        </p>
        <h2 className="text-3xl md:text-[44px] text-black mb-5 leading-tight">
          Résidence Les Cèdres
        </h2>
        <div className="w-16 h-px bg-black mb-7" />
        <p className="text-gray-mid leading-relaxed mb-6 text-base max-w-sm">
          À deux pas de l'hôtel, la résidence Les Cèdres vous propose 11 appartements
          meublés tout confort, idéaux pour les séjours longue durée ou les familles.
        </p>
        <ul className="space-y-2.5 mb-9">
          {[
            '11 appartements équipés',
            'Piscine partagée',
            'Parc aux trois cèdres centenaires',
            'Proximité des thermes',
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-gray-mid">
              <span className="w-4 h-px bg-gold block shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          to="/meubles"
          className="self-start inline-flex items-center gap-2 text-black font-normal text-xs tracking-[0.15em] uppercase no-underline hover:text-gold transition-colors border-b border-black pb-0.5"
        >
          En savoir plus <span className="text-gold">→</span>
        </Link>
      </div>
    </section>
  );
}
