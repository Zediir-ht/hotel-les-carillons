// Fonction serveur Vercel : /api/reviews?lang=fr
// Interroge Google Places côté serveur (la clé API n'est jamais exposée aux visiteurs)
// et met la réponse en cache 24 h sur le CDN Vercel → quelques appels par jour seulement.
//
// Variables d'environnement à définir dans Vercel (Settings → Environment Variables) :
//   GOOGLE_PLACES_API_KEY   clé API Google Cloud avec « Places API (New) » activée
//   GOOGLE_PLACE_ID         identifiant de la fiche Google de l'hôtel (ex. ChIJ…)

export default async function handler(req, res) {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) {
    res.status(204).end();
    return;
  }

  const lang = req.query.lang === 'en' ? 'en' : 'fr';
  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=${lang}`, {
      headers: {
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews,googleMapsUri',
      },
    });
    if (!response.ok) throw new Error(`Google Places ${response.status}`);
    const data = await response.json();

    const reviews = (data.reviews ?? [])
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? 'Google',
        authorUrl: r.authorAttribution?.uri ?? null,
        photo: r.authorAttribution?.photoUri ?? null,
        rating: Number(r.rating) || 0,
        text: r.text?.text ?? r.originalText?.text ?? '',
        relativeTime: r.relativePublishTimeDescription ?? '',
      }))
      .filter((r) => r.text)
      .slice(0, 3);

    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
    res.status(200).json({
      rating: Number(data.rating) || null,
      count: Number(data.userRatingCount) || null,
      url: data.googleMapsUri ?? null,
      writeUrl: `https://search.google.com/local/writereview?placeid=${encodeURIComponent(placeId)}`,
      reviews,
    });
  } catch (error) {
    console.error(error);
    res.setHeader('Cache-Control', 'public, s-maxage=300');
    res.status(502).json({ error: 'reviews_unavailable' });
  }
}
