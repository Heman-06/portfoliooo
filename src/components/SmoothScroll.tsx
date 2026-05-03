'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';

export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  // Check if device is mobile/touch
  const isMobile = () => {
    return window.innerWidth < 768 || 'ontouchstart' in window;
  };

  // Initialize Lenis only on desktop
  useEffect(() => {
    // Skip Lenis on mobile - use native touch scrolling
    if (isMobile()) {
      document.documentElement.classList.add('lenis');
      return;
    }

    // Add lenis class to html for CSS targeting
    document.documentElement.classList.add('lenis');

    const lenis = new Lenis({
      duration: 0.3,
      lerp: 0.01,
      smoothWheel: true,
      touchMultiplier: 1.5,
      wheelMultiplier: 2.5,
      infinite: false,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links with smooth scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const element = document.querySelector(href);
          if (element) {
            lenis.scrollTo(element as HTMLElement, {
              offset: 0,
              duration: 0.6,
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Cleanup
    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
      document.documentElement.classList.remove('lenis');
      lenisRef.current = null;
    };
  }, [pathname]);

  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
