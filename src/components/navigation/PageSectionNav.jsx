import { motion } from 'framer-motion';
import { useScrollSpy, scrollToSection } from '../../hooks/useScrollSpy';
import { useTheme } from '../../contexts/ThemeContext';

/**
 * Horizontal sticky section navigation bar - always fixed below main header
 * @param {object[]} sections - Array of { id, label } objects
 */
export default function PageSectionNav({ sections }) {
  const { isDark } = useTheme();
  const activeSection = useScrollSpy(sections.map(s => s.id));

  return (
    <>
      {/* Placeholder to maintain layout space for fixed nav */}
      <div className="h-14" />

      <nav
        className={`
          fixed top-20 left-0 right-0 z-40 shadow-lg
          ${isDark ? 'bg-dark-900/95 backdrop-blur-sm border-b border-white/5' : 'bg-white/95 backdrop-blur-sm border-b border-light-200'}
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
