import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Stagger index — each step delays the reveal by 70ms. */
  step?: number;
  className?: string;
  as?: 'div' | 'li' | 'section';
};

/**
 * Scroll-triggered fade + rise, the motion signature of both reference sites.
 * Honours `prefers-reduced-motion` by rendering the content statically.
 */
export default function Reveal({ children, step = 0, className, as = 'div' }: RevealProps) {
  const reduced = useReducedMotion();
  const Tag = motion[as];

  if (reduced) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px -8% 0px' }}
      transition={{
        duration: 0.7,
        delay: step * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Tag>
  );
}
