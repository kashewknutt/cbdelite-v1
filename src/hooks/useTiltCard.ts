import { useEffect, type RefObject } from 'react';
import { gsap } from '@/lib/gsap';
import { useIsTouchDevice } from '@/hooks/useIsTouchDevice';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface TiltCardOptions {
  maxTilt?: number;
}

export function useTiltCard<T extends HTMLElement>(
  ref: RefObject<T | null>,
  { maxTilt = 12 }: TiltCardOptions = {},
): void {
  const isTouch = useIsTouchDevice();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || isTouch || prefersReducedMotion) return;

    gsap.set(el, { transformPerspective: 800, transformStyle: 'preserve-3d' });

    const rotateXTo = gsap.quickTo(el, 'rotateX', { duration: 0.4, ease: 'power3.out' });
    const rotateYTo = gsap.quickTo(el, 'rotateY', { duration: 0.4, ease: 'power3.out' });
    const scaleTo = gsap.quickTo(el, 'scale', { duration: 0.4, ease: 'power3.out' });

    function handlePointerMove(e: PointerEvent) {
      const rect = el!.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      rotateYTo(px * maxTilt * 2);
      rotateXTo(-py * maxTilt * 2);
    }

    function handlePointerEnter() {
      scaleTo(1.03);
    }

    function handlePointerLeave() {
      rotateXTo(0);
      rotateYTo(0);
      scaleTo(1);
    }

    el.addEventListener('pointermove', handlePointerMove);
    el.addEventListener('pointerenter', handlePointerEnter);
    el.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      el.removeEventListener('pointermove', handlePointerMove);
      el.removeEventListener('pointerenter', handlePointerEnter);
      el.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [ref, isTouch, prefersReducedMotion, maxTilt]);
}
