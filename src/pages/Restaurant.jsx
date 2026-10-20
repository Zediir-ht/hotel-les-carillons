import { useState } from 'react';
import Seo from '../components/Seo';
import Photo from '../components/ui/Photo';
import SectionHeading from '../components/ui/SectionHeading';
import PhotoGrid from '../components/ui/PhotoGrid';
import { ArrowLink, ButtonLink } from '../components/ui/Links';
import { ArchFrame, Bell, OrnateFrame } from '../components/ui/Ornaments';
import TodayBanner from '../components/restaurant/TodayBanner';
import MenuBook from '../components/restaurant/MenuBook';
import { useLang } from '../i18n/LanguageContext';
import { SITE } from '../config/site';

// Photo de chaque formule (même ordre que restaurantPage.formules)
const FORMULE_PHOTOS = { jour: 'plat-8', terroir: 'plat-2', stockfish: 'salle-reception-2' };
const PLATS_PHOTOS = ['plat-1', 'plat-2', 'plat-4', 'plat-6', 'plat-7', 'plat-8', 'plat-3', 'plat-5'];

export default function Restaurant() {
  const { t } = useLang();
  const r = (k) => t(`restaurantPage.${k}`);
  const nav = r('nav2');
  const [tab, setTab] = useState('jour');

  // Une carte « Formule » ouvre le bon onglet de la carte puis y fait défiler la page
  const openMenu = (id) => {
    setTab(id);
    document.getElementById('menus')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Seo page="restaurant" path="/restaurant" image="/images/photos/plat-1-1600.webp" />

      {/* ── En-tête ── */}
      <section className="relative min-h-[540px] md:min-h-[640px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-deepbrown">
          <Photo name="salle-restaurant-1" alt={r('heroImgAlt')} priority sizes="100vw" className="w-full h-full object-cover ken-burns" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pb-14 md:pb-20 pt-32 md:pt-40 hero-reveal">
          <p className="overline text-gold-light mb-5">{r('heroOverline')}</p>
          <h1 className="text-offwhite text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-6">
            {r('heroTitle1')}
            <br />
            <span className="text-gold-light">{r('heroTitle2')}</span>
          </h1>
          <p className="text-offwhite/90 md:text-lg leading-relaxed max-w-xl mb-8">{r('heroDesc')}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <ButtonLink href={SITE.phone.href} variant="gold">
              {r('callToBook')} · {SITE.phone.display}
            </ButtonLink>
            <ButtonLink href="#formules" variant="outline-light">
              {nav.formules}
            </ButtonLink>
          </div>

          <figure className="hidden lg:block absolute right-14 bottom-12 w-[300px] xl:w-[330px] m-0">
            <ArchFrame className="aspect-[4/5]">
              <Photo name="plat-1" alt={r('heroCaption')} sizes="330px" className="w-full h-full object-cover" />
            </ArchFrame>
            <figcaption className="text-offwhite/80 text-sm mt-4 text-center italic">{r('heroCaption')}</figcaption>
          </figure>
        </div>
      </section>

      {/* ── Aujourd'hui ── */}
      <TodayBanner />

      {/* ── Sous-navigation collante ── */}
      <nav aria-label={r('heroTitle1')} className="sticky top-16 lg:top-20 z-30 bg-offwhite/95 backdrop-blur border-b border-black/10">
        <ul className="max-w-6xl mx-auto px-4 flex gap-1 overflow-x-auto list-none m-0 py-0 whitespace-nowrap justify-start md:justify-center">
          {['formules', 'menus', 'estofinade', 'photos', 'infos'].map((id) => (
            <li key={id}>
              <a href={`#${id}`} className="block px-4 py-3.5 text-sm text-black/70 hover:text-gold no-underline">
                {nav[id]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── 1. Les formules ── */}
      <section id="formules" className="py-20 md:py-28 bg-offwhite">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHeading overline={r('formulesSub')} title={r('formulesTitle')} className="mb-14" />
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0 m-0">
            {r('formules').map((f) => (
              <li key={f.id}>
                <button
                  type="button"
                  onClick={() => openMenu(f.id)}
                  className="group relative w-full h-full bg-white p-4 pb-8 text-center cursor-pointer flex flex-col"
                >
                  <span className="pointer-events-none absolute inset-1.5 border border-gold/25 group-hover:border-gold/60 transition-colors" aria-hidden="true" />
                  <span className="relative block aspect-[4/3] overflow-hidden rounded-t-[999px]">
                    <Photo
                      name={FORMULE_PHOTOS[f.id]}
                      alt={f.photoAlt}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </span>
                  <span className="relative flex flex-col items-center flex-1 pt-6 px-2">
                    <span className="block text-2xl text-black" style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {f.title}
                    </span>
                    <span className="block text-3xl text-gold mt-2">{f.price}</span>
                    <Bell className="w-4 h-4 text-gold my-3" />
                    <span className="block text-black/85">{f.when}</span>
                    <span className="block text-sm text-gray-mid mt-1 flex-1">{f.detail}</span>
                    <span className="mt-5 inline-flex items-center gap-2 border-b border-black group-hover:border-gold group-hover:text-gold transition-colors">
                      {r('seeMenu')} <span className="text-gold" aria-hidden="true">↓</span>
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 2. La carte, façon menu imprimé ── */}
      <section id="menus" className="py-20 md:py-28 bg-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading overline={r('nosMenusOverline')} title={r('menusTitle')} className="mb-12" />
          <MenuBook tab={tab} onTabChange={setTab} />
        </div>
      </section>

      {/* ── 4. L'estofinade ── */}
      <section id="estofinade" className="py-20 md:py-28 bg-forest pattern-belle">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="max-w-md w-full mx-auto">
            <ArchFrame className="aspect-[4/5]">
              <Photo name="veranda-banquet" alt={r('formules')[2].photoAlt} sizes="(min-width: 1024px) 40vw, 100vw" className="w-full h-full object-cover" />
            </ArchFrame>
          </div>
          <div className="flex flex-col">
            <SectionHeading overline={r('estofinadeSub')} title={r('estofinadeTitle')} tone="light" align="left" />
            <div className="mt-8 space-y-4 text-offwhite/85">
              <p className="dropcap dropcap-light">{r('estofinadeP1')}</p>
              <p>{r('estofinadeP2')}</p>
            </div>
            <OrnateFrame tone="light" className="mt-8 p-7 md:p-8">
              <p className="text-gold-light text-lg m-0">{r('stockfishTitle')} · {r('stockfishPrice')}</p>
              <p className="text-offwhite/80 mt-2 m-0">{r('estofinadeMenu')}</p>
            </OrnateFrame>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <ButtonLink href={SITE.phone.href} variant="gold">
                {r('estofinadeCta')}
              </ButtonLink>
              <ButtonLink href="#menus" variant="outline-light" onClick={() => setTab('stockfish')}>
                {r('seeMenu')}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Les assiettes en photos ── */}
      <section id="photos" className="py-20 md:py-28 bg-offwhite">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHeading overline={r('photosSub')} title={r('photosTitle')} className="mb-12">
            {r('photosDesc')}
          </SectionHeading>
          <PhotoGrid items={PLATS_PHOTOS.map((photo, i) => ({ photo, alt: r('platsSlides')[i] }))} />
        </div>
      </section>

      {/* ── Horaires & réservation ── */}
      <section id="infos" className="py-20 md:py-28 bg-beige">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <SectionHeading overline={r('infosSub')} title={r('infosTitle')} align="left" size="md" className="mb-8" />
            <dl className="space-y-4 m-0">
              {r('horaires').map((item) => (
                <div key={item.label} className="flex gap-3">
                  <Bell className="w-4 h-4 text-gold shrink-0 mt-1.5" />
                  <div>
                    <dt className="text-black">{item.label}</dt>
                    <dd className="text-gray-mid m-0">{item.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
          <OrnateFrame className="bg-white p-10 md:p-12 text-center">
            <h3 className="text-2xl text-black">{r('reserveTitle')}</h3>
            <p className="text-gray-mid mt-4">{r('reserveDesc')}</p>
            <a href={SITE.phone.href} className="block text-3xl text-gold hover:text-gold-dark no-underline mt-6">
              {SITE.phone.display}
            </a>
            <p className="text-gray-mid mt-6">{r('section1P3')}</p>
            <ArrowLink to="/contact?sujet=table" className="mt-4 mx-auto">
              {r('reserveWrite')}
            </ArrowLink>
          </OrnateFrame>
        </div>
      </section>
    </>
  );
}
