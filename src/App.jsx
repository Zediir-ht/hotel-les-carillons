import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const Hotel = lazy(() => import('./pages/Hotel'));
const Restaurant = lazy(() => import('./pages/Restaurant'));
const Meubles = lazy(() => import('./pages/Meubles'));
const Seminaire = lazy(() => import('./pages/Seminaire'));
const Tourisme = lazy(() => import('./pages/Tourisme'));
const Contact = lazy(() => import('./pages/Contact'));
const Galerie = lazy(() => import('./pages/Galerie'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/hotel" element={<Hotel />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/meubles" element={<Meubles />} />
            <Route path="/seminaire" element={<Seminaire />} />
            <Route path="/tourisme" element={<Tourisme />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
