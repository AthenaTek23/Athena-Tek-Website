import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Network, Radio, Target, Shield, Cpu, Wifi, Users, Zap, Globe, Server, ChevronRight, Check } from 'lucide-react';
import { Card } from '../components/ui';
import { SectionHeader, CTASection } from '../components/common';
import { useTheme } from '../contexts/ThemeContext';
import { iconSizes } from '../styles/theme';

export default function CapabilitiesPage() {
  const { isDark } = useTheme();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-dark-900 to-dark-950' : 'bg-gradient-to-b from-light-100 to-white'}`} />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative z-10 container-main text-center">
          <span className="tag-base tag-primary mb-4 inline-block">WHAT WE DO</span>
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
            Our Capabilities
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
            Comprehensive solutions for military training, network infrastructure, and AI-enabled systems
          </p>
        </div>
      </section>

      <NetworkCapabilitiesSection isDark={isDark} />
      <TrainingCapabilitiesSection isDark={isDark} />
      <TECapabilitiesSection isDark={isDark} />
      <AICapabilitiesSection isDark={isDark} />
      <CTASection
        title="Ready to Get Started?"
        subtitle="Contact our team to discuss how our capabilities can support your mission."
      />
    </div>
  );
}

function NetworkCapabilitiesSection({ isDark }) {
  const capabilities = [
    { icon: <Radio size={iconSizes.lg} />, title: '5G/LTE Networks', desc: 'Private cellular network design and deployment for secure, high-bandwidth communications' },
    { icon: <Wifi size={iconSizes.lg} />, title: 'Mesh Networks', desc: 'Extended coverage with 802.11ah Wi-Fi HaLow and multi-hop mesh topologies' },
    { icon: <Globe size={iconSizes.lg} />, title: 'NTN/Satellite', desc: 'Non-Terrestrial Network integration for global connectivity and resilient backhaul' },
    { icon: <Shield size={iconSizes.lg} />, title: 'Secure Communications', desc: 'AES-256 encryption and FIPS-compliant security across all network layers' },
  ];

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="NETWORK CAPABILITIES"
        title="Advanced Network Solutions"
        subtitle="Multi-bearer network architecture for mission-critical communications"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((cap, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="lg" className="h-full">
              <div className="icon-box w-12 h-12 mb-4">
                {cap.icon}
              </div>
              <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                {cap.title}
              </h4>
              <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                {cap.desc}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/services/network-design"
          className={`inline-flex items-center gap-2 text-sm font-medium ${
            isDark ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-700'
          }`}
        >
          Learn more about Network Design
          <ChevronRight size={16} />
        </Link>
      </div>
    </section>
  );
}

function TrainingCapabilitiesSection({ isDark }) {
  const trainingFeatures = [
    { title: 'Live Training Instrumentation', items: ['MILES integration', 'TSPI tracking', 'Real-time feedback', 'Soldier telemetry'] },
    { title: 'Training Devices', items: ['ARES V soldier device', 'Android TED (A TED)', 'ZigBee integration'] },
    { title: 'After Action Review', items: ['Network monitoring', 'Timeline playback', 'Performance analysis', 'Casualty tracking'] },
    { title: 'Exercise Control', items: ['STIA integration', 'HITS support', 'TAK connectivity', 'XLCC compatibility'] },
  ];

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="TRAINING CAPABILITIES"
          title="Live Training Solutions"
          subtitle="Comprehensive instrumentation and monitoring for realistic military training"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainingFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card size="lg" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
                <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
                  {feature.title}
                </h4>
                <ul className="space-y-2">
                  {feature.items.map((item, j) => (
                    <li key={j} className={`flex items-center gap-2 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                      <Check size={14} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/products/ares-v"
            className={`inline-flex items-center gap-2 text-sm font-medium ${
              isDark ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-700'
            }`}
          >
            Explore ARES V Training Device
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TECapabilitiesSection({ isDark }) {
  const teCapabilities = [
    { icon: <Target size={iconSizes.lg} />, title: 'Test Planning', desc: 'Comprehensive test planning and execution for complex defense systems' },
    { icon: <Server size={iconSizes.lg} />, title: 'Instrumentation', desc: 'Advanced instrumentation design and deployment for accurate data collection' },
    { icon: <Network size={iconSizes.lg} />, title: 'Data Analysis', desc: 'Real-time and post-test data analysis with visualization tools' },
    { icon: <Shield size={iconSizes.lg} />, title: 'Verification', desc: 'System verification and validation against requirements' },
  ];

  const teServices = [
    'Range instrumentation design',
    'TSPI collection and analysis',
    'RF spectrum monitoring',
    'Network performance testing',
    'Environmental testing support',
    'DT&E and OT&E support',
  ];

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="T&E CAPABILITIES"
        title="Test & Evaluation"
        subtitle="Comprehensive T&E support for defense acquisition programs"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {teCapabilities.map((cap, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="lg" className="h-full text-center">
              <div className="icon-box w-14 h-14 mx-auto mb-4">
                {cap.icon}
              </div>
              <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                {cap.title}
              </h4>
              <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                {cap.desc}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card size="xl" variant="featured">
          <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
            T&E Services
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teServices.map((service, i) => (
              <div key={i} className={`flex items-center gap-3 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                <Check size={18} className={`flex-shrink-0 ${isDark ? 'text-teal-400' : 'text-teal-600'}`} />
                <span className="text-sm">{service}</span>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </section>
  );
}

function AICapabilitiesSection({ isDark }) {
  const aiCapabilities = [
    { icon: <Cpu size={iconSizes.lg} />, title: 'Edge AI', desc: 'On-device AI processing for real-time decision support without cloud dependency' },
    { icon: <Users size={iconSizes.lg} />, title: 'Sensor Fusion', desc: 'Multi-sensor data integration for enhanced situational awareness' },
    { icon: <Zap size={iconSizes.lg} />, title: 'NLP Processing', desc: 'Local natural language processing for voice commands and interaction' },
    { icon: <Target size={iconSizes.lg} />, title: 'Image Recognition', desc: 'Computer vision capabilities for target identification and tracking' },
  ];

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="AI CAPABILITIES"
          title="AI-Enabled Systems"
          subtitle="Edge computing and artificial intelligence for tactical applications"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiCapabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card size="lg" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
                <div className="icon-box w-12 h-12 mb-4">
                  {cap.icon}
                </div>
                <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                  {cap.title}
                </h4>
                <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  {cap.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/innovation"
            className={`inline-flex items-center gap-2 text-sm font-medium ${
              isDark ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-700'
            }`}
          >
            Explore our Innovation efforts
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
