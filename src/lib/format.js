/** 15 → « 15 € » en français, « €15 » en anglais. */
export function formatEuro(amount, lang = 'fr') {
  return new Intl.NumberFormat(lang === 'en' ? 'en-GB' : 'fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: Number.isInteger(amount) ? 0 : 2,
  }).format(amount);
}

/** Remplace les {variables} d'un texte : fill('De {min} à {max}', { min: '555 €' }). */
export function fill(text, vars) {
  return String(text).replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
}
