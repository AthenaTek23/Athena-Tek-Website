import { motion } from 'framer-motion';

export default function SectionHeader({
  tag,
  title,
  subtitle,
  light = false,
  align = 'center',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  // light=true means on dark/navy background (white text)
  // light=false means on white background (black text)
  const titleColor = light ? 'text-white' : 'text-light-900';
  const subtitleColor = light ? 'text-white/80' : 'text-light-600';

  return (
    <div className={`mb-8 md:mb-10 ${alignClasses[align]} ${className}`}>
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
        className={`text-2xl md:text-3xl font-bold mb-4 ${titleColor}`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={`text-base max-w-2xl mx-auto ${subtitleColor}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
