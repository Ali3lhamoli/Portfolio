/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        raised: 'rgb(var(--c-raised) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        faint: 'rgb(var(--c-faint) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        marker: 'rgb(var(--c-marker) / <alpha-value>)',
        ember: 'rgb(var(--c-ember) / <alpha-value>)',
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Fluid scale — the hero can never overflow a small viewport
        eyebrow: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.14em' }],
        label: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.1em' }],
        hero: ['clamp(2.5rem, 8.5vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        section: ['clamp(1.75rem, 4vw, 2.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        index: ['clamp(1.6rem, 4.5vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
      },
      maxWidth: {
        shell: '80rem',
        prose: '38rem',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
