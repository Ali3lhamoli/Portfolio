import { useEffect, useRef } from 'react';

/**
 * Custom cursor: a small dot that tracks the pointer exactly, plus a ring
 * that springs open over anything interactive. Taken from the reference
 * portfolio, which pairs a 6px dot with a 32px ring.
 *
 * Position is written straight to the transform inside a rAF loop rather than
 * through React state — one commit per frame would be wasteful and janky.
 * index.css hides this entirely for touch pointers and reduced-motion users,
 * so the native cursor is never replaced for anyone who needs it.
 */
const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, summary, label';

export default function Cursor() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const canHover = window.matchMedia('(hover: hover)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || prefersReduced) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let frame = 0;
    let seen = false;

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!seen) {
        seen = true;
        x = targetX;
        y = targetY;
        el.classList.add('is-active');
      }

      const hot = (event.target as HTMLElement | null)?.closest?.(INTERACTIVE);
      el.classList.toggle('is-hot', Boolean(hot));
    };

    const onLeave = () => el.classList.remove('is-active');
    const onEnter = () => seen && el.classList.add('is-active');

    const loop = () => {
      // The dot eases toward the pointer just enough to feel weighted.
      x += (targetX - x) * 0.22;
      y += (targetY - y) * 0.22;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    document.addEventListener('pointerenter', onEnter);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('pointerenter', onEnter);
    };
  }, []);

  return (
    <div ref={root} className="cur" aria-hidden="true">
      <span className="cur-ring" />
      <span className="cur-dot" />
    </div>
  );
}
