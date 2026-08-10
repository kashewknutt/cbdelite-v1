import { useRef, useState, type MouseEvent } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';
import { useActiveSection } from '@/hooks/useActiveSection';
import { scrollToTarget } from '@/utils/scrollTo';
import { MagneticButton } from '@/components/MagneticButton/MagneticButton';
import { ImagePlaceholder } from '@/components/ImagePlaceholder/ImagePlaceholder';
import { navItems, siteMeta } from '@/data/content';
import styles from './Header.module.css';

const SECTION_IDS = ['home', 'about', 'leadership', 'gallery', 'membership', 'contact'];

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useIsomorphicLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          const currentY = window.scrollY;
          setIsScrolled(currentY > 80);

          if (self.direction === 1 && currentY > 160) {
            gsap.to(header, { yPercent: -100, duration: 0.4, ease: 'power2.out' });
          } else if (self.direction === -1 || currentY < 160) {
            gsap.to(header, { yPercent: 0, duration: 0.4, ease: 'power2.out' });
          }
        },
      });

      return () => trigger.kill();
    }, header);

    return () => ctx.revert();
  }, []);

  function handleNavClick(e: MouseEvent, href: string) {
    e.preventDefault();
    scrollToTarget(href);
  }

  return (
    <header ref={headerRef} className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`.trim()}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.brand} onClick={(e) => handleNavClick(e, '#home')} data-cursor-hover>
          <ImagePlaceholder
            src="/images/logo.png"
            alt="Leo Club of CBD Elites emblem"
            iconType="badge"
            className={styles.logoMark}
            aspectRatio="1 / 1"
            size={40}
            hideLabel
            eager
          />
          <ImagePlaceholder
            src="/images/lions-badge.png"
            alt="Lions Clubs International badge"
            iconType="badge"
            className={styles.badgeMark}
            aspectRatio="1 / 1"
            size={30}
            hideLabel
            eager
          />
          <span className={styles.brandName}>{siteMeta.name}</span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              data-cursor-hover
              className={`${styles.navLink} ${activeId === item.href.slice(1) ? styles.navLinkActive : ''}`.trim()}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.ctaSlot}>
          <MagneticButton
            href="#membership"
            onClick={(e) => handleNavClick(e, '#membership')}
            className={styles.ctaButton}
          >
            Join the Club
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}
