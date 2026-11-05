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

/** Lien texte : souligné d'un filet doré qui s'épaissit au survol (c'est le soulignement qui dit « lien »). */
export function TextLink({ tone = 'dark', className = '', children, ...props }) {
  const color =
    tone === 'light'
      ? 'text-offwhite decoration-gold-light hover:text-gold-light'
      : 'text-black decoration-gold hover:text-gold';
  return (
    <SmartLink
      {...props}
      className={`self-start inline-block text-base underline decoration-1 underline-offset-[7px] hover:decoration-2 transition-colors ${color} ${className}`}
    >
      {children}
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
  const pad = size === 'lg' ? 'px-9 py-4' : 'px-7 py-3';
  return (
    <SmartLink
      {...props}
      className={`inline-flex items-center justify-center gap-2 text-base no-underline press ${pad} ${variants[variant]} ${className}`}
    >
      {children}
    </SmartLink>
  );
}

