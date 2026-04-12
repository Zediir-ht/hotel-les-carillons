import Seo from '../components/Seo';

export default function MentionsLegales() {
  return (
    <>
      <Seo
        title="Mentions Légales"
        description="Mentions légales de l'Hôtel Restaurant Les Carillons à Cransac-les-Thermes."
        path="/mentions-legales"
      />
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="overline text-gold mb-4">Informations</p>
          <h1 className="text-3xl md:text-5xl text-black mb-6">Mentions Légales</h1>
          <div className="w-16 h-px bg-black mb-10" />

          <div className="space-y-8 text-gray-mid text-sm leading-relaxed font-light">
            <div>
              <h2 className="text-base text-black font-normal mb-2">Éditeur du site</h2>
              <p>
                Hôtel Restaurant Les Carillons<br />
                Route de Figeac<br />
                12110 Cransac-les-Thermes, France<br />
                Téléphone : <a href="tel:+33565631475" className="text-gold no-underline">05 65 63 14 75</a><br />
                Email : <a href="mailto:contact@lescarillons.fr" className="text-gold no-underline">contact@lescarillons.fr</a>
              </p>
            </div>

            <div>
              <h2 className="text-base text-black font-normal mb-2">Hébergement</h2>
              <p>Ce site est hébergé par son prestataire technique.</p>
            </div>

            <div>
              <h2 className="text-base text-black font-normal mb-2">Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos) est protégé par le droit d'auteur.
                Toute reproduction, même partielle, est interdite sans autorisation préalable.
              </p>
            </div>

            <div>
              <h2 className="text-base text-black font-normal mb-2">Données personnelles</h2>
              <p>
                Les informations recueillies via le formulaire de contact sont destinées exclusivement à l'Hôtel Les Carillons
                pour le traitement de votre demande. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification
                et de suppression de vos données en nous contactant directement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
