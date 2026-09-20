import type { ReactNode } from 'react';

/**
 * Outlined monospace chip used for tech tags and metadata — the
 * metadata-in-monospace treatment from the reference portfolio.
 */
export default function Pill({
  children,
  tone = 'default',
  interactive = false,
}: {
  children: ReactNode;
  tone?: 'default' | 'accent' | 'ember';
  interactive?: boolean;
}) {
  const tones = {
    default: 'border-line/20 text-muted',
    accent: 'border-accent/40 text-accent',
    ember: 'border-ember/40 text-ember',
  } as const;

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.1em] ${
        tones[tone]
      } ${
        interactive
          ? 'transition-colors duration-200 hover:border-accent/40 hover:text-accent'
          : ''
      }`.trim()}
    >
      {children}
    </span>
  );
}
