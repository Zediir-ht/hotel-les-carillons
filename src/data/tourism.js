import credits from './tourism-credits.json';

// Sites touristiques (même ordre que tourismePage.sites dans i18n).
// photo : photos-src/site-<slug>.jpg — crédit auteur/licence dans tourism-credits.json
// Liens vérifiés le 20/10/2026.
export const TOURISM_SITES = [
  { slug: 'conques', distance: 30, url: 'https://www.tourisme-conques.fr/' },
  { slug: 'belcastel', distance: 40, url: 'https://www.mairie-belcastel.fr/' },
  { slug: 'rodez', distance: 50, url: 'https://www.rodez-tourisme.fr/' },
  { slug: 'figeac', distance: 40, url: 'https://www.tourisme-figeac.com/' },
  { slug: 'aubin', distance: 10, url: 'https://www.tourisme-paysdecazevillois.fr/' },
  { slug: 'millau', distance: 100, url: 'https://www.explore-millau.com/' },
  { slug: 'najac', distance: 55, url: 'https://www.bastides-gorges-aveyron.fr/' },
  { slug: 'villefranche', distance: 45, url: 'https://www.bastides-gorges-aveyron.fr/' },
].map((site) => ({ ...site, photo: `site-${site.slug}`, credit: credits[site.slug] }));

// Liens des animations (même ordre que tourismePage.agenda ; null = pas de lien)
export const AGENDA_URLS = [
  null,
  null,
  'https://decouvrir.blog.tourisme-aveyron.com/le-festival-intercontinental-de-feux-dartifices-de-decazeville/',
  'https://hierunvillage.com/fr/',
];
