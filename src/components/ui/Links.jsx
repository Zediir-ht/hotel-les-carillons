import { Link } from 'react-router-dom';


/** Lien interne (to) ou externe (href) — les liens http s'ouvrent dans un nouvel onglet. */
function SmartLink({ to, href, className, children, ...rest }) {
  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    );
  }
  const newTab = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={className}
      {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}

/** Lien texte souligné avec flèche dorée (« Voir les chambres → »). */
export function ArrowLink({ tone = 'dark', className = '', children, ...props }) {
  const color =
    tone === 'light'
      ? 'text-offwhite border-offwhite/60 hover:text-gold-light hover:border-gold-light'
      : 'text-black border-black hover:text-gold hover:border-gold';
  return (
    <SmartLink
      {...props}
      className={`self-start inline-flex items-center gap-2 font-normal text-xs tracking-[0.15em] uppercase no-underline transition-colors border-b pb-0.5 ${color} ${className}`}
    >
      {children} <span className={tone === 'light' ? 'text-gold-light' : 'text-gold'} aria-hidden="true">→</span>
    </SmartLink>
  );
}

const variants = {
  gold: 'bg-gold hover:bg-gold-dark text-white border border-gold hover:border-gold-dark',
  dark: 'bg-deepbrown hover:bg-black text-offwhite border border-deepbrown hover:border-black',
  outline: 'border border-black/25 text-black hover:border-gold hover:text-gold',
  'outline-light': 'border border-white/50 text-white hover:bg-white/10',
  'outline-gold': 'border border-gold/60 text-gold hover:bg-gold hover:text-white',
};

/** Bouton-lien (CTA). */
export function ButtonLink({ variant = 'gold', size = 'md', className = '', children, ...props }) {
  const pad = size === 'lg' ? 'px-10 py-4' : 'px-7 py-3.5';
  return (
    <SmartLink
      {...props}
      className={`inline-flex items-center justify-center gap-2 text-xs font-normal tracking-[0.18em] uppercase no-underline transition-colors ${pad} ${variants[variant]} ${className}`}
    >
      {children}
    </SmartLink>
  );
}

