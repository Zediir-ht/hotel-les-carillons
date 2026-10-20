import Seo from '../components/Seo';
import { useLang } from '../i18n/LanguageContext';
import { SITE, LEGAL } from '../config/site';
import { TOURISM_SITES } from '../data/tourism';

function Block({ title, children }) {
  return (
    <div>
      <h2 className="text-base text-black font-normal mb-3">{title}</h2>
      {children}
    </div>
  );
}

export default function MentionsLegales() {
  const { t } = useLang();
  const m = (key) => t(`mentionsLegales.${key}`);
  const legalLines = [
    [m('companyLabel'), [LEGAL.company, LEGAL.legalForm].filter(Boolean).join(' — ')],
    [m('siretLabel'), LEGAL.siret],
    [m('vatLabel'), LEGAL.vat],
    [m('directorLabel'), LEGAL.publicationDirector],
  ].filter(([, value]) => value);

  return (
    <>
      <Seo page="mentions" path="/mentions-legales" />
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="overline text-gold mb-4">{m('overline')}</p>
          <h1 className="text-3xl md:text-5xl text-black mb-6">{m('title')}</h1>
          <div className="w-16 h-px bg-black mb-10" />

          <div className="space-y-10 text-gray-mid text-sm leading-relaxed font-light">
            <Block title={m('editorTitle')}>
              <p>
                {SITE.name}
                <br />
                {SITE.address.street}
                <br />
                {SITE.address.postalCode} {SITE.address.city}, {SITE.address.country}
                <br />
                {m('phone')} :{' '}
                <a href={SITE.phone.href} className="text-gold no-underline">
                  {SITE.phone.display}
                </a>
                <br />
                E-mail :{' '}
                <a href={`mailto:${SITE.email}`} className="text-gold no-underline">
                  {SITE.email}
                </a>
              </p>
              {legalLines.length > 0 && (
                <p className="mt-3">
                  {legalLines.map(([label, value]) => (
                    <span key={label} className="block">
                      {label} : {value}
                    </span>
                  ))}
                </p>
              )}
            </Block>

            <Block title={m('hostingTitle')}>
              <p>
                {LEGAL.host.name}
                <br />
                {LEGAL.host.address}
                <br />
                <a href={LEGAL.host.website} target="_blank" rel="noopener noreferrer" className="text-gold no-underline">
                  {LEGAL.host.website.replace('https://', '')}
                </a>
              </p>
            </Block>

            <Block title={m('ipTitle')}>
              <p>{m('ipDesc')}</p>
            </Block>

            <Block title={m('creditsTitle')}>
              <p className="mb-3">{m('creditsDesc')}</p>
              <ul className="space-y-1.5 list-none p-0">
                {TOURISM_SITES.map((site, i) => (
                  <li key={site.slug}>
                    {t('tourismePage.sites')[i].name} —{' '}
                    <a href={site.credit.source} target="_blank" rel="noopener noreferrer" className="text-gold no-underline">
                      {site.credit.author}
                    </a>
                    , {site.credit.license}
                  </li>
                ))}
              </ul>
            </Block>

            <Block title={m('dataTitle')}>
              <p>{m('dataDesc')}</p>
            </Block>

            <Block title={m('cookiesTitle')}>
              <p>{m('cookiesDesc')}</p>
            </Block>
          </div>
        </div>
      </section>
    </>
  );
}
