import { useCallback, useRef } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';

/**
 * Greyscale portrait whose colour version is revealed through a circular
 * clip-path that follows the pointer — the About portrait treatment from the
 * reference portfolio.
 *
 * The pointer position is written straight to CSS custom properties on the
 * container rather than held in React state; the clip-path and its 1.5s
 * spring live in index.css (section 8), so moving the pointer costs no
 * re-render.
 *
 * The colour layer is decorative — it is the same photograph — so it carries
 * an empty alt and is hidden from assistive technology, leaving one
 * description on the greyscale base.
 */
export default function SpotlightPortrait({
  bw,
  color,
  alt,
  width,
  height,
  sizes,
  className = '',
}: {
  bw: string;
  color: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const track = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--px', `${event.clientX - rect.left}px`);
    el.style.setProperty('--py', `${event.clientY - rect.top}px`);
  }, []);

  return (
    <div ref={ref} onPointerMove={track} className={`por ${className}`.trim()}>
      <img
        src={bw}
        width={width}
        height={height}
        sizes={sizes}
        loading="lazy"
        decoding="async"
        alt={alt}
        className="p-bw"
      />
      <img
        src={color}
        width={width}
        height={height}
        sizes={sizes}
        loading="lazy"
        decoding="async"
        alt=""
        aria-hidden="true"
        className="p-col"
      />
    </div>
  );
}
