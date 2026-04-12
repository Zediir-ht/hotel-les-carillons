import { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';

export default function ContactForm() {
  const { t } = useLang();
  const [form, setForm] = useState({
    nom: '',
    email: '',
    telephone: '',
    dates: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact depuis le site — ${form.nom}`);
    const body = encodeURIComponent(
      `Nom : ${form.nom}\nEmail : ${form.email}\nTéléphone : ${form.telephone}\nDates souhaitées : ${form.dates}\n\nMessage :\n${form.message}`
    );
    window.location.href = `mailto:contact@lescarillons.fr?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nom" className="block text-sm font-normal text-black mb-1">
            {t('contactPage.formName')} *
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            value={form.nom}
            onChange={handleChange}
            className="w-full border border-black/15 px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition bg-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-normal text-black mb-1">
            {t('contactPage.formEmail')} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border border-black/15 px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="telephone" className="block text-sm font-normal text-black mb-1">
            {t('contactPage.formPhone')}
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={form.telephone}
            onChange={handleChange}
            className="w-full border border-black/15 px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition bg-white"
          />
        </div>
        <div>
          <label htmlFor="dates" className="block text-sm font-normal text-black mb-1">
            {t('contactPage.formDates')}
          </label>
          <input
            type="text"
            id="dates"
            name="dates"
            placeholder={t('contactPage.formDatesPlaceholder')}
            value={form.dates}
            onChange={handleChange}
            className="w-full border border-black/15 px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition bg-white"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-normal text-black mb-1">
          {t('contactPage.formMessage')} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full border border-black/15 px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition resize-y bg-white"
        />
      </div>

      <button
        type="submit"
        className="bg-gold hover:bg-gold-dark text-white font-normal text-xs px-8 py-3.5 tracking-[0.15em] uppercase transition-colors cursor-pointer"
      >
        {t('contactPage.formSubmit')}
      </button>
    </form>
  );
}
