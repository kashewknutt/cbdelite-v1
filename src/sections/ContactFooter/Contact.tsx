import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { GlassPanel } from '@/components/GlassPanel/GlassPanel';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import { MagneticButton } from '@/components/MagneticButton/MagneticButton';
import { contactInfo, contactHeader } from '@/data/content';
import styles from './Contact.module.css';

export function Contact() {
  const panelRef = useRef<HTMLDivElement>(null);
  useScrollReveal(panelRef, { y: 30 });

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading eyebrow="Contact" title={contactHeader.title} subtitle={contactHeader.subtitle} />

        <GlassPanel className={styles.panel}>
          <div ref={panelRef} className={styles.rows}>
            <div className={styles.row}>
              <span className={styles.rowLabel}>Email</span>
              <a href={`mailto:${contactInfo.email}`} className={`${styles.rowValue} ${styles.link}`} data-cursor-hover>
                {contactInfo.email}
              </a>
            </div>

            <div className={styles.row}>
              <span className={styles.rowLabel}>Phone / WhatsApp</span>
              <span className={`${styles.rowValue} ${styles.placeholder}`}>{contactInfo.phonePlaceholder}</span>
            </div>

            <div className={styles.row}>
              <span className={styles.rowLabel}>Instagram</span>
              <a
                href={contactInfo.instagramHref}
                target="_blank"
                rel="noreferrer"
                className={`${styles.rowValue} ${styles.link}`}
                data-cursor-hover
              >
                {contactInfo.instagram}
              </a>
            </div>

            <div className={styles.row}>
              <span className={styles.rowLabel}>Affiliation</span>
              <span className={styles.rowValue}>{contactInfo.affiliation}</span>
            </div>

            <div className={styles.row}>
              <span className={styles.rowLabel}>Location</span>
              <span className={styles.rowValue}>{contactInfo.location}</span>
            </div>
          </div>

          <div className={styles.formBlock}>
            <h3 className={styles.formTitle}>Interested in Becoming a Member?</h3>
            <p className={styles.formText}>
              Fill out our quick interest form to get details about upcoming meetings, dues, and membership
              orientation steps.
            </p>
            <MagneticButton href={contactInfo.joinFormHref} title="Link to be added">
              Fill Out Our Member Interest Form
            </MagneticButton>
            <a
              href={`mailto:${contactInfo.email}?subject=Membership Interest`}
              className={styles.mailtoFallback}
              data-cursor-hover
            >
              Or email us directly
            </a>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
