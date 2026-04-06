import { useEffect, useRef, useState } from 'react';

const transitions = {
  up:    { hidden: 'opacity-0 translate-y-10',   shown: 'opacity-100 translate-y-0' },
  down:  { hidden: 'opacity-0 -translate-y-10',  shown: 'opacity-100 translate-y-0' },
  left:  { hidden: 'opacity-0 translate-x-10',   shown: 'opacity-100 translate-x-0' },
  right: { hidden: 'opacity-0 -translate-x-10',  shown: 'opacity-100 translate-x-0' },
  fade:  { hidden: 'opacity-0 scale-95',          shown: 'opacity-100 scale-100' },
};

/**
 * Reveals children when they scroll into view.
 * Props:
 *   from    – 'up' | 'down' | 'left' | 'right' | 'fade'  (default 'up')
 *   delay   – ms delay after becoming visible               (default 0)
 *   as      – HTML tag to render                            (default 'div')
 *   className – extra classes forwarded to the wrapper
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  from = 'up',
  as: Tag = 'div',
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const t = transitions[from] || transitions.up;

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? t.shown : t.hidden} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
