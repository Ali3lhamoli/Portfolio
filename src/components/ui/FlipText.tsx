import type { CSSProperties } from 'react';

/**
 * Drops each character into place on its own delay, replaying whenever the
 * text changes — the per-character flip the reference portfolio uses on its
 * dock label. Keys include the text so React remounts the spans and the CSS
 * animation runs again.
 *
 * The characters are decorative duplicates, so they are hidden from assistive
 * technology and the real string is exposed once via aria-label.
 */
export default function FlipText({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={`flip ${className}`.trim()} aria-label={text} role="text">
      {Array.from(text).map((char, i) => (
        <span
          key={`${text}-${i}`}
          aria-hidden="true"
          className="ch"
          style={{ '--i': i } as CSSProperties}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
