import manifest from '../data/photos.json';

/** Infos d'une photo générée par `npm run images` (dimensions + largeurs disponibles). */
export function getPhoto(name) {
  const photo = manifest[name];
  if (!photo && import.meta.env.DEV) console.warn(`[photos] photo inconnue : ${name}`);
  return photo;
}

/** URL de la plus petite variante ≥ largeur demandée (ou la plus grande disponible). */
export function photoSrc(name, width = 960) {
  const photo = getPhoto(name);
  if (!photo) return '';
  const w = photo.widths.find((pw) => pw >= width) ?? photo.widths.at(-1);
  return `/images/photos/${name}-${w}.webp`;
}

export function photoSrcSet(name) {
  const photo = getPhoto(name);
  if (!photo) return undefined;
  return photo.widths.map((w) => `/images/photos/${name}-${w}.webp ${w}w`).join(', ');
}
