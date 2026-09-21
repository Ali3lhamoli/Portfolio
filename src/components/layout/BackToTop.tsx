import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Floating return-to-top control. Visibility is a CSS transition on opacity
 * and scale rather than a mount/unmount animation, so it needs no animation
 * library and stays in the DOM (and out of the tab order when hidden).
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById('home');
    if (!sentinel) return;

    // Show the control once the hero has scrolled out of view.
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      threshold: 0,
    });

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="#home"
      tabIndex={visible ? undefined : -1}
      aria-hidden={visible ? undefined : true}
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-line/20 bg-surface/85 text-muted shadow-lg shadow-black/10 backdrop-blur-xl transition-[opacity,transform,color] duration-300 ease-editorial hover:text-ink ${
        visible ? 'scale-100 opacity-100' : 'pointer-events-none scale-75 opacity-0'
      }`}
    >
      <ArrowUp size={17} aria-hidden="true" />
      <span className="sr-only">Back to top</span>
    </a>
  );
}
