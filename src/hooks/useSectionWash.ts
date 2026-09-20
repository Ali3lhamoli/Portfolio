import { useEffect } from 'react';

/**
 * Shifts the page's background colour as the visitor moves between sections —
 * the "canvas wash" from the reference portfolio.
 *
 * The reference declares `transition: background 1.1s` on a gradient, which
 * cannot actually interpolate; CSS has no gradient interpolation. Here the
 * wash is a solid colour (so it genuinely animates) with the .dot-grid
 * texture layered on top, and the shifts are deliberately small — a few
 * points of luminance and hue, felt rather than seen.
 */
const WASH_DARK: Record<string, string> = {
  home: '14 14 14',
  about: '17 18 20',
  experience: '14 17 17',
  work: '19 17 14',
  stack: '14 16 19',
  contact: '18 15 14',
};

const WASH_LIGHT: Record<string, string> = {
  home: '247 246 241',
  about: '242 244 240',
  experience: '239 244 243',
  work: '247 243 235',
  stack: '239 243 247',
  contact: '247 242 237',
};

export function useSectionWash(active: string, isDark: boolean) {
  useEffect(() => {
    const table = isDark ? WASH_DARK : WASH_LIGHT;
    const wash = table[active] ?? table.home;
    document.documentElement.style.setProperty('--wash', wash);
  }, [active, isDark]);
}
