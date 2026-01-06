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
    <section className="relative py-16 md:py-24 lg:py-32 px-4 md:px-8 overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 ${
        isDark
          ? 'bg-gradient-to-br from-dark-900 via-dark-800/50 to-dark-900'
          : 'bg-gradient-to-br from-primary-navy/5 via-white to-primary-navy/5'
      }`} />

      {/* Decorative elements */}
      <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl ${
        isDark ? 'bg-primary-500/5' : 'bg-primary-navy/10'
      }`} />
      <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl ${
        isDark ? 'bg-primary-500/5' : 'bg-primary-navy/10'
      }`} />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-lg mb-10 ${isDark ? 'text-dark-400' : 'text-light-600'}`}
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
        >
          <Button to="/ContactUsPage" variant="primary" size="lg" icon={<Mail size={18} />} iconPosition="left">
            Contact Us
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`font-mono ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}
        >
          {companyInfo.email}
        </motion.p>
      </div>
    </section>
  );
}
