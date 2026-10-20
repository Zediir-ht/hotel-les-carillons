import Seo from '../components/Seo';
import PageHero from '../components/ui/PageHero';
import SplitSection from '../components/ui/SplitSection';
import SectionHeading from '../components/ui/SectionHeading';
import Photo from '../components/ui/Photo';
import { ArrowLink } from '../components/ui/Links';
import { useLang } from '../i18n/LanguageContext';
import { LINKS } from '../config/site';
import { TOURISM_SITES, AGENDA_URLS } from '../data/tourism';

export default function Tourisme() {
  const { t } = useLang();
  const sites = t('tourismePage.sites');

  return (
    <>
      <Seo page="tourisme" path="/tourisme" image="/images/photos/site-conques-1600.webp" />
      <PageHero
        title={t('tourismePage.heroTitle')}
        subtitle={t('tourismePage.heroSub')}
        photo="site-belcastel"
        photoAlt="Belcastel"
        breadcrumb={[{ label: t('nav.tourisme') }]}
      />

      <SplitSection
        photo="vallee-cransac"
        photoAlt={t('tourismePage.introImgAlt')}
        overline={t('tourismePage.introSub')}
        title={t('tourismePage.introTitle')}
      >
        <p>{t('tourismePage.introP1')}</p>
        <p>{t('tourismePage.introP2')}</p>
        <ArrowLink href={LINKS.thermes} className="mt-2">
          {t('tourismePage.introCta')}
        </ArrowLink>
      </SplitSection>

      <section className="py-20 md:py-28 bg-beige">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHeading overline={t('tourismePage.sitesSub')} title={t('tourismePage.sitesTitle')} className="mb-12">
            {t('tourismePage.sitesDesc')}
          </SectionHeading>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 list-none p-0 m-0">
            {TOURISM_SITES.map((site, i) => (
              <li key={site.slug}>
                <article className="group h-full bg-white overflow-hidden border border-black/5 hover:border-gold/40 transition-colors flex flex-col">
                  <figure className="relative m-0 overflow-hidden">
                    <Photo
                      name={site.photo}
                      alt={sites[i].name}
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <figcaption className="absolute bottom-0 right-0 bg-black/45 text-white/80 text-xs px-2 py-0.5 max-w-full truncate">
                      {t('tourismePage.photoCredit')} : {site.credit.author} · {site.credit.license}
                    </figcaption>
                  </figure>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-baseline justify-between gap-2 mb-3">
                      <h3 className="text-sm font-normal text-black tracking-wide leading-tight normal-case" style={{ fontFamily: 'var(--font-body)' }}>
                        {sites[i].name}
                      </h3>
                      <span className="text-xs text-gold shrink-0">~{site.distance} km</span>
                    </div>
                    <div className="w-5 h-px bg-gold mb-3" />
                    <p className="text-gray-mid text-sm leading-relaxed flex-1">{sites[i].desc}</p>
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-4 text-gold text-xs no-underline hover:text-gold-dark"
                    >
                      {t('tourismePage.seeMore')} <span aria-hidden="true">↗</span>
                      <span className="sr-only"> — {sites[i].name}</span>
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHeading overline={t('tourismePage.agendaSub')} title={t('tourismePage.agendaTitle')} className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {t('tourismePage.agenda').map((item, i) => (
              <div key={item.title} className="bg-beige p-6 md:p-8 border border-black/5">
                <h3 className="text-sm font-normal text-black mb-4 tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                  {item.title}
                </h3>
                <div className="w-8 h-px bg-gold mb-4" />
                <p className="text-gray-mid text-sm leading-relaxed">{item.desc}</p>
                {AGENDA_URLS[i] && (
                  <a href={AGENDA_URLS[i]} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-3 text-gold text-xs no-underline hover:text-gold-dark">
                    {t('tourismePage.seeMore')} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-mid text-xs mt-10">
            {t('tourismePage.moreInfo')} :{' '}
            <a href={LINKS.aveyronTourisme} target="_blank" rel="noopener noreferrer" className="text-gold no-underline hover:text-gold-dark">
              tourisme-aveyron.com
            </a>
            {' · '}
            <a href={LINKS.cransac} target="_blank" rel="noopener noreferrer" className="text-gold no-underline hover:text-gold-dark">
              cransac-les-thermes.fr
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
