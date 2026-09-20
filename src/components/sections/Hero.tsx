import type { CSSProperties } from 'react';
import { ArrowUpRight, Download, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import WordRoller from '../ui/WordRoller';
import Chars from '../ui/Chars';
import { profile } from '../../data/profile';

const icons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  whatsapp: MessageCircle,
} as const;

/** Stagger helper — drives the CSS `.rise` animation delay. */
const delay = (step: number) => ({ '--rise-delay': `${step * 80}ms` }) as CSSProperties;

/**
 * Hero. The entrance is pure CSS (see `.rise` in index.css) rather than a
 * JavaScript animation library: this is the LCP content, so it must render and
 * animate without waiting on anything.
 *
 * Structure follows the reference portfolio — bracketed monospace eyebrow, an
 * oversized variable-font headline whose middle word rolls, and a highlighter
 * stroke that draws itself under the closing phrase.
 */
export default function Hero() {
  const { headline, eyebrow, tagline, contact, socials } = profile;

  const spokenHeadline = `${headline.lead} ${headline.roll[0]} ${headline.marker}`;

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="dot-grid relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pt-40"
    >
      <div className="mx-auto grid w-full max-w-shell items-center gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        {/* ------------------------------------------------------ copy */}
        <div>
          <p
            style={delay(0)}
            className="rise mb-7 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-eyebrow uppercase text-muted"
          >
            <span aria-hidden="true" className="text-faint">
              [
            </span>
            {/* The separator trails its own item so a wrap never starts a
                line with a lone middot. */}
            {eyebrow.map((part, i) => (
              <span key={part} className="flex items-center gap-2">
                {part}
                {i < eyebrow.length - 1 && (
                  <span aria-hidden="true" className="text-faint">
                    ·
                  </span>
                )}
              </span>
            ))}
            <span aria-hidden="true" className="text-faint">
              ]
            </span>
          </p>

          {/*
            One clean accessible name on the heading; everything inside is
            decorative (split characters, a rolling word stack) and hidden.
          */}
          <h1
            id="hero-heading"
            aria-label={spokenHeadline}
            className="vf font-display text-hero font-semibold text-ink"
          >
            <span aria-hidden="true">
              <span style={delay(1)} className="rise block">
                <Chars text={headline.lead} />
              </span>

              <span style={delay(2)} className="rise block">
                <WordRoller words={headline.roll} className="text-accent" />
              </span>

              <span style={delay(3)} className="rise block">
                <span className="hl hl-auto" style={{ '--hl-delay': '620ms' } as CSSProperties}>
                  <Chars text={headline.marker} />
                </span>
              </span>
            </span>
          </h1>

          <p
            style={delay(5)}
            className="rise mt-8 max-w-prose text-base leading-relaxed text-muted sm:text-lg"
          >
            {tagline}
          </p>

          {/* CTAs */}
          <div style={delay(6)} className="rise mt-10 flex flex-wrap items-center gap-3">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-mono text-label uppercase text-bg transition-opacity duration-200 hover:opacity-90"
            >
              <MessageCircle size={15} aria-hidden="true" />
              Start a conversation
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-line/25 px-5 py-3 font-mono text-label uppercase text-ink transition-colors duration-200 hover:border-line/50 hover:bg-raised"
            >
              <Mail size={15} aria-hidden="true" />
              Email
            </a>
            <a
              href={contact.cv}
              download
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 font-mono text-label uppercase text-muted transition-colors duration-200 hover:text-ink"
            >
              <Download size={15} aria-hidden="true" />
              Résumé
            </a>
          </div>

          {/* Socials */}
          <ul
            style={delay(7)}
            className="rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line/10 pt-7"
          >
            {socials.map((social) => {
              const Icon = icons[social.icon];
              const external = social.href.startsWith('http');
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="group inline-flex items-center gap-2 font-mono text-eyebrow uppercase text-muted transition-colors duration-200 hover:text-ink"
                  >
                    <Icon size={14} aria-hidden="true" />
                    {social.label}
                    <ArrowUpRight
                      size={12}
                      aria-hidden="true"
                      className="opacity-0 transition-opacity duration-200 group-hover:opacity-60"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* -------------------------------------------------- portrait */}
        {/*
          Held to a fixed width and centred in its column. The frame stays dark
          in both themes because the photograph is a low-key shot that only
          reads against black, and the crop is composed on the measured face
          position (see scripts/optimize-images.mjs) rather than on the frame.
        */}
        <div
          style={delay(4)}
          className="rise-in mx-auto w-full max-w-[17.5rem] sm:max-w-[19rem]"
        >
          <figure className="rounded-2xl border border-line/15 bg-[#0e0e0e] p-3">
            <img
              src="/img/portrait.webp"
              srcSet="/img/portrait.webp 560w, /img/portrait@2x.webp 1120w"
              sizes="(min-width: 640px) 19rem, 17.5rem"
              width={560}
              height={700}
              // React 18 does not map the camelCase prop, so pass the real
              // HTML attribute name through instead.
              {...({ fetchpriority: 'high' } as Record<string, string>)}
              decoding="async"
              alt="Ali Al-Hamoli, photographed in low-key black and white against a dark background."
              className="w-full rounded-xl"
            />
            <figcaption className="flex items-center justify-between gap-2 px-1 pb-0.5 pt-3 font-mono text-eyebrow uppercase text-[#8c8c88]">
              <span>{profile.location}</span>
              <span className="flex items-center gap-1.5 text-[#2dd4bf]">
                <span
                  className="sig-pulse h-1.5 w-1.5 rounded-full bg-[#2dd4bf]"
                  aria-hidden="true"
                />
                {profile.experience[0].company}
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
