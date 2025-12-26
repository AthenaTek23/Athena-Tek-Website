import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

export default function SectionHeader({
  tag,
  title,
  subtitle,
  light = false,
  align = 'center',
  className = '',
}) {
  const { isDark } = useTheme();
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 md:mb-16 ${alignClasses[align]} ${className}`}>
      {tag && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`tag-base mb-4 ${light ? 'tag-light' : 'tag-primary'}`}
        >
          {tag}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-dark-400' : 'text-light-600'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
