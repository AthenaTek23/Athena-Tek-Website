import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Settings, Cpu, FileText, Layers, Code, Shield, Target, Users, ChevronRight, Check } from 'lucide-react';
import { Card } from '../../components/ui';
import { SectionHeader, CTASection } from '../../components/common';
import { useTheme } from '../../contexts/ThemeContext';
import { iconSizes } from '../../styles/theme';

export default function SystemEngineeringPage() {
  const { isDark } = useTheme();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-dark-900 to-dark-950' : 'bg-gradient-to-b from-light-100 to-white'}`} />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative z-10 container-main text-center">
          <span className="tag-base tag-primary mb-4 inline-block">ENGINEERING SERVICES</span>
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
            System Engineering
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
            Full lifecycle engineering support from requirements to deployment
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="#services" className="btn-primary">
              View Services
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <ServicesSection isDark={isDark} />
      <LifecycleSection isDark={isDark} />
      <ExpertiseSection isDark={isDark} />
      <CTASection
        title="Start Your Engineering Project"
        subtitle="Contact our team to discuss your system engineering needs."
      />
    </div>
  );
}

function ServicesSection({ isDark }) {
  const services = [
    { icon: <FileText size={iconSizes.lg} />, title: 'Requirements Analysis', desc: 'Comprehensive requirements gathering, analysis, and documentation for complex defense systems' },
    { icon: <Layers size={iconSizes.lg} />, title: 'System Architecture', desc: 'Design of scalable, modular system architectures that meet mission requirements' },
    { icon: <Cpu size={iconSizes.lg} />, title: 'Hardware Engineering', desc: 'Custom hardware design, integration, and optimization for military applications' },
    { icon: <Code size={iconSizes.lg} />, title: 'Software Engineering', desc: 'Full-stack software development with security-first approach' },
    { icon: <Shield size={iconSizes.lg} />, title: 'Security Engineering', desc: 'Cybersecurity integration throughout the development lifecycle' },
    { icon: <Target size={iconSizes.lg} />, title: 'Test & Evaluation', desc: 'Comprehensive testing strategies and validation protocols' },
  ];

  return (
    <section id="services" className="section-padding container-main">
      <SectionHeader
        tag="OUR SERVICES"
        title="Engineering Capabilities"
        subtitle="End-to-end engineering services for defense and training systems"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="lg" className="h-full">
              <div className="icon-box w-12 h-12 mb-4">
                {service.icon}
              </div>
              <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                {service.title}
              </h4>
              <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                {service.desc}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function LifecycleSection({ isDark }) {
  const phases = [
    { phase: 'Concept', activities: ['Mission analysis', 'Feasibility studies', 'Initial requirements'] },
    { phase: 'Development', activities: ['Detailed design', 'Prototyping', 'Risk management'] },
    { phase: 'Production', activities: ['Manufacturing support', 'Quality assurance', 'Configuration management'] },
    { phase: 'Deployment', activities: ['System installation', 'Training', 'Documentation'] },
    { phase: 'Operations', activities: ['Sustainment support', 'Performance monitoring', 'Continuous improvement'] },
  ];

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="METHODOLOGY"
          title="Full Lifecycle Support"
          subtitle="We support your system through every phase of its lifecycle"
          light
        />

        <div className="relative">
          {/* Timeline line */}
          <div className={`hidden lg:block absolute top-1/2 left-0 right-0 h-1 ${
            isDark ? 'bg-teal-500/20' : 'bg-teal-200'
          }`} />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {phases.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className={`hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full items-center justify-center ${
                  isDark ? 'bg-teal-500' : 'bg-teal-600'
                }`}>
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>

                <Card size="lg" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'} lg:mt-8`}>
                  <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
                    {item.phase}
                  </h4>
                  <ul className="space-y-2">
                    {item.activities.map((activity, j) => (
                      <li key={j} className={`flex items-center gap-2 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                        <Check size={14} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection({ isDark }) {
  const expertise = [
    'DoD acquisition lifecycle support',
    'MIL-STD compliance and documentation',
    'MBSE (Model-Based Systems Engineering)',
    'Agile and DevSecOps methodologies',
    'Risk management and mitigation',
    'Interface control and integration',
    'Performance optimization',
    'Sustainment engineering',
  ];

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="EXPERTISE"
        title="Our Technical Expertise"
        subtitle="Proven capabilities across defense engineering domains"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {expertise.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`flex items-center gap-3 p-4 rounded-lg ${
              isDark ? 'bg-white/[0.02] border border-white/5' : 'bg-light-100 border border-light-300'
            }`}
          >
            <Check size={18} className={`flex-shrink-0 ${isDark ? 'text-teal-400' : 'text-teal-600'}`} />
            <span className={`text-sm ${isDark ? 'text-dark-200' : 'text-light-700'}`}>{item}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
