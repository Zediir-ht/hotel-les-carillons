import Seo from '../components/Seo';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import { ArrowLink, ButtonLink } from '../components/ui/Links';
import ContactForm from '../components/contact/ContactForm';
import MapEmbed from '../components/contact/MapEmbed';
import { useLang } from '../i18n/LanguageContext';
import { SITE, LINKS, bookingUrl } from '../config/site';

function InfoBlock({ title, children }) {
  return (
    <div>
      <h3 className="text-xs font-normal text-black mb-2" style={{ fontFamily: 'var(--font-body)' }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function Contact() {
  const { t, lang } = useLang();
  return (
    <>
      <Seo page="contact" path="/contact" />
      <PageHero
        title={t('contactPage.heroTitle')}
        subtitle={t('contactPage.heroSub')}
        photo="facade-1"
        photoAlt=""
        breadcrumb={[{ label: t('nav.contact') }]}
      />

      <section className="py-20 md:py-28 bg-offwhite">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 lg:gap-20">
          <div>
            <SectionHeading overline={t('contactPage.msgSub')} title={t('contactPage.msgTitle')} align="left" size="md" className="mb-6" />
            <p className="text-gray-mid mb-8 text-sm leading-relaxed">{t('contactPage.msgDesc')}</p>
            <ContactForm />
          </div>

          <div>
            <SectionHeading overline={t('contactPage.findSub')} title={t('contactPage.findTitle')} align="left" size="md" className="mb-8" />
            <address className="not-italic space-y-6 mb-8">
              <InfoBlock title={t('contactPage.phone')}>
                <a href={SITE.phone.href} className="text-2xl text-gold hover:text-gold-dark no-underline">
                  {SITE.phone.display}
                </a>
              </InfoBlock>
              <InfoBlock title={t('contactPage.email')}>
                <a href={`mailto:${SITE.email}`} className="text-gold hover:text-gold-dark no-underline text-sm">
                  {SITE.email}
                </a>
              </InfoBlock>
              <InfoBlock title={t('contactPage.address')}>
                <p className="text-gray-mid text-sm leading-relaxed">
                  {SITE.address.street}
                  <br />
                  {SITE.address.postalCode} {SITE.address.city}
                  <br />
                  {SITE.address.region}, {SITE.address.country}
                </p>
                <ArrowLink href={LINKS.directions} className="mt-3">
                  {t('contactPage.directions')}
                </ArrowLink>
              </InfoBlock>
              <InfoBlock title={t('contactPage.onlineBooking')}>
                <ButtonLink href={bookingUrl(lang)} className="mt-1">
                  {t('contactPage.bookCta')}
                </ButtonLink>
              </InfoBlock>
            </address>
            <MapEmbed title={t('contactPage.mapTitle')} />
          </div>
        </div>
      </section>
    </>
  );
}
