// Télécharge les photos touristiques depuis Wikimedia Commons (une seule fois)
// et enregistre auteur + licence pour les crédits obligatoires (CC BY / BY-SA).
import { writeFile } from 'node:fs/promises';

const files = {
  conques: 'View_of_Conques_04.jpg',
  belcastel: 'Belcastel-panorama.jpg',
  rodez: 'Cathedral_of_Our_Lady_of_Rodez_79.jpg',
  figeac: '5_Place_Champollion_in_Figeac_01.jpg',
  aubin: 'Vue_partielle_sur_Aubin.jpg',
  millau: 'Millau_Viaduct_(2724128971).jpg',
  najac: 'Castle_of_Najac_04.jpg',
  villefranche: 'Villefranche-de-Rouergue_place_Notre-Dame.jpg',
};

const UA = { 'User-Agent': 'LesCarillonsSite/1.0 (contact@lescarillons.fr)' };
const strip = (html = '') => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const credits = {};

for (const [slug, title] of Object.entries(files)) {
  const api = `https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=1600&titles=File:${encodeURIComponent(title)}`;
  const data = await (await fetch(api, { headers: UA })).json();
  const info = Object.values(data.query.pages)[0].imageinfo?.[0];
  if (!info) throw new Error(`${slug}: fichier introuvable sur Commons (${title})`);
  const img = await fetch(info.thumburl, { headers: UA });
  if (!img.ok) throw new Error(`${slug}: ${img.status}`);
  await writeFile(`photos-src/site-${slug}.jpg`, Buffer.from(await img.arrayBuffer()));
  credits[slug] = {
    author: strip(info.extmetadata.Artist?.value) || 'Wikimedia Commons',
    license: info.extmetadata.LicenseShortName?.value || '',
    source: info.descriptionurl,
  };
  console.log(slug, '→', credits[slug].author, '|', credits[slug].license);
}

await writeFile('src/data/tourism-credits.json', JSON.stringify(credits, null, 2) + '\n');
