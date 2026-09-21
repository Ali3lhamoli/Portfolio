import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Stagger index — each step delays the reveal by 70ms. */
  step?: number;
  className?: string;
  as?: 'div' | 'li' | 'section';
};

/**
 * Scroll-triggered fade + rise — the shared motion signature of both
 * reference sites.
 *
 * Deliberately CSS + IntersectionObserver rather than framer-motion: this
 * wraps essentially all page content, so it must not be able to leave the
 * page blank while an animation bundle loads (or if it never does). The
 * hidden state is scoped to `html.js`, so with JavaScript unavailable the
 * content simply renders. `prefers-reduced-motion` is handled in index.css.
 */
export default function Reveal({ children, step = 0, className = '', as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    // Reveal anything already on screen straight away. IntersectionObserver
    // callbacks do not fire while a tab is in the background, so without this
    // a page opened in a background tab would sit blank until it is focused.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as 'div';

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      style={{ '--rise-delay': `${step * 70}ms` } as CSSProperties}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
