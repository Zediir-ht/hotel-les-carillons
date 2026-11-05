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
  const [paused, setPaused] = useState(false); // survol / focus
  const [userPaused, setUserPaused] = useState(false); // bouton pause, ou navigation à la main
  const touchX = useRef(null);
  const count = slides.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % count), [count]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + count) % count), [count]);
  // Dès que le visiteur navigue lui-même, le défilement automatique s'arrête (bouton ▶ pour le reprendre)
  const userNext = () => { setUserPaused(true); next(); };
  const userPrev = () => { setUserPaused(true); prev(); };

  useEffect(() => {
    if (!autoPlay || paused || userPaused || count <= 1 || prefersReducedMotion()) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [autoPlay, paused, userPaused, next, interval, count]);

  if (!count) return null;

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') userNext();
    if (e.key === 'ArrowLeft') userPrev();
  };
  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? userNext : userPrev)();
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
            { fn: userPrev, label: t('ui.prev'), side: 'left-3 md:left-4', d: 'M15 19l-7-7 7-7' },
            { fn: userNext, label: t('ui.next'), side: 'right-3 md:right-4', d: 'M9 5l7 7-7 7' },
          ].map((b) => (
            <button
              key={b.label}
              type="button"
              onClick={b.fn}
              className={`absolute ${b.side} top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center bg-black/25 hover:bg-black/45 backdrop-blur-sm text-white border border-white/20 hover:border-gold press cursor-pointer`}
              aria-label={b.label}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d={b.d} />
              </svg>
            </button>
          ))}

          {autoPlay && (
            <button
              type="button"
              onClick={() => setUserPaused((v) => !v)}
              className="motion-reduce:hidden absolute top-3 right-3 z-20 w-11 h-11 flex items-center justify-center bg-black/35 hover:bg-black/55 text-white border border-white/25 hover:border-gold press cursor-pointer"
              aria-label={userPaused ? t('ui.play') : t('ui.pause')}
              aria-pressed={userPaused}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {userPaused ? <path d="M7 4.5v15l13-7.5z" /> : <path d="M6 4h4v16H6zM14 4h4v16h-4z" />}
              </svg>
            </button>
          )}

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex items-center">
            {slides.map((s, i) => (
              <button
                key={s.photo}
                type="button"
                onClick={() => { setUserPaused(true); setCurrent(i); }}
                className="h-11 min-w-7 px-1 flex items-center justify-center cursor-pointer"
                aria-label={`${t('ui.photo')} ${i + 1} / ${count}`}
                aria-current={i === current}
              >
                <span className={`block h-[3px] w-6 transition-[scale,background-color] duration-300 ease-(--ease-out) ${i === current ? 'bg-gold scale-x-100' : 'bg-white/50 hover:bg-white/80 scale-x-[0.33]'}`} />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
