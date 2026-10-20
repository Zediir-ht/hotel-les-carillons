import Photo from './Photo';
import SectionHeading from './SectionHeading';

/**
 * Grande photo pleine largeur avec un encart de texte posé dessus
 * (à gauche ou à droite). Casse le rythme des sections « moitié photo / moitié texte ».
 */
export default function FeatureBanner({ photo, photoAlt, side = 'left', overline, title, children }) {
  return (
    <section className="relative min-h-[560px] md:min-h-[640px] flex items-center py-16 md:py-24 overflow-hidden">
      <Photo name={photo} alt={photoAlt} sizes="100vw" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/15" />
      <div className={`relative w-full max-w-7xl mx-auto px-4 sm:px-8 flex ${side === 'right' ? 'justify-end' : 'justify-start'}`}>
        <div className="bg-offwhite/97 backdrop-blur-sm p-8 md:p-12 max-w-lg shadow-[0_20px_60px_rgba(0,0,0,0.25)] flex flex-col">
          <SectionHeading overline={overline} title={title} align="left" size="md" />
          <div className="mt-6 space-y-4 text-gray-mid flex flex-col">{children}</div>
        </div>
      </div>
    </section>
  );
}
