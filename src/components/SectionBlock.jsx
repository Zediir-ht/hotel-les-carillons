import Reveal from './Reveal';

export default function SectionBlock({ title, subtitle, children, image, imageAlt, imageLeft = false, bgWarm = false, className = '' }) {
  return (
    <section
      className={`flex flex-col md:flex-row ${imageLeft ? '' : 'md:flex-row-reverse'} ${className} overflow-hidden`}
      style={{ minHeight: '460px' }}
    >
      {/* Image — full-bleed half */}
      <Reveal
        className="md:w-1/2 h-56 md:h-auto relative overflow-hidden"
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
        className={`md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 md:py-16 ${bgWarm ? 'bg-warm' : 'bg-white'}`}
        from={imageLeft ? 'left' : 'right'}
        delay={150}
      >
        {subtitle && (
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold mb-4">
            {subtitle}
          </p>
        )}
        {title && (
          <>
            <h2 className="text-2xl md:text-3xl text-brown mb-4 leading-tight">{title}</h2>
            <div className="w-8 h-px bg-gold mb-6 gold-shimmer" />
          </>
        )}
        <div className="text-gray-500 leading-relaxed space-y-4 text-[15px] max-w-sm">
          {children}
        </div>
      </Reveal>
    </section>
  );
}
