import { Link } from 'react-router-dom';

const footerNav = [
  { to: '/hotel', label: 'Hôtel & Chambres' },
  { to: '/restaurant', label: 'Restaurant' },
  { to: '/meubles', label: 'Meublés Les Cèdres' },
  { to: '/seminaire', label: 'Séminaire' },
  { to: '/tourisme', label: 'Tourisme' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-brown text-white">
      {/* Top gold divider */}
      <div className="h-px bg-gold/40" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Col 1 — Brand */}
          <div>
            <Link to="/" className="no-underline">
              <span
                className="text-3xl text-white block mb-4"
                style={{ fontFamily: 'var(--font-logo)' }}
              >
                Les Carillons
                <span className="text-sm align-super ml-1" style={{ fontFamily: 'sans-serif', fontWeight: 400 }}>★★</span>
              </span>
            </Link>
            <div className="w-8 h-px bg-gold mb-5" />
            <p className="text-white/65 text-sm leading-relaxed">
              Hôtel-restaurant familial au cœur de l'Aveyron.<br />
              Un accueil chaleureux par Nathalie, Florian et Assia.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-gold font-semibold mb-6">
              Navigation
            </h4>
            <ul className="list-none p-0 m-0 space-y-3">
              {footerNav.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/65 hover:text-white text-sm no-underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Coordonnées */}
          <div>
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-gold font-semibold mb-6">
              Coordonnées
            </h4>
            <address className="not-italic text-sm text-white/65 leading-relaxed space-y-3">
              <p>Route de Figeac<br />12110 Cransac-les-Thermes</p>
              <p>
                <a href="tel:+33565631475" className="text-white/65 hover:text-white no-underline transition-colors">
                  05 65 63 14 75
                </a>
              </p>
            </address>
            <div className="mt-6">
              <a
                href="https://www.logishotels.com/fr/hotel/logis-hotel-les-carillons-4588"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-gold/50 text-gold text-xs font-semibold px-4 py-2 tracking-wider uppercase no-underline hover:bg-gold hover:text-white transition-colors"
              >
                ★ Logis Hôtels
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Hôtel Restaurant Les Carillons — Tous droits réservés.</p>
          <Link to="/mentions-legales" className="text-white/40 hover:text-white/70 no-underline transition-colors">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
