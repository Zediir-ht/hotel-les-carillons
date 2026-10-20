// Pages du site, dans l'ordre d'affichage.
// desktop : 'left' / 'right' = place autour du logo dans le menu ordinateur ; null = seulement
// dans le menu mobile et le pied de page (pour garder un menu court et lisible).
export const NAV_ITEMS = [
  { to: '/hotel', key: 'hotel', desktop: 'left' },
  { to: '/restaurant', key: 'restaurant', desktop: 'left' },
  { to: '/meubles', key: 'meubles', desktop: 'left' },
  { to: '/galerie', key: 'galerie', desktop: null },
  { to: '/seminaire', key: 'seminaire', desktop: 'right' },
  { to: '/tourisme', key: 'tourisme', desktop: null },
  { to: '/contact', key: 'contact', desktop: 'right' },
];
