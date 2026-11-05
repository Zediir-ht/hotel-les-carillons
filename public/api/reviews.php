<?php
// Avis Google pour l'hébergement OVH : équivalent de api/reviews.js (Vercel).
// Appelé par le site à l'adresse /api/reviews?lang=fr (voir .htaccess).
// Interroge Google Places côté serveur (la clé n'est jamais visible des visiteurs)
// et garde la réponse 24 h dans un fichier : quelques appels par jour seulement.
//
// Réglage : créer api/config.php sur le serveur (modèle : config.example.php). Ce fichier n'est PAS dans le dépôt.

const CACHE_SECONDS = 86400;

/** Réduit la réponse Google à ce que le site affiche (3 avis au plus, texte non vide). */
function map_place(array $data, string $placeId): array
{
    $reviews = [];
    foreach (($data['reviews'] ?? []) as $r) {
        $text = $r['text']['text'] ?? $r['originalText']['text'] ?? '';
        if ($text === '') {
            continue;
        }
        $reviews[] = [
            'author' => $r['authorAttribution']['displayName'] ?? 'Google',
            'authorUrl' => $r['authorAttribution']['uri'] ?? null,
            'photo' => $r['authorAttribution']['photoUri'] ?? null,
            'rating' => (int) ($r['rating'] ?? 0),
            'text' => $text,
            'relativeTime' => $r['relativePublishTimeDescription'] ?? '',
        ];
    }
    return [
        'rating' => isset($data['rating']) ? (float) $data['rating'] : null,
        'count' => isset($data['userRatingCount']) ? (int) $data['userRatingCount'] : null,
        'url' => $data['googleMapsUri'] ?? null,
        'writeUrl' => 'https://search.google.com/local/writereview?placeid=' . rawurlencode($placeId),
        'reviews' => array_slice($reviews, 0, 3),
    ];
}

if (defined('REVIEWS_LIB_ONLY')) {
    return;
}

$config = is_file(__DIR__ . '/config.php') ? require __DIR__ . '/config.php' : [];
$key = $config['GOOGLE_PLACES_API_KEY'] ?? '';
$placeId = $config['GOOGLE_PLACE_ID'] ?? '';
if ($key === '' || $placeId === '') {
    http_response_code(204); // pas configuré : le site n'affiche simplement pas les avis
    exit;
}

$lang = ($_GET['lang'] ?? 'fr') === 'en' ? 'en' : 'fr';
header('Content-Type: application/json; charset=utf-8');

// Cache fichier (dossier temporaire du serveur, hors du site)
$cacheFile = sys_get_temp_dir() . '/carillons-reviews-' . md5($placeId) . "-$lang.json";
if (is_file($cacheFile) && time() - filemtime($cacheFile) < CACHE_SECONDS) {
    header('Cache-Control: public, max-age=3600');
    readfile($cacheFile);
    exit;
}

$url = 'https://places.googleapis.com/v1/places/' . rawurlencode($placeId) . '?languageCode=' . $lang;
$context = stream_context_create([
    'http' => [
        'method' => 'GET',
        'timeout' => 6,
        'ignore_errors' => true,
        'header' => "X-Goog-Api-Key: $key\r\nX-Goog-FieldMask: rating,userRatingCount,reviews,googleMapsUri\r\n",
    ],
]);
$body = @file_get_contents($url, false, $context);
$status = 0;
if (isset($http_response_header[0]) && preg_match('#\s(\d{3})\s#', $http_response_header[0], $m)) {
    $status = (int) $m[1];
}
$data = $body !== false ? json_decode($body, true) : null;

if ($status !== 200 || !is_array($data)) {
    // Google injoignable : on resert l'ancienne copie si elle existe, sinon erreur discrète
    if (is_file($cacheFile)) {
        readfile($cacheFile);
        exit;
    }
    http_response_code(502);
    echo json_encode(['error' => 'reviews_unavailable']);
    exit;
}

$json = json_encode(map_place($data, $placeId), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
@file_put_contents($cacheFile, $json, LOCK_EX);
header('Cache-Control: public, max-age=3600');
echo $json;
