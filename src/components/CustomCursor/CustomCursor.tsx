import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';
import { useIsTouchDevice } from '@/hooks/useIsTouchDevice';
import styles from './CustomCursor.module.css';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const isTouch = useIsTouchDevice();

  useEffect(() => {
    if (isTouch) return;

    document.documentElement.classList.add('has-custom-cursor');

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const dotX = gsap.quickTo(dot, 'x', { duration: 0.15, ease: 'power3.out' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.15, ease: 'power3.out' });
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.4, ease: 'power3.out' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.4, ease: 'power3.out' });
    const ringScale = gsap.quickTo(ring, 'scale', { duration: 0.3, ease: 'power3.out' });

    function handleMouseMove(e: MouseEvent) {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    }

    function handleOver(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest('[data-cursor-hover]');
      if (target) {
        setIsHovering(true);
        ringScale(1.6);
      }
    }

    function handleOut(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest('[data-cursor-hover]');
      if (target) {
        setIsHovering(false);
        ringScale(1);
      }
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleOver);
    window.addEventListener('mouseout', handleOut);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleOver);
      window.removeEventListener('mouseout', handleOut);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <div
        ref={ringRef}
        className={`${styles.ring} ${isHovering ? styles.ringHover : ''}`}
        aria-hidden="true"
      />
    </>
  );
}
