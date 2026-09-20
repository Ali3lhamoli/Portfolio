import type { ReactNode } from 'react';

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Renders `text` with any of `phrases` wrapped in a highlighter mark —
 * the annotated-prose treatment from the bahaa-atia reference.
 *
 * The source text is never rewritten; phrases are only matched and wrapped,
 * so the CV wording stays intact.
 */
export default function Highlight({ text, phrases }: { text: string; phrases: readonly string[] }) {
  const present = phrases.filter((phrase) => text.includes(phrase));
  if (present.length === 0) return <>{text}</>;

  const pattern = new RegExp(`(${present.map(escapeRegExp).join('|')})`, 'g');
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) =>
        present.includes(part) ? (
          <mark key={`${part}-${i}`} className="marker-fill bg-transparent">
            {part}
          </mark>
        ) : (
          (part as ReactNode)
        ),
      )}
    </>
  );
}
