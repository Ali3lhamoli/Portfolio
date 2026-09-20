import { LazyMotion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeProvider';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import BackToTop from './components/layout/BackToTop';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

/**
 * Animation features are loaded lazily and every component uses the light `m`
 * component rather than `motion`, which keeps framer-motion out of the
 * critical path. `strict` makes using `motion` a build-time mistake.
 */
const loadMotionFeatures = () => import('./lib/motion-features').then((mod) => mod.default);

export default function App() {
  return (
    <ThemeProvider>
      <LazyMotion features={loadMotionFeatures} strict>
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
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </LazyMotion>
    </ThemeProvider>
  );
}
