import { TiltCard } from '@/components/TiltCard/TiltCard';
import { ImagePlaceholder } from '@/components/ImagePlaceholder/ImagePlaceholder';
import type { GalleryItem } from '@/types/content.types';
import styles from './GalleryCard.module.css';

export function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <TiltCard className={styles.card} maxTilt={6}>
      <div data-cursor-hover>
        <ImagePlaceholder
          src={item.image}
          alt={item.title}
          iconType="image"
          aspectRatio="3 / 2"
          className={styles.imageWrap}
        />
        <div className={styles.body}>
          <span className={styles.group}>{item.group}</span>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.desc}>{item.description}</p>
        </div>
      </div>
    </TiltCard>
  );
}
