import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { ROUTES } from './config/routes';

const pages = {
  home: lazy(() => import('./pages/Home')),
  hotel: lazy(() => import('./pages/Hotel')),
  restaurant: lazy(() => import('./pages/Restaurant')),
  meubles: lazy(() => import('./pages/Meubles')),
  galerie: lazy(() => import('./pages/Galerie')),
  seminaire: lazy(() => import('./pages/Seminaire')),
  tourisme: lazy(() => import('./pages/Tourisme')),
  contact: lazy(() => import('./pages/Contact')),
  mentions: lazy(() => import('./pages/MentionsLegales')),
};
const NotFound = lazy(() => import('./pages/NotFound'));

/** Le routeur (navigateur ou statique) est fourni par main.jsx / entry-server.jsx. */
export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Routes>
        <Route element={<Layout />}>
          {ROUTES.map(({ path, page }) => {
            const Page = pages[page];
            return <Route key={path} path={path} element={<Page />} />;
          })}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
