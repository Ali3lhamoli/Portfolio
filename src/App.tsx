import { ThemeProvider } from './contexts/ThemeProvider';
import { useTheme } from './contexts/theme';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useActiveSection } from './hooks/useActiveSection';
import { useSectionWash } from './hooks/useSectionWash';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import BackToTop from './components/layout/BackToTop';
import Cursor from './components/ui/Cursor';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import { profile } from './data/profile';

const SECTION_IDS = profile.nav.map((item) => item.id);

/**
 * Lives inside ThemeProvider so the section wash can pick the right palette.
 * The active section is resolved once here and shared, rather than each
 * consumer running its own observer.
 */
function Shell() {
  const { isDark } = useTheme();
  const active = useActiveSection(SECTION_IDS);

  useSmoothScroll();
  useSectionWash(active, isDark);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-label focus:uppercase focus:text-bg"
      >
        Skip to content
      </a>

      <Nav active={active} />

      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <Cursor />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Shell />
    </ThemeProvider>
  );
}
