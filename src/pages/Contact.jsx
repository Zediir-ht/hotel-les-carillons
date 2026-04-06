import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import MapEmbed from '../components/MapEmbed';

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact"
        breadcrumb={[{ label: 'Contact' }]}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Formulaire */}
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold mb-4">Message</p>
              <h2 className="text-3xl text-brown mb-5">Écrivez-nous</h2>
              <div className="w-10 h-px bg-gold mb-8" />
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                Une question, une demande de réservation ou un devis ?
                Remplissez le formulaire ci-dessous et nous vous répondrons
                dans les plus brefs délais.
              </p>
              <ContactForm />
            </div>

            {/* Infos */}
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold mb-4">Nous trouver</p>
              <h2 className="text-3xl text-brown mb-5">Coordonnées</h2>
              <div className="w-10 h-px bg-gold mb-8" />
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-brown mb-2">Adresse</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Route de Figeac<br />
                    12110 Cransac-les-Thermes<br />
                    Aveyron, France
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-brown mb-2">Téléphone</h3>
                  <a href="tel:+33565631475" className="text-gold hover:text-gold-dark no-underline transition-colors text-sm">
                    05 65 63 14 75
                  </a>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-brown mb-2">Email</h3>
                  <a href="mailto:contact@lescarillons.fr" className="text-gold hover:text-gold-dark no-underline transition-colors text-sm">
                    contact@lescarillons.fr
                  </a>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-brown mb-2">Réservation en ligne</h3>
                  <a
                    href="https://www.logishotels.com/fr/hotel/logis-hotel-les-carillons-4588"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gold hover:bg-gold-dark text-white font-bold text-xs px-6 py-2.5 tracking-[0.15em] uppercase transition-colors no-underline"
                  >
                    Réserver via Logis Hôtels
                  </a>
                </div>
              </div>
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
