import { Link } from 'react-router-dom';
import Photo from '../ui/Photo';
import SectionHeading from '../ui/SectionHeading';
import { Bell } from '../ui/Ornaments';
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

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 list-none p-0 m-0">
          {items.map((service, i) => (
            <li key={service.title}>
              <Link to={SERVICES[i].to} className="group relative block h-full bg-white no-underline p-4 pb-7 text-center">
                <span className="pointer-events-none absolute inset-1.5 border border-gold/25 group-hover:border-gold/60 transition-colors" aria-hidden="true" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-[999px]">
                  <Photo
                    name={SERVICES[i].photo}
                    alt=""
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="relative pt-5 px-3">
                  <Bell className="w-4 h-4 text-gold mx-auto mb-2" />
                  <h3 className="text-lg text-black mb-2 normal-case tracking-normal font-normal group-hover:text-gold transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-mid text-sm leading-relaxed">{service.desc}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
