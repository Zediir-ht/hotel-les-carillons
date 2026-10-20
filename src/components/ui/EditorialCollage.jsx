import Photo from './Photo';
import SectionHeading from './SectionHeading';

/**
 * Mise en page « magazine » : texte + trois photos décalées (une grande, deux petites).
 *   photos : [{ name, alt }] × 3
 */
export default function EditorialCollage({ photos, overline, title, children, bg = 'bg-white' }) {
  const [big, small1, small2] = photos;
  return (
    <section className={`${bg} py-20 md:py-28 overflow-hidden`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-14 lg:gap-16 items-center">
        <div className="flex flex-col order-2 lg:order-1">
          <SectionHeading overline={overline} title={title} align="left" />
          <div className="mt-7 space-y-4 text-gray-mid flex flex-col">{children}</div>
        </div>

        <div className="relative order-1 lg:order-2 grid grid-cols-6 grid-rows-6 gap-3 md:gap-4 aspect-[5/4]">
          <div className="col-span-4 row-span-6 overflow-hidden">
            <Photo name={big.name} alt={big.alt} sizes="(min-width: 1024px) 40vw, 66vw" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 row-span-3 row-start-1 mt-8 md:mt-12 overflow-hidden">
            <Photo name={small1.name} alt={small1.alt} sizes="(min-width: 1024px) 20vw, 33vw" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 row-span-3 row-start-4 mb-8 md:mb-12 overflow-hidden">
            <Photo name={small2.name} alt={small2.alt} sizes="(min-width: 1024px) 20vw, 33vw" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
