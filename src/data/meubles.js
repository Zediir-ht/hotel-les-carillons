// ─────────────────────────────────────────────────────────────
// Meublés Les Cèdres — tarifs et informations pratiques.
// ⚠️ Les champs à null attendent la réponse de l'hôtel (voir docs/QUESTIONS-HOTEL.md).
//    Tant qu'un champ vaut null, il n'est pas affiché sur le site.
//    Une fois rempli, il apparaît automatiquement (infos pratiques + FAQ).
// ─────────────────────────────────────────────────────────────

// Tarifs à la semaine (taxe de séjour en sus). floor : index dans meublesPage.floors (i18n).
export const MEUBLES_RATES = [
  { floor: 0, price: 195 },
  { floor: 1, price: 190 },
  { floor: 2, price: 185 },
];

// Durée d'une cure thermale conventionnée : 18 jours de soins → 3 semaines de location
export const CURE_WEEKS = 3;

// Informations pratiques. Texte bilingue { fr, en } ou null si inconnu.
export const MEUBLES_INFO = {
  surface: null, // ex. { fr: '30 à 35 m²', en: '30 to 35 m²' }
  capacity: null, // ex. { fr: '1 à 2 personnes', en: '1 to 2 people' }
  beds: null, // ex. { fr: '1 lit double 140 cm', en: '1 double bed (140 cm)' }
  arrivalDay: null, // ex. { fr: 'Le samedi, à partir de 15 h', en: 'Saturdays from 3 pm' }
  departure: null, // ex. { fr: 'Le samedi avant 10 h', en: 'Saturdays before 10 am' }
  walkToThermes: null, // ex. { fr: '5 minutes à pied', en: '5-minute walk' }
  elevator: null, // ex. { fr: 'Pas d’ascenseur', en: 'No lift' }
  accessibility: null, // ex. { fr: 'Rez-de-chaussée accessible', en: 'Step-free ground floor' }
  wifi: null, // ex. { fr: 'Wi-Fi gratuit', en: 'Free Wi-Fi' }
  tv: null, // ex. { fr: 'Télévision', en: 'TV' }
  parking: null, // ex. { fr: 'Parking gratuit', en: 'Free parking' }
  cleaning: null, // ex. { fr: 'Ménage de fin de séjour inclus', en: 'End-of-stay cleaning included' }
  deposit: null, // ex. { fr: 'Caution de 200 €', en: '€200 deposit' }
  pets: null, // ex. { fr: 'Animaux non admis', en: 'No pets' }
  touristTax: null, // ex. { fr: '0,90 € par nuit et par personne', en: '€0.90 per night per person' }
  mealsAtRestaurant: null, // ex. { fr: 'Dîners possibles au restaurant de l’hôtel', en: 'Dinners available at the hotel restaurant' }
  floorPriceReason: null, // ex. { fr: 'Le rez-de-chaussée, sans escalier, est le plus demandé.', en: '…' }
};

// Ordre d'affichage des infos pratiques (clés de MEUBLES_INFO ; libellés dans i18n meublesPage.infoLabels)
export const MEUBLES_INFO_ORDER = [
  'surface', 'capacity', 'beds', 'arrivalDay', 'departure', 'walkToThermes', 'elevator',
  'accessibility', 'wifi', 'tv', 'parking', 'cleaning', 'deposit', 'pets', 'touristTax', 'mealsAtRestaurant',
];
