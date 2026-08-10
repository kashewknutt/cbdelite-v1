import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { TiltCard } from '@/components/TiltCard/TiltCard';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import { leoMotto } from '@/data/content';
import styles from './LEOPillars.module.css';

export function LEOPillars() {
  const gridRef = useRef<HTMLDivElement>(null);
  useScrollReveal(gridRef, { selector: '[data-reveal-item]', stagger: 0.15 });

  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Our Foundation" title="The L.E.O. Core Foundation" centered />

        <div ref={gridRef} className={styles.grid}>
          {leoMotto.map((item) => (
            <TiltCard key={item.key} className={styles.card}>
              <div data-reveal-item className={styles.cardInner}>
                <span className={`${styles.letter} gradient-text`}>{item.title.charAt(0)}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
