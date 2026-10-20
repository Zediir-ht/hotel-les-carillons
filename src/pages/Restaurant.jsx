import Seo from '../components/Seo';
import Photo from '../components/ui/Photo';
import SplitSection from '../components/ui/SplitSection';
import SectionHeading from '../components/ui/SectionHeading';
import Carousel from '../components/ui/Carousel';
import PhotoStrip from '../components/ui/PhotoStrip';
import { ArrowLink, ButtonLink } from '../components/ui/Links';
import { useLang } from '../i18n/LanguageContext';
import { SITE } from '../config/site';
import { MENU_TERROIR, MENU_STOCKFISH, THURSDAY_SPECIALS, CARTE } from '../data/menus';
import { formatEuro } from '../lib/format';

const PLATS_PHOTOS = ['plat-1', 'plat-2', 'plat-4', 'plat-6', 'plat-7', 'plat-8', 'plat-3', 'plat-5'];

/* ── Petits composants de mise en forme des menus ── */

function Label({ children }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-8 h-px bg-gold-light/40" />
      <h4 className="text-[11px] tracking-[0.35em] uppercase font-normal text-gold-light" style={{ fontFamily: 'var(--font-body)' }}>
        {children}
      </h4>
      <div className="flex-1 h-px bg-gold-light/15" />
    </div>
  );
}

function DishList({ dishes, className = '' }) {
  const { pick, t, lang } = useLang();
  return (
    <ul className={`space-y-4 list-none p-0 m-0 ${className}`}>
      {dishes.map((dish) => (
        <li key={dish.name.fr} className="flex items-start gap-3 text-sm text-offwhite/75 leading-relaxed">
          <span className="text-gold-light/60 text-[8px] mt-1.5 shrink-0" aria-hidden="true">
            ◆
          </span>
          <span className="flex-1">{pick(dish.name)}</span>
          {dish.supplement && (
            <span className="text-gold-light text-xs shrink-0 mt-0.5" title={t('restaurantPage.supplement')}>
              +{formatEuro(dish.supplement, lang)}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

function MenuCard({ overline, title, price, note, children }) {
  return (
    <article className="relative border border-gold-light/25">
      <div className="absolute inset-2 border border-gold-light/10 pointer-events-none" />
      <div className="relative p-7 md:p-12">
        <header className="text-center mb-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold-light/70 mb-4 font-light">{overline}</p>
          <h3 className="text-2xl md:text-3xl text-offwhite tracking-wide mb-3">{title}</h3>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold-light/40" />
            <span className="text-gold-light text-sm">{price}</span>
            <div className="w-12 h-px bg-gold-light/40" />
          </div>
          {note && <p className="text-offwhite/50 text-xs italic max-w-md mx-auto leading-relaxed">{note}</p>}
        </header>
        {children}
      </div>
    </article>
  );
}

function CarteColumn({ label, dishes, note }) {
  const { pick, t, lang } = useLang();
  return (
    <div className="p-7 md:p-10 bg-white">
      <div className="text-center mb-8">
        <h3 className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3 font-normal" style={{ fontFamily: 'var(--font-body)' }}>
          {label}
        </h3>
        <div className="w-10 h-px bg-gold/40 mx-auto" />
      </div>
      <ul className="space-y-5 list-none p-0 m-0">
        {dishes.map((dish) => (
          <li key={dish.name.fr} className="flex items-end gap-2 text-sm">
            <span className="text-black/75 leading-snug">{pick(dish.name)}</span>
            <span className="border-b border-dotted border-black/20 flex-1 min-w-4 mb-1" aria-hidden="true" />
            <span className="text-gold shrink-0">{dish.price == null ? t('restaurantPage.marketPrice') : formatEuro(dish.price, lang)}</span>
          </li>
        ))}
      </ul>
      {note && <p className="text-[11px] text-black/45 italic mt-6 text-center">{note}</p>}
    </div>
  );
}

/* ── Page ── */

export default function Restaurant() {
  const { t } = useLang();
  const subnav = t('restaurantPage.subnav');
  const slides = t('restaurantPage.platsSlides');
  const strip = t('restaurantPage.stripAlts');

  return (
    <>
      <Seo page="restaurant" path="/restaurant" image="/images/photos/plat-1-1600.webp" />

      {/* Hero */}
      <section className="relative min-h-[540px] md:min-h-[680px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-deepbrown">
          <Photo name="salle-restaurant-1" alt={t('restaurantPage.heroImgAlt')} priority sizes="100vw" className="w-full h-full object-cover ken-burns" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pb-14 md:pb-20 pt-32 md:pt-40 hero-reveal">
          <p className="text-[11px] tracking-[0.35em] uppercase text-offwhite/75 mb-5">{t('restaurantPage.heroOverline')}</p>
          <h1 className="text-offwhite text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-5">
            {t('restaurantPage.heroTitle1')}
            <br />
            <span className="text-gold-light">{t('restaurantPage.heroTitle2')}</span>
          </h1>
          <div className="w-24 h-px bg-gold-light mb-6" />
          <p className="text-offwhite/85 text-sm md:text-lg leading-relaxed max-w-xl mb-8">{t('restaurantPage.heroDesc')}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <ButtonLink href={SITE.phone.href} variant="gold">
              {t('restaurantPage.callToBook')} · {SITE.phone.display}
            </ButtonLink>
            <ButtonLink href="#menus" variant="outline-light">
              {subnav.menus}
            </ButtonLink>
          </div>

          <figure className="hidden lg:block absolute right-14 bottom-12 w-[340px] xl:w-[380px] m-0">
            <div className="bg-offwhite/95 p-3 shadow-2xl border border-gold/30">
              <Photo name="plat-1" alt={t('restaurantPage.heroCaption')} sizes="380px" className="w-full h-48 object-cover" />
              <figcaption className="text-[10px] tracking-[0.28em] uppercase text-deepbrown/70 mt-3 text-center">{t('restaurantPage.heroCaption')}</figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* Sous-navigation collante */}
      <nav aria-label={t('restaurantPage.heroTitle1')} className="sticky top-16 lg:top-20 z-30 bg-offwhite/95 backdrop-blur border-y border-black/10">
        <ul className="max-w-6xl mx-auto px-4 flex gap-1 overflow-x-auto list-none m-0 py-0 whitespace-nowrap justify-start md:justify-center">
          {[
            ['presentation', subnav.about],
            ['horaires', subnav.hours],
            ['menus', subnav.menus],
            ['carte', subnav.carte],
            ['photos', subnav.photos],
          ].map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="block px-4 py-3.5 text-[11px] tracking-[0.18em] uppercase text-black/60 hover:text-gold no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <SplitSection
        id="presentation"
        photo="terrasse"
        photoAlt={t('restaurantPage.section1ImgAlt')}
        overline={t('restaurantPage.section1Sub')}
        title={t('restaurantPage.section1Title')}
      >
        <p>{t('restaurantPage.section1P1')}</p>
        <p>{t('restaurantPage.section1P2')}</p>
        <p>{t('restaurantPage.section1P3')}</p>
        <ArrowLink to="/contact?sujet=table" className="mt-2">
          {t('restaurantPage.section1Cta')}
        </ArrowLink>
      </SplitSection>

      {/* Horaires & formules */}
      <section id="horaires" className="py-20 md:py-28 bg-beige section-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16">
          <div>
            <SectionHeading overline={t('restaurantPage.horairesSub')} title={t('restaurantPage.horairesTitle')} align="left" size="md" className="mb-8" />
            <dl className="space-y-4 m-0">
              {t('restaurantPage.horaires').map((item) => (
                <div key={item.label} className="flex gap-4 text-sm">
                  <span className="w-4 h-px bg-gold block shrink-0 mt-2.5" aria-hidden="true" />
                  <div>
                    <dt className="inline text-black">{item.label} — </dt>
                    <dd className="inline text-gray-mid m-0">{item.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <SectionHeading overline={t('restaurantPage.menusSub')} title={t('restaurantPage.menusTitle')} align="left" size="md" className="mb-8" />
            <ul className="space-y-5 list-none p-0 m-0">
              {t('restaurantPage.menus').map((item) => (
                <li key={item.title}>
                  <h3 className="text-sm font-normal text-black mb-1 normal-case tracking-normal" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-mid text-sm leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PhotoStrip
        photos={[
          { name: 'veranda-banquet', alt: strip[0] },
          { name: 'bar-1', alt: strip[1] },
          { name: 'salle-restaurant-2', alt: strip[2] },
          { name: 'jardin-2', alt: strip[3] },
        ]}
      />

      {/* Menus */}
      <section id="menus" className="py-20 md:py-32 bg-deepbrown section-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <SectionHeading overline={t('restaurantPage.nosMenusOverline')} title={t('restaurantPage.nosMenusTitle')} tone="light" size="xl" className="mb-16">
            <em>{t('restaurantPage.nosMenusDisclaimer')}</em>
          </SectionHeading>

          <div className="space-y-12 md:space-y-16">
            <MenuCard
              overline={t('restaurantPage.jourOverline')}
              title={t('restaurantPage.jourTitle')}
              price={t('restaurantPage.jourPrice')}
              note={`${t('restaurantPage.jourNote')} ${t('restaurantPage.jourWinter')}`}
            >
              <div className="max-w-sm mx-auto">
                <Label>{t('restaurantPage.thursdayLabel')}</Label>
                <DishList dishes={THURSDAY_SPECIALS} />
              </div>
            </MenuCard>

            <MenuCard
              overline={t('restaurantPage.terroirOverline')}
              title={t('restaurantPage.terroirTitle')}
              price={t('restaurantPage.terroirPrice')}
              note={t('restaurantPage.terroirDisclaimer')}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                <div>
                  <Label>{t('restaurantPage.entreesLabel')}</Label>
                  <DishList dishes={MENU_TERROIR.starters} />
                </div>
                <div>
                  <Label>{t('restaurantPage.platsLabel')}</Label>
                  <DishList dishes={MENU_TERROIR.mains} />
                  <p className="text-xs text-offwhite/45 italic mt-5 pl-5">{t('restaurantPage.platsNote')}</p>
                </div>
              </div>
              <div className="border-t border-gold/15 mt-10 pt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                <div>
                  <Label>{t('restaurantPage.fromagesLabel')}</Label>
                  <p className="text-sm text-offwhite/75 pl-5">{t('restaurantPage.fromagesDesc')}</p>
                </div>
                <div>
                  <Label>{t('restaurantPage.dessertsLabel')}</Label>
                  <DishList dishes={MENU_TERROIR.desserts} />
                </div>
              </div>
            </MenuCard>

            <MenuCard
              overline={t('restaurantPage.stockfishOverline')}
              title={t('restaurantPage.stockfishTitle')}
              price={t('restaurantPage.stockfishPrice')}
              note={t('restaurantPage.stockfishNote')}
            >
              <DishList dishes={MENU_STOCKFISH} className="max-w-sm mx-auto" />
            </MenuCard>
          </div>
        </div>
      </section>

      {/* Carte */}
      <section id="carte" className="py-20 md:py-32 bg-offwhite section-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <SectionHeading overline={t('restaurantPage.carteOverline')} title={t('restaurantPage.carteTitle')} size="xl" className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 border border-black/10 divide-y md:divide-y-0 md:divide-x divide-black/10">
            <CarteColumn label={t('restaurantPage.entreesLabel')} dishes={CARTE.starters} />
            <CarteColumn label={t('restaurantPage.platsLabel')} dishes={CARTE.mains} note={t('restaurantPage.platsNote')} />
            <CarteColumn label={t('restaurantPage.saladesLabel')} dishes={CARTE.salads} note={t('restaurantPage.saladesNote')} />
          </div>
        </div>
      </section>

      {/* Photos des plats */}
      <section id="photos" className="py-20 md:py-28 bg-deepbrown section-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHeading overline={t('restaurantPage.galerieSub')} title={t('restaurantPage.galerieTitle')} tone="light" className="mb-12">
            {t('restaurantPage.galerieDesc')}
          </SectionHeading>
          <Carousel
            slides={PLATS_PHOTOS.map((photo, i) => ({ photo, alt: slides[i], caption: slides[i] }))}
            aspectRatio="4/3"
            className="max-w-3xl mx-auto"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
      </section>

      {/* Réservation */}
      <section className="py-16 md:py-20 bg-beige section-border text-center px-6">
        <SectionHeading title={t('restaurantPage.reserveTitle')} size="md">
          {t('restaurantPage.reserveDesc')}
        </SectionHeading>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <ButtonLink href={SITE.phone.href} variant="dark" size="lg">
            {SITE.phone.display}
          </ButtonLink>
          <ButtonLink to="/contact?sujet=table" variant="outline" size="lg">
            {t('restaurantPage.reserveWrite')}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
