import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { GlassPanel } from '@/components/GlassPanel/GlassPanel';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import { MagneticButton } from '@/components/MagneticButton/MagneticButton';
import { scrollToTarget } from '@/utils/scrollTo';
import { membershipContent } from '@/data/content';
import styles from './Membership.module.css';

export function Membership() {
  const listRef = useRef<HTMLUListElement>(null);
  useScrollReveal(listRef, { selector: 'li', stagger: 0.1 });

  return (
    <section id="membership" className="section">
      <div className="container">
        <SectionHeading eyebrow="Membership" title={membershipContent.title} />

        <GlassPanel className={styles.panel}>
          <ul ref={listRef} className={styles.benefits}>
            {membershipContent.benefits.map((benefit) => (
              <li key={benefit} className={styles.benefit}>
                <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12.5 9.5 17 19 7" />
                </svg>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className={styles.side}>
            <span className={styles.eligibilityPill}>{membershipContent.eligibility}</span>
            <MagneticButton onClick={() => scrollToTarget('#contact')}>Join the Club</MagneticButton>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
