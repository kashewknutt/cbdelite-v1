import { SplitHeading } from '@/components/SplitHeading/SplitHeading';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`${styles.wrapper} ${centered ? styles.centered : ''}`.trim()}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <SplitHeading as="h2" text={title} className={styles.title} />
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
