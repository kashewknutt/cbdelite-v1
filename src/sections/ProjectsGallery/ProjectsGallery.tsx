import { useRef, useState } from 'react';
import { Flip } from '@/lib/gsap';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import { GalleryCard } from './GalleryCard';
import { galleryFilters, galleryItems, galleryHeader } from '@/data/content';
import type { GalleryFilter } from '@/types/content.types';
import styles from './ProjectsGallery.module.css';

export function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter['key']>('all');
  const gridRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useScrollReveal(gridRef, { selector: '[data-gallery-item]', stagger: 0.08, start: 'top 88%' });

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.categories.includes(activeFilter));

  function handleFilterChange(key: GalleryFilter['key']) {
    if (key === activeFilter) return;

    const grid = gridRef.current;
    if (!grid || prefersReducedMotion) {
      setActiveFilter(key);
      return;
    }

    const state = Flip.getState(grid.querySelectorAll('[data-gallery-item]'));
    setActiveFilter(key);

    requestAnimationFrame(() => {
      Flip.from(state, {
        duration: 0.6,
        stagger: 0.05,
        ease: 'power1.inOut',
        absolute: true,
      });
    });
  }

  return (
    <section id="gallery" className="section">
      <div className="container">
        <SectionHeading eyebrow="Projects & Events" title={galleryHeader.title} subtitle={galleryHeader.subtitle} />

        <div className={styles.filterBar} role="tablist" aria-label="Filter gallery by category">
          {galleryFilters.map((filter) => (
            <button
              key={filter.key}
              role="tab"
              aria-selected={activeFilter === filter.key}
              data-cursor-hover
              className={`${styles.filterButton} ${activeFilter === filter.key ? styles.filterButtonActive : ''}`.trim()}
              onClick={() => handleFilterChange(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div ref={gridRef} className={styles.grid}>
          {filteredItems.map((item) => (
            <div key={item.slug} data-gallery-item>
              <GalleryCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
