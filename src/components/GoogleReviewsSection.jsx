import { useEffect, useState } from 'react';
import Reveal from './Reveal';

const googleMapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Hotel+Restaurant+Les+Carillons+Cransac-les-Thermes';

const GOOGLE_PLACES_API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
const GOOGLE_PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID;

const fallbackReviews = [
  {
    id: 'fallback-1',
    author: 'Avis Google',
    relativeTime: 'récemment',
    rating: 5,
    text: 'Ajoutez votre clé API Google Places et votre Place ID pour afficher ici les vrais avis Google automatiquement.',
  },
];

const pillars = [
  'Hôtel familial',
  'Restaurant du terroir',
  'Piscine et parc arboré',
];

function GoogleMark() {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-normal tracking-[0.22em] uppercase text-black/70">
      <span className="inline-flex items-center text-lg font-semibold" aria-hidden="true">
        <span style={{ color: '#4285F4' }}>G</span>
        <span style={{ color: '#EA4335' }}>o</span>
        <span style={{ color: '#FBBC05' }}>o</span>
        <span style={{ color: '#4285F4' }}>g</span>
        <span style={{ color: '#34A853' }}>l</span>
        <span style={{ color: '#EA4335' }}>e</span>
      </span>
      Avis
    </span>
  );
}

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-[#d8a93b]" aria-label="Mise en avant des avis Google">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 1.75l2.55 5.16 5.7.83-4.13 4.03.98 5.68L10 14.77l-5.1 2.68.98-5.68L1.75 7.74l5.7-.83L10 1.75z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewStars({ rating = 5 }) {
  const rounded = Math.round(rating);

  return (
    <div className="flex items-center gap-1 text-[#d8a93b]" aria-label={`Note ${rounded} sur 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-3.5 w-3.5 ${index < rounded ? 'opacity-100' : 'opacity-25'}`}
        >
          <path d="M10 1.75l2.55 5.16 5.7.83-4.13 4.03.98 5.68L10 14.77l-5.1 2.68.98-5.68L1.75 7.74l5.7-.83L10 1.75z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviewsSection() {
  const [reviews, setReviews] = useState(fallbackReviews);
  const [ratingInfo, setRatingInfo] = useState({ rating: null, count: null });

  useEffect(() => {
    if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
      return;
    }

    let cancelled = false;

    async function loadGoogleReviews() {
      try {
        const response = await fetch(`https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}`, {
          headers: {
            'X-Goog-Api-Key': GOOGLE_PLACES_API_KEY,
            'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
          },
        });

        if (!response.ok) {
          throw new Error(`Google Places request failed: ${response.status}`);
        }

        const data = await response.json();
        const nextReviews = (data.reviews || []).slice(0, 3).map((review, index) => ({
          id: `${review.authorAttribution?.displayName || 'review'}-${index}`,
          author: review.authorAttribution?.displayName || 'Client',
          relativeTime: review.relativePublishTimeDescription || 'récemment',
          rating: Number(review.rating) || 5,
          text: review.originalText?.text || review.text?.text || '',
        })).filter((review) => Boolean(review.text));

        if (!cancelled) {
          if (nextReviews.length > 0) {
            setReviews(nextReviews);
          }
          setRatingInfo({
            rating: Number(data.rating) || null,
            count: Number(data.userRatingCount) || null,
          });
        }
      } catch (error) {
        if (!cancelled) {
          setReviews(fallbackReviews);
        }
      }
    }

    loadGoogleReviews();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="section-border bg-[#f7f3ee] py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-10 items-stretch">
          <Reveal from="left">
            <div className="relative h-full overflow-hidden border border-black/8 bg-white/80">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(140,110,71,0.1),_transparent_46%),linear-gradient(135deg,_rgba(75,56,46,0.82),_rgba(75,56,46,0.74))]" />
              <div className="absolute right-0 top-0 h-full w-[42%] hidden lg:block opacity-20">
                <img
                  src="/images/Restaurant%20les%20Carillons%20-%20Restaurant%20CRANSAC/logis-hotel-les-carillons-facade-cransac-957618.jpg"
                  alt="Façade de l'hôtel Les Carillons"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-between p-7 md:p-10 lg:p-12 text-white/92">
                <div>
                  <div className="mb-7 inline-flex items-center gap-3 border border-white/12 bg-white/6 px-4 py-2.5 backdrop-blur-sm">
                    <GoogleMark />
                    <span className="h-5 w-px bg-white/15" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                      Bien en vue dès l'accueil
                    </span>
                  </div>

                  <p className="overline mb-3 text-[#d4b792]/90">Réputation en ligne</p>
                  <h2 className="max-w-xl text-2xl md:text-[36px] leading-tight text-offwhite">Les avis Google rassurent avant même la réservation.</h2>
                  <div className="mt-5 h-px w-14 bg-[#d4b792]/80" />
                  <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 font-light">
                    Les voyageurs y retrouvent ce qui fait l'identité des Carillons : un accueil sincère, une table appréciée et un cadre apaisant à Cransac-les-Thermes.
                  </p>
                  {ratingInfo.rating && ratingInfo.count ? (
                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-white/62">
                      Note globale {ratingInfo.rating.toFixed(1)} sur 5, basée sur {ratingInfo.count} avis Google
                    </p>
                  ) : null}
                </div>

                <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_210px] lg:items-end">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {pillars.map((pillar) => (
                      <div key={pillar} className="border border-white/12 bg-white/6 px-4 py-3.5 backdrop-blur-sm">
                        <div className="mb-2.5 h-px w-7 bg-[#d4b792]/90" />
                        <p className="text-[13px] leading-snug text-white/82">{pillar}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border border-white/14 bg-white/8 p-[18px] backdrop-blur-sm">
                    <StarRow />
                    <p className="mt-3 text-base text-offwhite/92">Consulter les retours Google</p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-white/65 font-light">
                      Un accès direct vers la fiche Google Maps pour lire les avis et publier le vôtre.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-[#d4b792]/90 bg-[#d4b792]/90 px-6 py-3 text-[10px] font-normal uppercase tracking-[0.2em] text-deepbrown no-underline transition-colors hover:bg-[#e1c9ab]"
                  >
                    Lire les avis Google
                  </a>
                  <a
                    href={`${googleMapsUrl}&entry=ttu`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-white/18 px-6 py-3 text-[10px] font-normal uppercase tracking-[0.2em] text-white/92 no-underline transition-colors hover:bg-white/8"
                  >
                    Laisser un avis
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-3.5 md:gap-4">
            {reviews.map((review, index) => (
              <Reveal key={review.id} from="right" delay={index * 120}>
                <article className="relative overflow-hidden border border-black/7 bg-white/88 p-6 md:p-7 shadow-[0_12px_30px_rgba(75,56,46,0.04)]">
                  <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#d4b792]/90 via-gold/85 to-[#7a5c3a]/80" />
                  <div className="flex flex-col gap-4 pl-3">
                    <div className="flex flex-col gap-2.5 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-gold/90">{review.relativeTime}</p>
                        <h3 className="mt-1.5 text-lg md:text-xl text-black/90 leading-tight">{review.author}</h3>
                      </div>
                      <div className="flex items-center gap-2.5 md:justify-end opacity-85">
                        <ReviewStars rating={review.rating} />
                        <GoogleMark />
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-mid font-light">
                      {review.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}