import Seo from '../components/Seo';
import { useLang } from '../i18n/LanguageContext';

export default function MentionsLegales() {
  const { t } = useLang();
  return (
    <>
      <Seo
        title={t('mentionsLegales.title')}
        description={t('mentionsLegales.seoDesc')}
        path="/mentions-legales"
      />
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="overline text-gold mb-4">{t('mentionsLegales.overline')}</p>
          <h1 className="text-3xl md:text-5xl text-black mb-6">{t('mentionsLegales.title')}</h1>
          <div className="w-16 h-px bg-black mb-10" />

          <div className="space-y-8 text-gray-mid text-sm leading-relaxed font-light">
            <div>
              <h2 className="text-base text-black font-normal mb-2">{t('mentionsLegales.editorTitle')}</h2>
              <p>
                Hôtel Restaurant Les Carillons<br />
                Route de Figeac<br />
                12110 Cransac-les-Thermes, France<br />
                {t('mentionsLegales.phone')} : <a href="tel:+33565631475" className="text-gold no-underline">05 65 63 14 75</a><br />
                Email : <a href="mailto:contact@lescarillons.fr" className="text-gold no-underline">contact@lescarillons.fr</a>
              </p>
            </div>

            <div>
              <h2 className="text-base text-black font-normal mb-2">{t('mentionsLegales.hostingTitle')}</h2>
              <p>{t('mentionsLegales.hostingDesc')}</p>
            </div>

            <div>
              <h2 className="text-base text-black font-normal mb-2">{t('mentionsLegales.ipTitle')}</h2>
              <p>{t('mentionsLegales.ipDesc')}</p>
            </div>

            <div>
              <h2 className="text-base text-black font-normal mb-2">{t('mentionsLegales.dataTitle')}</h2>
              <p>{t('mentionsLegales.dataDesc')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
