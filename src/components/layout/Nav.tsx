import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../../contexts/theme';
import FlipText from '../ui/FlipText';
import { profile } from '../../data/profile';

/**
 * Navigation dock, rebuilt to match the reference portfolio's behaviour:
 *
 *  - collapsed to `● Ali Al-Hamoli  SECTION`, with the link rail at zero width
 *  - hovering or focusing the dock springs the rail open (grid-template-columns
 *    0fr -> 1fr, so no width has to be measured) and staggers the links in
 *  - a marker-coloured indicator glides between items as the active section
 *    changes
 *  - the section label re-flips character by character on every change
 *  - the signal dot pulses
 *
 * All of it is CSS transitions; see sections 4 and 5 of index.css.
 */
export default function Nav({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [glide, setGlide] = useState({ left: 0, width: 0, shown: false });

  const { isDark, toggleTheme } = useTheme();
  const railRef = useRef<HTMLDivElement>(null);

  // Falling back to a hardcoded 'Home' previously masked a stale spy by
  // reporting the wrong section; fall back to the first nav entry instead.
  const activeLabel =
    profile.nav.find((item) => item.id === active)?.label ?? profile.nav[0].label;

  /*
    Track the active link's box. The rail animates its width open, so a single
    measurement would catch it mid-transition — a ResizeObserver re-measures on
    every frame of the expansion instead.
  */
  const measure = useCallback(() => {
    const rail = railRef.current;
    if (!rail || !open) {
      setGlide((prev) => (prev.shown ? { ...prev, shown: false } : prev));
      return;
    }

    const link = rail.querySelector<HTMLAnchorElement>(`a[data-section="${active}"]`);
    if (!link || link.offsetWidth === 0) {
      setGlide((prev) => (prev.shown ? { ...prev, shown: false } : prev));
      return;
    }

    setGlide({ left: link.offsetLeft, width: link.offsetWidth, shown: true });
  }, [active, open]);

  useLayoutEffect(measure, [measure]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || typeof ResizeObserver === 'undefined') return;

    const observer = new ResizeObserver(measure);
    observer.observe(rail);
    return () => observer.disconnect();
  }, [measure]);

  // Escape closes whichever surface is open.
  useEffect(() => {
    if (!menuOpen && !open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setMenuOpen(false);
      setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen, open]);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Primary"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
        }}
        className={`dock ${
          open ? 'is-open' : ''
        } relative w-full max-w-3xl rounded-3xl sm:max-w-none border border-line/15 bg-surface/80 px-3 py-2 shadow-lg shadow-black/5 backdrop-blur-xl sm:w-auto sm:rounded-full`}
      >
        {/* Wordmark + signal */}
        <a
          href="#home"
          className="flex shrink-0 items-center gap-2 rounded-full px-1 py-1 font-mono text-eyebrow uppercase text-ink"
        >
          <span className="sig-pulse h-2 w-2 rounded-full bg-ember" aria-hidden="true" />
          <span className="hidden sm:inline">Ali Al-Hamoli</span>
          <span className="sm:hidden">Ali</span>
          <span className="sr-only">— back to top</span>
        </a>

        {/* Collapsible link rail (desktop) */}
        <span className="dock-rail hidden lg:grid">
          <div ref={railRef}>
            <span
              className="glide"
              aria-hidden="true"
              style={{
                left: `${glide.left}px`,
                width: `${glide.width}px`,
                opacity: glide.shown ? 1 : 0,
              }}
            />
            {profile.nav.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-section={item.id}
                aria-current={active === item.id ? 'true' : undefined}
                style={{ '--i': i } as CSSProperties}
                className={`whitespace-nowrap px-3 py-1.5 font-mono text-eyebrow uppercase transition-colors duration-200 hover:text-ink ${
                  active === item.id ? 'text-ink' : 'text-muted'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </span>

        {/* Current section, re-flipping on change */}
        <span
          aria-live="polite"
          className="ml-1 hidden shrink-0 font-mono text-eyebrow uppercase text-accent lg:block"
        >
          <FlipText text={activeLabel} />
        </span>

        {/* Actions */}
        <div className="ml-auto flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="rounded-full p-2 text-muted transition-colors duration-200 hover:bg-raised hover:text-ink"
          >
            {isDark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
          </button>

          <a
            href={profile.contact.cv}
            download
            className="hidden items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 font-mono text-eyebrow uppercase text-bg transition-opacity duration-200 hover:opacity-85 sm:inline-flex"
          >
            <Download size={13} aria-hidden="true" />
            CV
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="rounded-full p-2 text-muted transition-colors duration-200 hover:bg-raised hover:text-ink lg:hidden"
          >
            {menuOpen ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile sheet — same 0fr/1fr grid trick, no height measuring */}
        <div
          id="mobile-nav"
          className={`row-body absolute inset-x-0 top-full lg:hidden ${menuOpen ? 'is-open' : ''}`}
          style={menuOpen ? { gridTemplateRows: '1fr' } : undefined}
        >
          <div>
            <ul className="mt-2 rounded-3xl border border-line/15 bg-surface/95 p-3 shadow-lg shadow-black/10 backdrop-blur-xl">
              {profile.nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active === item.id ? 'true' : undefined}
                    className={`block rounded-xl px-3 py-2.5 font-mono text-label uppercase transition-colors ${
                      active === item.id ? 'bg-raised text-ink' : 'text-muted'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 border-t border-line/10 pt-3">
                <a
                  href={profile.contact.cv}
                  download
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-ink px-3 py-2.5 font-mono text-label uppercase text-bg"
                >
                  <Download size={14} aria-hidden="true" />
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
