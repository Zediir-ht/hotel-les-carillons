import { createContext, useContext, useState, useCallback } from 'react';
import fr from './fr';
import en from './en';

const translations = { fr, en };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('lang') || 'fr';
    } catch {
      return 'fr';
    }
  });

  const switchLang = useCallback((newLang) => {
    setLang(newLang);
    try { localStorage.setItem('lang', newLang); } catch {}
    document.documentElement.lang = newLang;
  }, []);

  const t = useCallback((key) => {
    const keys = key.split('.');
    let val = translations[lang];
    for (const k of keys) {
      val = val?.[k];
    }
    return val ?? key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, switchLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
