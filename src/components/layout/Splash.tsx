import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { SPLASH_MS } from '../../lib/splash';
import { profile } from '../../data/profile';

/**
 * First-load splash. The name reveals character by character in the display
 * face while its variable axes settle, the highlighter stroke draws beneath
 * it, and a teal bar tracks the two seconds before the panel lifts away.
 *
 * Built from the site's own vocabulary rather than the handwriting-signature
 * idea in the ahmeddoban reference — and at two seconds rather than the ~35
 * that reference takes to finish writing its name.
 *
 * Entirely CSS-driven (see section 9 of index.css) with `both` fill on every
 * animation, so it reaches its hidden state without waiting on a timer; the
 * unmount below is cleanup, not the mechanism. Marked aria-hidden because it
 * only repeats content the page already announces.
 */
export default function Splash() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setDone(true), SPLASH_MS);
    return () => window.clearTimeout(id);
  }, []);

  if (done) return null;

  return (
    <div className="splash" aria-hidden="true">
      <div className="splash-inner">
        <p className="sp-eyebrow flex items-center gap-2 font-mono text-eyebrow uppercase text-faint">
          <span>[</span>
          <span className="sig-pulse h-1.5 w-1.5 rounded-full bg-ember" />
          <span className="text-muted">{profile.location}</span>
          <span>]</span>
        </p>

        <p className="vf font-display text-[clamp(2rem,8vw,4.5rem)] font-semibold leading-none tracking-[-0.03em] text-ink">
          <span className="hl hl-auto" style={{ '--hl-delay': '900ms' } as CSSProperties}>
            {Array.from(profile.name).map((char, i) => (
              <span key={i} className="sp-ch" style={{ '--i': i } as CSSProperties}>
                {char === ' ' ? ' ' : char}
              </span>
            ))}
          </span>
        </p>

        <p className="sp-role font-mono text-label uppercase text-muted">{profile.title}</p>

        <div className="sp-bar mt-1" />
      </div>
    </div>
  );
}
