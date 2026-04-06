const IconBed = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 mx-auto">
    <rect x="4" y="20" width="40" height="16" rx="2"/>
    <path d="M4 28V16a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v12"/>
    <path d="M10 14v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"/>
    <line x1="4" y1="36" x2="4" y2="40"/>
    <line x1="44" y1="36" x2="44" y2="40"/>
  </svg>
);
import Reveal from './Reveal';
const IconFork = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 mx-auto">
    <path d="M16 6v10a6 6 0 0 0 6 6v20"/>
    <path d="M16 6v8"/>
    <path d="M22 6v8"/>
    <path d="M32 6v36"/>
    <path d="M28 6c0 6 8 6 8 6"/>
  </svg>
);
const IconPool = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 mx-auto">
    <path d="M6 36c3 0 3-4 6-4s3 4 6 4 3-4 6-4 3 4 6 4 3-4 6-4"/>
    <path d="M6 42c3 0 3-4 6-4s3 4 6 4 3-4 6-4 3 4 6 4 3-4 6-4"/>
    <circle cx="32" cy="12" r="4"/>
    <path d="M32 16v8l-8 6"/>
  </svg>
);
const IconHome = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 mx-auto">
    <path d="M6 22L24 6l18 16"/>
    <path d="M10 18v22h28V18"/>
    <rect x="18" y="28" width="12" height="12"/>
  </svg>
);
const IconMeeting = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 mx-auto">
    <rect x="6" y="14" width="36" height="24" rx="2"/>
    <path d="M16 38v4"/>
    <path d="M32 38v4"/>
    <path d="M12 38h24"/>
    <circle cx="17" cy="26" r="3"/>
    <circle cx="31" cy="26" r="3"/>
    <path d="M20 26h8"/>
  </svg>
);
const IconBriefcase = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 mx-auto">
    <rect x="6" y="18" width="36" height="24" rx="2"/>
    <path d="M16 18v-4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4"/>
    <line x1="6" y1="30" x2="42" y2="30"/>
    <line x1="22" y1="30" x2="26" y2="30" strokeWidth="2"/>
  </svg>
);

const services = [
  { icon: <IconBed />, title: '17 Chambres', description: 'Chambres confortables et calmes, toutes équipées pour un séjour agréable.' },
  { icon: <IconFork />, title: 'Restaurant', description: 'Cuisine maison généreuse, produits du terroir aveyronnais, menus et carte.' },
  { icon: <IconPool />, title: 'Piscine & Parc', description: 'Piscine extérieure et parc arboré pour se détendre en pleine nature.' },
  { icon: <IconHome />, title: 'Meublés Les Cèdres', description: '11 appartements meublés avec piscine partagée et parc aux trois cèdres.' },
  { icon: <IconMeeting />, title: 'Séminaire', description: "Salle équipée pour vos réunions, formations et événements d'entreprise." },
  { icon: <IconBriefcase />, title: 'Soirée étape VRP', description: 'Formule soirée étape : dîner, nuit et petit-déjeuner à tarif préférentiel.' },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 bg-warm">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold mb-5">
            Nos Services
          </p>
          <h2 className="text-3xl md:text-4xl text-brown">
            Un établissement complet
          </h2>
          <div className="w-10 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => (
            <Reveal key={service.title} from="fade" delay={i * 80}>
              <div
                className="bg-white p-6 md:p-8 text-center group hover:shadow-md transition-shadow h-full"
              >
                <div className="text-sage mb-4 transition-transform duration-300 group-hover:-translate-y-1">{service.icon}</div>
                <h3 className="text-sm md:text-base font-semibold text-brown mb-2 tracking-wide">
                  {service.title}
                </h3>
                <div className="w-6 h-px bg-gold mx-auto mb-3 group-hover:w-10 transition-all duration-300" />
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
