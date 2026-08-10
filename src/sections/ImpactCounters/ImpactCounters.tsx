import { useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { GlassPanel } from '@/components/GlassPanel/GlassPanel';
import { formatCount } from '@/utils/formatNumber';
import { impactStats } from '@/data/content';
import type { ImpactStat } from '@/types/content.types';
import styles from './ImpactCounters.module.css';

function StatCard({ stat }: { stat: ImpactStat }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(stat.numericTarget === null ? stat.value : formatCount(0, stat.suffix));
  const prefersReducedMotion = usePrefersReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el || stat.numericTarget === null) return;

    if (prefersReducedMotion) {
      setDisplay(stat.value);
      return;
    }

    const ctx = gsap.context(() => {
      const counter = { val: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(counter, {
            val: stat.numericTarget,
            duration: 1.6,
            ease: 'power2.out',
            onUpdate: () => setDisplay(formatCount(counter.val, stat.suffix)),
          });
        },
      });
    }, el);

    return () => ctx.revert();
  }, [prefersReducedMotion, stat]);

  return (
    <GlassPanel className={styles.stat}>
      <div ref={ref} className={`${styles.value} gradient-text`}>
        {display}
      </div>
      <span className={styles.label}>{stat.label}</span>
    </GlassPanel>
  );
}

export function ImpactCounters() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.grid}>
          {impactStats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
