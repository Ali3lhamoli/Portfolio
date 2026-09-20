import { useEffect, useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

/** Floating return-to-top control, borrowed from the ahmeddoban reference. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const sentinel = document.getElementById('home');
    if (!sentinel) return;

    // Show the control once the hero has scrolled out of view.
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <m.a
          href="#home"
          initial={reduced ? undefined : { opacity: 0, scale: 0.8 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1 }}
          exit={reduced ? undefined : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-line/20 bg-surface/85 text-muted shadow-lg shadow-black/10 backdrop-blur-xl transition-colors duration-200 hover:text-ink"
        >
          <ArrowUp size={17} aria-hidden="true" />
          <span className="sr-only">Back to top</span>
        </m.a>
      )}
    </AnimatePresence>
  );
}
