import { useState } from 'react';
import { useLang } from '../../i18n/LanguageContext';
import { SITE } from '../../config/site';
import { MEUBLES_RATES } from '../../data/meubles';
import { sendMessage, canSendDirectly } from '../../lib/sendMessage';
import Field, { inputClass } from '../ui/FormField';

/**
 * Demande de réservation d'un meublé, pré-remplie par le calculateur (étage, semaines).
 * `key` est changé par la page quand le calculateur envoie de nouvelles valeurs.
 */
export default function MeubleRequestForm({ initialFloor = 'any', initialWeeks = 3 }) {
  const { t } = useLang();
  const r = (k) => t(`meublesPage.request.${k}`);
  const floors = t('meublesPage.floors');
  const [form, setForm] = useState({
    arrival: '', weeks: String(initialWeeks), persons: '1', floor: String(initialFloor), noStairs: false,
    name: '', email: '', phone: '', message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };
  const floorLabel = form.floor === 'any' ? r('floorAny') : floors[Number(form.floor)];

  async function handleSubmit(e) {
    e.preventDefault();
    const body = [
      `${r('arrival')} : ${form.arrival}`,
      `${r('weeks')} : ${form.weeks}`,
      `${r('persons')} : ${form.persons}`,
      `${r('floor')} : ${floorLabel}`,
      form.noStairs && `${r('noStairs')} : ${r('yes')}`,
      `${r('name')} : ${form.name}`,
      `${r('email')} : ${form.email}`,
      form.phone && `${r('phone')} : ${form.phone}`,
    ]
      .filter(Boolean)
      .join('\n')
      .concat(form.message ? `\n\n${form.message}` : '');

    setStatus('sending');
    try {
      const subject = `[Site] ${r('subject')} — ${form.arrival} — ${form.name}`;
      const result = await sendMessage({ subject, name: form.name, email: form.email, body, isBot: e.target.botcheck.checked });
      setStatus(result === 'sent' ? 'sent' : 'idle');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="border border-gold/40 bg-white p-8 text-center max-w-2xl mx-auto">
        <div className="text-gold text-3xl mb-3" aria-hidden="true">
          ✓
        </div>
        <p className="text-black">{r('sent')}</p>
      </div>
    );
  }

  const req = { required: true, requiredLabel: r('required') };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-7 md:p-10 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <Field id="m-arrival" label={r('arrival')} {...req}>
          <input id="m-arrival" type="date" name="arrival" required value={form.arrival} onChange={update} className={inputClass} />
        </Field>
        <Field id="m-weeks" label={r('weeks')}>
          <select id="m-weeks" name="weeks" value={form.weeks} onChange={update} className={`${inputClass} cursor-pointer`}>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </Field>
        <Field id="m-persons" label={r('persons')}>
          <select id="m-persons" name="persons" value={form.persons} onChange={update} className={`${inputClass} cursor-pointer`}>
            {[1, 2, 3, 4].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="m-floor" label={r('floor')}>
        <select id="m-floor" name="floor" value={form.floor} onChange={update} className={`${inputClass} cursor-pointer`}>
          <option value="any">{r('floorAny')}</option>
          {MEUBLES_RATES.map((rate) => (
            <option key={rate.floor} value={rate.floor}>
              {floors[rate.floor]}
            </option>
          ))}
        </select>
      </Field>

      <label className="flex items-center gap-3 cursor-pointer text-black">
        <input type="checkbox" name="noStairs" checked={form.noStairs} onChange={update} className="w-5 h-5 accent-[var(--color-gold)]" />
        {r('noStairs')}
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="m-name" label={r('name')} {...req}>
          <input id="m-name" name="name" required autoComplete="name" value={form.name} onChange={update} className={inputClass} />
        </Field>
        <Field id="m-email" label={r('email')} {...req}>
          <input id="m-email" type="email" name="email" required autoComplete="email" value={form.email} onChange={update} className={inputClass} />
        </Field>
      </div>
      <Field id="m-phone" label={r('phone')}>
        <input id="m-phone" type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={update} className={inputClass} />
      </Field>
      <Field id="m-message" label={r('message')}>
        <textarea id="m-message" name="message" rows={3} value={form.message} onChange={update} className={`${inputClass} resize-y`} />
      </Field>

      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {status === 'error' && (
        <p role="alert" className="text-red-700">
          {r('error')}{' '}
          <a href={SITE.phone.href} className="underline">
            {SITE.phone.display}
          </a>
        </p>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button type="submit" disabled={status === 'sending'} className="bg-gold hover:bg-gold-dark disabled:opacity-60 text-white px-8 py-3.5 transition-colors cursor-pointer">
          {status === 'sending' ? r('sending') : r('submit')}
        </button>
        {!canSendDirectly && <p className="text-sm text-gray-mid m-0">{r('mailtoNote')}</p>}
      </div>
    </form>
  );
}
