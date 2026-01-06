import { motion } from 'framer-motion';

export default function PageHero({ tag, title, subtitle, description }) {
  return (
    <section className="pt-24 md:pt-28 pb-8 md:pb-12 px-4 md:px-8 overflow-hidden bg-white">
      {/* Content */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="tag-base tag-primary mb-4 inline-block"
        >
          {tag}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-light-900 mb-4"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl font-semibold text-primary-navy mb-4"
          >
            {subtitle}
          </motion.h2>
        )}

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-light-600 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
