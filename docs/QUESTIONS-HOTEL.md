# Questions à l'hôtel — et où intégrer les réponses

Questionnaire envoyé à l'Hôtel Les Carillons le 20/10/2026 — version à envoyer : https://claude.ai/artifact/6RTCXG2rzpp4MVskdxmouN
Chaque question a un numéro (A1, B4…). Quand les réponses arrivent, suivre la **procédure** en bas de page.

Statut : ☐ = en attente · ☑ = intégré (noter la date)

---

## A. Informations légales — obligatoires

| N° | Question | Où intégrer la réponse | Statut |
|----|----------|------------------------|--------|
| A1 | Raison sociale et forme juridique (ex. « SARL Les Carillons, capital de 10 000 € ») | `src/config/site.js` → `LEGAL.company`, `LEGAL.legalForm` | ☐ |
| A2 | Numéro SIRET | `LEGAL.siret` | ☐ |
| A3 | Numéro de TVA intracommunautaire | `LEGAL.vat` | ☐ |
| A4 | Nom du directeur / de la directrice de la publication | `LEGAL.publicationDirector` | ☐ |

Les champs remplis s'affichent tout seuls sur `/mentions-legales`.

## B. Meublés Les Cèdres

Tous les champs `MEUBLES_INFO` de `src/data/meubles.js` sont au format `{ fr: '…', en: '…' }` (traduire en anglais).
Dès qu'un champ est rempli, il apparaît dans « Infos pratiques » et, si une question FAQ lui correspond, dans la FAQ.

| N° | Question | Où intégrer la réponse | Statut |
|----|----------|------------------------|--------|
| B1 | Surface des appartements (fourchette) | `MEUBLES_INFO.surface` | ☐ |
| B2 | Nombre de personnes maximum par appartement | `MEUBLES_INFO.capacity` (+ options « Nombre de personnes » de `MeubleRequestForm.jsx` si > 4) | ☐ |
| B3 | Couchage (lit double, lits simples, canapé-lit…) | `MEUBLES_INFO.beds` | ☐ |
| B4 | Jour et heure d'arrivée | `MEUBLES_INFO.arrivalDay` | ☐ |
| B5 | Jour et heure de départ | `MEUBLES_INFO.departure` | ☐ |
| B6 | Temps à pied jusqu'aux thermes | `MEUBLES_INFO.walkToThermes` (+ remplacer « tout proches » dans `curistes.desc` fr/en) | ☐ |
| B7 | Ascenseur ? | `MEUBLES_INFO.elevator` | ☐ |
| B8 | Appartement accessible sans escalier / PMR ? | `MEUBLES_INFO.accessibility` | ☐ |
| B9 | Wi-Fi ? Télévision ? | `MEUBLES_INFO.wifi`, `MEUBLES_INFO.tv` (+ ajouter à `meublesPage.detailItems` fr/en) | ☐ |
| B10 | Parking (gratuit ?) | `MEUBLES_INFO.parking` | ☐ |
| B11 | Ménage : inclus, en option (prix) ou à la charge du client | `MEUBLES_INFO.cleaning` | ☐ |
| B12 | Caution (montant) | `MEUBLES_INFO.deposit` | ☐ |
| B13 | Animaux acceptés ? Conditions | `MEUBLES_INFO.pets` | ☐ |
| B14 | Taxe de séjour des meublés | `MEUBLES_INFO.touristTax` (+ remplacer « Taxe de séjour en sus » par le montant dans `meublesPage.calcTax`) | ☐ |
| B15 | Repas au restaurant pour les résidents (demi-pension, formule, prix) | `MEUBLES_INFO.mealsAtRestaurant` ; si formule : ajouter une ligne au comparatif (`meublesPage.compareRows`) et une carte dans `curistes.cards` | ☐ |
| B16 | Pourquoi le prix change selon l'étage | `MEUBLES_INFO.floorPriceReason` → **à afficher** sous les étages dans `components/meubles/CureCalculator.jsx` (pas encore branché) | ☐ |
| B17 | Tarifs 2026 (195 / 190 / 185 € la semaine) à jour ? Saisons ? | `MEUBLES_RATES` dans `src/data/meubles.js` ; si tarifs saisonniers : faire évoluer le calculateur | ☐ |
| B18 | Photos des appartements (2017–2019) encore valables ? Nouvelles photos ? | `photos-src/meuble-*.jpg` puis `npm run images` ; liste dans `pages/Meubles.jsx` (`APARTMENT_PHOTOS`) et `data/gallery.js` | ☐ |

## C. Restaurant

| N° | Question | Où intégrer la réponse | Statut |
|----|----------|------------------------|--------|
| C1 | Origine de la viande bovine (obligatoire), par plat si besoin | **À créer** : clé `restaurantPage.beefOrigin` (fr/en), affichée sous la carte dans `components/restaurant/MenuBook.jsx` | ☐ |
| C2 | Liste des 14 allergènes disponible ? | **À créer** : clé `restaurantPage.allergens` (« Liste des allergènes disponible sur demande »), même endroit que C1 | ☐ |
| C3 | Heures de service midi et soir | `restaurantPage.horaires` (fr/en), `footer.hours`, et `openingHoursSpecification` du Restaurant dans le JSON-LD de `index.html` | ☐ |
| C4 | Fermetures annuelles / congés | `restaurantPage.horaires` ; si dates fixes : les ajouter à `lib/restaurantToday.js` (bandeau « Aujourd'hui ») | ☐ |
| C5 | Menus et prix à jour (17 € / dès 26 € / 30 € / carte) ? | `src/data/menus.js` + prix dans `restaurantPage.formules`, `jourPrice`, `terroirPrice`, `stockfishPrice` (fr/en) | ☐ |
| C6 | Relecture du texte sur l'estofinade | `restaurantPage.estofinadeP1`, `estofinadeP2` (fr/en) | ☐ |
| C7 | Photo de l'estofinade (le plat) | `photos-src/estofinade.jpg` → `npm run images` → `pages/Restaurant.jsx` section `#estofinade` (remplace `veranda-banquet`) | ☐ |
| C8 | Capacités : restaurant, véranda, grande salle en banquet | `seminairePage` (fr/en) et `restaurantPage.section1P3` | ☐ |

## D. Hôtel

| N° | Question | Où intégrer la réponse | Statut |
|----|----------|------------------------|--------|
| D1 | Animaux acceptés à l'hôtel ? Conditions | `hotelPage.infos` (fr/en) + `"petsAllowed"` dans le JSON-LD Hotel de `index.html` | ☐ |
| D2 | Horaires du petit-déjeuner | `hotelPage.infos` (ligne Petit-déjeuner) + `hotelPage.petitDejP2` | ☐ |
| D3 | Arrivée tardive possible ? Jusqu'à quelle heure ? | `hotelPage.infos` (nouvelle ligne) | ☐ |
| D4 | Tarifs des chambres 2026 confirmés ? | `src/data/rooms.js` (+ `priceRange` dans `index.html`) | ☐ |
| D5 | Tarif de la formule soirée étape (à afficher ?) | `hotelPage.etapeP` (fr/en) | ☐ |
| D6 | Photo de la chambre triple (le site montre la salle de bain) | `photos-src/chambre-triple.jpg` → `npm run images` | ☐ |
| D7 | Séminaire : tarifs journée / demi-journée, location de salle | `seminairePage` (fr/en), nouveau bloc tarifs si fournis | ☐ |

## E. Photos & identité

| N° | Question | Où intégrer la réponse | Statut |
|----|----------|------------------------|--------|
| E1 | Portrait de Nathalie, Florian et Assia ? | `photos-src/famille.jpg` → section `IntroSection` (accueil) à la place de la façade, ou à côté | ☐ |
| E2 | Séance photo professionnelle envisagée ? | Remplacer les photos dans `photos-src/` (mêmes noms) puis `npm run images` | ☐ |
| E3 | Logo officiel en haute qualité (vectoriel) | `public/` + favicon + JSON-LD `logo` | ☐ |
| E4 | Polices Classy Vogue / Gotham / Goudy Titling : licences ? | **Réglé** : pas de licence → remplacées par Bodoni Moda / Montserrat / Sorts Mill Goudy (OFL, paquets @fontsource). Question retirée du questionnaire. | ☑ 20/10/2026 |

## F. Comptes en ligne & accès

| N° | Question | Où intégrer la réponse | Statut |
|----|----------|------------------------|--------|
| F1 | Pages Facebook / Instagram | **À créer** : `SITE.social` dans `src/config/site.js` → icônes dans `layout/Footer.jsx` + `sameAs` du JSON-LD | ☐ |
| F2 | Fiche Google : qui la gère ? Place ID / accès | Variables Vercel `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID` ; mettre à jour `SITE.googleRating` | ☐ |
| F3 | Nom de domaine lescarillons.fr : qui le gère ? Accès | Vercel → Domains (www + redirection de lescarillons.fr) ; `SITE.url` | ☐ |
| F4 | E-mail de réception des formulaires (contact@lescarillons.fr ?) | `SITE.email` ; créer la clé Web3Forms sur cette adresse → variable Vercel `VITE_WEB3FORMS_KEY` | ☐ |

## G. Tourisme — vérifications

| N° | Question | Où intégrer la réponse | Statut |
|----|----------|------------------------|--------|
| G1 | Distances des sites touristiques | `src/data/tourism.js` (`distance`) | ☐ |
| G2 | Marchés (samedi 13 h–15 h 30, producteurs le mardi) toujours d'actualité ? | `tourismePage.agenda` (fr/en) | ☐ |
| G3 | Festival de feux d'artifice de Decazeville : existe-t-il encore ? | `tourismePage.agenda` + `AGENDA_URLS` dans `src/data/tourism.js` (retirer si arrêté) | ☐ |

---

## Procédure quand les réponses arrivent

1. Travailler sur la branche `refonte-2026` (`git switch refonte-2026`).
2. Pour chaque réponse : modifier le fichier indiqué ci-dessus, **en français et en anglais** (`src/i18n/fr.js` et `en.js`, ou les champs `{ fr, en }` des fichiers `src/data/`).
3. Les éléments marqués **« à créer »** / **« pas encore branché »** (B16, C1, C2, F1) demandent un peu de code : les ajouter.
4. Photos : déposer les originaux dans `photos-src/` (noms en minuscules-avec-tirets), puis `npm run images`.
5. Vérifier : `npm run lint` puis `npm run build` (doit afficher les 10 pages pré-rendues), et contrôler visuellement les pages touchées.
6. Cocher ☑ (avec la date) les questions intégrées dans ce fichier.
7. Commit sur `refonte-2026` + push.
8. Questions restées sans réponse : les signaler à l'utilisateur.
