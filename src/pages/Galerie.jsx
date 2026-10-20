import { useMemo, useState } from 'react';
import Seo from '../components/Seo';
import PageHero from '../components/ui/PageHero';
import PhotoGrid from '../components/ui/PhotoGrid';
import { useLang } from '../i18n/LanguageContext';
import { GALLERY, GALLERY_CATEGORIES } from '../data/gallery';

/** Galerie en mosaïque, filtrable par catégorie, avec visionneuse plein écran. */
export default function Galerie() {
  const { t, pick } = useLang();
  const [category, setCategory] = useState('all');

  const items = useMemo(
    () => GALLERY.filter((item) => category === 'all' || item.cat === category).map((item) => ({ photo: item.photo, alt: pick(item.alt) })),
    [category, pick],
  );

  return (
    <>
      <Seo page="galerie" path="/galerie" />
      <PageHero
        title={t('galeriePage.heroTitle')}
        subtitle={t('galeriePage.heroSub')}
        photo="facade-2"
        photoAlt=""
        breadcrumb={[{ label: t('nav.galerie') }]}
      />

      <section className="py-14 md:py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div role="group" aria-label={t('galeriePage.filterLabel')} className="flex flex-wrap justify-center gap-2 mb-8">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
                className={`px-5 py-2.5 text-sm border transition-colors cursor-pointer ${
                  category === cat ? 'bg-deepbrown text-offwhite border-deepbrown' : 'bg-white text-black/75 border-black/10 hover:border-gold hover:text-gold'
                }`}
              >
                {t(`galeriePage.categories.${cat}`)}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-gray-mid mb-8" aria-live="polite">
            {items.length} {t('galeriePage.count')}
          </p>

          <PhotoGrid key={category} items={items} />
        </div>
      </section>
    </>
  );
}
