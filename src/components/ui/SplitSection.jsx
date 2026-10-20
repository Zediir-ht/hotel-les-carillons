import Reveal from './Reveal';
import Photo from './Photo';
import SectionHeading from './SectionHeading';

const backgrounds = {
  white: 'bg-white',
  beige: 'bg-beige',
  offwhite: 'bg-offwhite',
};

/**
 * Section en deux moitiés : photo pleine hauteur d'un côté, texte de l'autre.
 *   photo / photoAlt : photo de photos-src/   — ou media : n'importe quel élément (ex. carrousel)
 *   imageSide        : 'left' | 'right'
 */
export default function SplitSection({
  photo,
  photoAlt,
  media,
  imageSide = 'left',
  bg = 'white',
  overline,
  title,
  children,
  id,
}) {
  const imageLeft = imageSide === 'left';
  return (
    <section id={id} className={`flex flex-col ${imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} section-border overflow-hidden md:min-h-[520px]`}>
      <Reveal className="md:w-1/2 relative h-64 sm:h-80 md:h-auto overflow-hidden img-card" from="fade">
        {media ?? (
          <Photo
            name={photo}
            alt={photoAlt}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </Reveal>

      <Reveal
        className={`md:w-1/2 flex flex-col justify-center px-6 sm:px-10 py-14 md:px-16 md:py-20 ${backgrounds[bg]}`}
        from={imageLeft ? 'left' : 'right'}
        delay={120}
      >
        <SectionHeading overline={overline} title={title} align="left" size="md" />
        <div className="mt-7 text-gray-mid leading-relaxed space-y-4 text-base max-w-md flex flex-col">{children}</div>
      </Reveal>
    </section>
  );
}
