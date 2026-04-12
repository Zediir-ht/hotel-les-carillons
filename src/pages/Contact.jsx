import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import MapEmbed from '../components/MapEmbed';

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact & Réservation"
        description="Contactez l'Hôtel Restaurant Les Carillons à Cransac-les-Thermes. Téléphone, email, formulaire de contact et réservation en ligne via Logis Hôtels."
        path="/contact"
      />
      <PageHero
        title="Contact"
        breadcrumb={[{ label: 'Contact' }]}
      />

      <section className="py-20 md:py-28 section-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Formulaire */}
            <div>
              <p className="overline text-gold mb-4">Message</p>
              <h2 className="text-3xl text-black mb-5">Écrivez-nous</h2>
              <div className="w-12 h-px bg-black mb-8" />
              <p className="text-gray-mid mb-8 text-sm leading-relaxed font-light">
                Une question, une demande de réservation ou un devis ?
                Remplissez le formulaire ci-dessous et nous vous répondrons
                dans les plus brefs délais.
              </p>
              <ContactForm />
            </div>

            {/* Infos */}
            <div>
              <p className="overline text-gold mb-4">Nous trouver</p>
              <h2 className="text-3xl text-black mb-5">Coordonnées</h2>
              <div className="w-12 h-px bg-black mb-8" />
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xs font-normal tracking-[0.15em] uppercase text-black mb-2" style={{ fontFamily: 'var(--font-body)', textTransform: 'uppercase' }}>Adresse</h3>
                  <p className="text-gray-mid text-sm leading-relaxed font-light">
                    Route de Figeac<br />
                    12110 Cransac-les-Thermes<br />
                    Aveyron, France
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-normal tracking-[0.15em] uppercase text-black mb-2" style={{ fontFamily: 'var(--font-body)', textTransform: 'uppercase' }}>Téléphone</h3>
                  <a href="tel:+33565631475" className="text-gold hover:text-gold-dark no-underline transition-colors text-sm">
                    05 65 63 14 75
                  </a>
                </div>
                <div>
                  <h3 className="text-xs font-normal tracking-[0.15em] uppercase text-black mb-2" style={{ fontFamily: 'var(--font-body)', textTransform: 'uppercase' }}>Email</h3>
                  <a href="mailto:contact@lescarillons.fr" className="text-gold hover:text-gold-dark no-underline transition-colors text-sm">
                    contact@lescarillons.fr
                  </a>
                </div>
                <div>
                  <h3 className="text-xs font-normal tracking-[0.15em] uppercase text-black mb-2" style={{ fontFamily: 'var(--font-body)', textTransform: 'uppercase' }}>Réservation en ligne</h3>
                  <a
                    href="https://www.logishotels.com/fr/hotel/logis-hotel-les-carillons-4588"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gold hover:bg-gold-dark text-white font-normal text-xs px-6 py-2.5 tracking-[0.15em] uppercase transition-colors no-underline"
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
