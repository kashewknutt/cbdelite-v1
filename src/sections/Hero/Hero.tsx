import { useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { ParticleBackground } from '@/components/ParticleBackground/ParticleBackground';
import { SplitHeading } from '@/components/SplitHeading/SplitHeading';
import { MagneticButton } from '@/components/MagneticButton/MagneticButton';
import { scrollToTarget } from '@/utils/scrollTo';
import { heroContent } from '@/data/content';
import styles from './Hero.module.css';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);
  const [showBadge, setShowBadge] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion) {
      setShowBadge(true);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.call(() => setShowBadge(true))
        .from(subRef.current, { autoAlpha: 0, y: 24, duration: 0.8, ease: 'power3.out' }, 0.7)
        .from(ctaRef.current, { autoAlpha: 0, y: 24, duration: 0.8, ease: 'power3.out' }, 0.9)
        .from(cueRef.current, { autoAlpha: 0, duration: 0.6 }, 1.1);

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        onUpdate: (self) => {
          gsap.to(cueRef.current, { autoAlpha: 1 - self.progress * 3, duration: 0.2 });
        },
      });
    }, section);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="home" ref={sectionRef} className={styles.hero}>
      <div className={styles.bgLayer}>
        <div className={`${styles.glowBlob} ${styles.glowGold}`} />
        <div className={`${styles.glowBlob} ${styles.glowCyan}`} />
        <ParticleBackground />
      </div>

      <div className={`container ${styles.content}`}>
        <span className={styles.badge} style={{ opacity: showBadge ? 1 : 0, transition: 'opacity 0.6s ease' }}>
          <span className={styles.badgeDot} aria-hidden="true" />
          {heroContent.badge}
        </span>

        <SplitHeading as="h1" text={heroContent.headline} className={styles.headline} playOnMount delay={0.15} />

        <p ref={subRef} className={styles.subheadline}>
          {heroContent.subheadline}
        </p>

        <div ref={ctaRef} className={styles.ctaRow}>
          <MagneticButton onClick={() => scrollToTarget('#leadership')} variant="primary">
            {heroContent.ctaPrimary}
          </MagneticButton>
          <MagneticButton onClick={() => scrollToTarget('#membership')} variant="secondary">
            {heroContent.ctaSecondary}
          </MagneticButton>
        </div>
      </div>

      <div ref={cueRef} className={styles.scrollCue}>
        <span>Scroll</span>
        <span className={styles.scrollChevron} aria-hidden="true" />
      </div>
    </section>
  );
}
