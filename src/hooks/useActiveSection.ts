import { useEffect, useState } from 'react';

/**
 * Scroll spy shared by the navigation dock and the section wash.
 *
 * This deliberately measures scroll position rather than using
 * IntersectionObserver. An observer over a narrow rootMargin band compares
 * `intersectionRatio`, which is relative to each target's own height — with
 * sections between 676px and 1816px tall the ratios are not comparable, a
 * tall section's ratio never crosses the later thresholds, and a callback
 * that reports only exiting entries leaves the previous value in place. In
 * practice that pinned the label to the first section and never recovered.
 *
 * Reading six rects against a fixed line is deterministic, cannot get stuck,
 * and handles both ends of the document explicitly. Scroll events are already
 * coalesced to one per frame, and six rect reads per frame is comparable to
 * the single read the timeline spine does.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0]);
  const key = ids.join(',');

  useEffect(() => {
    const list = key.split(',');

    const read = () => {
      const found = list
        .map((id) => {
          const el = document.getElementById(id);
          return el ? { id, top: el.getBoundingClientRect().top } : null;
        })
        .filter((entry): entry is { id: string; top: number } => entry !== null)
        // Sort by position so the result does not depend on the caller's order.
        .sort((a, b) => a.top - b.top);

      if (found.length === 0) return;

      // The reference line a section's top must pass to become current.
      const line = window.innerHeight * 0.35;

      /*
        At the very bottom, take the last section outright: a short final
        section can never push its own top past the line, so it would
        otherwise be unreachable.
      */
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      const passed = found.filter((entry) => entry.top <= line);

      const next = atBottom
        ? found[found.length - 1].id
        : passed.length > 0
          ? passed[passed.length - 1].id
          : found[0].id;

      setActive((prev) => (prev === next ? prev : next));
    };

    read();
    window.addEventListener('scroll', read, { passive: true });
    window.addEventListener('resize', read);

    return () => {
      window.removeEventListener('scroll', read);
      window.removeEventListener('resize', read);
    };
  }, [key]);

  return active;
}
