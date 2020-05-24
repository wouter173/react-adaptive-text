import { useEffect } from 'react';

export const useResize = (callback, throttle = 100)  => {
  useEffect(() => {
    const resizeEnd = () => setTimeout(callback, throttle);
    window.addEventListener('resize', resizeEnd);
    return () => window.removeEventListener('resize', resizeEnd);
  }, [callback]);
};