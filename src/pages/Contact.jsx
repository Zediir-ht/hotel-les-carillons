import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import MapEmbed from '../components/MapEmbed';
import { useLang } from '../i18n/LanguageContext';

export default function Contact() {
  const { t } = useLang();
  return (
    <>
      <Seo
        title="Contact & Réservation"
        description="Contactez l'Hôtel Restaurant Les Carillons à Cransac-les-Thermes. Téléphone, email, formulaire de contact et réservation en ligne via Logis Hôtels."
        path="/contact"
      />
      <PageHero
        title={t('contactPage.heroTitle')}
        breadcrumb={[{ label: t('nav.contact') }]}
      />

      <section className="py-20 md:py-28 section-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Formulaire */}
            <div>
              <p className="overline text-gold mb-4">{t('contactPage.msgSub')}</p>
              <h2 className="text-3xl text-black mb-5">{t('contactPage.msgTitle')}</h2>
              <div className="w-12 h-px bg-black mb-8" />
              <p className="text-gray-mid mb-8 text-sm leading-relaxed font-light">
                {t('contactPage.msgDesc')}
              </p>
              <ContactForm />
            </div>

            {/* Infos */}
            <div>
              <p className="overline text-gold mb-4">{t('contactPage.findSub')}</p>
              <h2 className="text-3xl text-black mb-5">{t('contactPage.findTitle')}</h2>
              <div className="w-12 h-px bg-black mb-8" />
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xs font-normal tracking-[0.15em] uppercase text-black mb-2" style={{ fontFamily: 'var(--font-body)', textTransform: 'uppercase' }}>{t('contactPage.address')}</h3>
                  <p className="text-gray-mid text-sm leading-relaxed font-light">
                    Route de Figeac<br />
                    12110 Cransac-les-Thermes<br />
                    Aveyron, France
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-normal tracking-[0.15em] uppercase text-black mb-2" style={{ fontFamily: 'var(--font-body)', textTransform: 'uppercase' }}>{t('contactPage.phone')}</h3>
                  <a href="tel:+33565631475" className="text-gold hover:text-gold-dark no-underline transition-colors text-sm">
                    05 65 63 14 75
                  </a>
                </div>
                <div>
                  <h3 className="text-xs font-normal tracking-[0.15em] uppercase text-black mb-2" style={{ fontFamily: 'var(--font-body)', textTransform: 'uppercase' }}>{t('contactPage.email')}</h3>
                  <a href="mailto:contact@lescarillons.fr" className="text-gold hover:text-gold-dark no-underline transition-colors text-sm">
                    contact@lescarillons.fr
                  </a>
                </div>
                <div>
                  <h3 className="text-xs font-normal tracking-[0.15em] uppercase text-black mb-2" style={{ fontFamily: 'var(--font-body)', textTransform: 'uppercase' }}>{t('contactPage.onlineBooking')}</h3>
                  <a
                    href="https://www.logishotels.com/fr/hotel/logis-hotel-les-carillons-4588"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gold hover:bg-gold-dark text-white font-normal text-xs px-6 py-2.5 tracking-[0.15em] uppercase transition-colors no-underline"
                  >
                    {t('contactPage.bookCta')}
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
