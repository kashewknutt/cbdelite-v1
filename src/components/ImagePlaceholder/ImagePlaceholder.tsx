import { useState, type ReactElement } from 'react';
import styles from './ImagePlaceholder.module.css';

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  iconType?: 'image' | 'person' | 'paw' | 'badge';
  className?: string;
  eager?: boolean;
  /** Definite pixel size — set for small avatars/logos where flex/grid
   * percentage sizing can't be trusted to constrain the placeholder. */
  size?: number;
  hideLabel?: boolean;
}

const ICONS: Record<NonNullable<ImagePlaceholderProps['iconType']>, ReactElement> = {
  image: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="M21 16l-5-5-9 9" />
    </svg>
  ),
  person: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  ),
  paw: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <circle cx="6" cy="9" r="2" />
      <circle cx="12" cy="6" r="2" />
      <circle cx="18" cy="9" r="2" />
      <path d="M12 12c-4 0-7 3-7 5.5S7 21 12 21s7-1 7-3.5-3-5.5-7-5.5z" />
    </svg>
  ),
  badge: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="9" r="6" />
      <path d="M9 14.5 7 22l5-3 5 3-2-7.5" />
    </svg>
  ),
};

export function ImagePlaceholder({
  src,
  alt,
  aspectRatio = '4 / 3',
  iconType = 'image',
  className = '',
  eager = false,
  size,
  hideLabel = false,
}: ImagePlaceholderProps) {
  const [hasError, setHasError] = useState(false);

  const sizeStyle = size ? { width: size, height: size, flexShrink: 0 } : {};

  return (
    <div className={`${styles.wrapper} ${className}`.trim()} style={{ aspectRatio, ...sizeStyle }}>
      {!hasError && (
        <img
          src={src}
          alt={alt}
          className={styles.img}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={eager ? 'high' : undefined}
          onError={() => setHasError(true)}
        />
      )}
      {hasError && (
        <div className={styles.fallback}>
          <span className={styles.fallbackIcon}>{ICONS[iconType]}</span>
          {!hideLabel && <span className={styles.fallbackLabel}>{alt}</span>}
        </div>
      )}
    </div>
  );
}
