import type { CSSProperties } from 'react';

/**
 * Endless horizontal ticker, as the reference portfolio runs across its stack
 * section (40s linear, infinite). The list is rendered twice so translating
 * the track by exactly -50% lands on the seam and loops invisibly.
 *
 * Pauses on hover and on keyboard focus within, and stops entirely under
 * prefers-reduced-motion (handled in index.css). The duplicate pass is hidden
 * from assistive technology so the items are only announced once.
 */
export default function Marquee({
  items,
  duration = 40,
  className = '',
}: {
  items: readonly string[];
  duration?: number;
  className?: string;
}) {
  const pass = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center whitespace-nowrap">
          <span className="font-mono text-label uppercase text-muted">{item}</span>
          <span aria-hidden="true" className="px-5 text-faint">
            ·
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`marq ${className}`.trim()}>
      <div className="track" style={{ animationDuration: `${duration}s` } as CSSProperties}>
        {pass(false)}
        {pass(true)}
      </div>
    </div>
  );
}
