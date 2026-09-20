import { useEffect, useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../../contexts/theme';
import { profile } from '../../data/profile';

/**
 * Floating capsule navigation — the compact pill placement comes from the
 * ahmeddoban reference, the monospace uppercase labels and the sliding
 * marker underline from bahaa-atia.
 */
export default function Nav() {
  const [active, setActive] = useState<string>('home');
  const [open, setOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const reduced = useReducedMotion();

  // Scroll spy. IntersectionObserver rather than a scroll listener so we are
  // not doing layout reads on every frame.
  useEffect(() => {
    const ids = ['home', ...profile.nav.map((n) => n.id)];
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Escape closes the mobile sheet.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Primary"
        className="w-full max-w-3xl rounded-3xl border border-line/15 bg-surface/80 shadow-lg shadow-black/5 backdrop-blur-xl sm:rounded-full"
      >
        <div className="flex items-center gap-2 px-3 py-2">
          {/* Wordmark + availability dot */}
          <a
            href="#home"
            className="flex shrink-0 items-center gap-2 rounded-full px-2 py-1 font-mono text-eyebrow uppercase text-ink"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              {!reduced && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
            </span>
            <span className="hidden sm:inline">Ali Al-Hamoli</span>
            <span className="sm:hidden">Ali</span>
            <span className="sr-only">— back to top</span>
          </a>

          {/* Desktop links */}
          <ul className="mx-auto hidden items-center gap-1 md:flex">
            {profile.nav.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative block rounded-full px-3 py-1.5 font-mono text-eyebrow uppercase transition-colors duration-200 hover:text-ink ${
                      isActive ? 'text-ink' : 'text-muted'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <m.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-marker"
                        transition={
                          reduced
                            ? { duration: 0 }
                            : { type: 'spring', stiffness: 420, damping: 34 }
                        }
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="ml-auto flex items-center gap-1.5 md:ml-0">
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
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="rounded-full p-2 text-muted transition-colors duration-200 hover:bg-raised hover:text-ink md:hidden"
            >
              {open ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile sheet */}
        <AnimatePresence initial={false}>
          {open && (
            <m.div
              id="mobile-nav"
              initial={reduced ? undefined : { height: 0, opacity: 0 }}
              animate={reduced ? undefined : { height: 'auto', opacity: 1 }}
              exit={reduced ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden md:hidden"
            >
              <ul className="border-t border-line/10 px-3 py-3">
                {profile.nav.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
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
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl bg-ink px-3 py-2.5 font-mono text-label uppercase text-bg"
                  >
                    <Download size={14} aria-hidden="true" />
                    Download CV
                  </a>
                </li>
              </ul>
            </m.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
