import { useEffect, useState } from 'react';

/**
 * Scroll spy shared by the navigation dock and the section wash.
 *
 * IntersectionObserver rather than a scroll listener, so nothing reads layout
 * on every frame while Lenis is animating the scroll position.
 */
export function useActiveSection(ids: readonly string[], fallback = ids[0]) {
  const [active, setActive] = useState<string>(fallback);
  const key = ids.join(',');

  useEffect(() => {
    const targets = key
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best) setActive(best.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
