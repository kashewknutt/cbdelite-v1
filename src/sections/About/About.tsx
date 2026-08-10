import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import { ImagePlaceholder } from '@/components/ImagePlaceholder/ImagePlaceholder';
import { aboutContent } from '@/data/content';
import styles from './About.module.css';

export function About() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useScrollReveal(textRef, { y: 30 });
  useScrollReveal(imageRef, { y: 30, delay: 0.15 });

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="About Us" title={aboutContent.title} subtitle={aboutContent.subtitle} />

        <div className={styles.layout}>
          <div ref={textRef} className={styles.text}>
            <p className={styles.paragraph}>{aboutContent.whoWeAre}</p>
            <p className={styles.paragraph}>{aboutContent.mission}</p>
            <p className={styles.note}>{aboutContent.affiliationNote}</p>
          </div>

          <div ref={imageRef} className={styles.imageFrame}>
            <ImagePlaceholder
              src="/images/about/about-collage.jpg"
              alt="Leo Club of CBD Elites members at a service activity"
              aspectRatio="4 / 3"
              iconType="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
