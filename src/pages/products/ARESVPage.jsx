import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Wifi, Radio, Shield, Zap, MapPin, Brain, Server, ChevronRight, Check } from 'lucide-react';
import { Card } from '../../components/ui';
import { SectionHeader, CTASection } from '../../components/common';
import { useTheme } from '../../contexts/ThemeContext';
import { iconSizes } from '../../styles/theme';

export default function ARESVPage() {
  const { isDark } = useTheme();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-dark-900 to-dark-950' : 'bg-gradient-to-b from-light-100 to-white'}`} />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative z-10 container-main text-center">
          <span className="tag-base tag-primary mb-4 inline-block">HARDWARE PRODUCT</span>
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
            ARES V
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
            AI-enabled soldier training device with advanced 5G connectivity and edge computing
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="#benefits" className="btn-primary">
              View Benefits
            </Link>
            <Link to="#specifications" className="btn-secondary">
              Specifications
            </Link>
          </div>
        </div>
      </section>

      <BenefitsSection isDark={isDark} />
      <DifferentiatorsSection isDark={isDark} />
      <HardwareSection isDark={isDark} />
      <SpecificationsSection isDark={isDark} />
      <IntegrationSection isDark={isDark} />
      <CTASection
        title="Ready to Deploy ARES V?"
        subtitle="Contact our team for integration support and deployment options."
      />
    </div>
  );
}

function BenefitsSection({ isDark }) {
  const benefits = [
    { icon: <Cpu size={iconSizes.lg} />, title: 'Single Training Device', desc: 'Multiple use cases for training & testing in one platform' },
    { icon: <Shield size={iconSizes.lg} />, title: 'Enhanced Training Realism', desc: 'High-fidelity training scenarios with realistic feedback' },
    { icon: <Radio size={iconSizes.lg} />, title: 'Extended Coverage', desc: '5-Watt mesh connectivity for expanded operational range' },
    { icon: <MapPin size={iconSizes.lg} />, title: 'Improved Situational Awareness', desc: 'Real-time soldier safety monitoring and alerts' },
    { icon: <Zap size={iconSizes.lg} />, title: 'MOUT/GPS-Denied Support', desc: 'Full operation in urban and GPS-denied environments' },
    { icon: <Server size={iconSizes.lg} />, title: 'Reduced O&M and CAPEX', desc: 'Lower operational costs with integrated solutions' },
  ];

  return (
    <section id="benefits" className="section-padding container-main">
      <SectionHeader
        tag="WHY ARES V"
        title="Key Benefits"
        subtitle="Comprehensive advantages for modern military training"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="lg" className="h-full">
              <div className="icon-box w-12 h-12 mb-4">
                {benefit.icon}
              </div>
              <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                {benefit.title}
              </h4>
              <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                {benefit.desc}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-8">
        <Card size="lg" variant="featured">
          <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
            Comprehensive Individual Soldier AAR
          </h4>
          <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
            Detailed after action review capabilities for individual soldier performance analysis, enabling targeted training improvements and mission readiness assessment.
          </p>
        </Card>
      </div>
    </section>
  );
}

function DifferentiatorsSection({ isDark }) {
  const differentiators = [
    'Submeter GPS Precision',
    'Cellular 5G/4G Worldwide Operation',
    '5-Watt MESH Connectivity',
    '5G & MESH Seamless Operation',
    'ZigBee IoT Connectivity',
    'HW/SW Integration Ease: Coral TPU, Biometrics, Vibration, SA Devices',
    'AI Engines/Docker Enabled',
    'Local NLP Processing',
    'Sensor Fusion System',
    'Trilateration Support',
    'Image & Speech Recognition',
  ];

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="COMPETITIVE ADVANTAGE"
          title="Key Differentiators"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {differentiators.map((diff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`flex items-start gap-3 p-4 rounded-lg ${
                isDark ? 'bg-white/[0.02] border border-white/5' : 'bg-white border border-light-300'
              }`}
            >
              <Check size={18} className={isDark ? 'text-teal-400 mt-0.5 flex-shrink-0' : 'text-teal-600 mt-0.5 flex-shrink-0'} />
              <span className={`text-sm ${isDark ? 'text-dark-200' : 'text-light-700'}`}>{diff}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HardwareSection({ isDark }) {
  const hardware = [
    { label: 'Processor', value: 'NXP i.MX 8M Quad Core ARM Cortex-A53' },
    { label: 'Memory', value: '4GB LPDDR4-2133 SDRAM' },
    { label: 'Storage', value: '128GB eMMC Flash' },
  ];

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="DEVICE HARDWARE"
        title="Core Hardware Specifications"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {hardware.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="lg" className="text-center h-full">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                isDark ? 'bg-teal-900/30' : 'bg-teal-100'
              }`}>
                <Cpu size={28} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
              </div>
              <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                {item.label}
              </h4>
              <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                {item.value}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SpecificationsSection({ isDark }) {
  const specifications = [
    { category: 'Cellular 5G', specs: [
      { label: '5G Frequency', value: '600 MHz – 6 GHz with carrier aggregation' },
      { label: '5G Bands (Sub 6)', value: '31 Bands' },
      { label: '4G Bands (LTE)', value: '30 Bands' },
      { label: '5G Architecture', value: 'NSA (Non-Standalone), SA (Standalone)' },
    ]},
    { category: 'Wireless Networks', specs: [
      { label: 'LPWAN', value: 'Wi-Fi HaLow (900 MHz ISM) Mesh Network with 5 Watts' },
      { label: 'WLAN', value: 'Wi-Fi 6' },
      { label: 'Personal Area Network', value: 'ZigBee, BLE (Bluetooth Low Energy)' },
      { label: 'NFC', value: 'NFC (read/write)' },
    ]},
    { category: 'Positioning & Navigation', specs: [
      { label: 'GNSS with RTK', value: 'Real-Time Kinematic with submeter accuracy' },
    ]},
    { category: 'Sensors', specs: [
      { label: 'Gyroscope', value: 'LSM6DSOTR' },
      { label: 'Accelerometer', value: 'LSM6DSOTR' },
      { label: 'Magnetometer', value: 'LIS2MDLTR' },
      { label: 'Barometer', value: 'ICP-20100' },
    ]},
    { category: 'Software & Security', specs: [
      { label: 'Operating System', value: 'Linux OS' },
      { label: 'Software Features', value: 'Dockers Support, Cell Edge KPI, LPAN/ZigBee Stack, LCS/Legacy MILES RTCA, LTEC/RTCA, MSMC Waveform/Scale, Stores TSPI & RTCA' },
      { label: 'Security', value: 'AES 256, Made in the USA, Optional FIPS 140-3' },
    ]},
    { category: 'Interfaces', specs: [
      { label: 'Wired Interfaces', value: 'RS-232, Ethernet, USB Type C' },
      { label: 'Additional Features', value: 'Programmable external button' },
    ]},
  ];

  return (
    <section id="specifications" className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="TECHNICAL SPECIFICATIONS"
          title="Complete Specifications"
          light
        />

        <div className="space-y-8 max-w-5xl mx-auto">
          {specifications.map((section, sectionIdx) => (
            <motion.div
              key={sectionIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIdx * 0.1 }}
            >
              <Card size="lg" className={isDark ? 'bg-white/[0.02]' : 'bg-white'}>
                <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
                  {section.category}
                </h3>
                <div className="space-y-3">
                  {section.specs.map((spec, i) => (
                    <div key={i} className={`flex flex-col sm:flex-row sm:items-start gap-2 pb-3 ${
                      i < section.specs.length - 1 ? (isDark ? 'border-b border-white/5' : 'border-b border-light-200') : ''
                    }`}>
                      <span className={`font-medium min-w-[200px] ${isDark ? 'text-white' : 'text-light-900'}`}>
                        {spec.label}
                      </span>
                      <span className={`${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegrationSection({ isDark }) {
  const integrations = {
    situationalAwareness: ['Biometrics', 'Vibration System', 'Panic Button'],
    exerciseControllers: ['STIA', 'HITS', 'XLCC', 'TAK'],
    nextGenTraining: [
      'Cubic: ZigBee Detectors, Force on Force Training',
      'GDMS: MK19, GCV',
      'LMCO: CDF, Hybrid, GCV',
      'Ravenswood: GCV',
      'FN: Hybrid, 5-Watt Modem',
    ],
  };

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="ECOSYSTEM"
        title="Integration Capabilities"
        subtitle="Seamless integration with existing training and operational systems"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card size="lg" className="h-full">
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
              Situational Awareness
            </h4>
            <ul className="space-y-2">
              {integrations.situationalAwareness.map((item, i) => (
                <li key={i} className={`flex items-center gap-2 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  <Check size={14} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Card size="lg" className="h-full">
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
              Exercise Controllers
            </h4>
            <ul className="space-y-2">
              {integrations.exerciseControllers.map((item, i) => (
                <li key={i} className={`flex items-center gap-2 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  <Check size={14} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card size="lg" className="h-full">
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
              Next Generation Training
            </h4>
            <ul className="space-y-2">
              {integrations.nextGenTraining.map((item, i) => (
                <li key={i} className={`flex items-center gap-2 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  <Check size={14} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
