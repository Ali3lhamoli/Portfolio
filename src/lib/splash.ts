const STORAGE_KEY = 'splash-seen';

/** Panel is gone by 2.15s: content out at 1.5s, curtain lifts 1.6s–2.15s. */
export const SPLASH_MS = 2150;

/**
 * Decided once, before React renders, so main.tsx can put the `splash` class
 * on <html> ahead of first paint and offset the hero's entrance.
 *
 * Skipped for reduced-motion visitors, and shown only once per tab session so
 * a refresh does not replay it. If sessionStorage throws (private mode) the
 * splash simply shows.
 *
 * Lives outside the component file because it is not a component — keeping it
 * here leaves Splash.tsx fast-refreshable.
 */
export function shouldShowSplash(): boolean {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;

  try {
    if (window.sessionStorage.getItem(STORAGE_KEY)) return false;
    window.sessionStorage.setItem(STORAGE_KEY, '1');
  } catch {
    // Unavailable — fall through and show it.
  }

  return true;
}
