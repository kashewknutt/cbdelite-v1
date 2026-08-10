import type { ReactNode } from 'react';
import styles from './GlassPanel.module.css';

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

export function GlassPanel({ children, className = '' }: GlassPanelProps) {
  return <div className={`${styles.panel} ${className}`.trim()}>{children}</div>;
}
