// ─────────────────────────────────────────────────────────────
// Ornements « Belle Époque thermale » : filets, cloche (clin d'œil aux Carillons),
// coins ornés, monogramme. Tous en SVG fin, couleur héritée (currentColor).
// ─────────────────────────────────────────────────────────────

/** Petite cloche — le motif signature du site. */
export function Bell({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2.5v1.6" />
      <path d="M6.5 16.5v-5.3a5.5 5.5 0 0 1 11 0v5.3l1.8 2.2H4.7z" />
      <path d="M10.2 20.6a1.9 1.9 0 0 0 3.6 0" />
      <path d="M9 9.5c.5-1.3 1.6-2.1 3-2.1" opacity=".6" />
    </svg>
  );
}

/**
 * Filet orné : trait — losange — cloche — losange — trait.
 * Remplace les simples traits sous les titres.
 */
export function OrnamentDivider({ className = '', width = 'w-44', align = 'center' }) {
  if (align === 'left') {
    return (
      <div className={`flex items-center gap-2 ${width} ${className}`} aria-hidden="true">
        <Bell className="w-4 h-4 shrink-0 -ml-0.5" />
        <span className="w-1.5 h-1.5 rotate-45 border border-current opacity-70" />
        <span className="h-px flex-1 bg-gradient-to-r from-current to-transparent opacity-60" />
      </div>
    );
  }
  return (
    <div className={`flex items-center justify-center gap-2 ${width} ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-current opacity-60" />
      <span className="w-1.5 h-1.5 rotate-45 border border-current opacity-70" />
      <Bell className="w-4 h-4 shrink-0" />
      <span className="w-1.5 h-1.5 rotate-45 border border-current opacity-70" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-current opacity-60" />
    </div>
  );
}

/** Coin orné (volute à double filet), à placer dans les 4 angles d'un cadre. */
function Corner({ className }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className={`absolute w-10 h-10 md:w-12 md:h-12 ${className}`} aria-hidden="true">
      <path d="M3 45V17C3 9.3 9.3 3 17 3h28" />
      <path d="M9 45V21c0-6.6 5.4-12 12-12h24" opacity=".55" />
      <path d="M17 17c3.2-3.4 8.6-2.4 9 1.4.3 3-3.6 4.4-5.2 2.1-1-1.4.2-3 1.6-2.6" />
      <circle cx="3" cy="45" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="45" cy="3" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Cadre orné : quatre coins à volutes + filet intérieur.
 * Envelopper n'importe quel bloc : <OrnateFrame className="p-10">…</OrnateFrame>
 */
export function OrnateFrame({ children, className = '', tone = 'gold', as: Tag = 'div' }) {
  const color = tone === 'light' ? 'text-gold-light/70' : 'text-gold/70';
  return (
    <Tag className={`relative ${className}`}>
      <span className={`pointer-events-none absolute inset-2.5 md:inset-3 border border-current opacity-40 ${color}`} aria-hidden="true" />
      <span className={`pointer-events-none ${color}`} aria-hidden="true">
        <Corner className="top-1 left-1" />
        <Corner className="top-1 right-1 -scale-x-100" />
        <Corner className="bottom-1 left-1 -scale-y-100" />
        <Corner className="bottom-1 right-1 -scale-100" />
      </span>
      <div className="relative">{children}</div>
    </Tag>
  );
}

/** Monogramme « LC » dans un médaillon à double cercle. */
export function Monogram({ className = 'w-24 h-24', tone = 'gold' }) {
  const color = tone === 'light' ? 'text-gold-light' : 'text-gold';
  return (
    <svg viewBox="0 0 100 100" className={`${className} ${color}`} role="img" aria-label="Les Carillons">
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth=".6" strokeDasharray="1.5 2.5" />
      <text x="50" y="58" textAnchor="middle" fill="currentColor" style={{ fontFamily: 'var(--font-logo)', fontSize: '30px', fontStyle: 'italic' }}>
        LC
      </text>
      <text x="50" y="76" textAnchor="middle" fill="currentColor" style={{ fontFamily: 'sans-serif', fontSize: '8px', letterSpacing: '2px' }}>
        ★★
      </text>
      <path d="M38 27h24" stroke="currentColor" strokeWidth=".6" />
      <circle cx="50" cy="27" r="1.4" fill="currentColor" />
    </svg>
  );
}

/**
 * Photo encadrée « fenêtre thermale » : haut en arche + cadre doré décalé.
 * Les enfants sont l'image (déjà dimensionnée en w-full h-full object-cover).
 */
export function ArchFrame({ children, className = '', offset = 'right' }) {
  const shift = offset === 'left' ? '-left-3 md:-left-4' : '-right-3 md:-right-4';
  return (
    <div className={`relative ${className}`}>
      <div className={`absolute top-3 md:top-4 ${shift} w-full h-full border border-gold/60 rounded-t-[999px]`} aria-hidden="true" />
      <div className="relative w-full h-full overflow-hidden rounded-t-[999px]">{children}</div>
    </div>
  );
}
