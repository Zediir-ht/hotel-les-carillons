import { Link } from 'react-router-dom';
import Photo from '../ui/Photo';
import SectionHeading from '../ui/SectionHeading';
import { useLang } from '../../i18n/LanguageContext';

// Une photo et une page de destination par service (même ordre que services.items dans i18n)
const SERVICES = [
  { to: '/hotel#chambres', photo: 'chambre-familiale-2' },
  { to: '/restaurant', photo: 'plat-1' },
  { to: '/galerie', photo: 'piscine-fleurs' },
  { to: '/meubles', photo: 'cedres-terrasse' },
  { to: '/seminaire', photo: 'seminaire-reunion' },
  { to: '/hotel#soiree-etape', photo: 'salle-restaurant-1' },
];

export default function ServicesGrid() {
  const { t } = useLang();
  const items = t('services.items');
  return (
    <section className="py-20 md:py-28 bg-beige">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading overline={t('services.overline')} title={t('services.title')} className="mb-14" />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-y-16 list-none p-0 m-0">
          {items.map((service, i) => (
            <li key={service.title}>
              <Link to={SERVICES[i].to} className="group block no-underline text-center">
                <div className="aspect-[4/5] max-w-xs mx-auto overflow-hidden rounded-t-[999px] bg-white">
                  <Photo
                    name={SERVICES[i].photo}
                    alt=""
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 80vw"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-7 text-xl md:text-2xl text-black transition-colors group-hover:text-gold">
                  <span className="relative">
                    {service.title}
                    <span className="absolute left-full top-0 ml-2 text-gold opacity-0 -translate-x-1 transition-[opacity,translate] duration-300 group-hover:opacity-100 group-hover:translate-x-0" aria-hidden="true">
                      →
                    </span>
                  </span>
                </h3>
                <p className="mt-3 max-w-xs mx-auto text-gray-mid text-sm leading-relaxed">{service.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
