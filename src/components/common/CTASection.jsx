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
    <section className="relative py-24 md:py-32 px-8 overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 ${
        isDark
          ? 'bg-gradient-to-br from-dark-900 via-dark-800/50 to-dark-900'
          : 'bg-gradient-to-br from-teal-50 via-white to-teal-50'
      }`} />

      {/* Decorative elements */}
      <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl ${
        isDark ? 'bg-primary-500/5' : 'bg-teal-500/10'
      }`} />
      <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl ${
        isDark ? 'bg-primary-500/5' : 'bg-teal-500/10'
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
          <Button to="/ContactUsPage" variant="secondary" size="lg">
            Request Demo
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`font-mono ${isDark ? 'text-primary-500' : 'text-teal-600'}`}
        >
          {companyInfo.email}
        </motion.p>
      </div>
    </section>
  );
}
