import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '@/lib/gsap';

let lenis: Lenis | null = null;
let rafRegistered = false;

function raf(time: number) {
  // gsap.ticker reports elapsed time in seconds; Lenis expects a millisecond timestamp.
  lenis?.raf(time * 1000);
}

export function initLenis(): Lenis {
  if (lenis) return lenis;

  lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    // Native touch scroll feel — smooth-scroll libraries can feel laggy on touchscreens.
    syncTouch: false,
  });

  lenis.on('scroll', ScrollTrigger.update);

  if (!rafRegistered) {
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    rafRegistered = true;
  }

  return lenis;
}

export function getLenis(): Lenis | null {
  return lenis;
}

export function destroyLenis(): void {
  if (!lenis) return;
  gsap.ticker.remove(raf);
  rafRegistered = false;
  lenis.destroy();
  lenis = null;
}
