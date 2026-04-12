import { useEffect } from 'react';

const SITE_NAME = 'Hôtel Restaurant Les Carillons';
const BASE_URL = 'https://www.lescarillons.fr';

export default function Seo({ title, description, path = '/', image }) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Cransac-les-Thermes, Aveyron`;
  const fullUrl = `${BASE_URL}${path}`;
  const ogImage = image || `${BASE_URL}/images/og-default.jpg`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
      setMeta('name', 'twitter:description', description);
    }

    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:url', fullUrl);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:locale', 'fr_FR');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:image', ogImage);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);
  }, [fullTitle, description, fullUrl, ogImage]);

  return null;
}
