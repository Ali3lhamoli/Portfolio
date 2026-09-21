import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

/**
 * Cycles a word in place, rolling each letter vertically on its own delay,
 * while the container's width animates to fit the new word. This is the
 * headline device from the reference portfolio ("AI systems that stay
 * fast / cheap / boring / awake in production").
 *
 * Widths are measured from the rendered words rather than estimated, because
 * the container needs an explicit px width for the transition to interpolate —
 * CSS cannot animate to or from `auto`.
 *
 * Accessibility: the rolling stack is decorative and hidden. The accessible
 * name stays fixed at the first word so the heading reads as one stable
 * sentence instead of announcing a change every few seconds.
 */
export default function WordRoller({
  words,
  interval = 2600,
  className = '',
}: {
  words: readonly string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [previous, setPrevious] = useState(-1);
  const [widths, setWidths] = useState<number[]>([]);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  /*
    Measure the rendered words with a ResizeObserver rather than a one-shot
    read. The display face is a variable font delivered with `display=swap`,
    so the first measurement lands on fallback metrics and the real boxes
    arrive later — `document.fonts.ready` is a single promise and can resolve
    before the swap has actually been applied, which left the container 60px
    narrower than the word and clipped the last glyph. Observing the words
    catches the swap, viewport changes and zoom alike.
  */
  useEffect(() => {
    const measure = () => {
      const next = wordRefs.current.map((el) => (el ? el.getBoundingClientRect().width : 0));
      setWidths((prev) =>
        next.length === prev.length && next.every((w, i) => Math.abs(w - prev[i]) < 0.5)
          ? prev
          : next,
      );
    };

    measure();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', measure);
      return () => window.removeEventListener('resize', measure);
    }

    const observer = new ResizeObserver(measure);
    wordRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [words]);

  useEffect(() => {
    if (words.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = window.setInterval(() => {
      setIndex((current) => {
        setPrevious(current);
        return (current + 1) % words.length;
      });
    }, interval);

    return () => window.clearInterval(id);
  }, [words.length, interval]);

  const width = widths[index];

  return (
    <span
      className={`roll ${className}`.trim()}
      style={width ? { width: `${Math.ceil(width)}px` } : undefined}
    >
      {/* Reserves the line box height; never painted. */}
      <span className="ghost">{words[0]}</span>

      <span className="mask" aria-hidden="true">
        {words.map((word, wordIndex) => (
          <span
            key={word}
            ref={(el) => {
              wordRefs.current[wordIndex] = el;
            }}
            className={`rw ${
              wordIndex === index ? 'is-on' : wordIndex === previous ? 'is-out' : ''
            }`.trim()}
          >
            {Array.from(word).map((char, charIndex) => (
              <i key={charIndex} style={{ '--i': charIndex } as CSSProperties}>
                {char === ' ' ? ' ' : char}
              </i>
            ))}
          </span>
        ))}
      </span>

      <span className="sr-only">{words[0]}</span>
    </span>
  );
}
