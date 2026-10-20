// Toutes les pages du site. Utilisé par le routeur, le pré-rendu et le sitemap.
// priority / changefreq : indications pour Google (sitemap.xml).
export const ROUTES = [
  { path: '/', page: 'home', priority: 1.0, changefreq: 'weekly' },
  { path: '/hotel', page: 'hotel', priority: 0.9, changefreq: 'monthly' },
  { path: '/restaurant', page: 'restaurant', priority: 0.9, changefreq: 'weekly' },
  { path: '/meubles', page: 'meubles', priority: 0.8, changefreq: 'monthly' },
  { path: '/seminaire', page: 'seminaire', priority: 0.7, changefreq: 'monthly' },
  { path: '/galerie', page: 'galerie', priority: 0.6, changefreq: 'monthly' },
  { path: '/tourisme', page: 'tourisme', priority: 0.6, changefreq: 'monthly' },
  { path: '/contact', page: 'contact', priority: 0.8, changefreq: 'yearly' },
  { path: '/mentions-legales', page: 'mentions', priority: 0.2, changefreq: 'yearly' },
];
