import { GraduationCap, Languages, MapPin } from 'lucide-react';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import Highlight from '../ui/Highlight';
import { profile } from '../../data/profile';

export default function About() {
  const { summary, summaryHighlights, education, languages, location } = profile;

  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title="A product-ownership mindset across the complete software lifecycle."
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
        {/* Narrative */}
        <div className="space-y-6">
          {summary.map((paragraph, i) => (
            <Reveal key={i} step={i}>
              <p className="max-w-prose text-base leading-[1.75] text-muted sm:text-[1.0625rem]">
                <Highlight text={paragraph} phrases={summaryHighlights} />
              </p>
            </Reveal>
          ))}
        </div>

        {/* Metadata rail */}
        <Reveal step={1}>
          <dl className="space-y-7 border-t border-line/10 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div>
              <dt className="mb-2 flex items-center gap-2 font-mono text-eyebrow uppercase text-faint">
                <MapPin size={12} aria-hidden="true" />
                Based in
              </dt>
              <dd className="text-sm text-ink">{location}</dd>
            </div>

            <div>
              <dt className="mb-2 flex items-center gap-2 font-mono text-eyebrow uppercase text-faint">
                <GraduationCap size={12} aria-hidden="true" />
                Education
              </dt>
              <dd className="text-sm leading-relaxed text-ink">
                {education.degree}
                <span className="mt-1.5 block text-sm text-muted">{education.institution}</span>
                <span className="mt-1.5 block font-mono text-eyebrow uppercase text-faint">
                  {education.start} — {education.end} · {education.note}
                </span>
              </dd>
            </div>

            <div>
              <dt className="mb-2 flex items-center gap-2 font-mono text-eyebrow uppercase text-faint">
                <Languages size={12} aria-hidden="true" />
                Languages
              </dt>
              <dd className="space-y-1.5">
                {languages.map((lang) => (
                  <span key={lang.language} className="block text-sm text-ink">
                    {lang.language}
                    <span className="text-muted"> — {lang.level}</span>
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
