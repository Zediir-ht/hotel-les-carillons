import { useRef } from 'react';
import { useLang } from '../../i18n/LanguageContext';
import { MENU_TERROIR, MENU_STOCKFISH, THURSDAY_SPECIALS, CARTE, MENU_TABS } from '../../data/menus';
import { formatEuro } from '../../lib/format';
import { OrnateFrame, OrnamentDivider } from '../ui/Ornaments';


/* ── Mise en forme « menu imprimé » ── */

function CourseTitle({ children }) {
  return (
    <h4 className="text-center text-xl text-black mb-5 mt-10 first:mt-0">
      {children}
    </h4>
  );
}

/** Ligne de plat : nom … points de conduite … prix ou supplément. */
function Dish({ dish }) {
  const { pick, t, lang } = useLang();
  const price =
    dish.price !== undefined
      ? dish.price === null
        ? t('restaurantPage.marketPrice')
        : formatEuro(dish.price, lang)
      : dish.supplement
        ? `+${formatEuro(dish.supplement, lang)}`
        : null;
  return (
    <li className="flex items-baseline gap-2 py-1.5">
      <span className="text-black/85">{pick(dish.name)}</span>
      {price && (
        <>
          <span className="flex-1 border-b border-dotted border-black/25 min-w-6 translate-y-[-4px]" aria-hidden="true" />
          <span className="text-gold shrink-0" title={dish.supplement ? t('restaurantPage.supplement') : undefined}>
            {price}
          </span>
        </>
      )}
    </li>
  );
}

function DishList({ dishes }) {
  return <ul className="list-none p-0 m-0 max-w-xl mx-auto">{dishes.map((d) => <Dish key={d.name.fr} dish={d} />)}</ul>;
}

function MenuHeader({ title, price, note }) {
  return (
    <header className="text-center mb-10">
      <h3 className="text-3xl md:text-4xl text-black">{title}</h3>
      <p className="text-gold text-lg mt-3">{price}</p>
      <OrnamentDivider className="mx-auto text-gold mt-4" width="w-40" />
      {note && <p className="text-gray-mid italic max-w-lg mx-auto mt-5">{note}</p>}
    </header>
  );
}

function Note({ children }) {
  return <p className="text-center text-sm text-gray-mid italic mt-6">{children}</p>;
}

/* ── Contenu de chaque onglet ── */

function TabContent({ tab }) {
  const { t } = useLang();
  const r = (k) => t(`restaurantPage.${k}`);

  if (tab === 'jour') {
    return (
      <>
        <MenuHeader title={r('jourTitle')} price={r('jourPrice')} note={`${r('jourNote')} ${r('jourWinter')}`} />
        <CourseTitle>{r('thursdayLabel')}</CourseTitle>
        <DishList dishes={THURSDAY_SPECIALS} />
      </>
    );
  }
  if (tab === 'terroir') {
    return (
      <>
        <MenuHeader title={r('terroirTitle')} price={r('terroirPrice')} note={r('terroirDisclaimer')} />
        <CourseTitle>{r('entreesLabel')}</CourseTitle>
        <DishList dishes={MENU_TERROIR.starters} />
        <CourseTitle>{r('platsLabel')}</CourseTitle>
        <DishList dishes={MENU_TERROIR.mains} />
        <Note>{r('platsNote')}</Note>
        <CourseTitle>{r('fromagesLabel')}</CourseTitle>
        <p className="text-center text-black/85">{r('fromagesDesc')}</p>
        <CourseTitle>{r('dessertsLabel')}</CourseTitle>
        <DishList dishes={MENU_TERROIR.desserts} />
      </>
    );
  }
  if (tab === 'stockfish') {
    return (
      <>
        <MenuHeader title={r('stockfishTitle')} price={r('stockfishPrice')} note={r('stockfishNote')} />
        <ul className="list-none p-0 m-0 text-center space-y-3 text-lg text-black/85">
          {MENU_STOCKFISH.map((d, i) => (
            <li key={d.name.fr}>
              {i > 0 && (
                <span className="block text-gold/60 text-xs mb-3" aria-hidden="true">
                  ◆
                </span>
              )}
              <DishName dish={d} />
            </li>
          ))}
        </ul>
      </>
    );
  }
  return (
    <>
      <MenuHeader title={r('carteTitle')} price={r('carteOverline')} />
      <CourseTitle>{r('entreesLabel')}</CourseTitle>
      <DishList dishes={CARTE.starters} />
      <CourseTitle>{r('platsLabel')}</CourseTitle>
      <DishList dishes={CARTE.mains} />
      <Note>{r('platsNote')}</Note>
      <CourseTitle>{r('saladesLabel')}</CourseTitle>
      <DishList dishes={CARTE.salads} />
      <Note>{r('saladesNote')}</Note>
    </>
  );
}

function DishName({ dish }) {
  const { pick } = useLang();
  return pick(dish.name);
}

/**
 * Carte du restaurant façon « menu imprimé », avec onglets accessibles (← → au clavier).
 * L'onglet actif est contrôlé par la page (les cartes « Formules » peuvent l'ouvrir).
 */
export default function MenuBook({ tab, onTabChange }) {
  const { t } = useLang();
  const tabRefs = useRef({});

  const onKeyDown = (e) => {
    const i = MENU_TABS.indexOf(tab);
    let next = null;
    if (e.key === 'ArrowRight') next = MENU_TABS[(i + 1) % MENU_TABS.length];
    if (e.key === 'ArrowLeft') next = MENU_TABS[(i - 1 + MENU_TABS.length) % MENU_TABS.length];
    if (next) {
      e.preventDefault();
      onTabChange(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div role="tablist" aria-label={t('restaurantPage.tabsLabel')} className="flex flex-wrap justify-center gap-2 mb-8" onKeyDown={onKeyDown}>
        {MENU_TABS.map((id) => (
          <button
            key={id}
            ref={(el) => (tabRefs.current[id] = el)}
            type="button"
            role="tab"
            id={`tab-${id}`}
            aria-selected={tab === id}
            aria-controls="menu-panel"
            tabIndex={tab === id ? 0 : -1}
            onClick={() => onTabChange(id)}
            className={`px-5 py-2.5 border transition-colors cursor-pointer ${
              tab === id ? 'bg-deepbrown text-offwhite border-deepbrown' : 'bg-white text-black/75 border-gold/30 hover:border-gold hover:text-gold'
            }`}
          >
            {t(`restaurantPage.tabs.${id}`)}
          </button>
        ))}
      </div>

      <OrnateFrame className="bg-white shadow-[0_20px_50px_rgba(75,56,46,0.10)]">
        <div id="menu-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} className="px-6 py-14 md:px-16 md:py-16">
          <TabContent tab={tab} />
          <p className="text-center text-sm text-gray-mid italic mt-10">{t('restaurantPage.nosMenusDisclaimer')}</p>
        </div>
      </OrnateFrame>
    </div>
  );
}
