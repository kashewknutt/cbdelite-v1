import { useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { splitText } from '@/lib/splitText';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import styles from './SplitHeading.module.css';

interface SplitHeadingProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  /** Play immediately on mount instead of on scroll (used by the Hero). */
  playOnMount?: boolean;
  delay?: number;
  scrollStart?: string;
}

export function SplitHeading({
  text,
  as: Tag = 'h2',
  className = '',
  playOnMount = false,
  delay = 0,
  scrollStart = 'top 82%',
}: SplitHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion) {
      el.textContent = text;
      return;
    }

    const { words } = splitText(el);

    const tween = gsap.fromTo(
      words,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        delay,
        stagger: 0.06,
        ease: 'power4.out',
        ...(playOnMount
          ? {}
          : {
              scrollTrigger: {
                trigger: el,
                start: scrollStart,
                once: true,
              },
            }),
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, prefersReducedMotion, playOnMount, delay, scrollStart]);

  return (
    <Tag ref={ref} className={`${styles.heading} ${className}`.trim()}>
      {text}
    </Tag>
  );
}
