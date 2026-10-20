import { createContext } from 'react';

/**
 * Pendant le pré-rendu (scripts/prerender.mjs), les balises <head> de chaque page
 * sont collectées ici pour être écrites dans le HTML statique. Vaut null dans le navigateur.
 */
export const HeadContext = createContext(null);
