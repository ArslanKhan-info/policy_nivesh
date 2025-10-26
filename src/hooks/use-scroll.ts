import { useState, useEffect } from 'react';

/**
 * Custom hook to detect scroll position
 * @param threshold - Scroll threshold in pixels
 * @returns boolean indicating if scrolled past threshold
 */
export function useScroll(threshold = 50): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}

