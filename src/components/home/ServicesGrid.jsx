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

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 list-none p-0 m-0">
          {items.map((service, i) => (
            <li key={service.title}>
              <Link to={SERVICES[i].to} className="group block h-full bg-white no-underline">
                <div className="aspect-[4/3] overflow-hidden">
                  <Photo
                    name={SERVICES[i].photo}
                    alt=""
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg text-black mb-2 normal-case tracking-normal font-normal group-hover:text-gold transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                    {service.title} <span className="text-gold" aria-hidden="true">→</span>
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
