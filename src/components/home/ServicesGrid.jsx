import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { useLang } from '../../i18n/LanguageContext';

const svg = (children) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 mx-auto" aria-hidden="true">
    {children}
  </svg>
);

// Une icône et une page de destination par service (même ordre que services.items dans i18n)
const SERVICES = [
  {
    to: '/hotel#chambres',
    icon: svg(<><rect x="4" y="20" width="40" height="16" rx="2" /><path d="M4 28V16a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v12" /><path d="M10 14v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" /><path d="M4 36v4M44 36v4" /></>),
  },
  {
    to: '/restaurant',
    icon: svg(<><path d="M16 6v10a6 6 0 0 0 6 6v20" /><path d="M16 6v8M22 6v8M32 6v36" /><path d="M28 6c0 6 8 6 8 6" /></>),
  },
  {
    to: '/galerie',
    icon: svg(<><path d="M6 36c3 0 3-4 6-4s3 4 6 4 3-4 6-4 3 4 6 4 3-4 6-4" /><path d="M6 42c3 0 3-4 6-4s3 4 6 4 3-4 6-4 3 4 6 4 3-4 6-4" /><circle cx="32" cy="12" r="4" /><path d="M32 16v8l-8 6" /></>),
  },
  {
    to: '/meubles',
    icon: svg(<><path d="M6 22L24 6l18 16" /><path d="M10 18v22h28V18" /><rect x="18" y="28" width="12" height="12" /></>),
  },
  {
    to: '/seminaire',
    icon: svg(<><rect x="6" y="14" width="36" height="24" rx="2" /><path d="M16 38v4M32 38v4M12 38h24" /><circle cx="17" cy="26" r="3" /><circle cx="31" cy="26" r="3" /><path d="M20 26h8" /></>),
  },
  {
    to: '/hotel#soiree-etape',
    icon: svg(<><rect x="6" y="18" width="36" height="24" rx="2" /><path d="M16 18v-4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4" /><path d="M6 30h36" /></>),
  },
];

export default function ServicesGrid() {
  const { t } = useLang();
  const items = t('services.items');
  return (
    <section className="py-20 md:py-32 bg-beige section-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading overline={t('services.overline')} title={t('services.title')} className="mb-14" />

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 list-none p-0 m-0">
          {items.map((service, i) => (
            <Reveal as="li" key={service.title} from="fade" delay={i * 80}>
              <Link
                to={SERVICES[i].to}
                className="block bg-white p-5 md:p-8 text-center group h-full border border-black/5 hover:border-gold/40 transition-colors no-underline"
              >
                <div className="text-gold mb-4 transition-transform duration-300 group-hover:-translate-y-1">{SERVICES[i].icon}</div>
                <h3 className="text-sm md:text-base font-normal text-black mb-2 tracking-wide normal-case" style={{ fontFamily: 'var(--font-body)' }}>
                  {service.title}
                </h3>
                <div className="w-6 h-px bg-gold mx-auto mb-3 group-hover:w-10 transition-all duration-300" />
                <p className="text-gray-mid text-xs md:text-sm leading-relaxed font-light">{service.desc}</p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
