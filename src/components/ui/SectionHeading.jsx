import MultiLine from './MultiLine';
import { OrnamentDivider } from './Ornaments';

const sizes = {
  xl: 'text-4xl md:text-6xl',
  lg: 'text-3xl md:text-[44px]',
  md: 'text-2xl md:text-[34px]',
};

/**
 * En-tête de section : sur-titre doré, titre, filet orné à cloche, description optionnelle.
 * tone="light" pour les fonds sombres.
 */
export default function SectionHeading({
  overline,
  title,
  children,
  align = 'center',
  tone = 'dark',
  size = 'lg',
  as: Heading = 'h2',
  className = '',
}) {
  const centered = align === 'center';
  const light = tone === 'light';
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {overline && <p className={`overline mb-4 ${light ? 'text-gold-light' : 'text-gold'}`}>{overline}</p>}
      <Heading className={`${sizes[size]} leading-tight ${light ? 'text-offwhite' : 'text-black'}`}>
        <MultiLine text={title} />
      </Heading>
      <OrnamentDivider className={`mt-5 ${light ? 'text-gold-light' : 'text-gold'} ${centered ? 'mx-auto' : ''}`} width={centered ? 'w-48' : 'w-40'} align={centered ? 'center' : 'left'} />
      {children && (
        <div className={`mt-6 leading-relaxed ${light ? 'text-offwhite/75' : 'text-gray-mid'} ${centered ? 'max-w-2xl mx-auto' : 'max-w-md'}`}>
          {children}
        </div>
      )}
    </div>
  );
}
