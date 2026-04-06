import { useState, useEffect, useCallback } from 'react';

/**
 * Elegant fade-transition carousel.
 * Props:
 *   slides      – [{ src, alt, caption }]
 *   autoPlay    – boolean (default false)
 *   interval    – ms between slides (default 4500)
 *   className   – extra classes for the outer wrapper
 *   aspectRatio – CSS aspect-ratio value (default '16/9')
 */
export default function Carousel({
  slides = [],
  autoPlay = false,
  interval = 4500,
  className = '',
  aspectRatio = '16/9',
}) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % count), [count]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + count) % count), [count]);

  useEffect(() => {
    if (!autoPlay || paused || count <= 1) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [autoPlay, paused, next, interval, count]);

  if (!count) return null;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          aria-hidden={i !== current}
        >
          <img
            src={slide.src}
            alt={slide.alt || ''}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {slide.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent px-6 py-6">
              <p className="text-white/90 text-sm font-light tracking-[0.2em] uppercase">
                {slide.caption}
              </p>
            </div>
          )}
        </div>
      ))}

      {/* Prev / Next arrows */}
      {count > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center bg-black/25 hover:bg-black/50 backdrop-blur-sm text-white ring-1 ring-white/25 hover:ring-[#a67b5b] transition-all duration-200"
            aria-label="Image précédente"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center bg-black/25 hover:bg-black/50 backdrop-blur-sm text-white ring-1 ring-white/25 hover:ring-[#a67b5b] transition-all duration-200"
            aria-label="Image suivante"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dot indicators */}
      {count > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 h-2 bg-[#a67b5b]'
                  : 'w-2 h-2 bg-white/55 hover:bg-white/85'
              }`}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
