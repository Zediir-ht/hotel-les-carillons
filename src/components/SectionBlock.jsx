import Reveal from './Reveal';

export default function SectionBlock({ title, subtitle, children, image, imageAlt, imageLeft = false, bgWarm = false, className = '' }) {
  return (
    <section
      className={`flex flex-col md:flex-row ${imageLeft ? '' : 'md:flex-row-reverse'} ${className} overflow-hidden section-border`}
      style={{ minHeight: '460px' }}
    >
      {/* Image — full-bleed half */}
      <Reveal
        className="md:w-1/2 h-56 md:h-auto relative overflow-hidden img-card"
        from={imageLeft ? 'right' : 'left'}
        delay={0}
      >
        <img
          src={image || '/images/placeholder.jpg'}
          alt={imageAlt || title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </Reveal>

      {/* Content — other half */}
      <Reveal
        className={`md:w-1/2 flex flex-col justify-center px-8 py-14 md:px-16 md:py-20 ${bgWarm ? 'bg-beige' : 'bg-white'}`}
        from={imageLeft ? 'left' : 'right'}
        delay={150}
      >
        {subtitle && (
          <p className="overline text-gold mb-4">
            {subtitle}
          </p>
        )}
        {title && (
          <>
            <h2 className="text-2xl md:text-[32px] text-black mb-4 leading-tight">{title}</h2>
            <div className="w-12 h-px bg-black mb-6" />
          </>
        )}
        <div className="text-gray-mid leading-relaxed space-y-4 text-base max-w-sm">
          {children}
        </div>
      </Reveal>
    </section>
  );
}
