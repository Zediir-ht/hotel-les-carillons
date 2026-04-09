import { useState } from 'react';

const BOOKING_URL =
  'https://premium.logishotels.com/fo/booking/233/93628/availability?specialMode=default&hotelid=93628&numnight=1&m=booking&langcode=FR&custid=233';

const rooms = [
  {
    name: 'Chambre Simple',
    description: 'Chambre avec lit simple en 110 cm, idéale pour une personne en cure ou en déplacement.',
    capacity: '1 personne',
    price: '54',
    demiPension: '78',
    image: 'https://lescarillons.fr/wp-content/uploads/2026/01/chambreDouble5-1024x642.jpg',
    features: ['Lit simple 110 cm', 'Salle de bain privée', 'TV + Canal+', 'Wi-Fi gratuit', 'Climatisation'],
  },
  {
    name: 'Petite Chambre Double',
    description: 'Petite chambre confortable avec un lit double, parfaite pour un séjour en solo.',
    capacity: '1 personne',
    price: '56',
    demiPension: '81',
    image: 'https://lescarillons.fr/wp-content/uploads/2026/01/chambreDouble4-1024x642.jpg',
    features: ['Lit double', 'Salle de bain privée', 'TV + Canal+', 'Wi-Fi gratuit', 'Climatisation'],
  },
  {
    name: 'Chambre Double',
    description: 'Chambre spacieuse avec un lit double, pour 1 ou 2 personnes. Confort et tranquillité assurés.',
    capacity: '1 à 2 personnes',
    price: '68',
    priceTo: '70',
    demiPension: '84',
    demiPension2: '130 à 135',
    image: 'https://lescarillons.fr/wp-content/uploads/2026/01/chambreDouble-1024x642.jpg',
    features: ['Lit double', 'Salle de bain privée', 'TV + Canal+', 'Wi-Fi gratuit', 'Climatisation'],
  },
  {
    name: 'Chambre Triple ou Twin',
    description: 'Chambre avec un grand lit et un lit simple, idéale pour 2 ou 3 personnes. Parfaite pour un séjour en famille ou entre amis.',
    capacity: '2 à 3 personnes',
    price: '75',
    priceTo: '78',
    demiPension2: '145',
    demiPension3: '159',
    image: 'https://lescarillons.fr/wp-content/uploads/2026/01/chambreDouble3-1024x642.jpg',
    features: ['Grand lit + lit simple', 'Salle de bain privée', 'TV + Canal+', 'Wi-Fi gratuit', 'Climatisation'],
  },
  {
    name: 'Suite Familiale',
    description: 'Suite avec un grand lit et un lit superposé, pouvant accueillir jusqu\'à 4 personnes. Espace et confort pour toute la famille.',
    capacity: '2 à 4 personnes',
    price: '98',
    priceTo: '110',
    demiPension2: '165',
    demiPension3: '191',
    demiPension4: '218',
    image: 'https://lescarillons.fr/wp-content/uploads/2026/01/suiteFamiliale1-1024x642.jpg',
    features: ['Grand lit + lit superposé', 'Salle de bain privée', 'TV + Canal+', 'Wi-Fi gratuit', 'Climatisation'],
  },
  {
    name: 'Chambre Familiale',
    description: 'Grande chambre avec deux grands lits et un lit simple, pour accueillir jusqu\'à 5 personnes. L\'espace idéal pour les familles nombreuses.',
    capacity: '2 à 5 personnes',
    price: '98',
    priceTo: '110',
    demiPension2: '165',
    demiPension3: '191',
    demiPension4: '218',
    image: 'https://lescarillons.fr/wp-content/uploads/2026/01/familiale1-1.jpg',
    features: ['2 grands lits + lit simple', 'Salle de bain privée', 'TV + Canal+', 'Wi-Fi gratuit', 'Climatisation'],
  },
  {
    name: 'Chambre PMR',
    description: 'Chambre adaptée aux personnes à mobilité réduite, avec accès facilité et aménagements spécifiques.',
    capacity: '2 personnes',
    price: '75',
    image: 'https://lescarillons.fr/wp-content/uploads/2026/01/chambreDouble6-1024x642.jpg',
    features: ['Accès PMR', 'Salle de bain adaptée', 'TV + Canal+', 'Wi-Fi gratuit', 'Climatisation'],
  },
];

function RoomCard({ room }) {
  const [imgError, setImgError] = useState(false);
  const priceLabel = room.priceTo ? `${room.price}€ – ${room.priceTo}€` : `${room.price}€`;

  return (
    <div className="bg-white border border-black/5 overflow-hidden group hover:border-gold/30 transition-colors">
      <div className="relative h-56 sm:h-64 overflow-hidden">
        {!imgError ? (
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-beige flex items-center justify-center">
            <span className="text-gold text-sm tracking-wide">Photo à venir</span>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5">
          <span className="text-gold font-normal text-sm tracking-wide">
            à partir de {room.price}€
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg md:text-xl text-black leading-tight">{room.name}</h3>
        </div>
        <p className="text-xs text-gold tracking-wide uppercase mb-4">{room.capacity}</p>
        <div className="w-10 h-px bg-gold mb-4" />
        <p className="text-gray-mid text-sm leading-relaxed mb-5">{room.description}</p>

        <div className="mb-6">
          <p className="text-xs text-black/50 uppercase tracking-wide mb-2">Tarifs chambre / nuit</p>
          <p className="text-black text-sm font-normal">{priceLabel}</p>
          {room.demiPension && (
            <p className="text-black/70 text-sm mt-1">
              Demi-pension 1 pers. : {room.demiPension}€
            </p>
          )}
          {room.demiPension2 && (
            <p className="text-black/70 text-sm mt-0.5">
              Demi-pension 2 pers. : {room.demiPension2}€
            </p>
          )}
          {room.demiPension3 && (
            <p className="text-black/70 text-sm mt-0.5">
              Demi-pension 3 pers. : {room.demiPension3}€
            </p>
          )}
          {room.demiPension4 && (
            <p className="text-black/70 text-sm mt-0.5">
              Demi-pension 4 pers. : {room.demiPension4}€
            </p>
          )}
        </div>

        <ul className="space-y-1.5 mb-6">
          {room.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-black/60">
              <span className="text-gold text-xs">✦</span> {f}
            </li>
          ))}
        </ul>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-black font-normal text-xs tracking-[0.15em] uppercase no-underline hover:text-gold transition-colors border-b border-black pb-0.5"
        >
          Réserver <span className="text-gold">→</span>
        </a>
      </div>
    </div>
  );
}

export default function RoomsSection() {
  return (
    <section className="py-20 md:py-28 bg-offwhite section-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="overline text-gold mb-4">Hébergement</p>
          <h2 className="text-3xl md:text-[40px] text-black mb-4 leading-tight">Les Chambres</h2>
          <div className="w-16 h-px bg-black mx-auto mt-5 mb-6" />
          <p className="text-gray-mid text-base max-w-xl mx-auto leading-relaxed">
            17 chambres climatisées de 1 à 5 personnes, avec salle de bain et WC privé.
            Tarifs 2026 par jour et par chambre.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.name} room={room} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <div className="bg-beige p-6 md:p-8 max-w-2xl mx-auto">
            <p className="text-black text-sm mb-2">
              <strong>Petit-déjeuner :</strong> 10€ par personne
            </p>
            <p className="text-black/60 text-xs leading-relaxed">
              Tarifs demi-pension applicables à partir de 2 nuits. Nos tarifs n'incluent pas la taxe de séjour (0,90€ par nuitée et par personne) ni les boissons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
