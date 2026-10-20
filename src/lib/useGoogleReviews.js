import { useEffect, useState } from 'react';

// Un seul appel par langue et par visite, partagé entre les composants.
const requests = {};

function load(lang) {
  requests[lang] ??= fetch(`/api/reviews?lang=${lang}`)
    .then((res) => (res.ok && res.status !== 204 ? res.json() : null))
    .catch(() => null);
  return requests[lang];
}

/**
 * Avis Google récupérés via la fonction serveur /api/reviews (clé API cachée côté serveur).
 * Renvoie null tant que rien n'est disponible (clé non configurée, développement local…).
 * → { rating, count, url, reviews: [{ author, authorUrl, photo, rating, text, relativeTime }] }
 */
export function useGoogleReviews(lang) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let active = true;
    load(lang).then((d) => active && setData(d));
    return () => {
      active = false;
    };
  }, [lang]);
  return data;
}
