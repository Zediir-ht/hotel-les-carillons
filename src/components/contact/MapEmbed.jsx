import { useState } from 'react';
import { useLang } from '../../i18n/LanguageContext';
import { SITE, LINKS } from '../../config/site';

const MAP_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(`${SITE.name}, ${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`)}&z=15&output=embed`;

/**
 * Carte Google Maps chargée seulement au clic : la page reste légère
 * et aucun cookie Google n'est déposé tant que le visiteur ne l'a pas demandé.
 */
export default function MapEmbed({ title }) {
  const { lang } = useLang();
  const [loaded, setLoaded] = useState(false);
  const label = lang === 'en' ? 'Show the map' : 'Afficher la carte';

  return (
    <div className="relative overflow-hidden h-80 md:h-96 border border-black/10 bg-beige">
      {loaded ? (
        <iframe title={title} src={`${MAP_SRC}&hl=${lang}`} className="w-full h-full border-0" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-6">
          <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
          </svg>
          <p className="text-sm text-black/70">
            {SITE.address.street}, {SITE.address.postalCode} {SITE.address.city}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="bg-deepbrown hover:bg-black text-offwhite text-xs px-6 py-3 cursor-pointer"
            >
              {label}
            </button>
            <a
              href={LINKS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black/20 text-black text-xs px-6 py-3 no-underline hover:border-gold hover:text-gold"
            >
              Google Maps ↗
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
