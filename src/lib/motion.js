/** true si le visiteur a demandé à réduire les animations (réglage système). */
export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}
