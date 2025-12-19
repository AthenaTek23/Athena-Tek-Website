import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from '../ui';
import { companyInfo } from '../../styles/theme';

export default function CTASection({
  title = 'Ready to Modernize Your Training & Testing?',
  subtitle = 'Contact Athena-Tek for demonstrations, integration support, or technical briefings.',
}) {
  return (
    <section className="relative py-24 md:py-32 px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800/50 to-dark-900" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          {title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-dark-400 mb-10"
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
          <Button variant="primary" size="lg" icon={<Mail size={18} />} iconPosition="left">
            Contact Us
          </Button>
          <Button variant="secondary" size="lg">
            Request Demo
          </Button>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-primary-500 font-mono"
        >
          {companyInfo.email}
        </motion.p>
      </div>
    </section>
  );
}
