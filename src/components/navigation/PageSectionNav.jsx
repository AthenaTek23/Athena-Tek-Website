import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollSpy, scrollToSection } from '../../hooks/useScrollSpy';
import { useTheme } from '../../contexts/ThemeContext';

/**
 * Horizontal sticky section navigation bar
 * @param {object[]} sections - Array of { id, label } objects
 */
export default function PageSectionNav({ sections }) {
  const { isDark } = useTheme();
  const activeSection = useScrollSpy(sections.map(s => s.id));
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  const placeholderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (placeholderRef.current) {
        const rect = placeholderRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 64);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Placeholder to maintain layout when nav becomes fixed */}
      <div ref={placeholderRef} className={isSticky ? 'h-14' : 'h-0'} />

      <nav
        ref={navRef}
        className={`
          ${isSticky ? 'fixed top-16 left-0 right-0 z-40 shadow-lg' : 'relative'}
          ${isDark ? 'bg-dark-900/95 backdrop-blur-sm border-b border-white/5' : 'bg-white/95 backdrop-blur-sm border-b border-light-200'}
          transition-all duration-300
        `}
      >
        <div className="container-main">
          <div className="flex items-center gap-1 py-2 overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`
                  relative px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors
                  ${activeSection === section.id
                    ? 'text-white'
                    : isDark ? 'text-dark-400 hover:text-white hover:bg-primary-navy/20' : 'text-light-500 hover:text-light-700 hover:bg-primary-navy/10'
                  }
                `}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-lg bg-primary-navy"
                    style={{ zIndex: -1 }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
