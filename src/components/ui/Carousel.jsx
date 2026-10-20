import { useState, useEffect, useCallback, useRef } from 'react';
import Photo from './Photo';
import { prefersReducedMotion } from '../../lib/motion';
import { useLang } from '../../i18n/LanguageContext';

/**
 * Carrousel en fondu.
 *   slides : [{ photo, alt, caption }]
 * Défilement auto (désactivé si « réduire les animations »), pause au survol / focus,
 * balayage tactile et flèches du clavier.
 */
export default function Carousel({ slides = [], autoPlay = true, interval = 4500, className = '', aspectRatio = '16/9', sizes = '(min-width: 768px) 60vw, 100vw' }) {
  const { t } = useLang();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);
  const count = slides.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % count), [count]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + count) % count), [count]);

  useEffect(() => {
    if (!autoPlay || paused || count <= 1 || prefersReducedMotion()) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [autoPlay, paused, next, interval, count]);

  if (!count) return null;

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  };
  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  return (
    <div
      className={`relative overflow-hidden bg-black/5 ${className}`}
      style={{ aspectRatio }}
      role="region"
      aria-roledescription="carousel"
      aria-label={t('ui.carousel')}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.photo}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          aria-hidden={i !== current}
        >
          <Photo name={slide.photo} alt={slide.alt || ''} sizes={sizes} className="w-full h-full object-cover" />
          {slide.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent px-6 pt-10 pb-10">
              <p className="text-white/90 text-sm">{slide.caption}</p>
            </div>
          )}
        </div>
      ))}

      {count > 1 && (
        <>
          {[
            { fn: prev, label: t('ui.prev'), side: 'left-3 md:left-4', d: 'M15 19l-7-7 7-7' },
            { fn: next, label: t('ui.next'), side: 'right-3 md:right-4', d: 'M9 5l7 7-7 7' },
          ].map((b) => (
            <button
              key={b.label}
              type="button"
              onClick={b.fn}
              className={`absolute ${b.side} top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center bg-black/25 hover:bg-black/45 backdrop-blur-sm text-white border border-white/20 hover:border-gold transition-all duration-200 cursor-pointer`}
              aria-label={b.label}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d={b.d} />
              </svg>
            </button>
          ))}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1">
            {slides.map((s, i) => (
              <button
                key={s.photo}
                type="button"
                onClick={() => setCurrent(i)}
                className="p-1.5 cursor-pointer"
                aria-label={`${t('ui.photo')} ${i + 1} / ${count}`}
                aria-current={i === current}
              >
                <span className={`block h-[3px] transition-all duration-300 ${i === current ? 'w-6 bg-gold' : 'w-2 bg-white/50 hover:bg-white/80'}`} />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
