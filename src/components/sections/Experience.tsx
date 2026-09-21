import { useEffect, useRef } from 'react';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import { profile } from '../../data/profile';

/**
 * Experience timeline with a spine that fills as you scroll past each role.
 *
 * Progress is written straight into a CSS custom property (`--spine`) inside a
 * rAF-throttled scroll handler, and the fill is a scaleY transform driven from
 * it. That keeps the whole effect on the compositor with no animation library
 * and no React re-render per frame.
 *
 * Unlike the reference, roles stack in a single column against a left rail
 * rather than alternating sides — alternating collapses badly on narrow
 * viewports.
 */
export default function Experience() {
  const trackRef = useRef<HTMLOListElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!track || !fill) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      fill.style.setProperty('--spine', '1');
      return;
    }

    let queued = false;

    const update = () => {
      queued = false;
      const rect = track.getBoundingClientRect();
      const start = window.innerHeight * 0.7;
      const span = rect.height + start - window.innerHeight * 0.4;
      const progress = span > 0 ? (start - rect.top) / span : 0;
      fill.style.setProperty('--spine', String(Math.min(1, Math.max(0, progress))));
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title="Three teams, from API layers to product ownership."
      lede="Currently on the messaging team at Stitch, building WhatsApp automation and AI chatbots for enterprise clients."
    >
      <ol ref={trackRef} className="relative ml-1 space-y-14 sm:space-y-16">
        {/* Spine */}
        <div
          aria-hidden="true"
          className="absolute bottom-2 left-[5px] top-2 w-px bg-line/15 sm:left-[7px]"
        >
          <div ref={fillRef} className="spine-fill h-full w-full bg-accent" />
        </div>

        {profile.experience.map((role, i) => (
          <Reveal as="li" key={role.company} step={i} className="relative pl-8 sm:pl-12">
            {/* Node */}
            <span
              aria-hidden="true"
              className={`absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 sm:h-[15px] sm:w-[15px] ${
                role.current ? 'border-ember bg-ember' : 'border-line/30 bg-bg'
              }`}
            />

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
              <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                {role.company}
              </h3>
              {role.current && (
                <span className="flex items-center gap-1.5 rounded-full border border-ember/40 px-2.5 py-0.5 font-mono text-eyebrow uppercase text-ember">
                  <span
                    className="sig-pulse h-1.5 w-1.5 rounded-full bg-ember"
                    aria-hidden="true"
                  />
                  Current
                </span>
              )}
            </div>

            <p className="mt-1.5 text-sm text-accent sm:text-base">{role.title}</p>

            <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-eyebrow uppercase text-faint">
              <span>
                {role.start} — {role.end}
              </span>
              <span aria-hidden="true">·</span>
              <span>{role.location}</span>
              <span aria-hidden="true">·</span>
              <span>{role.arrangement}</span>
            </p>

            <ul className="mt-6 space-y-4">
              {role.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-line/40"
                  />
                  <p className="max-w-prose text-sm leading-[1.7] text-muted sm:text-[0.9375rem]">
                    {bullet.lead && <span className="font-medium text-ink">{bullet.lead}: </span>}
                    {bullet.text}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
