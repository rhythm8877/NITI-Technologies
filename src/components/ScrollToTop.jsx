import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * This component automatically scrolls to the top when navigating between pages.
 * It doesn't affect scroll behavior within the same page.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, try to scroll to that section
    if (hash) {
      // Remove the # character
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Wait a bit for DOM to be fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }

    // Otherwise, scroll to top
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  // This component doesn't render anything
  return null;
}

export default ScrollToTop; 