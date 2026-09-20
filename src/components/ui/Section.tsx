import type { ReactNode } from 'react';
import Reveal from './Reveal';

type SectionProps = {
  id: string;
  /** Mono index label, e.g. "01" */
  index?: string;
  /** Mono uppercase kicker above the title */
  eyebrow?: string;
  title: string;
  lede?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Shared section shell: hairline top rule, mono metadata column and a
 * display-face heading. Keeps vertical rhythm identical across the page.
 */
export default function Section({
  id,
  index,
  eyebrow,
  title,
  lede,
  children,
  className = '',
}: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`border-t border-line/10 py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-shell px-5 sm:px-8">
        <Reveal>
          <header className="mb-12 sm:mb-16">
            {(index || eyebrow) && (
              <p className="mb-5 flex items-center gap-3 font-mono text-eyebrow uppercase text-muted">
                {index && <span className="text-accent">{index}</span>}
                {index && eyebrow && <span aria-hidden="true" className="text-faint">/</span>}
                {eyebrow && <span>{eyebrow}</span>}
              </p>
            )}
            <h2
              id={headingId}
              className="max-w-3xl font-display text-section font-semibold text-ink"
            >
              {title}
            </h2>
            {lede && <p className="mt-5 max-w-prose text-base leading-relaxed text-muted">{lede}</p>}
          </header>
        </Reveal>

        {children}
      </div>
    </section>
  );
}
