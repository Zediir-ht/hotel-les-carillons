import Reveal from '../ui/Reveal';
import Photo from '../ui/Photo';
import SectionHeading from '../ui/SectionHeading';
import { ArrowLink } from '../ui/Links';
import { useLang } from '../../i18n/LanguageContext';
import { logisPageUrl } from '../../config/site';

export default function IntroSection() {
  const { t, lang } = useLang();
  return (
    <section id="bienvenue" className="py-20 md:py-32 bg-offwhite">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <Reveal from="left" className="flex flex-col">
          <SectionHeading overline={t('intro.overline')} title={t('intro.title')} align="left" />
          <div className="mt-7 space-y-4 text-gray-mid leading-relaxed">
            <p>{t('intro.p1')}</p>
            <p>{t('intro.p2')}</p>
          </div>
          <ArrowLink href={logisPageUrl(lang)} className="mt-8">
            {t('intro.cta')}
          </ArrowLink>
        </Reveal>

        <Reveal from="right" delay={150} className="relative overflow-hidden img-card">
          <Photo name="facade-1" alt={t('intro.imgAlt')} sizes="(min-width: 768px) 45vw, 100vw" className="w-full object-cover aspect-[0.85]" />
        </Reveal>
      </div>
    </section>
  );
}
