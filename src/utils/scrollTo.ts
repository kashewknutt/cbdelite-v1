import { getLenis } from '@/lib/lenis';

export function scrollToTarget(target: string, offset = -80): void {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(target, { offset, duration: 1.2 });
    return;
  }

  const el = document.querySelector(target);
  el?.scrollIntoView({ behavior: 'smooth' });
}
