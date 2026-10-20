import { useContext, useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext';
import { HeadContext } from '../lib/head';
import { SITE } from '../config/site';

/**
 * Titre, description, Open Graph et URL canonique de la page.
 *   <Seo page="hotel" path="/hotel" />  → textes lus dans i18n : seo.hotel.title / seo.hotel.description
 */
export default function Seo({ page, path = '/', image = '/images/og-default.jpg', noindex = false }) {
  const { t, lang } = useLang();
  const pageTitle = t(`seo.${page}.title`);
  const title = page === 'home' ? pageTitle : `${pageTitle} — ${SITE.shortName}`;
  const description = t(`seo.${page}.description`);
  const url = `${SITE.url}${path === '/' ? '' : path}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE.url}${image}`;

  const head = {
    title,
    canonical: url,
    meta: [
      ['name', 'description', description],
      ['name', 'robots', noindex ? 'noindex, follow' : 'index, follow'],
      ['property', 'og:type', 'website'],
      ['property', 'og:site_name', SITE.name],
      ['property', 'og:locale', lang === 'en' ? 'en_GB' : 'fr_FR'],
      ['property', 'og:title', title],
      ['property', 'og:description', description],
      ['property', 'og:url', url],
      ['property', 'og:image', imageUrl],
      ['property', 'og:image:width', '1200'],
      ['property', 'og:image:height', '630'],
      ['name', 'twitter:card', 'summary_large_image'],
      ['name', 'twitter:title', title],
      ['name', 'twitter:description', description],
      ['name', 'twitter:image', imageUrl],
    ],
  };

  // Pré-rendu : on mémorise les balises, le script de build les injecte dans le HTML.
  const collector = useContext(HeadContext);
  collector?.collect(head);

  const serialized = JSON.stringify(head);
  useEffect(() => {
    const data = JSON.parse(serialized);
    document.title = data.title;
    for (const [attr, key, content] of data.meta) {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    }
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = data.canonical;
  }, [serialized]);

  return null;
}
