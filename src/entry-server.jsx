// Point d'entrée du pré-rendu (build uniquement) : génère le HTML statique d'une page.
import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { LanguageProvider } from './i18n/LanguageContext';
import { HeadContext } from './lib/head';
import { ROUTES } from './config/routes';

export { ROUTES };

export async function render(url) {
  const head = {
    current: null,
    collect(data) {
      this.current = data;
    },
  };
  const { prelude } = await prerenderToNodeStream(
    <HeadContext.Provider value={head}>
      <StaticRouter location={url}>
        <LanguageProvider initialLang="fr">
          <App />
        </LanguageProvider>
      </StaticRouter>
    </HeadContext.Provider>,
  );
  let html = '';
  for await (const chunk of prelude) html += chunk;
  return { html, head: head.current };
}
