# Hôtel Restaurant Les Carillons — site web

Site de l'Hôtel Restaurant Les Carillons (Logis ★★, Cransac-les-Thermes, Aveyron).
React 19 + Vite + Tailwind CSS 4, bilingue FR/EN, pré-rendu statique, hébergé sur Vercel.

## Commandes

```bash
npm install        # une seule fois
npm run dev        # site en local sur http://localhost:5173
npm run build      # build de production + pré-rendu HTML de chaque page + sitemap.xml
npm run preview    # tester le build en local
npm run images     # régénérer les images optimisées depuis photos-src/
npm run lint       # vérification du code
```

## Modifier le contenu (sans toucher à la mise en page)

| Je veux changer…                                     | Fichier                              |
| ---------------------------------------------------- | ------------------------------------ |
| Téléphone, e-mail, adresse, liens de réservation     | `src/config/site.js`                 |
| Mentions légales obligatoires (SIRET, société…)       | `src/config/site.js` → `LEGAL`       |
| Chambres et tarifs                                   | `src/data/rooms.js`                  |
| Menus, carte et prix du restaurant                   | `src/data/menus.js`                  |
| Tarifs des meublés                                   | `src/data/meubles.js`                |
| Photos de la galerie                                 | `src/data/gallery.js`                |
| Sites touristiques                                   | `src/data/tourism.js`                |
| Tous les textes (FR / EN), titres Google des pages   | `src/i18n/fr.js` et `src/i18n/en.js` |
| Pages du menu                                        | `src/config/navigation.js`           |

Chaque texte existe en français **et** en anglais : modifier les deux fichiers `fr.js` / `en.js`
(les clés sont identiques). Une clé oubliée s'affiche telle quelle et est signalée dans la console en `npm run dev`.

## Ajouter ou remplacer une photo

1. Déposer la photo originale (JPEG, grande taille) dans `photos-src/`, nommée en minuscules avec tirets
   (ex. `chambre-double-2.jpg`).
2. Lancer `npm run images` : génère 3 tailles WebP dans `public/images/photos/` et met à jour `src/data/photos.json`.
3. L'utiliser par son nom : `<Photo name="chambre-double-2" alt="…" />`, ou l'ajouter dans `src/data/gallery.js`.

Les originaux de `photos-src/` ne sont pas mis en ligne (voir `.vercelignore`).

## Structure

```
src/
  config/        site.js (coordonnées, liens), navigation.js, routes.js
  data/          contenus structurés : chambres, menus, galerie, tourisme…
  i18n/          textes FR / EN + LanguageContext (t() pour un texte, pick() pour une donnée {fr, en})
  components/
    ui/          briques réutilisables : Photo, SectionHeading, SplitSection, Carousel, Lightbox, PageHero, Links…
    layout/      Navbar, Footer, MobileActionBar (Appeler / Itinéraire / Réserver), Layout
    home/        sections de la page d'accueil
    hotel/, contact/
    Seo.jsx      titre, description, Open Graph, canonical de chaque page
  pages/         une page par route
  lib/           utilitaires (photos, format des prix, avis Google, animations)
  main.jsx       démarrage côté navigateur
  entry-server.jsx  pré-rendu au build
api/reviews.js   fonction serveur Vercel : avis Google (clé API cachée, cache 24 h)
scripts/         optimize-images.mjs, prerender.mjs, fetch-tourism-photos.mjs
photos-src/      photos originales (non publiées)
```

## Configuration Vercel (variables d'environnement)

Voir `.env.example`. Dans Vercel → Settings → Environment Variables :

- `VITE_WEB3FORMS_KEY` — envoi direct du formulaire de contact (clé gratuite sur web3forms.com).
  Sans clé, le formulaire ouvre la messagerie du visiteur.
- `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID` — affichage des vrais avis Google.
  Sans clé, la section affiche la note de `SITE.googleRating` et les liens vers la fiche Google.

`vercel.json` gère les URL propres (`/hotel` au lieu de `/hotel.html`), les redirections des anciennes
adresses WordPress (`/hotel-2`, `/contact-2`…), le cache et les en-têtes de sécurité.
