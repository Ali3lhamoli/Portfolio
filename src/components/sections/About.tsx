import { GraduationCap, Languages, MapPin } from 'lucide-react';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import Highlight from '../ui/Highlight';
import SpotlightPortrait from '../ui/SpotlightPortrait';
import { profile } from '../../data/profile';

/**
 * About. Portrait on the left with the narrative beside it, following the
 * reference portfolio's layout, and the education/languages metadata moved
 * to a rail underneath so the copy keeps a readable measure.
 */
export default function About() {
  const { summary, summaryHighlights, education, languages, location } = profile;

  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title="A product-ownership mindset across the complete software lifecycle."
    >
      <div className="grid gap-12 lg:grid-cols-[18rem_1fr] lg:gap-14">
        {/* Portrait — greyscale, with colour revealed under the pointer */}
        <Reveal>
          <SpotlightPortrait
            bw="/img/about-bw.webp"
            color="/img/about-color.webp"
            width={640}
            height={800}
            sizes="(min-width: 1024px) 18rem, (min-width: 640px) 22rem, 100vw"
            alt="Ali Al-Hamoli standing on a wooden jetty by a river, framed by banana palms."
            className="mx-auto w-full max-w-[22rem] lg:max-w-none"
          />
        </Reveal>

        {/* Narrative */}
        <div className="space-y-6">
          {summary.map((paragraph, i) => (
            <Reveal key={i} step={i + 1}>
              <p className="max-w-prose text-base leading-[1.75] text-muted sm:text-[1.0625rem]">
                <Highlight text={paragraph} phrases={summaryHighlights} />
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Metadata rail */}
      <Reveal step={2}>
        <dl className="mt-14 grid gap-x-10 gap-y-8 border-t border-line/10 pt-10 sm:grid-cols-3">
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
    </Section>
  );
}
