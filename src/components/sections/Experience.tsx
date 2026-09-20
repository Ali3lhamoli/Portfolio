import { useRef } from 'react';
import { m, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import { profile } from '../../data/profile';

/**
 * Experience timeline. The spine that fills as you scroll past each role is
 * the strongest motion idea from the ahmeddoban reference, rebuilt on
 * framer-motion's useScroll rather than GSAP + ScrollTrigger. The monospace
 * date rail and hairline rules come from bahaa-atia.
 *
 * Unlike the reference, roles stack in a single column with a left rail
 * instead of alternating sides — alternating collapses badly on narrow
 * viewports.
 */
export default function Experience() {
  const trackRef = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 70%', 'end 60%'],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

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
          className="absolute left-[5px] top-2 bottom-2 w-px bg-line/15 sm:left-[7px]"
        >
          <m.div
            className="h-full w-full origin-top bg-accent"
            style={reduced ? { scaleY: 1 } : { scaleY: progress }}
          />
        </div>

        {profile.experience.map((role, i) => (
          <Reveal as="li" key={role.company} step={i} className="relative pl-8 sm:pl-12">
            {/* Node */}
            <span
              aria-hidden="true"
              className={`absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 sm:h-[15px] sm:w-[15px] ${
                role.current
                  ? 'border-ember bg-ember'
                  : 'border-line/30 bg-bg'
              }`}
            />

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
              <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                {role.company}
              </h3>
              {role.current && (
                <span className="rounded-full border border-ember/40 px-2.5 py-0.5 font-mono text-eyebrow uppercase text-ember">
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
              {role.bullets.map((bullet, bi) => (
                <li key={bi} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-line/40"
                  />
                  <p className="max-w-prose text-sm leading-[1.7] text-muted sm:text-[0.9375rem]">
                    {bullet.lead && (
                      <span className="font-medium text-ink">{bullet.lead}: </span>
                    )}
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
