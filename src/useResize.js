import { useEffect } from 'react';

export const useResize = callback => {
  useEffect(() => {
    const resizeEnd = () => setTimeout(callback, 100);
    window.addEventListener('resize', resizeEnd);
    return () => window.removeEventListener('resize', resizeEnd);
  }, [callback]);
};