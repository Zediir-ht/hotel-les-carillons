import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../../lib/motion';

/**
 * Apparition douce (fondu + léger glissement) quand le bloc entre à l'écran.
 * À réserver à quelques moments forts : les sections ordinaires s'affichent sans animation.
 *   delay : délai en ms (pour décaler des cartes)
 * Sans animation si le visiteur a activé « réduire les animations ».
 */
export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null);
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
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [visible]);

  return (
    <Tag
      ref={ref}
      data-reveal
      className={`transition-[opacity,transform] duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
