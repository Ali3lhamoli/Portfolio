import { GraduationCap, Languages, MapPin } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHead from '../ui/SectionHead';
import Highlight from '../ui/Highlight';
import SpotlightPortrait from '../ui/SpotlightPortrait';
import { profile } from '../../data/profile';

/**
 * About. Unlike the other sections this does not use the shared Section
 * shell, because the heading belongs inside the text column: heading and copy
 * on one side, portrait on the other. That gives the portrait a full half of
 * the layout — roughly 576px rather than the 288px it had in a narrow rail —
 * so it reads as a proper feature image.
 */
export default function About() {
  const { summary, summaryHighlights, education, languages, location } = profile;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-line/10 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-shell px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Heading + narrative */}
          <div>
            <Reveal>
              <SectionHead
                headingId="about-heading"
                index="01"
                eyebrow="About"
                title="A product-ownership mindset across the complete software lifecycle."
              />
            </Reveal>

            <div className="mt-8 space-y-6">
              {summary.map((paragraph, i) => (
                <Reveal key={i} step={i + 1}>
                  <p className="max-w-prose text-base leading-[1.75] text-muted sm:text-[1.0625rem]">
                    <Highlight text={paragraph} phrases={summaryHighlights} />
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Portrait — greyscale, with colour revealed under the pointer */}
          <Reveal step={1}>
            <SpotlightPortrait
              bw="/img/about-bw.webp"
              color="/img/about-color.webp"
              width={1100}
              height={1375}
              sizes="(min-width: 1024px) 36rem, (min-width: 640px) 26rem, 100vw"
              alt="Ali Al-Hamoli standing on a wooden jetty by a river, framed by banana palms."
              className="mx-auto w-full max-w-[26rem] lg:max-w-none"
            />
          </Reveal>
        </div>

        {/* Metadata rail */}
        <Reveal step={2}>
          <dl className="mt-16 grid gap-x-10 gap-y-8 border-t border-line/10 pt-10 sm:grid-cols-3">
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
    </section>
  );
}
