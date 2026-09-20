import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import Pill from '../ui/Pill';
import { profile } from '../../data/profile';

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
            <div className="border-t border-line/10 pt-6">
              <h3 className="mb-5 flex items-baseline gap-2.5 font-mono text-eyebrow uppercase text-ink">
                {group.group}
                <span className="text-faint">{String(group.items.length).padStart(2, '0')}</span>
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Pill>{item}</Pill>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
