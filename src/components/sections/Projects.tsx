import { useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github, Plus } from 'lucide-react';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import Pill from '../ui/Pill';
import { profile } from '../../data/profile';

/**
 * Selected work as an expandable editorial index rather than a card grid —
 * the strongest structural idea from the bahaa-atia reference. Each row
 * expands to reveal the detail, tech tags and the metrics the CV states.
 */
export default function Projects() {
  const [open, setOpen] = useState<string | null>(null);
  const reduced = useReducedMotion();

  return (
    <Section
      id="work"
      index="03"
      eyebrow="Selected work"
      title="Platforms in production."
      lede="Four projects from the CV. Expand a row for the detail, the stack and the numbers."
    >
      <ul className="border-b border-line/10">
        {profile.projects.map((project, i) => {
          const isOpen = open === project.slug;
          const panelId = `panel-${project.slug}`;
          const primaryLink = project.links[0];

          return (
            <Reveal as="li" key={project.slug} step={i} className="border-t border-line/10">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : project.slug)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="group grid w-full grid-cols-[2.75rem_1fr_1.75rem] items-start gap-x-4 gap-y-2 py-7 text-left sm:grid-cols-[4rem_1fr_15rem_1.75rem] sm:gap-x-6 sm:py-8"
                >
                  <span className="pt-2 font-mono text-eyebrow uppercase text-faint sm:pt-3">
                    {project.year}
                  </span>

                  <span
                    className={`font-display text-index font-semibold transition-colors duration-300 ${
                      isOpen ? 'text-accent' : 'text-ink group-hover:text-accent'
                    }`}
                  >
                    {project.name}
                  </span>

                  <span className="col-span-2 font-mono text-eyebrow uppercase leading-relaxed text-muted sm:col-span-1 sm:pt-3 sm:text-right">
                    {project.summary}
                    {primaryLink && (
                      <span className="mt-1.5 block text-faint">
                        {new URL(primaryLink.href).host}
                      </span>
                    )}
                  </span>

                  <span
                    aria-hidden="true"
                    className="row-start-1 col-start-3 mt-1.5 flex h-7 w-7 items-center justify-center justify-self-end rounded-full border border-line/20 text-muted transition-colors duration-300 group-hover:border-line/40 group-hover:text-ink sm:col-start-4 sm:mt-2"
                  >
                    <Plus
                      size={13}
                      className={`transition-transform duration-300 ease-editorial ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    />
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <m.div
                    id={panelId}
                    initial={reduced ? undefined : { height: 0, opacity: 0 }}
                    animate={reduced ? undefined : { height: 'auto', opacity: 1 }}
                    exit={reduced ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-8 pb-10 sm:grid-cols-[4rem_1fr] sm:gap-x-6">
                      <div aria-hidden="true" className="hidden sm:block" />

                      <div className="max-w-3xl space-y-7">
                        <ul className="space-y-3">
                          {project.bullets.map((bullet, bi) => (
                            <li key={bi} className="flex gap-3">
                              <span
                                aria-hidden="true"
                                className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-line/40"
                              />
                              <p className="text-sm leading-[1.7] text-muted">{bullet}</p>
                            </li>
                          ))}
                        </ul>

                        <ul className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <li key={tech}>
                              <Pill>{tech}</Pill>
                            </li>
                          ))}
                        </ul>

                        {project.metrics.length > 0 && (
                          <dl className="flex flex-wrap gap-x-12 gap-y-6 border-t border-line/10 pt-6">
                            {project.metrics.map((metric) => (
                              <div key={metric.label}>
                                <dd className="font-display text-2xl font-semibold text-ink">
                                  {metric.value}
                                </dd>
                                <dt className="mt-1 font-mono text-eyebrow uppercase text-faint">
                                  {metric.label}
                                </dt>
                              </div>
                            ))}
                          </dl>
                        )}

                        {project.links.length > 0 && (
                          <ul className="flex flex-wrap gap-x-6 gap-y-3">
                            {project.links.map((link) => (
                              <li key={link.href}>
                                <a
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 font-mono text-eyebrow uppercase text-accent transition-opacity duration-200 hover:opacity-75"
                                >
                                  {link.label}
                                  <span className="sr-only"> — {project.name}, opens in a new tab</span>
                                  <ArrowUpRight size={12} aria-hidden="true" />
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </Reveal>
          );
        })}
      </ul>

      {/* Everything else lives on GitHub, as the CV notes */}
      <Reveal step={1}>
        <a
          href="https://github.com/Ali3lhamoli"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-12 inline-flex items-center gap-2.5 rounded-full border border-line/25 px-5 py-3 font-mono text-label uppercase text-ink transition-colors duration-200 hover:border-line/50 hover:bg-raised"
        >
          <Github size={15} aria-hidden="true" />
          More projects on GitHub
          <ArrowUpRight
            size={13}
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </Reveal>
    </Section>
  );
}
