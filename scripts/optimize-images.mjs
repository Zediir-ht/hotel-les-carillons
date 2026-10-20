// Génère les images du site à partir des originaux de photos-src/.
//   npm run images
// Sortie : public/images/photos/<nom>-<largeur>.webp + src/data/photos.json (dimensions)
// Pour ajouter une photo : la déposer dans photos-src/ (nom en minuscules-avec-tirets.jpg)
// puis relancer la commande.
import { readdir, mkdir, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'photos-src';
const OUT = 'public/images/photos';
const TARGET_WIDTHS = [480, 960, 1600];

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

const manifest = {};
const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png)$/i.test(f)).sort();

for (const file of files) {
  const name = path.parse(file).name;
  const img = sharp(path.join(SRC, file)).rotate(); // applique l'orientation EXIF
  const oriented = await img.clone().toBuffer({ resolveWithObject: true });
  const ow = oriented.info.width;
  const oh = oriented.info.height;

  const widths = [...new Set([...TARGET_WIDTHS.filter((tw) => tw < ow), Math.min(ow, TARGET_WIDTHS.at(-1))])];
  for (const tw of widths) {
    await sharp(oriented.data)
      .resize(tw)
      .webp({ quality: 74, effort: 5 })
      .toFile(path.join(OUT, `${name}-${tw}.webp`));
  }
  manifest[name] = { w: ow, h: oh, widths };
  console.log(`${name.padEnd(24)} ${ow}x${oh} → ${widths.join(', ')}`);
}

await writeFile('src/data/photos.json', JSON.stringify(manifest, null, 2) + '\n');

// Image de partage réseaux sociaux (Facebook, WhatsApp…) 1200×630
await sharp(path.join(SRC, 'piscine-terrasse.jpg'))
  .rotate()
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile('public/images/og-default.jpg');

console.log(`\n${files.length} photos traitées.`);
