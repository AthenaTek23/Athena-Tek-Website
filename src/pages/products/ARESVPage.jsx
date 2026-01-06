import { motion } from 'framer-motion';
import { Cpu, Radio, Shield, Zap, MapPin, Server, Check } from 'lucide-react';
import { Card } from '../../components/ui';
import { SectionHeader, CTASection } from '../../components/common';
import { PageSectionNav, SectionDots } from '../../components/navigation';
import { useTheme } from '../../contexts/ThemeContext';
import { iconSizes } from '../../styles/theme';

// Product image
import aresVImg from '../../assets/products/ares-v.webp';

// Key Benefits images
import keyBenExtendedImg from '../../assets/ProductsKeyBen.png';
import keyBenMOUTImg from '../../assets/ProductsKeyBenMOUNT.png';
import keyBenSingleImg from '../../assets/ProductsKeyBenSingle.png';

// Additional Key Benefits images
import singleDeviceImg from '../../assets/SingleDevice.png';
import realismImg from '../../assets/Realism.png';
import extendCoverageImg from '../../assets/ExtendCoverage.png';
import situationalAwarenessImg from '../../assets/SituationalAwareness.png';
import omImg from '../../assets/O&M.png';

// Hardware Specification images
import processorImg from '../../assets/Processor.png';
import ramImg from '../../assets/RAM.png';
import storageImg from '../../assets/Storage.png';

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'benefits', label: 'Key Benefits' },
  { id: 'differentiators', label: 'Key Differentiators' },
  { id: 'hardware', label: 'Core Hardware' },
  { id: 'specifications', label: 'Complete Specifications' },
  { id: 'integration', label: 'Integration Capabilities' },
];

export default function ARESVPage() {
  const { isDark } = useTheme();

  return (
    <div className="pt-20">
      <PageSectionNav sections={sections} />
      <SectionDots sections={sections} />

      <HeroSection isDark={isDark} />
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

function HeroSection({ isDark }) {
  return (
    <section id="hero" className="py-8 md:py-12 lg:py-16 container-main scroll-mt-28 md:scroll-mt-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className={`w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 rounded-2xl flex items-center justify-center overflow-hidden ${
          isDark ? 'bg-primary-navy/20' : 'bg-light-100'
        }`}>
          <img src={aresVImg} alt="ARES V" className="w-full h-full object-contain" />
        </div>
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
          ARES V
        </h1>
        <p className={`text-xl md:text-2xl mb-6 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
          AI-Enabled Soldier Training Device
        </p>
        <p className={`text-base md:text-lg max-w-3xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
          Advanced 5G connectivity and edge computing capabilities for next-generation military training.
          A single device platform supporting multiple use cases for training and testing.
        </p>
      </motion.div>
    </section>
  );
}

function BenefitsSection({ isDark }) {
  const benefits = [
    { image: singleDeviceImg, title: 'Single Training Device', desc: 'Multiple use cases for training & testing in one platform' },
    { image: realismImg, title: 'Enhanced Training Realism', desc: 'High-fidelity training scenarios with realistic feedback' },
    { image: extendCoverageImg, title: 'Extended Coverage', desc: '5-Watt mesh connectivity for expanded operational range' },
    { image: situationalAwarenessImg, title: 'Improved Situational Awareness', desc: 'Real-time soldier safety monitoring and alerts' },
    { image: keyBenMOUTImg, title: 'MOUT/GPS-Denied Support', desc: 'Full operation in urban and GPS-denied environments' },
    { image: omImg, title: 'Reduced O&M and CAPEX', desc: 'Lower operational costs with integrated solutions' },
  ];

  return (
    <section id="benefits" className="py-5 md:py-7 lg:py-10 container-main scroll-mt-28 md:scroll-mt-36">
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
              {benefit.image ? (
                <div className={`w-14 h-14 rounded-xl overflow-hidden mb-4 ${
                  isDark ? 'bg-primary-navy/20' : 'bg-light-100'
                }`}>
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="icon-box w-12 h-12 mb-4">
                  {benefit.icon}
                </div>
              )}
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
    <section id="differentiators" className="section-dark py-5 md:py-7 lg:py-10 scroll-mt-28 md:scroll-mt-36">
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
              <Check size={18} className={isDark ? 'text-primary-light mt-0.5 flex-shrink-0' : 'text-primary-navy mt-0.5 flex-shrink-0'} />
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
    { image: processorImg, label: 'Processor', value: 'NXP i.MX 8M Quad Core ARM Cortex-A53' },
    { image: ramImg, label: 'Memory', value: '4GB LPDDR4-2133 SDRAM' },
    { image: storageImg, label: 'Storage', value: '128GB eMMC Flash' },
  ];

  return (
    <section id="hardware" className="py-5 md:py-7 lg:py-10 container-main scroll-mt-28 md:scroll-mt-36">
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
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden ${
                isDark ? 'bg-primary-navy/20' : 'bg-light-100'
              }`}>
                <img src={item.image} alt={item.label} className="w-full h-full object-contain" />
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
    <section id="specifications" className="section-dark py-5 md:py-7 lg:py-10 scroll-mt-28 md:scroll-mt-36">
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
                <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
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
    <section id="integration" className="py-5 md:py-7 lg:py-10 container-main scroll-mt-28 md:scroll-mt-36">
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
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
              Situational Awareness
            </h4>
            <ul className="space-y-2">
              {integrations.situationalAwareness.map((item, i) => (
                <li key={i} className={`flex items-center gap-2 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  <Check size={14} className={isDark ? 'text-primary-light' : 'text-primary-navy'} />
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
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
              Exercise Controllers
            </h4>
            <ul className="space-y-2">
              {integrations.exerciseControllers.map((item, i) => (
                <li key={i} className={`flex items-center gap-2 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  <Check size={14} className={isDark ? 'text-primary-light' : 'text-primary-navy'} />
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
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
              Next Generation Training
            </h4>
            <ul className="space-y-2">
              {integrations.nextGenTraining.map((item, i) => (
                <li key={i} className={`flex items-center gap-2 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  <Check size={14} className={isDark ? 'text-primary-light' : 'text-primary-navy'} />
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
