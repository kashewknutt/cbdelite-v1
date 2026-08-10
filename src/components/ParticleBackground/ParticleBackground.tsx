import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import styles from './ParticleBackground.module.css';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: 'gold' | 'cyan';
}

const COLORS = {
  gold: 'rgba(242, 199, 68, 0.6)',
  cyan: 'rgba(34, 211, 238, 0.5)',
};

export function ParticleBackground({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let rafId = 0;
    let running = true;

    function particleCount() {
      return width < 768 ? 30 : 80;
    }

    function resize() {
      width = container!.clientWidth;
      height = container!.clientHeight;
      canvas!.width = width;
      canvas!.height = height;
      particles = Array.from({ length: particleCount() }, createParticle);
    }

    function createParticle(): Particle {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.8 + 0.6,
        hue: Math.random() > 0.5 ? 'gold' : 'cyan',
      };
    }

    function tick() {
      if (!running) return;
      ctx!.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = COLORS[p.hue];
        ctx!.fill();
      }

      rafId = requestAnimationFrame(tick);
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();
    rafId = requestAnimationFrame(tick);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting && document.visibilityState === 'visible';
        if (running) rafId = requestAnimationFrame(tick);
      },
      { threshold: 0 },
    );
    visibilityObserver.observe(container);

    function handleVisibilityChange() {
      running = document.visibilityState === 'visible';
      if (running) rafId = requestAnimationFrame(tick);
    }
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={containerRef} className={`${styles.canvas} ${className}`.trim()} aria-hidden="true">
      {!prefersReducedMotion && <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />}
    </div>
  );
}
