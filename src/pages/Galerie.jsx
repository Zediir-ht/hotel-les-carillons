import { useCallback, useMemo, useState } from 'react';
import Seo from '../components/Seo';
import PageHero from '../components/ui/PageHero';
import Photo from '../components/ui/Photo';
import Lightbox from '../components/ui/Lightbox';
import { useLang } from '../i18n/LanguageContext';
import { GALLERY, GALLERY_CATEGORIES } from '../data/gallery';

/** Galerie en mosaïque, filtrable par catégorie, avec visionneuse plein écran. */
export default function Galerie() {
  const { t, pick } = useLang();
  const [category, setCategory] = useState('all');
  const [open, setOpen] = useState(null);

  const items = useMemo(
    () => GALLERY.filter((item) => category === 'all' || item.cat === category).map((item) => ({ ...item, alt: pick(item.alt) })),
    [category, pick],
  );
  const close = useCallback(() => setOpen(null), []);

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
          <div role="group" aria-label={t('galeriePage.filterLabel')} className="flex flex-wrap justify-center gap-2 mb-10">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
                className={`px-4 py-2 text-[11px] tracking-[0.18em] uppercase border transition-colors cursor-pointer ${
                  category === cat ? 'bg-deepbrown text-offwhite border-deepbrown' : 'bg-white text-black/65 border-black/10 hover:border-gold hover:text-gold'
                }`}
              >
                {t(`galeriePage.categories.${cat}`)}
              </button>
            ))}
          </div>

          <p className="text-center text-xs text-gray-mid mb-8" aria-live="polite">
            {items.length} {t('galeriePage.count')}
          </p>

          <ul className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 list-none p-0 m-0">
            {items.map((item, i) => (
              <li key={item.photo} className="mb-3 md:mb-4 break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  className="group relative block w-full overflow-hidden cursor-zoom-in bg-beige"
                  aria-label={`${t('ui.enlarge')} : ${item.alt}`}
                >
                  <Photo
                    name={item.photo}
                    alt=""
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pt-8 pb-3 text-left text-[11px] tracking-[0.12em] uppercase text-white opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                    {item.alt}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Lightbox items={items} index={open} onClose={close} onIndexChange={setOpen} />
    </>
  );
}
