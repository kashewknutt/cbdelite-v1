import type { MouseEvent } from 'react';
import { navItems, contactInfo, footerContent, siteMeta } from '@/data/content';
import { scrollToTarget } from '@/utils/scrollTo';
import styles from './Footer.module.css';

const uniqueNavItems = navItems.filter(
  (item, index, arr) => arr.findIndex((other) => other.href === item.href) === index,
);

export function Footer() {
  function handleClick(e: MouseEvent, href: string) {
    e.preventDefault();
    scrollToTarget(href);
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h3 className={`${styles.brand} gradient-text`}>{siteMeta.name}</h3>
            <p className={styles.bio}>{footerContent.bio}</p>
            <p className={styles.motto}>{footerContent.motto}</p>
            <p className={styles.district}>{footerContent.districtRecognition}</p>
          </div>

          <div>
            <span className={styles.colTitle}>Quick Links</span>
            <nav className={styles.navList} aria-label="Footer">
              {uniqueNavItems.map((item) => (
                <a key={item.label} href={item.href} onClick={(e) => handleClick(e, item.href)} data-cursor-hover>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <span className={styles.colTitle}>Contact</span>
            <div className={styles.contactList}>
              <span>{contactInfo.email}</span>
              <span className={styles.placeholder}>{contactInfo.phonePlaceholder}</span>
              <span>{contactInfo.location}</span>
              <span className={styles.placeholder}>{contactInfo.meetingSchedulePlaceholder}</span>
            </div>
          </div>

          <div>
            <span className={styles.colTitle}>Follow Us</span>
            <div className={styles.socialList}>
              <a href={contactInfo.instagramHref} target="_blank" rel="noreferrer" data-cursor-hover>
                Instagram — {contactInfo.instagram}
              </a>
              <span className={styles.placeholder}>Facebook — coming soon</span>
              <span className={styles.placeholder}>LinkedIn — coming soon</span>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          &copy; {new Date().getFullYear()} {footerContent.copyright}
        </div>
      </div>
    </footer>
  );
}
