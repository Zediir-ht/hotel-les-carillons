import { getPhoto, photoSrc, photoSrcSet } from '../../lib/photos';

/**
 * Image responsive (WebP, plusieurs tailles) à partir du nom d'une photo de photos-src/.
 *   <Photo name="piscine" alt="…" sizes="(min-width: 768px) 50vw, 100vw" />
 * priority : à réserver à l'image principale visible au chargement (hero).
 */
export default function Photo({ name, alt, sizes = '100vw', priority = false, className = '', ...rest }) {
  const photo = getPhoto(name);
  if (!photo) return null;
  return (
    <img
      src={photoSrc(name, 960)}
      srcSet={photoSrcSet(name)}
      sizes={sizes}
      width={photo.w}
      height={photo.h}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      className={className}
      {...rest}
    />
  );
}
