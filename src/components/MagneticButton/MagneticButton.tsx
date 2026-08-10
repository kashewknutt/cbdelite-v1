import { useRef, type ReactNode, type MouseEventHandler } from 'react';
import { useMagneticButton } from '@/hooks/useMagneticButton';
import styles from './MagneticButton.module.css';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  variant?: 'primary' | 'secondary';
  className?: string;
  target?: string;
  rel?: string;
  title?: string;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  target,
  rel,
  title,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  useMagneticButton(ref, { strength: 0.35, radius: 70 });

  const combinedClassName = `${styles.button} ${styles[variant]} ${className}`.trim();

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        onClick={onClick}
        className={combinedClassName}
        data-cursor-hover
        target={target}
        rel={rel}
        title={title}
      >
        {children}
      </a>
    );
  }

  return (
    <button ref={ref} onClick={onClick} className={combinedClassName} data-cursor-hover title={title}>
      {children}
    </button>
  );
}
