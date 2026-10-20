// Pré-rendu statique : après `vite build`, génère un vrai fichier HTML par page
// (contenu + titre + description + Open Graph) pour Google et les aperçus de partage.
//   dist/index.html, dist/hotel.html, … et dist/404.html
// + dist/sitemap.xml à jour.
import { readFile, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST = path.resolve('dist');
const SSR_DIR = path.resolve('dist-ssr');
const SITE_URL = 'https://www.lescarillons.fr';

const { render, ROUTES } = await import(pathToFileURL(path.join(SSR_DIR, 'entry-server.js')).href);
const template = await readFile(path.join(DIST, 'index.html'), 'utf8');

const escape = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function headTags(head) {
  const meta = head.meta.map(([attr, key, content]) => `<meta ${attr}="${key}" content="${escape(content)}" />`);
  return [`<title>${escape(head.title)}</title>`, ...meta, `<link rel="canonical" href="${head.canonical}" />`].join('\n    ');
}

const pages = [...ROUTES.map((r) => r.path), '/404'];

for (const url of pages) {
  const { html, head } = await render(url);
  if (!head) throw new Error(`Aucune balise <Seo> rendue pour ${url}`);
  const out = template
    .replace('<!--app-head-->', headTags(head))
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const file = url === '/' ? 'index.html' : `${url.slice(1)}.html`;
  await writeFile(path.join(DIST, file), out);
  console.log(`  ✓ ${url.padEnd(20)} → dist/${file}  (${(out.length / 1024).toFixed(0)} Ko)`);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) => `  <url>
    <loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`,
).join('\n')}
</urlset>
`;
await writeFile(path.join(DIST, 'sitemap.xml'), sitemap);
console.log('  ✓ sitemap.xml');

await rm(SSR_DIR, { recursive: true, force: true });
