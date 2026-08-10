import { useRef, type RefObject } from 'react';
import { gsap } from '@/lib/gsap';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface ScrollRevealOptions {
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  once?: boolean;
  selector?: string;
}

/**
 * The single entrance-animation primitive every section uses: fade +
 * translateY on ScrollTrigger enter. Pass `selector` to stagger a group of
 * children instead of animating the container as one block.
 */
export function useScrollReveal<T extends HTMLElement>(
  ref: RefObject<T | null>,
  {
    y = 40,
    duration = 0.9,
    delay = 0,
    stagger = 0.12,
    start = 'top 82%',
    once = true,
    selector,
  }: ScrollRevealOptions = {},
): void {
  const prefersReducedMotion = usePrefersReducedMotion();
  const optionsRef = useRef({ y, duration, delay, stagger, start, once, selector });
  optionsRef.current = { y, duration, delay, stagger, start, once, selector };

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const opts = optionsRef.current;

    if (prefersReducedMotion) {
      gsap.set(opts.selector ? el.querySelectorAll(opts.selector) : el, {
        autoAlpha: 1,
        y: 0,
      });
      return;
    }

    const ctx = gsap.context(() => {
      const targets = opts.selector ? el.querySelectorAll(opts.selector) : el;

      gsap.fromTo(
        targets,
        { autoAlpha: 0, y: opts.y },
        {
          autoAlpha: 1,
          y: 0,
          duration: opts.duration,
          delay: opts.delay,
          stagger: opts.stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: opts.start,
            once: opts.once,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [ref, prefersReducedMotion]);
}
