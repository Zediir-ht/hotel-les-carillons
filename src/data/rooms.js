// ─────────────────────────────────────────────────────────────
// Chambres & tarifs 2026 — à mettre à jour chaque saison.
// Prix en euros. halfBoard : tarif demi-pension par nombre de personnes.
// photo : nom d'une image de photos-src/ (voir `npm run images`).
// ─────────────────────────────────────────────────────────────

const COMMON = {
  bathroom: { fr: 'Salle de bain privée', en: 'Private bathroom' },
  tv: { fr: 'TV + Canal+', en: 'TV + Canal+' },
  wifi: { fr: 'Wi-Fi gratuit', en: 'Free Wi-Fi' },
  ac: { fr: 'Climatisation', en: 'Air conditioning' },
};

export const ROOMS = [
  {
    id: 'simple',
    photo: 'chambre-simple',
    name: { fr: 'Chambre Simple', en: 'Single Room' },
    description: {
      fr: 'Chambre avec lit simple en 110 cm, idéale pour une personne en cure ou en déplacement.',
      en: 'Room with a 110 cm single bed, ideal for one person on a spa cure or a business trip.',
    },
    capacity: { fr: '1 personne', en: '1 person' },
    price: { from: 54 },
    halfBoard: { 1: '78' },
    features: [{ fr: 'Lit simple 110 cm', en: '110 cm single bed' }, COMMON.bathroom, COMMON.tv, COMMON.wifi, COMMON.ac],
  },
  {
    id: 'petite-double',
    photo: 'chambre-petite-double',
    name: { fr: 'Petite Chambre Double', en: 'Small Double Room' },
    description: {
      fr: 'Petite chambre confortable avec un lit double, parfaite pour un séjour en solo.',
      en: 'Cosy small room with a double bed, perfect for a solo stay.',
    },
    capacity: { fr: '1 personne', en: '1 person' },
    price: { from: 56 },
    halfBoard: { 1: '81' },
    features: [{ fr: 'Lit double', en: 'Double bed' }, COMMON.bathroom, COMMON.tv, COMMON.wifi, COMMON.ac],
  },
  {
    id: 'double',
    photo: 'chambre-double',
    name: { fr: 'Chambre Double', en: 'Double Room' },
    description: {
      fr: 'Chambre spacieuse avec un lit double, pour 1 ou 2 personnes. Confort et tranquillité assurés.',
      en: 'Spacious room with a double bed, for 1 or 2 people. Comfort and peace guaranteed.',
    },
    capacity: { fr: '1 à 2 personnes', en: '1 to 2 people' },
    price: { from: 68, to: 70 },
    halfBoard: { 1: '84', 2: '130 – 135' },
    features: [{ fr: 'Lit double', en: 'Double bed' }, COMMON.bathroom, COMMON.tv, COMMON.wifi, COMMON.ac],
  },
  {
    id: 'triple',
    photo: 'chambre-triple',
    name: { fr: 'Chambre Triple ou Twin', en: 'Triple or Twin Room' },
    description: {
      fr: 'Chambre avec un grand lit et un lit simple, idéale pour 2 ou 3 personnes. Parfaite pour un séjour en famille ou entre amis.',
      en: 'Room with a large bed and a single bed, ideal for 2 or 3 people. Perfect for a family stay or a trip with friends.',
    },
    capacity: { fr: '2 à 3 personnes', en: '2 to 3 people' },
    price: { from: 75, to: 78 },
    halfBoard: { 2: '145', 3: '159' },
    features: [{ fr: 'Grand lit + lit simple', en: 'Large bed + single bed' }, COMMON.bathroom, COMMON.tv, COMMON.wifi, COMMON.ac],
  },
  {
    id: 'suite-familiale',
    photo: 'suite-familiale',
    name: { fr: 'Suite Familiale', en: 'Family Suite' },
    description: {
      fr: "Suite avec un grand lit et un lit superposé, pouvant accueillir jusqu'à 4 personnes. Espace et confort pour toute la famille.",
      en: 'Suite with a large bed and bunk beds, sleeping up to 4. Space and comfort for the whole family.',
    },
    capacity: { fr: '2 à 4 personnes', en: '2 to 4 people' },
    price: { from: 98, to: 110 },
    halfBoard: { 2: '165', 3: '191', 4: '218' },
    features: [{ fr: 'Grand lit + lit superposé', en: 'Large bed + bunk beds' }, COMMON.bathroom, COMMON.tv, COMMON.wifi, COMMON.ac],
  },
  {
    id: 'familiale',
    photo: 'chambre-familiale',
    name: { fr: 'Chambre Familiale', en: 'Family Room' },
    description: {
      fr: "Grande chambre avec deux grands lits et un lit simple, pour accueillir jusqu'à 5 personnes. L'espace idéal pour les familles nombreuses.",
      en: 'Large room with two large beds and a single bed, sleeping up to 5. The ideal space for larger families.',
    },
    capacity: { fr: '2 à 5 personnes', en: '2 to 5 people' },
    price: { from: 98, to: 110 },
    halfBoard: { 2: '165', 3: '191', 4: '218' },
    features: [{ fr: '2 grands lits + lit simple', en: '2 large beds + single bed' }, COMMON.bathroom, COMMON.tv, COMMON.wifi, COMMON.ac],
  },
  {
    id: 'pmr',
    photo: 'chambre-pmr',
    name: { fr: 'Chambre PMR', en: 'Accessible Room' },
    description: {
      fr: 'Chambre adaptée aux personnes à mobilité réduite, avec accès facilité et aménagements spécifiques.',
      en: 'Room adapted for guests with reduced mobility, with easy access and specific fittings.',
    },
    capacity: { fr: '2 personnes', en: '2 people' },
    price: { from: 75 },
    halfBoard: {},
    features: [
      { fr: 'Accès PMR', en: 'Step-free access' },
      { fr: 'Salle de bain adaptée', en: 'Adapted bathroom' },
      COMMON.tv,
      COMMON.wifi,
      COMMON.ac,
    ],
  },
];
