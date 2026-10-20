// Photos de la galerie, par catégorie. Ajouter une ligne pour ajouter une photo
// (après l'avoir déposée dans photos-src/ et lancé `npm run images`).

const p = (photo, cat, fr, en) => ({ photo, cat, alt: { fr, en } });

export const GALLERY_CATEGORIES = ['all', 'chambres', 'restaurant', 'exterieurs', 'evenements'];

export const GALLERY = [
  p('piscine-terrasse', 'exterieurs', 'La piscine et ses transats', 'The pool and its sun loungers'),
  p('chambre-double', 'chambres', 'Chambre double', 'Double room'),
  p('plat-1', 'restaurant', 'Noix de Saint-Jacques', 'Scallops'),
  p('jardin-3', 'exterieurs', 'Le jardin', 'The garden'),
  p('salle-restaurant-1', 'restaurant', 'La salle du restaurant', 'The restaurant dining room'),
  p('chambre-petite-double', 'chambres', 'Petite chambre double', 'Small double room'),
  p('facade-1', 'exterieurs', "La façade de l'hôtel", 'The hotel façade'),
  p('plat-2', 'restaurant', 'Duo de foie gras', 'Foie gras duo'),
  p('seminaire-4', 'evenements', 'La salle de réunion et son écran tactile', 'The meeting room and its touchscreen'),
  p('terrasse', 'restaurant', 'La véranda du restaurant', 'The restaurant veranda'),
  p('chambre-familiale', 'chambres', 'Chambre familiale', 'Family room'),
  p('jardin-1', 'exterieurs', 'La terrasse extérieure', 'The outdoor terrace'),
  p('plat-7', 'restaurant', 'Viande et légumes de saison', 'Meat with seasonal vegetables'),
  p('veranda-banquet', 'evenements', 'La véranda dressée pour un banquet', 'The veranda set for a banquet'),
  p('petit-dejeuner-1', 'restaurant', 'Le buffet du petit-déjeuner', 'The breakfast buffet'),
  p('suite-familiale', 'chambres', 'Suite familiale — lits superposés', 'Family suite — bunk beds'),
  p('piscine', 'exterieurs', 'La piscine extérieure', 'The outdoor pool'),
  p('plat-8', 'restaurant', "Côtelettes d'agneau et aligot", 'Lamb chops with aligot'),
  p('seminaire-1', 'evenements', 'Salle dressée pour un repas de groupe', 'Room set for a group meal'),
  p('salle-restaurant-3', 'restaurant', 'Table dressée au restaurant', 'A table set in the restaurant'),
  p('jardin-2', 'exterieurs', 'La terrasse couverte', 'The covered terrace'),
  p('chambre-simple', 'chambres', 'Chambre simple', 'Single room'),
  p('plat-3', 'restaurant', 'Dessert maison', 'Home-made dessert'),
  p('salle-reception-2', 'evenements', 'Banquet sous les guirlandes lumineuses', 'Banquet under fairy lights'),
  p('bar-1', 'restaurant', 'Le bar', 'The bar'),
  p('plat-6', 'restaurant', 'Saumon et salade', 'Salmon and salad'),
  p('chambre-pmr', 'chambres', 'Salle de bain de la chambre PMR', 'Accessible room bathroom'),
  p('plat-5', 'restaurant', 'Plateau de fromages du terroir', 'Local cheese platter'),
  p('seminaire-2', 'evenements', 'Grande salle en configuration banquet', 'Large hall in banquet layout'),
  p('salle-restaurant-2', 'restaurant', 'Table ronde au restaurant', 'Round table in the restaurant'),
  p('petit-dejeuner-2', 'restaurant', 'Petit-déjeuner', 'Breakfast'),
  p('facade-2', 'exterieurs', "L'entrée de l'hôtel", 'The hotel entrance'),
  p('plat-4', 'restaurant', 'Magret de canard', 'Duck breast'),
  p('chambre-triple', 'chambres', 'Salle de bain', 'Bathroom'),
  p('salle-reception-1', 'evenements', 'Salle en configuration réunion', 'Hall in meeting layout'),
  p('seminaire-3', 'evenements', 'Art de la table', 'Table setting'),
  p('bar-2', 'restaurant', 'La salle et le bar', 'The dining room and bar'),
  p('bar-3', 'restaurant', "La décoration de l'accueil", 'Reception decor'),
];
