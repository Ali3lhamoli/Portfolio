import type { ReactNode } from 'react';

/**
 * Outlined mono chip used for tech tags and metadata
 * (the metadata-in-monospace idea borrowed from the bahaa-atia reference).
 */
export default function Pill({
  children,
  tone = 'default',
}: {
  children: ReactNode;
  tone?: 'default' | 'accent' | 'ember';
}) {
  const tones = {
    default: 'border-line/20 text-muted',
    accent: 'border-accent/40 text-accent',
    ember: 'border-ember/40 text-ember',
  } as const;

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.1em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
