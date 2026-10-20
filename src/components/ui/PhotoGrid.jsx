import { useCallback, useState } from 'react';
import Photo from './Photo';
import Lightbox from './Lightbox';
import { useLang } from '../../i18n/LanguageContext';

/**
 * Mosaïque de photos cliquables avec visionneuse plein écran.
 *   items : [{ photo, alt }]
 */
export default function PhotoGrid({ items, columns = 'columns-2 md:columns-3 lg:columns-4', sizes = '(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw' }) {
  const { t } = useLang();
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <>
      <ul className={`${columns} gap-3 md:gap-4 list-none p-0 m-0`}>
        {items.map((item, i) => (
          <li key={item.photo} className="mb-3 md:mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group relative block w-full overflow-hidden cursor-zoom-in bg-beige"
              aria-label={`${t('ui.enlarge')} : ${item.alt}`}
            >
              <Photo name={item.photo} alt="" sizes={sizes} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pt-8 pb-3 text-left text-sm text-white opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                {item.alt}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Lightbox items={items} index={open} onClose={close} onIndexChange={setOpen} />
    </>
  );
}
