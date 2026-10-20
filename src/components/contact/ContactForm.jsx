import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';
import { SITE } from '../../config/site';
import Field, { inputClass } from '../ui/FormField';
import { sendMessage, canSendDirectly } from '../../lib/sendMessage';

const SUBJECTS = ['chambre', 'table', 'meubles', 'groupe', 'autre'];

export default function ContactForm() {
  const { t } = useLang();
  const [params] = useSearchParams();
  const initialSubject = SUBJECTS.includes(params.get('sujet')) ? params.get('sujet') : 'chambre';
  const [form, setForm] = useState({ subject: initialSubject, name: '', email: '', phone: '', dates: '', guests: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const f = (key) => t(`contactPage.form.${key}`);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const subjectLabel = t(`contactPage.form.subjects.${form.subject}`);
  const needsDates = form.subject !== 'autre';

  const body = [
    `${f('subject')} : ${subjectLabel}`,
    `${f('name')} : ${form.name}`,
    `${f('email')} : ${form.email}`,
    form.phone && `${f('phone')} : ${form.phone}`,
    form.dates && `${f('dates')} : ${form.dates}`,
    form.guests && `${f('guests')} : ${form.guests}`,
  ]
    .filter(Boolean)
    .join('\n')
    .concat(`\n\n${form.message}`);

  async function handleSubmit(e) {
    e.preventDefault();
    const isBot = e.target.botcheck.checked;
    setStatus('sending');
    try {
      const subject = `[Site] ${subjectLabel} — ${form.name}`;
      const result = await sendMessage({ subject, name: form.name, email: form.email, body, isBot });
      setStatus(result === 'sent' ? 'sent' : 'idle');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="border border-gold/40 bg-white p-8 text-center">
        <div className="text-gold text-3xl mb-3" aria-hidden="true">
          ✓
        </div>
        <p className="text-black leading-relaxed">{f('sent')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field id="subject" label={f('subject')}>
        <select id="subject" name="subject" value={form.subject} onChange={update} className={`${inputClass} cursor-pointer`}>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {t(`contactPage.form.subjects.${s}`)}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="name" label={f('name')} required requiredLabel={f('required')}>
          <input type="text" id="name" name="name" required autoComplete="name" value={form.name} onChange={update} className={inputClass} />
        </Field>
        <Field id="email" label={f('email')} required requiredLabel={f('required')}>
          <input type="email" id="email" name="email" required autoComplete="email" value={form.email} onChange={update} className={inputClass} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="phone" label={f('phone')}>
          <input type="tel" id="phone" name="phone" autoComplete="tel" value={form.phone} onChange={update} className={inputClass} />
        </Field>
        {needsDates && (
          <Field id="dates" label={f('dates')}>
            <input type="text" id="dates" name="dates" placeholder={f('datesPlaceholder')} value={form.dates} onChange={update} className={inputClass} />
          </Field>
        )}
      </div>

      {needsDates && (
        <Field id="guests" label={f('guests')}>
          <input type="number" min="1" max="200" id="guests" name="guests" value={form.guests} onChange={update} className={`${inputClass} sm:max-w-40`} />
        </Field>
      )}

      <Field id="message" label={f('message')} required requiredLabel={f('required')}>
        <textarea id="message" name="message" required rows={5} value={form.message} onChange={update} className={`${inputClass} resize-y`} />
      </Field>

      {/* Piège à robots : invisible pour les visiteurs */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-700">
          {f('error')}{' '}
          <a href={SITE.phone.href} className="underline">
            {SITE.phone.display}
          </a>
          .
        </p>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="bg-gold hover:bg-gold-dark disabled:opacity-60 text-white text-xs px-8 py-4 transition-colors cursor-pointer"
        >
          {status === 'sending' ? f('sending') : f('submit')}
        </button>
        {!canSendDirectly && <p className="text-xs text-gray-mid">{f('mailtoNote')}</p>}
      </div>

      <p className="text-xs text-gray-mid leading-relaxed">
        {f('privacy')}{' '}
        <Link to="/mentions-legales" className="text-gold">
          {f('privacyLink')}
        </Link>
        .
      </p>
    </form>
  );
}
