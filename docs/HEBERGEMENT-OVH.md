# Héberger le site sur OVH (hébergement web mutualisé)

Le site est statique : le dossier `dist/` (créé par `npm run build`) suffit. Trois éléments sont prévus pour OVH :

| Fichier | Rôle |
| --- | --- |
| `public/.htaccess` | adresses propres (`/hotel`), redirections des anciennes adresses, HTTPS + www, en-têtes de sécurité, cache. Équivalent de `vercel.json`. |
| `public/api/reviews.php` | avis Google (équivalent de `api/reviews.js`), avec cache de 24 h. |
| `.github/workflows/deploy-ovh.yml` | mise en ligne en un clic depuis GitHub (FTPS). |

Testé : le `.htaccess` sur un vrai Apache (redirections, adresses propres, 404, en-têtes, accès refusé à `config.php`) et la logique de `reviews.php`. **Pas encore testé sur le serveur OVH lui-même.**

## Qui paie quoi
L'hébergement OVH et le nom de domaine sont **à la charge de l'hôtel**, réglés directement à OVH (non compris dans le devis ni dans l'abonnement « Sérénité » de 19 €/mois, qui couvre la maintenance). Le site de démonstration reste sur Vercel jusqu'à la mise en ligne.

## À faire une fois
1. **Offre** : hébergement web OVH « Perso » ou au-dessus (il faut PHP 8 et le certificat SSL gratuit Let's Encrypt), souscrit au nom de l'hôtel.
2. **Domaine** : dans l'espace client, rattacher `lescarillons.fr` et `www.lescarillons.fr` à l'hébergement (dossier racine `www`), puis activer le SSL (Hébergements → Multisite → modifier → SSL).
3. **Mise en ligne** : créer les secrets GitHub (liste en tête de `deploy-ovh.yml`), puis Actions → « Mise en ligne OVH » → Run workflow. Sans GitHub : envoyer le contenu de `dist/` par FTP dans `www/`, **fichier `.htaccess` compris** (fichier caché).
4. **Avis Google** : sur le serveur, copier `www/api/config.example.php` en `www/api/config.php` et remplir la clé et le Place ID (Gestionnaire de fichiers OVH). Sans ce fichier, le site n'affiche simplement pas les avis.
5. **Formulaires** : clé Web3Forms (adresse lescarillons12@orange.fr), à déclarer dans le secret `VITE_WEB3FORMS_KEY` avant la mise en ligne.

## Au quotidien
Chaque modification : lancer « Mise en ligne OVH ». Les pages s'actualisent tout de suite (les fichiers HTML sont revérifiés à chaque visite, les images et le code sont mis en cache longtemps).
