import type { CSSProperties } from 'react';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import Marquee from '../ui/Marquee';
import Pill from '../ui/Pill';
import { profile } from '../../data/profile';

/** Every tool in the CV, flattened and de-duplicated, for the ticker. */
const allTools = Array.from(new Set(profile.skills.flatMap((group) => group.items)));

export default function Skills() {
  return (
    <Section
      id="stack"
      index="04"
      eyebrow="Stack"
      title="What I build with."
      lede="Grouped exactly as the CV groups them — backend first, because that is where most of the work happens."
    >
      <div className="grid gap-x-12 gap-y-11 sm:grid-cols-2">
        {profile.skills.map((group, i) => (
          <Reveal key={group.group} step={i}>
            <div className="row border-t border-line/10 pt-6">
              <h3 className="mb-5 flex items-baseline gap-2.5 font-mono text-eyebrow uppercase text-ink">
                {group.group}
                <span className="text-faint">{String(group.items.length).padStart(2, '0')}</span>
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item, itemIndex) => (
                  <li key={item} style={{ '--i': itemIndex % 8 } as CSSProperties}>
                    <Pill interactive>{item}</Pill>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Endless ticker of the full toolset — pauses on hover */}
      <Reveal step={2}>
        <div className="mt-16 border-y border-line/10 py-5">
          <Marquee items={allTools} duration={55} />
        </div>
      </Reveal>
    </Section>
  );
}
