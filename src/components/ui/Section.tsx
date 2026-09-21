import type { ReactNode } from 'react';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

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
 * Shared section shell: hairline top rule, the numbered heading block and a
 * consistent max width, so vertical rhythm is identical across the page.
 *
 * Sections that need the heading inside a column rather than spanning the
 * full width compose `SectionHead` directly instead (see About).
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
          <SectionHead
            headingId={headingId}
            index={index}
            eyebrow={eyebrow}
            title={title}
            lede={lede}
            className="mb-12 sm:mb-16"
          />
        </Reveal>

        {children}
      </div>
    </section>
  );
}
