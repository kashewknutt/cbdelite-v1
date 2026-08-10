import { useEffect, useState } from 'react';

export function useIsTouchDevice(): boolean {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(pointer: coarse)');
    setIsTouch(mql.matches);

    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return isTouch;
}
