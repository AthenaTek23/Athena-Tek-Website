import { motion, AnimatePresence } from 'framer-motion';
import { useScrollSpy, scrollToSection } from '../../hooks/useScrollSpy';
import { useTheme } from '../../contexts/ThemeContext';

/**
 * Floating dots indicator on the right side of the screen
 * @param {object[]} sections - Array of { id, label } objects
 */
export default function SectionDots({ sections }) {
  const { isDark } = useTheme();
  const activeSection = useScrollSpy(sections.map(s => s.id));

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative flex items-center justify-end"
          aria-label={`Go to ${section.label}`}
        >
          {/* Tooltip */}
          <AnimatePresence>
            <span
              className={`
                absolute right-6 px-3 py-1.5 rounded text-xs font-medium whitespace-nowrap
                opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none
                ${isDark ? 'bg-dark-800 text-white' : 'bg-white text-light-900 shadow-lg'}
              `}
            >
              {section.label}
            </span>
          </AnimatePresence>

          {/* Dot */}
          <motion.div
            className={`
              w-3 h-3 rounded-full transition-colors
              ${activeSection === section.id
                ? isDark ? 'bg-teal-400' : 'bg-teal-500'
                : isDark ? 'bg-dark-600 hover:bg-dark-500' : 'bg-light-300 hover:bg-light-400'
              }
            `}
            animate={{
              scale: activeSection === section.id ? 1.3 : 1,
            }}
            transition={{ type: 'spring', bounce: 0.5 }}
          />
        </button>
      ))}
    </div>
  );
}
