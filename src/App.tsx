import { ThemeProvider } from './contexts/ThemeContext';
import Nav from './components/layout/Nav';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';

export default function App() {
  return (
    <ThemeProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-label focus:uppercase focus:text-bg"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <Stats />
      </main>
    </ThemeProvider>
  );
}
