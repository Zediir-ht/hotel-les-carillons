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
        <SectionHeading title={t('services.title')} className="mb-14" />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[260px] sm:auto-rows-[280px] lg:auto-rows-[300px] gap-4 md:gap-5 list-none p-0 m-0">
          {items.map((service, i) => {
            const s = SERVICES[i];
            return (
              <li key={service.title} className={s.tile}>
                <Link
                  to={s.to}
                  className="group relative block h-full no-underline shadow-card transition-[translate] duration-300 ease-(--ease-out) hover:-translate-y-1 focus-visible:-translate-y-1"
                >
                  {/* Ombre du survol : superposée et révélée en fondu (opacity), plutôt que d'animer box-shadow
                      qui forcerait un nouveau dessin de la tuile à chaque image */}
                  <span className="absolute inset-0 shadow-raised opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true" />
                  <div className="absolute inset-0 overflow-hidden bg-deepbrown">
                  <Photo
                    name={s.photo}
                    alt=""
                    sizes={s.big ? '(min-width: 1024px) 770px, 100vw' : '(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw'}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-(--ease-out) group-hover:scale-[1.03]"
                  />
                  {/* Voile : assombrit le bas de la tuile, là où se lit le texte */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 via-55% md:via-black/45 md:via-40% to-transparent" aria-hidden="true" />

                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 text-on-photo">
                    <h3 className={`text-white ${s.big ? 'text-2xl md:text-4xl' : 'text-xl md:text-2xl'}`}>{service.title}</h3>
                    <p className={`mt-2 text-white/90 leading-relaxed ${s.big ? 'max-w-md text-sm md:text-base' : 'text-sm line-clamp-2'}`}>{service.desc}</p>
                    {/* Filet doré : il s'allonge au survol, et signale que la tuile est un lien (aussi au toucher) */}
                    <span className="mt-4 block h-px w-10 origin-left bg-gold-light transition-[scale] duration-300 ease-(--ease-out) group-hover:scale-x-[2.4] group-focus-visible:scale-x-[2.4]" aria-hidden="true" />
                  </div>
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
