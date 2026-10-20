import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { photoSrc } from '../../lib/photos';
import { useLang } from '../../i18n/LanguageContext';

function ArrowIcon({ d }) {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

/**
 * Visionneuse plein écran.
 *   items : [{ photo, alt }] · index : photo ouverte (null = fermée)
 * Échap pour fermer, ← → pour naviguer, balayage sur mobile.
 */
export default function Lightbox({ items, index, onClose, onIndexChange }) {
  const { t } = useLang();
  const closeRef = useRef(null);
  const [touchX, setTouchX] = useState(null);
  const open = index !== null && index !== undefined;
  const count = items.length;
  const go = (delta) => onIndexChange((index + delta + count) % count);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onIndexChange((index + 1) % count);
      if (e.key === 'ArrowLeft') onIndexChange((index - 1 + count) % count);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, index, count, onClose, onIndexChange]);

  // Bloque le défilement de la page et rend le focus à l'élément d'origine à la fermeture
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      previouslyFocused?.focus?.();
    };
  }, [open]);

  if (!open) return null;
  const item = items[index];

  return createPortal(
    <div
      className="fixed inset-0 z-[10000] bg-black/90 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={onClose}
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX == null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        setTouchX(null);
      }}
    >
      <img
        src={photoSrc(item.photo, 1600)}
        alt={item.alt}
        className="max-w-[94vw] max-h-[82vh] object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      <p className="absolute bottom-5 left-0 right-0 text-center text-white/70 text-xs px-16">
        {item.alt} · {index + 1} / {count}
      </p>

      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center text-white border border-white/25 hover:border-gold cursor-pointer"
        aria-label={t('ui.close')}
      >
        <ArrowIcon d="M6 6l12 12M18 6L6 18" />
      </button>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 hidden sm:flex items-center justify-center text-white border border-white/25 hover:border-gold bg-black/30 cursor-pointer"
            aria-label={t('ui.prev')}
          >
            <ArrowIcon d="M15 19l-7-7 7-7" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 hidden sm:flex items-center justify-center text-white border border-white/25 hover:border-gold bg-black/30 cursor-pointer"
            aria-label={t('ui.next')}
          >
            <ArrowIcon d="M9 5l7 7-7 7" />
          </button>
        </>
      )}
    </div>,
    document.body,
  );
}
