import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { TiltCard } from '@/components/TiltCard/TiltCard';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import { ImagePlaceholder } from '@/components/ImagePlaceholder/ImagePlaceholder';
import { leadershipBoard, leadershipYear } from '@/data/content';
import styles from './LeadershipBoard.module.css';

export function LeadershipBoard() {
  const sorted = [...leadershipBoard].sort((a, b) => a.order - b.order);
  const [president, ...rest] = sorted;

  const gridRef = useRef<HTMLDivElement>(null);
  useScrollReveal(gridRef, { selector: '[data-reveal-item]', stagger: 0.08 });

  return (
    <section id="leadership" className="section">
      <div className="container">
        <span className={`eyebrow ${styles.yearBadge}`}>{leadershipYear}</span>
        <SectionHeading title="Executive Leadership Board" />

        {president && (
          <TiltCard className={`${styles.card} ${styles.featuredCard} ${styles.featured}`}>
            <ImagePlaceholder
              src={president.photo}
              alt={president.name}
              iconType="person"
              aspectRatio="1 / 1"
              className={styles.photo}
            />
            <h3 className={styles.name}>{president.name}</h3>
            <span className={styles.position}>{president.position}</span>
            {president.quote && <p className={styles.quote}>&ldquo;{president.quote}&rdquo;</p>}
          </TiltCard>
        )}

        <div ref={gridRef} className={styles.grid}>
          {rest.map((member) => (
            <TiltCard key={member.name} className={styles.card}>
              <div data-reveal-item className={styles.card}>
                <ImagePlaceholder
                  src={member.photo}
                  alt={member.name}
                  iconType="person"
                  aspectRatio="1 / 1"
                  className={styles.photo}
                />
                <h3 className={styles.name}>{member.name}</h3>
                <span className={styles.position}>{member.position}</span>
                {member.quote && <p className={styles.quote}>&ldquo;{member.quote}&rdquo;</p>}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
