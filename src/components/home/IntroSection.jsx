import Reveal from '../ui/Reveal';
import Photo from '../ui/Photo';
import SectionHeading from '../ui/SectionHeading';
import { ArrowLink } from '../ui/Links';
import { ArchFrame, Monogram } from '../ui/Ornaments';
import { useLang } from '../../i18n/LanguageContext';
import { logisPageUrl } from '../../config/site';

export default function IntroSection() {
  const { t, lang } = useLang();
  return (
    <section id="bienvenue" className="py-20 md:py-32 bg-offwhite">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
        <Reveal className="flex flex-col">
          <SectionHeading overline={t('intro.overline')} title={t('intro.title')} align="left" />
          <div className="mt-8 space-y-4 text-gray-mid">
            <p className="dropcap">{t('intro.p1')}</p>
            <p>{t('intro.p2')}</p>
          </div>
          <ArrowLink href={logisPageUrl(lang)} className="mt-8">
            {t('intro.cta')}
          </ArrowLink>
        </Reveal>

        <Reveal delay={150} className="relative max-w-md w-full mx-auto md:mr-4">
          <ArchFrame className="aspect-[4/5]">
            <Photo name="facade-1" alt={t('intro.imgAlt')} sizes="(min-width: 768px) 40vw, 100vw" className="w-full h-full object-cover" />
          </ArchFrame>
          <div className="absolute -bottom-8 -left-6 md:-left-10 bg-offwhite rounded-full p-1.5 shadow-[0_10px_30px_rgba(75,56,46,0.15)]">
            <Monogram className="w-24 h-24 md:w-28 md:h-28" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
