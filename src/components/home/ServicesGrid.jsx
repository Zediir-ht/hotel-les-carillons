import { Link } from 'react-router-dom';
import Photo from '../ui/Photo';
import SectionHeading from '../ui/SectionHeading';
import { useLang } from '../../i18n/LanguageContext';

// Une photo et une page de destination par service (même ordre que services.items dans i18n).
// `tile` donne la place dans la mosaïque : la première tuile domine, les autres sont plus petites.
const BIG = 'row-span-2 sm:col-span-2 lg:col-span-4';
const SMALL = 'lg:col-span-2';
const SERVICES = [
  { to: '/hotel#chambres', photo: 'chambre-familiale-2', tile: BIG, big: true },
  { to: '/restaurant', photo: 'plat-1', tile: SMALL },
  { to: '/galerie', photo: 'piscine-fleurs', tile: SMALL },
  { to: '/meubles', photo: 'cedres-terrasse', tile: SMALL },
  { to: '/seminaire', photo: 'seminaire-reunion', tile: SMALL },
  { to: '/hotel#soiree-etape', photo: 'salle-restaurant-1', tile: `sm:col-span-2 ${SMALL}` },
];

/** Mosaïque : une grande tuile (les chambres) + cinq plus petites, photo plein cadre et texte dessus. */
export default function ServicesGrid() {
  const { t } = useLang();
  const items = t('services.items');
  return (
    <section className="py-20 md:py-28 bg-beige">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading overline={t('services.overline')} title={t('services.title')} className="mb-14" />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[260px] sm:auto-rows-[280px] lg:auto-rows-[300px] gap-4 md:gap-5 list-none p-0 m-0">
          {items.map((service, i) => {
            const s = SERVICES[i];
            return (
              <li key={service.title} className={s.tile}>
                <Link
                  to={s.to}
                  className="group relative block h-full overflow-hidden bg-deepbrown no-underline shadow-card transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-raised focus-visible:-translate-y-1"
                >
                  <Photo
                    name={s.photo}
                    alt=""
                    sizes={s.big ? '(min-width: 1024px) 770px, 100vw' : '(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw'}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Voile : assombrit le bas de la tuile, là où se lit le texte */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 via-55% md:via-black/45 md:via-40% to-transparent" aria-hidden="true" />

                  <span
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-black opacity-0 -translate-y-1 transition-[opacity,translate] duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100 [@media(hover:none)]:translate-y-0"
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 text-on-photo">
                    <h3 className={`text-white ${s.big ? 'text-2xl md:text-4xl' : 'text-xl md:text-2xl'}`}>{service.title}</h3>
                    <p className={`mt-2 text-white/90 leading-relaxed ${s.big ? 'max-w-md text-sm md:text-base' : 'text-sm line-clamp-2'}`}>{service.desc}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
