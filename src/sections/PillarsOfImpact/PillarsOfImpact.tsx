import { useRef, type ReactElement } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { TiltCard } from '@/components/TiltCard/TiltCard';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import { pillarsOfImpact } from '@/data/content';
import type { PillarOfImpact } from '@/types/content.types';
import styles from './PillarsOfImpact.module.css';

const ICONS: Record<PillarOfImpact['icon'], ReactElement> = {
  child: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="7" r="3" />
      <path d="M6 21c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    </svg>
  ),
  paw: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <circle cx="7" cy="10" r="2" />
      <circle cx="12" cy="7" r="2" />
      <circle cx="17" cy="10" r="2" />
      <path d="M12 13c-4 0-6.5 2.6-6.5 4.8S8 20 12 20s6.5-1 6.5-2.2S16 13 12 13z" />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="m14.5 9.5-1.8 5.2-5.2 1.8 1.8-5.2z" />
    </svg>
  ),
  hands: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 12V6a2 2 0 1 1 4 0v5" />
      <path d="M12 11V4a2 2 0 1 1 4 0v7" />
      <path d="M16 11V6a2 2 0 1 1 4 0v8c0 3.9-3.1 7-7 7s-6-2-8-5" />
    </svg>
  ),
};

export function PillarsOfImpact() {
  const gridRef = useRef<HTMLDivElement>(null);
  useScrollReveal(gridRef, { selector: '[data-reveal-item]', stagger: 0.12 });

  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Our Impact" title="Our Pillars of Impact" centered />

        <div ref={gridRef} className={styles.grid}>
          {pillarsOfImpact.map((pillar) => (
            <TiltCard key={pillar.title} className={styles.card}>
              <div data-reveal-item className={styles.card}>
                <span className={styles.icon}>{ICONS[pillar.icon]}</span>
                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.cardDesc}>{pillar.description}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
