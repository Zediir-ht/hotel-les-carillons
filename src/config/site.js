// ─────────────────────────────────────────────────────────────
// Configuration centrale du site.
// Toute information pratique (téléphone, adresse, liens de réservation…)
// se modifie ICI et se répercute sur l'ensemble des pages.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Hôtel Restaurant Les Carillons',
  shortName: 'Les Carillons',
  url: 'https://www.lescarillons.fr',
  stars: 2,
  hosts: 'Nathalie, Florian & Assia',

  phone: { display: '05 65 63 14 75', href: 'tel:+33565631475', intl: '+33 5 65 63 14 75' },
  email: 'contact@lescarillons.fr',

  address: {
    street: 'Route de Figeac',
    postalCode: '12110',
    city: 'Cransac-les-Thermes',
    region: 'Aveyron',
    country: 'France',
  },
  geo: { lat: 44.5225, lng: 2.2814 },

  // Note Google affichée tant que l'API Google Places n'est pas configurée.
  // À mettre à jour de temps en temps (fiche Google Maps de l'hôtel).
  googleRating: { value: 4.4 },

  checkIn: '15:00',
  checkOut: '11:00',
};

export const LINKS = {
  googleMaps:
    'https://www.google.com/maps/search/?api=1&query=Hotel+Restaurant+Les+Carillons+Cransac-les-Thermes',
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=Hotel+Restaurant+Les+Carillons+Cransac-les-Thermes',
  thermes: 'https://www.chainethermale.fr/cransac-les-thermes',
  aveyronTourisme: 'https://www.tourisme-aveyron.com',
  cransac: 'https://www.cransac-les-thermes.fr',
};

/** Fiche de l'hôtel sur le site Logis Hôtels (l'ancienne adresse …-4588 ne fonctionne plus). */
export function logisPageUrl(lang = 'fr') {
  return `https://www.logishotels.com/${lang === 'en' ? 'en' : 'fr'}/hotel/logis-hotel-les-carillons-93628`;
}

/**
 * Moteur de réservation Logis (disponibilités en direct), dans la langue du visiteur.
 * Utilisé par tous les boutons « Réserver » du site.
 */
export function bookingUrl(lang = 'fr') {
  const params = new URLSearchParams({
    specialMode: 'default',
    hotelid: '93628',
    numnight: '1',
    m: 'booking',
    langcode: lang === 'en' ? 'EN' : 'FR',
    custid: '233',
  });
  return `https://premium.logishotels.com/fo/booking/233/93628/availability?${params}`;
}

// Mentions légales obligatoires (loi LCEN, art. 6).
// ⚠️ À COMPLÉTER par l'exploitant : tant qu'un champ vaut null, il n'est pas affiché.
export const LEGAL = {
  company: null, // ex. 'SARL Les Carillons'
  legalForm: null, // ex. 'SARL au capital de 10 000 €'
  siret: null, // ex. '123 456 789 00012'
  vat: null, // n° TVA intracommunautaire
  publicationDirector: null, // ex. 'Nathalie X'
  host: {
    name: 'Vercel Inc.',
    address: '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
    website: 'https://vercel.com',
  },
};
