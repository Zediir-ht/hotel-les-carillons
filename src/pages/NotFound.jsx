import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <>
      <Seo title="Page introuvable" description="La page que vous recherchez n'existe pas." path="/404" />
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20">
        <p className="overline text-gold mb-4">Erreur 404</p>
        <h1 className="text-4xl md:text-6xl text-black mb-6">Page introuvable</h1>
        <div className="w-16 h-px bg-black mb-8" />
        <p className="text-gray-mid text-base max-w-md leading-relaxed mb-10">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="inline-block bg-gold hover:bg-gold-dark text-white font-normal text-xs px-8 py-3.5 tracking-[0.15em] uppercase transition-colors no-underline"
        >
          Retour à l'accueil
        </Link>
      </section>
    </>
  );
}
