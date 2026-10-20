import { useState } from 'react';
import Seo from '../components/Seo';
import PageHero from '../components/ui/PageHero';
import SplitSection from '../components/ui/SplitSection';
import SectionHeading from '../components/ui/SectionHeading';
import PhotoGrid from '../components/ui/PhotoGrid';
import { ArrowLink } from '../components/ui/Links';
import { Bell } from '../components/ui/Ornaments';
import CureCalculator from '../components/meubles/CureCalculator';
import CompareTable from '../components/meubles/CompareTable';
import MeublesFaq from '../components/meubles/MeublesFaq';
import MeubleRequestForm from '../components/meubles/MeubleRequestForm';
import { useLang } from '../i18n/LanguageContext';
import { SITE } from '../config/site';
import { MEUBLES_RATES, MEUBLES_INFO, MEUBLES_INFO_ORDER, CURE_WEEKS } from '../data/meubles';

// Photos des appartements (même ordre que meublesPage.photos dans i18n)
const APARTMENT_PHOTOS = ['meuble-cuisine-1', 'meuble-chambre-1', 'meuble-sejour-1', 'meuble-salon-2', 'meuble-cuisine-2', 'meuble-chambre-2', 'meuble-salon-3', 'meuble-repas'];

export default function Meubles() {
  const { t, pick } = useLang();
  const m = (k) => t(`meublesPage.${k}`);
  const nav = m('nav2');
  const labels = m('infoLabels');
  const residenceAlts = m('residenceAlts');

  // Calculateur → pré-remplit la demande de réservation
  const [calc, setCalc] = useState({ floor: MEUBLES_RATES[0].floor, weeks: CURE_WEEKS });
  const [request, setRequest] = useState({ key: 0, floor: 'any', weeks: CURE_WEEKS });
  const goToRequest = (prefill) => {
    if (prefill) setRequest((r) => ({ key: r.key + 1, floor: calc.floor, weeks: calc.weeks }));
    document.getElementById('demande')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Infos pratiques : celles déjà confirmées + celles renseignées dans data/meubles.js
  const infos = [
    { label: labels.rental, value: m('rentalValue') },
    { label: labels.linen, value: m('linenValue') },
    { label: labels.pool, value: m('poolValue') },
    ...MEUBLES_INFO_ORDER.filter((key) => MEUBLES_INFO[key]).map((key) => ({ label: labels[key], value: pick(MEUBLES_INFO[key]) })),
  ];

  return (
    <>
      <Seo page="meubles" path="/meubles" image="/images/photos/meuble-cuisine-1-1600.webp" />
      <PageHero
        title={m('heroTitle')}
        subtitle={m('heroSub')}
        photo="meuble-cuisine-1"
        photoAlt={m('heroImgAlt')}
        breadcrumb={[{ label: t('nav.meubles') }]}
      />

      <nav aria-label={m('heroTitle')} className="sticky top-16 lg:top-20 z-30 bg-offwhite/95 backdrop-blur border-b border-black/10">
        <ul className="max-w-6xl mx-auto px-4 flex gap-1 overflow-x-auto list-none m-0 py-0 whitespace-nowrap justify-start md:justify-center">
          {[
            ['tarifs', nav.calc],
            ['appartements', nav.photos],
            ['comparatif', nav.compare],
            ['questions', nav.faq],
            ['demande', nav.request],
          ].map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="block px-4 py-3.5 text-sm text-black/70 hover:text-gold no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <SplitSection photo="cedres-facade" photoAlt={residenceAlts[0]} overline={m('section1Sub')} title={m('section1Title')}>
        <p>{m('section1P1')}</p>
        <p>{m('section1P2')}</p>
        <ArrowLink href="#tarifs" className="mt-2">
          {m('calcTitle')}
        </ArrowLink>
      </SplitSection>

      {/* 1. Calculateur */}
      <section id="tarifs" className="py-20 md:py-28 bg-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading overline={m('calcSub')} title={m('calcTitle')} className="mb-12">
            {m('calcDesc')}
          </SectionHeading>
          <CureCalculator floor={calc.floor} weeks={calc.weeks} onChange={setCalc} onRequest={() => goToRequest(true)} />
        </div>
      </section>

      {/* Photos des appartements */}
      <section id="appartements" className="py-20 md:py-28 bg-offwhite">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHeading overline={m('apartmentsSub')} title={m('apartmentsTitle')} className="mb-12">
            {m('apartmentsDesc')}
          </SectionHeading>
          <PhotoGrid items={APARTMENT_PHOTOS.map((photo, i) => ({ photo, alt: m('photos')[i] }))} />
        </div>
      </section>

      {/* Équipements & infos pratiques */}
      <section id="infos" className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <SectionHeading overline={m('detailSub')} title={m('detailTitle')} align="left" size="md" className="mb-8" />
            <p className="text-gray-mid">{m('detailP')}</p>
            <ul className="space-y-3 list-none p-0 mt-6">
              {m('detailItems').map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Bell className="w-4 h-4 text-gold shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading overline={m('infosSub')} title={m('infosTitle')} align="left" size="md" className="mb-8" />
            <dl className="divide-y divide-gold/20 border-y border-gold/20 m-0">
              {infos.map((info) => (
                <div key={info.label} className="flex justify-between gap-4 py-3">
                  <dt className="text-gray-mid">{info.label}</dt>
                  <dd className="text-black text-right m-0">{info.value}</dd>
                </div>
              ))}
            </dl>
            <p className="text-gray-mid mt-6">
              {m('infosMore')}{' '}
              <a href={SITE.phone.href} className="text-gold no-underline whitespace-nowrap">
                {SITE.phone.display}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 3. Hôtel ou meublé ? */}
      <section id="comparatif" className="py-20 md:py-28 bg-offwhite">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading overline={m('compareSub')} title={m('compareTitle')} className="mb-12" />
          <CompareTable onRequest={() => goToRequest(false)} />
        </div>
      </section>

      {/* Cadre */}
      <section className="py-20 md:py-28 bg-forest pattern-belle">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHeading overline={m('extSub')} title={m('extTitle')} tone="light" className="mb-12">
            {m('extP1')} {m('extP2')}
          </SectionHeading>
          <PhotoGrid
            columns="columns-1 sm:columns-2 lg:columns-4"
            items={[
              { photo: 'cedres-terrasse', alt: residenceAlts[1] },
              { photo: 'piscine-fleurs', alt: m('extSlides')[1] },
              { photo: 'cedres-jardin', alt: residenceAlts[2] },
              { photo: 'piscine-terrasse', alt: m('extSlides')[0] },
            ]}
          />
        </div>
      </section>

      {/* 5. FAQ */}
      <section id="questions" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHeading overline={m('faqSub')} title={m('faqTitle')} className="mb-12" />
          <MeublesFaq />
        </div>
      </section>

      {/* 2. Demande de réservation */}
      <section id="demande" className="py-20 md:py-28 bg-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading overline={m('requestSub')} title={m('requestTitle')} className="mb-12">
            {m('requestDesc')}
          </SectionHeading>
          <MeubleRequestForm key={request.key} initialFloor={request.floor} initialWeeks={request.weeks} />
        </div>
      </section>
    </>
  );
}
