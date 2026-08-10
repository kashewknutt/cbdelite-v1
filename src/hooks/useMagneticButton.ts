import { useEffect, type RefObject } from 'react';
import { gsap } from '@/lib/gsap';
import { useIsTouchDevice } from '@/hooks/useIsTouchDevice';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface MagneticButtonOptions {
  strength?: number;
  radius?: number;
}

export function useMagneticButton<T extends HTMLElement>(
  ref: RefObject<T | null>,
  { strength = 0.4, radius = 80 }: MagneticButtonOptions = {},
): void {
  const isTouch = useIsTouchDevice();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || isTouch || prefersReducedMotion) return;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' });

    function handleMouseMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.hypot(dx, dy);

      if (distance < radius + rect.width / 2) {
        xTo(dx * strength);
        yTo(dy * strength);
      } else {
        xTo(0);
        yTo(0);
      }
    }

    function handleMouseLeave() {
      xTo(0);
      yTo(0);
    }

    window.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, isTouch, prefersReducedMotion, strength, radius]);
}
