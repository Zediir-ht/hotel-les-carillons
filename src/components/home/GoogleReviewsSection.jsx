import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { ButtonLink } from '../ui/Links';
import { useLang } from '../../i18n/LanguageContext';
import { SITE, LINKS } from '../../config/site';

function Stars({ rating, size = 'h-4 w-4' }) {
  const rounded = Math.round(rating);
  return (
    <span className="inline-flex items-center gap-0.5 text-[#d8a93b]" role="img" aria-label={`${rating} / 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className={`${size} ${i < rounded ? '' : 'opacity-25'}`} aria-hidden="true">
          <path d="M10 1.75l2.55 5.16 5.7.83-4.13 4.03.98 5.68L10 14.77l-5.1 2.68.98-5.68L1.75 7.74l5.7-.83L10 1.75z" />
        </svg>
      ))}
    </span>
  );
}

/**
 * Avis Google. Sans données (clé API non configurée), la section reste utile :
 * note globale + liens vers la fiche Google — jamais de faux avis ni de texte technique.
 */
export default function GoogleReviewsSection({ data }) {
  const { t, lang } = useLang();
  const rating = data?.rating ?? SITE.googleRating.value;
  const reviews = data?.reviews ?? [];
  const mapsUrl = data?.url ?? LINKS.googleMaps;
  const ratingText = rating.toLocaleString(lang === 'en' ? 'en-GB' : 'fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  return (
    <section className="section-border bg-offwhite py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading overline={t('googleReviews.overline')} title={t('googleReviews.title')}>
          {t('googleReviews.desc')}
        </SectionHeading>

        <div className="mt-10 flex flex-col items-center gap-3">
          <p className="flex items-center gap-3">
            <span className="text-5xl text-black font-light" style={{ fontFamily: 'var(--font-display)' }}>
              {ratingText}
            </span>
            <span className="flex flex-col items-start">
              <Stars rating={rating} />
              <span className="text-xs text-gray-mid mt-1 uppercase tracking-[0.15em]">
                {t('googleReviews.ratingOf')}
                {data?.count ? ` · ${data.count} ${t('googleReviews.basedOn')}` : ` · ${t('googleReviews.reviewsLabel')}`}
              </span>
            </span>
          </p>
          <ul className="flex flex-wrap justify-center gap-2 list-none p-0 m-0 mt-2">
            {t('googleReviews.pillars').map((pillar) => (
              <li key={pillar} className="border border-black/10 bg-white px-3 py-1.5 text-xs text-black/70 tracking-wide">
                {pillar}
              </li>
            ))}
          </ul>
        </div>

        {reviews.length > 0 && (
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {reviews.map((review, i) => (
              <Reveal key={`${review.author}-${i}`} from="up" delay={i * 120} as="article" className="bg-white border border-black/5 p-6 md:p-7 flex flex-col">
                <Stars rating={review.rating} size="h-3.5 w-3.5" />
                <p className="mt-4 text-sm leading-relaxed text-gray-mid font-light flex-1 line-clamp-[8]">« {review.text} »</p>
                <footer className="mt-5 pt-4 border-t border-black/5 flex items-center gap-3">
                  {review.photo && <img src={review.photo} alt="" width="32" height="32" className="w-8 h-8 rounded-full! object-cover" loading="lazy" referrerPolicy="no-referrer" />}
                  <div className="text-xs">
                    {review.authorUrl ? (
                      <a href={review.authorUrl} target="_blank" rel="noopener noreferrer" className="text-black no-underline hover:text-gold">
                        {review.author}
                      </a>
                    ) : (
                      <span className="text-black">{review.author}</span>
                    )}
                    <span className="block text-gray-mid mt-0.5">{review.relativeTime} · Google</span>
                  </div>
                </footer>
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-3">
          <ButtonLink href={mapsUrl} variant="dark">
            {t('googleReviews.readCta')}
          </ButtonLink>
          <ButtonLink href={data?.writeUrl ?? mapsUrl} variant="outline">
            {t('googleReviews.writeCta')}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
