import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Inertial smooth scrolling.
 *
 * The reference portfolio uses native scrolling, but every one of its effects
 * is scroll-linked, and they read far better on an eased scroll position than
 * on the browser's raw wheel steps. Lenis is ~3kB and adds `.lenis` classes to
 * <html>, which index.css keys off to disable native smooth scrolling.
 *
 * Skipped entirely when the visitor asks for reduced motion, which leaves
 * ordinary native scrolling in place.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.05,
      // Exponential ease-out: quick to respond, long settle.
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let frame = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    // Anchor links must go through Lenis, or they jump past the eased position.
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;

      const anchor = (event.target as HTMLElement | null)?.closest?.('a[href^="#"]');
      if (!anchor) return;

      const id = anchor.getAttribute('href')?.slice(1);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, { offset: -88 });
    };

    document.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('click', onClick);
      lenis.destroy();
    };
  }, []);
}
