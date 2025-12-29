import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook to track which section is currently in view
 * @param {string[]} sectionIds - Array of section IDs to track
 * @param {object} options - Configuration options
 * @returns {string} - The ID of the currently active section
 */
export function useScrollSpy(sectionIds, options = {}) {
  const { offset = 150, threshold = 0.3 } = options;
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Find the section that's currently in view
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop - (sectionHeight * threshold)) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset, threshold]);

  return activeSection;
}

/**
 * Smooth scroll to a section
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {number} offset - Offset from the top in pixels
 */
export function scrollToSection(sectionId, offset = 140) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: elementPosition - offset,
    behavior: 'smooth'
  });
}
