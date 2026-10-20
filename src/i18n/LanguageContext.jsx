import { createContext, useContext, useState, useCallback, useEffect, useMemo } from 'react';
import fr from './fr';
import en from './en';

const translations = { fr, en };
const LANGS = ['fr', 'en'];

const LanguageContext = createContext(null);

function readStoredLang() {
  try {
    const stored = localStorage.getItem('lang');
    return LANGS.includes(stored) ? stored : 'fr';
  } catch {
    return 'fr';
  }
}

/**
 * initialLang : imposé lors du pré-rendu (le HTML statique est généré en français).
 */
export function LanguageProvider({ children, initialLang }) {
  const [lang, setLang] = useState(() => initialLang ?? readStoredLang());

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const switchLang = useCallback((newLang) => {
    setLang(newLang);
    try {
      localStorage.setItem('lang', newLang);
    } catch {
      /* stockage indisponible (navigation privée) */
    }
  }, []);

  // t('a.b.c') → texte traduit (ou la clé si absente, pour repérer les oublis)
  const t = useCallback(
    (key) => {
      let val = translations[lang];
      for (const k of key.split('.')) val = val?.[k];
      if (val === undefined && import.meta.env.DEV) console.warn(`[i18n] clé manquante (${lang}) : ${key}`);
      return val ?? key;
    },
    [lang],
  );

  // pick({ fr: '…', en: '…' }) → valeur dans la langue courante (repli sur le français)
  const pick = useCallback(
    (value) => (value && typeof value === 'object' && 'fr' in value ? (value[lang] ?? value.fr) : value),
    [lang],
  );

  const value = useMemo(() => ({ lang, switchLang, t, pick }), [lang, switchLang, t, pick]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
