import { profile } from '../../data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex w-full max-w-shell flex-col gap-4 font-mono text-eyebrow uppercase text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>{profile.location}</span>
          <span aria-hidden="true">·</span>
          <span>Built with React, Vite &amp; Tailwind</span>
        </p>
        <a href="#home" className="transition-colors duration-200 hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
