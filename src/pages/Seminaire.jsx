import Seo from '../components/Seo';
import PageHero from '../components/ui/PageHero';
import SplitSection from '../components/ui/SplitSection';
import SectionHeading from '../components/ui/SectionHeading';
import Carousel from '../components/ui/Carousel';
import Reveal from '../components/ui/Reveal';
import { ArrowLink, ButtonLink } from '../components/ui/Links';
import { useLang } from '../i18n/LanguageContext';

const SALLES_PHOTOS = ['seminaire-4', 'salle-reception-1', 'seminaire-1', 'seminaire-2', 'salle-reception-2', 'veranda-banquet'];

export default function Seminaire() {
  const { t } = useLang();
  const slides = t('seminairePage.slides');

  return (
    <>
      <Seo page="seminaire" path="/seminaire" />
      <PageHero
        title={t('seminairePage.heroTitle')}
        subtitle={t('seminairePage.heroSub')}
        photo="salle-reception-2"
        photoAlt={slides[4]}
        breadcrumb={[{ label: t('nav.seminaire') }]}
      />

      <SplitSection
        photo="seminaire-4"
        photoAlt={t('seminairePage.section1ImgAlt')}
        overline={t('seminairePage.section1Sub')}
        title={t('seminairePage.section1Title')}
      >
        <p>{t('seminairePage.section1P1')}</p>
        <p>{t('seminairePage.section1P2')}</p>
        <ArrowLink to="/contact?sujet=groupe" className="mt-2">
          {t('seminairePage.section1Cta')}
        </ArrowLink>
      </SplitSection>

      <section className="py-20 md:py-28 bg-beige section-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHeading overline={t('seminairePage.equipSub')} title={t('seminairePage.equipTitle')} className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {t('seminairePage.equipBlocks').map((block, i) => (
              <Reveal key={block.title} from="up" delay={i * 100} className="bg-white p-6 md:p-8 border border-black/5">
                <h3 className="text-sm font-normal text-black mb-5 tracking-wide uppercase" style={{ fontFamily: 'var(--font-body)' }}>
                  {block.title}
                </h3>
                <div className="w-8 h-px bg-gold mb-5" />
                <ul className="space-y-3 list-none p-0 m-0">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-mid text-sm font-light">
                      <span className="w-4 h-px bg-gold block shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <ButtonLink to="/contact?sujet=groupe">{t('seminairePage.equipCta')}</ButtonLink>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white section-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <Reveal className="w-full md:w-3/5" from="left">
            <Carousel slides={SALLES_PHOTOS.map((photo, i) => ({ photo, alt: slides[i], caption: slides[i] }))} aspectRatio="4/3" interval={4800} />
          </Reveal>
          <Reveal className="w-full md:w-2/5 flex flex-col" from="right" delay={150}>
            <SectionHeading overline={t('seminairePage.carouselSub')} title={t('seminairePage.carouselTitle')} align="left" />
            <p className="text-gray-mid leading-relaxed mt-6 mb-4 font-light">{t('seminairePage.carouselP1')}</p>
            <p className="text-gray-mid leading-relaxed font-light">{t('seminairePage.carouselP2')}</p>
            <ArrowLink to="/contact?sujet=groupe" className="mt-6">
              {t('seminairePage.carouselCta')}
            </ArrowLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
