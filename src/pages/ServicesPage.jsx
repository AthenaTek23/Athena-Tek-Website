import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Settings, Puzzle, BarChart3, Radio, ChevronRight } from 'lucide-react';
import { Card } from '../components/ui';
import { SectionHeader, CTASection } from '../components/common';
import { useTheme } from '../contexts/ThemeContext';
import { iconSizes } from '../styles/theme';

export default function ServicesPage() {
  const { isDark } = useTheme();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-dark-900 to-dark-950' : 'bg-gradient-to-b from-light-100 to-white'}`} />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative z-10 container-main text-center">
          <span className="tag-base tag-primary mb-4 inline-block">ATHENA-TEK SERVICES</span>
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
            Our Services
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
            Comprehensive engineering and technical services for defense and training systems
          </p>
        </div>
      </section>

      <EngineeringSection isDark={isDark} />
      <TechnicalSection isDark={isDark} />
      <CTASection
        title="Ready to Get Started?"
        subtitle="Contact our team to discuss your engineering and technical service needs."
      />
    </div>
  );
}

function EngineeringSection({ isDark }) {
  const services = [
    {
      icon: <Settings size={iconSizes.xl} />,
      name: 'System Engineering',
      description: 'Full lifecycle engineering support from requirements to deployment with DoD acquisition expertise.',
      path: '/services/system-engineering',
      features: ['Requirements Analysis', 'System Architecture', 'Hardware/Software Engineering', 'Test & Evaluation'],
    },
    {
      icon: <Puzzle size={iconSizes.xl} />,
      name: 'System Integration',
      description: 'Live, Virtual, and Constructive (LVC) integration for comprehensive training environments.',
      path: '/services/system-integration',
      features: ['LVC Integration', 'Partner Systems', 'EXCON Integration', 'SA Devices'],
    },
  ];

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="ENGINEERING"
        title="Engineering Services"
        subtitle="Expert engineering support for complex defense systems"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="xl" className="h-full flex flex-col">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                isDark ? 'bg-teal-900/30' : 'bg-teal-100'
              }`}>
                <div className={isDark ? 'text-teal-400' : 'text-teal-600'}>
                  {service.icon}
                </div>
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                {service.name}
              </h3>
              <p className={`text-sm mb-4 flex-grow ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                {service.description}
              </p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, j) => (
                    <span
                      key={j}
                      className={`text-xs px-2 py-1 rounded ${
                        isDark ? 'bg-white/5 text-dark-300' : 'bg-light-200 text-light-700'
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to={service.path}
                className={`inline-flex items-center gap-2 text-sm font-medium ${
                  isDark ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-700'
                }`}
              >
                Learn more
                <ChevronRight size={16} />
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TechnicalSection({ isDark }) {
  const services = [
    {
      icon: <BarChart3 size={iconSizes.xl} />,
      name: 'Modeling & Simulation',
      description: 'RF propagation studies and network modeling for mission-critical communications.',
      path: '/services/modeling-simulation',
      features: ['RF Propagation', 'Network Modeling', 'Performance Analysis', 'Coverage Optimization'],
    },
    {
      icon: <Radio size={iconSizes.xl} />,
      name: 'Network Design 5G/LTE',
      description: 'Private 5G and LTE network solutions for secure, high-performance communications.',
      path: '/services/network-design',
      features: ['5G Networks', 'Private LTE', 'Mesh Networks', 'NTN/Satellite'],
    },
  ];

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="TECHNICAL"
          title="Technical Services"
          subtitle="Advanced technical capabilities for network and communications systems"
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card size="xl" className={`h-full flex flex-col ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                  isDark ? 'bg-teal-900/30' : 'bg-teal-100'
                }`}>
                  <div className={isDark ? 'text-teal-400' : 'text-teal-600'}>
                    {service.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                  {service.name}
                </h3>
                <p className={`text-sm mb-4 flex-grow ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  {service.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, j) => (
                      <span
                        key={j}
                        className={`text-xs px-2 py-1 rounded ${
                          isDark ? 'bg-white/5 text-dark-300' : 'bg-light-200 text-light-700'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={service.path}
                  className={`inline-flex items-center gap-2 text-sm font-medium ${
                    isDark ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-700'
                  }`}
                >
                  Learn more
                  <ChevronRight size={16} />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
