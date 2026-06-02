"use client";
import { useEffect, useCallback, useRef } from 'react';

/**
 * ScrollHandler — reliable reveal-on-scroll system.
 *
 * Problem: The previous implementation ran querySelectorAll once in useEffect([]).
 * On client-side navigation the DOM may not be painted yet, so elements stay
 * at opacity:0 forever until the user refreshes.
 *
 * Solution:
 * 1. IntersectionObserver watches every .reveal-on-scroll element.
 * 2. MutationObserver watches the DOM for newly added .reveal-on-scroll elements
 *    and feeds them into the IntersectionObserver automatically.
 * 3. A short initial delay + rescan ensures elements rendered by client components
 *    after the first paint are also picked up.
 */
export function ScrollHandler() {
  const observedElements = useRef<Set<Element>>(new Set());
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  const observeElement = useCallback((el: Element) => {
    if (observedElements.current.has(el)) return;
    observedElements.current.add(el);
    intersectionObserverRef.current?.observe(el);
  }, []);

  const scanForElements = useCallback(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observeElement(el));
  }, [observeElement]);

  useEffect(() => {
    // Create the IntersectionObserver
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
            observedElements.current.delete(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.05,
      }
    );
    intersectionObserverRef.current = io;

    // Initial scan
    scanForElements();

    // Re-scan after short delays to catch client-rendered content
    const timers = [
      requestAnimationFrame(() => scanForElements()),
      setTimeout(() => scanForElements(), 100) as unknown as number,
      setTimeout(() => scanForElements(), 300) as unknown as number,
      setTimeout(() => scanForElements(), 600) as unknown as number,
    ];

    // MutationObserver: watch for new elements added to the DOM
    const mo = new MutationObserver((mutations) => {
      let shouldScan = false;
      for (const mutation of mutations) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              // Check the node itself
              if (node.classList.contains('reveal-on-scroll')) {
                observeElement(node);
              }
              // Check descendants
              const descendants = node.querySelectorAll('.reveal-on-scroll');
              if (descendants.length > 0) {
                shouldScan = true;
                descendants.forEach((el) => observeElement(el));
              }
            }
          });
        }
      }
      if (shouldScan) {
        // Additional scan in next frame for safety
        requestAnimationFrame(() => scanForElements());
      }
    });

    mo.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      timers.forEach((t) => {
        if (typeof t === 'number') {
          clearTimeout(t);
          cancelAnimationFrame(t);
        }
      });
      mo.disconnect();
      io.disconnect();
      observedElements.current.clear();
    };
  }, [scanForElements, observeElement]);

  return null;
}
