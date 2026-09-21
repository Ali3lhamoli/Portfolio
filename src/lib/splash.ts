/** Panel is gone by 2.15s: content out at 1.5s, curtain lifts 1.6s–2.15s. */
export const SPLASH_MS = 2150;

/**
 * Whether to play the splash. Resolved once before React renders, so
 * main.tsx can put the `is-splashing` class on <html> ahead of first paint —
 * the hero's entrance is offset off that class, and deciding later would let
 * the entrance start behind the panel.
 *
 * Plays on every load, including reloads. Reduced-motion visitors skip it;
 * it is decorative, and the page underneath renders either way.
 */
export function shouldShowSplash(): boolean {
  if (typeof window === 'undefined') return false;
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
