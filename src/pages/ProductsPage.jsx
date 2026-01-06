import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Monitor, Globe, ChevronRight } from 'lucide-react';
import { Card } from '../components/ui';
import { SectionHeader, CTASection } from '../components/common';
import { PageSectionNav, SectionDots } from '../components/navigation';
import { useTheme } from '../contexts/ThemeContext';
import { iconSizes } from '../styles/theme';

// Product images
import aresVImg from '../assets/products/ares-v.webp';
import androidTedImg from '../assets/products/android-ted.webp';
import wifiHalowImg from '../assets/products/wifi-halow.webp';
import zeus5gImg from '../assets/products/zeus-5g.webp';

// Hero image
import productsHeroImg from '../assets/TED_AI-EnabledSensor_and_EmitterFusionEngine_v2/TED_AI-EnabledSensor_and_EmitterFusionEngine_v2.jpg';

// Software product images
import takMonitorImg from '../assets/TAK-Monitor.png';
import terrainImg from '../assets/3D-Terrain.png';
import athenaReviewImg from '../assets/Athena-Review.png';
import athenaNetImg from '../assets/Athena-Net.png';
import athenaOracleImg from '../assets/Athena-Oracle.png';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'hardware', label: 'Hardware' },
  { id: 'software', label: 'Software' },
];

export default function ProductsPage() {
  const { isDark } = useTheme();

  return (
    <div className="pt-20">
      <PageSectionNav sections={sections} />
      <SectionDots sections={sections} />

      <HeroSection isDark={isDark} />
      <HardwareSection isDark={isDark} />
      <SoftwareSection isDark={isDark} />
      <CTASection
        title="Ready to Learn More?"
        subtitle="Contact our team for detailed specifications and integration options."
      />
    </div>
  );
}

function HeroSection({ isDark }) {
  return (
    <section id="overview" className="section-padding container-main scroll-mt-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl mx-auto"
      >
        {/* Hero Image */}
        <div className="mb-8">
          <img
            src={productsHeroImg}
            alt="TED AI-Enabled Sensor and Emitter Fusion Engine"
            className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg"
          />
        </div>
        <span className="tag-base tag-primary mb-4 inline-block">PRODUCTS</span>
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
          Training Edge Devices & Software Solutions
        </h1>
        <p className={`text-lg leading-relaxed ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
          Rugged hardware and intelligent software designed for military training and tactical operations.
        </p>
      </motion.div>
    </section>
  );
}

function HardwareSection({ isDark }) {
  const sectionId = 'hardware';
  const products = [
    {
      image: aresVImg,
      name: 'ARES',
      subtitle: 'The Smart Edge for Live Training Instrumentation',
      descriptionLines: [
        '- Soldier-worn Training Edge Device (TED)',
        '- Multi-modal connectivity: 5G | Mesh | Long-range links',
        '- Seamless integration with training infrastructure',
      ],
      path: '/products/ares-v',
      features: ['5G/4G Cellular', 'Mesh Networking', 'Edge AI', 'Sensor Fusion'],
    },
    {
      image: androidTedImg,
      name: 'Android TED (A TED)',
      description: 'OC tool based on modified COTS 5G phone with IR capabilities for exercise control and management.',
      path: '/products/android-ted',
      features: ['ATAK Base EXCON', 'Exercise Management', 'PTT Voice Comms', 'IR Emitter'],
    },
    {
      image: wifiHalowImg,
      name: 'HERMES',
      subtitle: 'High Fidelity Long-Range HaLow.',
      descriptionLines: [
        '- 5W Wi-Fi HaLow modem for extended range',
        '- Resilient connectivity for distributed edge networks',
        '- Backhaul and node expansion for wide-area training',
      ],
      path: '/products/Wi-Fi-Halow',
      features: ['IEEE 802.11 AH', 'Mesh Networking', 'Sub-1 GHz', 'Adaptive Power', 'Adaptive Modulation'],
    },
    {
      image: zeus5gImg,
      name: 'ZEUS',
      subtitle: 'Instant 5G Tactical Coverage — Anywhere.',
      descriptionLines: [
        '- Deployable 5G Network-in-a-Box',
        '- Rapid private 5G deployment for ranges and sites',
        '- Scalable coverage and local services',
      ],
      path: '/products/Zeus',
      features: ['Radio Access Network (RAN) with 5G base stations', 'Spectrum: licensed, shared such as CBRS, or unlicensed'],
    },
  ];

  return (
    <section id={sectionId} className="section-padding container-main scroll-mt-36">
      <SectionHeader
        tag="HARDWARE"
        title="Training Devices & Hardware"
        subtitle="Rugged, field-proven hardware for military training and operations"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="xl" className="h-full flex flex-col">
              {/* Product image or icon fallback */}
              {product.image ? (
                <div className={`w-full h-48 rounded-xl overflow-hidden mb-4 ${
                  isDark ? 'bg-primary-navy/20' : 'bg-light-100'
                }`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                  isDark ? 'bg-primary-navy/30' : 'bg-primary-navy/10'
                }`}>
                  <div className={isDark ? 'text-primary-light' : 'text-primary-navy'}>
                    {product.icon}
                  </div>
                </div>
              )}
              <h3 className={`text-xl font-bold ${product.subtitle ? 'mb-1' : 'mb-2'} ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
                {product.name}
              </h3>
              {product.subtitle && (
                <p className={`text-sm font-semibold mb-2 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
                  {product.subtitle}
                </p>
              )}
              {product.descriptionLines ? (
                <div className={`text-sm mb-4 flex-grow space-y-1 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  {product.descriptionLines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              ) : (
                <p className={`text-sm mb-4 flex-grow ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  {product.description}
                </p>
              )}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, j) => (
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
                to={product.path}
                className={`inline-flex items-center gap-2 text-sm font-medium ${
                  isDark ? 'text-primary-light hover:text-primary-light/80' : 'text-primary-navy hover:text-primary-navy/80'
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

function SoftwareSection({ isDark }) {
  const sectionId = 'software';

  const opsModules = [
    {
      image: takMonitorImg,
      name: 'ATHENA VISION',
      subtitle: 'Real-Time TAK Visualization',
      path: '/products/network-monitoring',
    },
    {
      image: athenaReviewImg,
      name: 'ATHENA REVIEW',
      subtitle: 'AAR Playback & Analytics',
      path: '/products/network-monitoring',
    },
    {
      image: athenaNetImg,
      name: 'ATHENA NET',
      subtitle: 'Network Management',
      path: '/products/network-monitoring',
    },
    {
      image: athenaOracleImg,
      name: 'ATHENA ORACLE',
      subtitle: 'AI Planning & Node Placement',
      path: '/products/network-monitoring',
    },
  ];

  const coreCapabilities = [
    'TAK-based COP and live event visualization',
    'Real-time network monitoring, management, and troubleshooting',
    'AAR reconstruction, timelines, and performance analytics',
    'Over-the-air configuration and orchestration of devices and networks',
  ];

  return (
    <section id={sectionId} className="section-dark section-padding scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="SOFTWARE"
          title="ATHENA Software Platforms"
          subtitle="Unified software for real-time training operations, network management, AAR, and planning. TAK-based visualization with integrated orchestration and AI-assisted network planning."
          light
        />

        {/* ATHENA OPS Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Card size="xl" className={isDark ? 'bg-white/[0.02]' : 'bg-white'}>
            <h3
              className="text-2xl font-bold mb-1"
              style={{ color: isDark ? 'white' : '#111827' }}
            >
              ATHENA OPS
            </h3>
            <p
              className="text-base font-semibold mb-4"
              style={{ color: isDark ? 'white' : '#111827' }}
            >
              Unified Real-Time Training Operations and Insight
            </p>
            <h4
              className="text-sm font-semibold mb-3"
              style={{ color: isDark ? 'white' : '#111827' }}
            >
              Core Capabilities:
            </h4>
            <div
              className="text-sm mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1"
              style={{ color: isDark ? '#d1d5db' : '#374151' }}
            >
              {coreCapabilities.map((cap, i) => (
                <p key={i}>- {cap}</p>
              ))}
            </div>

            <h4
              className="text-sm font-semibold mb-4"
              style={{ color: isDark ? 'white' : '#111827' }}
            >
              Integrated Modules:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {opsModules.map((module, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-4 rounded-xl ${isDark ? 'bg-white/[0.03]' : 'bg-light-100'}`}
                >
                  {module.image && (
                    <div className={`w-12 h-12 rounded-lg overflow-hidden mb-3 ${
                      isDark ? 'bg-primary-navy/20' : 'bg-white'
                    }`}>
                      <img
                        src={module.image}
                        alt={module.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <h5
                    className="text-sm font-bold mb-1"
                    style={{ color: isDark ? 'white' : '#111827' }}
                  >
                    {module.name}
                  </h5>
                  <p
                    className="text-xs"
                    style={{ color: isDark ? '#d1d5db' : '#374151' }}
                  >
                    {module.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* ATHENA TERRAIN Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card size="xl" className={isDark ? 'bg-white/[0.02]' : 'bg-white'}>
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className={`w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 ${
                isDark ? 'bg-primary-navy/20' : 'bg-light-100'
              }`}>
                <img
                  src={terrainImg}
                  alt="ATHENA TERRAIN"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-grow">
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ color: isDark ? 'white' : '#111827' }}
                >
                  ATHENA TERRAIN
                </h3>
                <p
                  className="text-base font-semibold mb-3"
                  style={{ color: isDark ? 'white' : '#111827' }}
                >
                  High-Fidelity 3D Terrain Visualization for Training and Analysis
                </p>
                <div
                  className="text-sm space-y-1"
                  style={{ color: isDark ? '#d1d5db' : '#374151' }}
                >
                  <p>- Immersive 3D terrain and scenario visualization for planning, playback, and reconstruction</p>
                  <p>- Integrates with ATHENA OPS to enhance operational understanding and after action review outcomes</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-sm"
          style={{ color: isDark ? '#9ca3af' : '#374151' }}
        >
          Software platforms designed for planning, execution, and after action review of instrumented training events.
        </motion.p>
      </div>
    </section>
  );
}
