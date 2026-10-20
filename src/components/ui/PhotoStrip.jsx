import Photo from './Photo';

/** Bandeau de photos bord à bord (3 ou 4 photos ; la dernière est masquée sur mobile). */
export default function PhotoStrip({ photos }) {
  const cols = photos.length >= 4 ? 'lg:grid-cols-4' : 'md:grid-cols-3';
  return (
    <section className="overflow-hidden section-border">
      <div className={`grid grid-cols-2 ${cols} h-56 md:h-72`}>
        {photos.map((p, i) => (
          <div
            key={p.name}
            className={`relative overflow-hidden group ${i === photos.length - 1 && photos.length % 2 === 1 ? 'hidden md:block' : ''} ${
              i >= 2 && photos.length >= 4 ? 'hidden lg:block' : ''
            }`}
          >
            <Photo
              name={p.name}
              alt={p.alt}
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
