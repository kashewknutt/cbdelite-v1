import { useRef, type ReactNode, forwardRef, useImperativeHandle } from 'react';
import { useTiltCard } from '@/hooks/useTiltCard';
import styles from './TiltCard.module.css';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export const TiltCard = forwardRef<HTMLDivElement, TiltCardProps>(function TiltCard(
  { children, className = '', maxTilt = 10 },
  forwardedRef,
) {
  const ref = useRef<HTMLDivElement>(null);
  useTiltCard(ref, { maxTilt });
  useImperativeHandle(forwardedRef, () => ref.current as HTMLDivElement);

  return (
    <div ref={ref} className={`${styles.card} ${className}`.trim()}>
      {children}
    </div>
  );
});
