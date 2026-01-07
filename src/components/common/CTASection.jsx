import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from '../ui';
import { companyInfo } from '../../styles/theme';
import { useTheme } from '../../contexts/ThemeContext';

export default function CTASection({
  title = 'Ready to Modernize Your Training & Testing?',
  subtitle = 'Contact Athena-Tek for demonstrations, integration support, or technical briefings.',
}) {
  const { isDark } = useTheme();

  return (
    <section className="relative py-6 md:py-8 px-4 md:px-8 overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 ${
        isDark
          ? 'bg-gradient-to-br from-dark-900 via-dark-800/50 to-dark-900'
          : 'bg-gradient-to-br from-primary-navy/5 via-white to-primary-navy/5'
      }`} />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className={`text-xl md:text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={`text-sm mb-4 ${isDark ? 'text-dark-400' : 'text-light-600'}`}
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-2 justify-center items-center"
        >
          <Button to="/contact" variant="primary" size="sm" icon={<Mail size={14} />} iconPosition="left">
            Contact Us
          </Button>
          <span className={`text-sm font-mono ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
            {companyInfo.email}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
