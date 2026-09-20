import Reveal from '../ui/Reveal';
import { profile, yearsOfExperience } from '../../data/profile';

/**
 * Metrics band closing the hero — the "proof up front" idea from the
 * ahmeddoban reference, but every figure is one the CV states outright.
 */
export default function Stats() {
  const items = [
    { value: `${yearsOfExperience()}+`, label: 'Years building production systems' },
    ...profile.stats,
  ];

  return (
    <section aria-label="Career highlights" className="border-y border-line/10 bg-surface/40">
      <dl className="mx-auto grid w-full max-w-shell grid-cols-2 gap-x-6 gap-y-9 px-5 py-12 sm:px-8 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.label} step={i}>
            <div>
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  {item.value}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-2 block font-mono text-eyebrow uppercase leading-relaxed text-muted"
                >
                  {item.label}
                </span>
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
