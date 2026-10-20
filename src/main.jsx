import { StrictMode, startTransition } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { LanguageProvider } from './i18n/LanguageContext';

// Le HTML de chaque page est pré-généré au build (scripts/prerender.mjs) pour Google et les
// réseaux sociaux. React prend ensuite le relais : grâce à startTransition, le contenu
// pré-rendu reste affiché jusqu'à ce que la page soit prête (pas d'écran blanc).
const root = createRoot(document.getElementById('root'));
startTransition(() => {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </BrowserRouter>
    </StrictMode>,
  );
});
