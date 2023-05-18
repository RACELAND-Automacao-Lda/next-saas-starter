import { useEffect, useState } from 'react';

export default function isMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1448); // Adjust the breakpoint as needed
    };

    // Check if running in the browser before accessing window object
    if (typeof window !== 'undefined') {
      handleResize(); // Check on initial page load
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return isMobile;
}
