import { ArrowUpRight, Download, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { profile } from '../../data/profile';

const icons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  whatsapp: MessageCircle,
} as const;

export default function Contact() {
  const { contact, socials } = profile;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="dot-grid border-t border-line/10 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto w-full max-w-shell">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 font-mono text-eyebrow uppercase text-muted">
            <span className="text-accent">05</span>
            <span aria-hidden="true" className="text-faint">
              /
            </span>
            <span>Contact</span>
          </p>

          <h2
            id="contact-heading"
            className="max-w-3xl font-display text-section font-semibold text-ink"
          >
            Got something that needs building?{' '}
            <span className="marker px-1">Let&rsquo;s talk.</span>
          </h2>
        </Reveal>

        <Reveal step={1}>
          {/* The email address doubles as the primary call to action */}
          <a
            href={`mailto:${contact.email}`}
            className="group mt-12 inline-flex max-w-full items-center gap-3 font-display text-[clamp(1.25rem,4.2vw,2.25rem)] font-semibold tracking-tight text-ink transition-colors duration-200 hover:text-accent"
          >
            <span className="break-all">{contact.email}</span>
            <ArrowUpRight
              size={24}
              aria-hidden="true"
              className="hidden shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 sm:block"
            />
          </a>
        </Reveal>

        <Reveal step={2}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-mono text-label uppercase text-bg transition-opacity duration-200 hover:opacity-90"
            >
              <MessageCircle size={15} aria-hidden="true" />
              WhatsApp
              <span className="sr-only"> — opens in a new tab</span>
            </a>
            <a
              href={`tel:${contact.phoneIntl}`}
              className="inline-flex items-center gap-2 rounded-full border border-line/25 px-5 py-3 font-mono text-label uppercase text-ink transition-colors duration-200 hover:border-line/50 hover:bg-raised"
            >
              {contact.phoneDisplay}
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
        </Reveal>

        <Reveal step={3}>
          <ul className="mt-14 grid gap-x-8 gap-y-6 border-t border-line/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {socials.map((social) => {
              const Icon = icons[social.icon];
              const external = social.href.startsWith('http');
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="group block"
                  >
                    <span className="mb-2 flex items-center gap-2 font-mono text-eyebrow uppercase text-faint">
                      <Icon size={12} aria-hidden="true" />
                      {social.label}
                    </span>
                    <span className="block break-all text-sm text-ink transition-colors duration-200 group-hover:text-accent">
                      {social.handle}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
