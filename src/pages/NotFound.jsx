import Seo from '../components/Seo';
import { ButtonLink } from '../components/ui/Links';
import { useLang } from '../i18n/LanguageContext';

export default function NotFound() {
  const { t } = useLang();
  return (
    <>
      <Seo page="notFound" path="/404" noindex />
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
        <p className="overline text-gold mb-4">{t('notFound.overline')}</p>
        <h1 className="text-4xl md:text-6xl text-black mb-6">{t('notFound.title')}</h1>
        <div className="w-16 h-px bg-black mb-8" />
        <p className="text-gray-mid text-base max-w-md leading-relaxed mb-10">{t('notFound.desc')}</p>
        <ButtonLink to="/">{t('notFound.cta')}</ButtonLink>
      </section>
    </>
  );
}
