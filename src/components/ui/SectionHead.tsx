/**
 * The numbered eyebrow + display heading used at the top of every section.
 *
 * Extracted from Section so a section can place the heading inside its own
 * column instead of spanning the full width — About needs the heading and
 * copy stacked on one side with the portrait on the other.
 */
export default function SectionHead({
  headingId,
  index,
  eyebrow,
  title,
  lede,
  className = '',
}: {
  headingId: string;
  index?: string;
  eyebrow?: string;
  title: string;
  lede?: string;
  className?: string;
}) {
  return (
    <header className={className}>
      {(index || eyebrow) && (
        <p className="mb-5 flex items-center gap-3 font-mono text-eyebrow uppercase text-muted">
          {index && <span className="text-accent">{index}</span>}
          {index && eyebrow && (
            <span aria-hidden="true" className="text-faint">
              /
            </span>
          )}
          {eyebrow && <span>{eyebrow}</span>}
        </p>
      )}

      <h2 id={headingId} className="max-w-3xl font-display text-section font-semibold text-ink">
        {title}
      </h2>

      {lede && <p className="mt-5 max-w-prose text-base leading-relaxed text-muted">{lede}</p>}
    </header>
  );
}
