// Calcule l'état du restaurant pour une date donnée (horaires de src/i18n : restaurantPage.horaires).
//   lundi–vendredi : menu du jour le midi + soir sur réservation
//   samedi         : menu du terroir et carte sur réservation
//   dimanche       : fermé (sauf curistes et randonneurs)
//   jours fériés   : pas de menu du jour

/** Dimanche de Pâques (algorithme de Meeus / Butcher). */
function easterSunday(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

const key = (d) => `${d.getMonth() + 1}-${d.getDate()}`;

/** Jours fériés en France métropolitaine pour l'année donnée. */
export function frenchHolidays(year) {
  const easter = easterSunday(year);
  const plus = (days) => new Date(year, easter.getMonth(), easter.getDate() + days);
  return new Set([
    '1-1', '5-1', '5-8', '7-14', '8-15', '11-1', '11-11', '12-25',
    key(plus(1)), // lundi de Pâques
    key(plus(39)), // Ascension
    key(plus(50)), // lundi de Pentecôte
  ]);
}

/** Rang du jeudi dans le mois (1 à 5) pour une date qui tombe un jeudi. */
const thursdayRank = (date) => Math.ceil(date.getDate() / 7);

/**
 * → { status: 'lunchAndEvening' | 'saturday' | 'sunday' | 'holiday',
 *     thursday: { when: 'today' | 'next', index: 0..3 } | null }
 * index : position dans THURSDAY_SPECIALS (null si 5e jeudi : pas de thème).
 */
export function restaurantToday(date = new Date()) {
  const day = date.getDay();
  const holiday = frenchHolidays(date.getFullYear()).has(key(date));

  let status = 'lunchAndEvening';
  if (day === 0) status = 'sunday';
  else if (holiday) status = 'holiday';
  else if (day === 6) status = 'saturday';

  // Jeudi à thème : celui d'aujourd'hui, sinon le prochain jeudi
  const nextThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate() + ((4 - day + 7) % 7));
  const rank = thursdayRank(nextThursday);
  const thursday = rank <= 4 ? { when: day === 4 ? 'today' : 'next', index: rank - 1 } : null;

  return { status, thursday };
}
