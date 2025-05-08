'use client';

import { useEffect, useRef, type RefObject } from 'react';

interface UseParallaxOptions {
  threshold?: number | number[];
  rootMargin?: string;
  factor?: number; // How much the element should move, e.g., 50 for 50px
}

function useParallax<T extends HTMLElement>(
  options: UseParallaxOptions = {}
): RefObject<T> {
  const { threshold = 0, rootMargin = "0px 0px -50% 0px", factor = 50 } = options;
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observerOptions = {
      root: null, // observing intersections with the viewport
      threshold,
      rootMargin,
    };

    const parallaxObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Check if element is fully out of view from the top
        if (entry.boundingClientRect.bottom < 0) {
           // Reset or set to initial position if needed
           element.style.transform = `translateY(0px)`;
        } else if (entry.isIntersecting) {
          // Calculate transform based on how much of the element is visible
          // entry.intersectionRatio ranges from 0 (not visible) to 1 (fully visible)
          // We want it to move as it comes into view from the bottom
          // And move back as it goes out of view from the top
          const move = (1 - entry.intersectionRatio) * factor;
          element.style.transform = `translateY(${move}px)`;
        } else if (entry.rootBounds && entry.boundingClientRect.top > entry.rootBounds.bottom) {
            // Element is below the viewport, reset to max translation
            // Added null check for entry.rootBounds
            element.style.transform = `translateY(${factor}px)`;
        }
      });
    }, observerOptions);

    parallaxObserver.observe(element);

    return () => {
      if (element) {
        parallaxObserver.unobserve(element);
      }
      parallaxObserver.disconnect();
    };
  }, [rootMargin, threshold, factor]); // Add factor to dependency array

  return elementRef;
}

export default useParallax;
