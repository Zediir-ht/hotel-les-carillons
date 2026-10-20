import Photo from '../ui/Photo';
import SectionHeading from '../ui/SectionHeading';
import { ArrowLink } from '../ui/Links';
import { useLang } from '../../i18n/LanguageContext';
import { bookingUrl } from '../../config/site';
import { ROOMS } from '../../data/rooms';
import { formatEuro } from '../../lib/format';

function RoomCard({ room }) {
  const { t, pick, lang } = useLang();
  const { from, to } = room.price;
  const priceLabel = to ? `${formatEuro(from, lang)} – ${formatEuro(to, lang)}` : formatEuro(from, lang);
  const halfBoard = Object.entries(room.halfBoard);

  return (
    <article className="bg-white border border-black/5 overflow-hidden group hover:border-gold/30 transition-colors flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden bg-beige">
        <Photo
          name={room.photo}
          alt={pick(room.name)}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <p className="absolute top-4 right-4 bg-white/95 px-3 py-1.5 text-gold text-sm tracking-wide">
          {t('rooms.fromPrice')} {formatEuro(from, lang)}
        </p>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h3 className="text-lg md:text-xl text-black leading-tight">{pick(room.name)}</h3>
        <p className="text-xs text-gold tracking-wide mt-2 mb-4">{pick(room.capacity)}</p>
        <div className="w-10 h-px bg-gold mb-4" />
        <p className="text-gray-mid text-sm leading-relaxed mb-5">{pick(room.description)}</p>

        <dl className="mb-6 text-sm grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
          <dt className="text-black/50">{t('rooms.ratesLabel')}</dt>
          <dd className="text-black m-0">{priceLabel}</dd>
          {halfBoard.map(([persons, price]) => (
            <div key={persons} className="contents">
              <dt className="text-black/50">
                {t('rooms.halfBoardLabel')} {persons} {t('rooms.persons')}
              </dt>
              <dd className="text-black/80 m-0">{price} €</dd>
            </div>
          ))}
        </dl>

        <ul className="space-y-1.5 mb-6 list-none p-0 flex-1">
          {room.features.map((f) => (
            <li key={f.fr} className="flex items-center gap-2 text-sm text-black/60">
              <span className="text-gold text-xs" aria-hidden="true">
                ✦
              </span>
              {pick(f)}
            </li>
          ))}
        </ul>

        <ArrowLink href={bookingUrl(lang)}>
          {t('rooms.book')}
          <span className="sr-only"> — {pick(room.name)}</span>
        </ArrowLink>
      </div>
    </article>
  );
}

export default function RoomsSection() {
  const { t } = useLang();
  return (
    <section id="chambres" className="py-20 md:py-28 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading overline={t('rooms.overline')} title={t('rooms.title')} className="mb-14">
          {t('rooms.subtitle')}
        </SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ROOMS.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        <div className="mt-14 bg-beige p-6 md:p-8 max-w-2xl mx-auto text-center">
          <p className="text-black text-sm mb-2">
            <strong className="font-normal">{t('rooms.breakfast')}</strong>
          </p>
          <p className="text-black/60 text-xs leading-relaxed">{t('rooms.ratesNote')}</p>
        </div>
      </div>
    </section>
  );
}
