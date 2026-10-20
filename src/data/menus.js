// ─────────────────────────────────────────────────────────────
// Menus & carte du restaurant — à mettre à jour selon la saison.
// supplement / price : en euros (nombre). price: null → « selon arrivage ».
// ─────────────────────────────────────────────────────────────

const d = (fr, en, extra = {}) => ({ name: { fr, en }, ...extra });

export const MENU_TERROIR = {
  starters: [
    d("Assiette de charcuterie de l'Aveyron", 'Aveyron charcuterie platter'),
    d('Croustillant de Rocamadour aux noix', 'Crispy Rocamadour cheese with walnuts'),
    d("Salade de gésiers d'oie", 'Goose gizzard salad'),
    d('Duo de foie gras mi-cuit et sa confiture', 'Duo of semi-cooked foie gras with jam', { supplement: 4 }),
    d('Carpaccio de saumon', 'Salmon carpaccio'),
    d('Escalope de foie gras et son chutney du moment', 'Pan-fried foie gras with seasonal chutney', { supplement: 6 }),
    d('Carpaccio de tomates au pesto et sa burrata', 'Tomato carpaccio with pesto and burrata'),
    d('Pressé de bœuf aux petits légumes sauce ravigote', 'Pressed beef with vegetables, ravigote sauce'),
    d('Nage de la mer et ses Saint-Jacques', 'Seafood nage with scallops', { supplement: 5 }),
  ],
  mains: [
    d('Pot au feu de canard et ses légumes', 'Duck pot-au-feu with vegetables'),
    d('Notre spécialité — Estofinade aveyronnaise', 'Our speciality — Aveyron estofinade (stockfish)'),
    d(
      'Filet mignon de porc, farce fine de veau au chorizo, crémeux de patate douce',
      'Pork tenderloin, veal and chorizo stuffing, sweet potato cream',
    ),
    d(
      'Ris de veau aux morilles sauce madère et pommes grenailles confites',
      'Veal sweetbreads with morels, Madeira sauce and confit baby potatoes',
      { supplement: 8 },
    ),
    d(
      'Magret de canard entier, sauce du moment et millefeuille de pomme de terre',
      'Whole duck breast, sauce of the day and potato millefeuille',
      { supplement: 4 },
    ),
    d("Cabillaud sauce à l'ail vanillée et son risotto", 'Cod with vanilla-garlic sauce and risotto', { supplement: 3 }),
    d(
      "Souris d'agneau confite au pain d'épice et légumes de saison",
      'Slow-cooked lamb shank with gingerbread and seasonal vegetables',
      { supplement: 4 },
    ),
    d(
      'Tournedos Rossini, sauce madérisée au foie gras et légumes de saison',
      'Tournedos Rossini, Madeira and foie gras sauce, seasonal vegetables',
      { supplement: 10 },
    ),
  ],
  desserts: [
    d('Salade de fruits frais', 'Fresh fruit salad'),
    d('Fondant au chocolat et sa boule de glace', 'Chocolate fondant with a scoop of ice cream'),
    d('Nougat glacé', 'Iced nougat'),
    d('Dame blanche', 'Dame blanche'),
    d('Café ou chocolat liégeois', 'Coffee or chocolate liégeois'),
    d('Pêche Melba', 'Peach Melba'),
    d('Large choix de glaces ou sorbets', 'Wide choice of ice creams and sorbets'),
  ],
};

export const MENU_STOCKFISH = [
  d('Kir', 'Kir'),
  d('Potage', 'Soup'),
  d('Poule farcie, tête de veau ou charcuterie', "Stuffed chicken, calf's head or charcuterie"),
  d('Estofinade — notre spécialité', 'Estofinade — our speciality'),
  d('Plateau de fromages', 'Cheese platter'),
  d('Dessert', 'Dessert'),
  d('Vin et café compris', 'Wine and coffee included'),
];

export const THURSDAY_SPECIALS = [
  d('1er jeudi — Tête de veau', "1st Thursday — Calf's head"),
  d('2e jeudi — Poule farcie', '2nd Thursday — Stuffed chicken'),
  d('3e jeudi — Choux farcis', '3rd Thursday — Stuffed cabbage'),
  d("4e jeudi — Aligot saucisse à l'ail des ours", '4th Thursday — Aligot with wild garlic sausage'),
];

export const CARTE = {
  starters: [
    d('Duo de foie gras et sa confiture', 'Duo of foie gras with jam', { price: 15 }),
    d('Carpaccio de saumon aux kiwis et mangues', 'Salmon carpaccio with kiwi and mango', { price: 14 }),
    d('Noix de Saint-Jacques flambées aux kiwis', 'Flambéed scallops with kiwi', { price: 17 }),
    d("Assiette de charcuterie de l'Aveyron", 'Aveyron charcuterie platter', { price: 11 }),
    d(
      'Os à moelle gratiné aux champignons et son escalope de foie gras',
      'Bone marrow gratin with mushrooms and pan-fried foie gras',
      { price: 19 },
    ),
    d("Ris d'agneau à la crème d'ail", 'Lamb sweetbreads with garlic cream', { price: 16 }),
  ],
  mains: [
    d('Confit de canard, légumes ou aligot', 'Duck confit, vegetables or aligot', { price: 16 }),
    d('Pot au feu de canard et ses légumes', 'Duck pot-au-feu with vegetables', { price: 18 }),
    d('Estofinade — notre spécialité', 'Estofinade — our speciality', { price: 20 }),
    d('Ris de veau sauce madère, légumes et aligot', 'Veal sweetbreads, Madeira sauce, vegetables and aligot', { price: 28 }),
    d(
      "Entrecôte d'Aubrac ou Charolaise, légumes ou aligot",
      'Aubrac or Charolais rib-eye steak, vegetables or aligot',
      { price: 26 },
    ),
    d("Souris d'agneau confite au pain d'épice", 'Slow-cooked lamb shank with gingerbread', { price: 24 }),
    d('Tournedos Rossini sauce madérisée au foie gras', 'Tournedos Rossini, Madeira and foie gras sauce', { price: 30 }),
    d('Magret de canard entier et sa sauce du moment', 'Whole duck breast with sauce of the day', { price: 24 }),
    d('Poisson du moment', 'Fish of the day', { price: null }),
  ],
  salads: [
    d('Salade de Rocamadour chaud', 'Warm Rocamadour cheese salad', { price: 13 }),
    d('Salade aveyronnaise au Roquefort', 'Aveyron salad with Roquefort', { price: 13 }),
    d('Salade de charcuterie', 'Charcuterie salad', { price: 15 }),
    d("Salade de gésiers d'oie", 'Goose gizzard salad', { price: 13 }),
    d('Salade baltique au saumon', 'Baltic salmon salad', { price: 18 }),
    d('Salade de duo de foie gras mi-cuit', 'Semi-cooked foie gras duo salad', { price: 21 }),
  ],
};
