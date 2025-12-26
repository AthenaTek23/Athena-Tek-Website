import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Puzzle, Monitor, Gamepad2, Box, Network, Users, Settings, Zap, ChevronRight, Check } from 'lucide-react';
import { Card } from '../../components/ui';
import { SectionHeader, CTASection } from '../../components/common';
import { useTheme } from '../../contexts/ThemeContext';
import { iconSizes } from '../../styles/theme';

export default function SystemIntegrationPage() {
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
            System Integration
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
            Live, Virtual, and Constructive (LVC) integration for comprehensive training environments
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="#lvc" className="btn-primary">
              LVC Integration
            </Link>
            <Link to="#partners" className="btn-secondary">
              Partner Systems
            </Link>
          </div>
        </div>
      </section>

      <LVCSection isDark={isDark} />
      <PartnersSection isDark={isDark} />
      <EXCONSection isDark={isDark} />
      <CTASection
        title="Integrate Your Training Systems"
        subtitle="Contact our team to discuss integration requirements and solutions."
      />
    </div>
  );
}

function LVCSection({ isDark }) {
  const lvcTypes = [
    {
      icon: <Users size={iconSizes.xl} />,
      title: 'Live',
      desc: 'Real soldiers with instrumented equipment in physical training environments',
      features: ['MILES integration', 'TSPI tracking', 'Biometric monitoring', 'Real-time feedback'],
    },
    {
      icon: <Monitor size={iconSizes.xl} />,
      title: 'Virtual',
      desc: 'Simulated environments with real operators in immersive training scenarios',
      features: ['Flight simulators', 'Ground vehicle trainers', 'Networked operations', 'Scenario injection'],
    },
    {
      icon: <Gamepad2 size={iconSizes.xl} />,
      title: 'Constructive',
      desc: 'Computer-generated entities and wargaming for large-scale exercises',
      features: ['Entity simulation', 'Behavior modeling', 'Threat generation', 'Staff training'],
    },
  ];

  return (
    <section id="lvc" className="section-padding container-main">
      <SectionHeader
        tag="LVC INTEGRATION"
        title="Live, Virtual, Constructive"
        subtitle="Seamlessly integrate all training domains for comprehensive exercise environments"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {lvcTypes.map((type, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="xl" className="h-full">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                isDark ? 'bg-teal-900/30' : 'bg-teal-100'
              }`}>
                <div className={isDark ? 'text-teal-400' : 'text-teal-600'}>
                  {type.icon}
                </div>
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                {type.title}
              </h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                {type.desc}
              </p>
              <ul className="space-y-2">
                {type.features.map((feature, j) => (
                  <li key={j} className={`flex items-center gap-2 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                    <Check size={14} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function PartnersSection({ isDark }) {
  const partners = [
    {
      name: 'Cubic',
      integrations: ['ZigBee Detectors', 'Force on Force Training'],
    },
    {
      name: 'GDMS',
      integrations: ['MK19', 'GCV'],
    },
    {
      name: 'LMCO',
      integrations: ['CDF', 'Hybrid', 'GCV'],
    },
    {
      name: 'Ravenswood',
      integrations: ['GCV'],
    },
    {
      name: 'FN',
      integrations: ['Hybrid', '5-Watt Modem'],
    },
  ];

  return (
    <section id="partners" className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="PARTNER INTEGRATIONS"
          title="Next Generation Training Partners"
          subtitle="Proven integration with leading defense contractors and training systems"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card size="lg" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
                <h4 className={`text-lg font-bold mb-3 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
                  {partner.name}
                </h4>
                <ul className="space-y-2">
                  {partner.integrations.map((integration, j) => (
                    <li key={j} className={`flex items-center gap-2 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                      <Check size={14} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
                      {integration}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EXCONSection({ isDark }) {
  const exconSystems = [
    { name: 'STIA', desc: 'Situational Training Intelligence Architecture' },
    { name: 'HITS', desc: 'Homestation Instrumentation Training System' },
    { name: 'XLCC', desc: 'Exercise Lifecycle Command and Control' },
    { name: 'TAK', desc: 'Team Awareness Kit integration' },
  ];

  const saDevices = [
    { name: 'Biometrics', desc: 'Soldier health monitoring integration' },
    { name: 'Vibration System', desc: 'Haptic feedback for training realism' },
    { name: 'Panic Button', desc: 'Emergency alert integration' },
  ];

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="EXERCISE CONTROL"
        title="EXCON System Integration"
        subtitle="Comprehensive integration with exercise control and situational awareness systems"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* EXCON Systems */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card size="xl" className="h-full">
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
              Exercise Controllers
            </h4>
            <div className="space-y-4">
              {exconSystems.map((system, i) => (
                <div key={i} className={`pb-4 ${
                  i < exconSystems.length - 1 ? (isDark ? 'border-b border-white/5' : 'border-b border-light-200') : ''
                }`}>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-light-900'}`}>
                    {system.name}
                  </span>
                  <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                    {system.desc}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* SA Devices */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card size="xl" className="h-full">
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
              Situational Awareness Devices
            </h4>
            <div className="space-y-4">
              {saDevices.map((device, i) => (
                <div key={i} className={`pb-4 ${
                  i < saDevices.length - 1 ? (isDark ? 'border-b border-white/5' : 'border-b border-light-200') : ''
                }`}>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-light-900'}`}>
                    {device.name}
                  </span>
                  <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                    {device.desc}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
