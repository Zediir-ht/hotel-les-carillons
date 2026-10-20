import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../../lib/motion';

const transitions = {
  up: { hidden: 'opacity-0 translate-y-10', shown: 'opacity-100 translate-y-0' },
  left: { hidden: 'opacity-0 translate-x-10', shown: 'opacity-100 translate-x-0' },
  right: { hidden: 'opacity-0 -translate-x-10', shown: 'opacity-100 translate-x-0' },
  fade: { hidden: 'opacity-0 scale-95', shown: 'opacity-100 scale-100' },
};

/**
 * Fait apparaître son contenu quand il entre dans l'écran.
 *   from  : 'up' | 'left' | 'right' | 'fade'
 *   delay : délai en ms
 * Sans animation si le visiteur a activé « réduire les animations ».
 */
export default function Reveal({ children, className = '', delay = 0, from = 'up', as: Tag = 'div' }) {
  const ref = useRef(null);
  // Visible d'emblée si le visiteur a demandé moins d'animations (ou navigateur très ancien)
  const [visible, setVisible] = useState(
    () => typeof window !== 'undefined' && (prefersReducedMotion() || !('IntersectionObserver' in window)),
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [visible]);

  const tr = transitions[from] || transitions.up;

  return (
    <Tag
      ref={ref}
      data-reveal
      className={`transition-all duration-700 ease-out ${visible ? tr.shown : tr.hidden} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
