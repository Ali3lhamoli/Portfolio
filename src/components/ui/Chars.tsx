/**
 * Splits text into per-character spans so each glyph can respond on its own —
 * used for the variable-font weight/width hover on the display headline.
 *
 * Purely visual. Callers keep the readable string on an ancestor's aria-label
 * and hide this output, so assistive technology never reads it letter by
 * letter.
 */
export default function Chars({ text }: { text: string }) {
  return (
    <>
      {Array.from(text).map((char, i) => (
        <span key={i} className="hc">
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </>
  );
}
