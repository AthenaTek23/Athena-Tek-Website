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
      name: 'ARES V',
      description: 'AI-enabled soldier training device with advanced 5G connectivity and edge computing capabilities.',
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
      name: 'Wi-Fi Halow',
      description: 'Long-range, low-power IoT applications. Remote monitoring of distributed infrastructure.',
      path: '/products/Wi-Fi-Halow',
      features: ['IEEE 802.11 AH', 'Mesh Networking', 'Sub-1 GHz', 'Adaptive Power', 'Adaptive Modulation'],
    },
    {
      image: zeus5gImg,
      name: '5G Zeus',
      description: 'Dedicated cellular network deployed and operated for the exclusive use of a single organization.',
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
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                {product.name}
              </h3>
              <p className={`text-sm mb-4 flex-grow ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                {product.description}
              </p>
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
  const products = [
    {
      image: takMonitorImg,
      name: 'Network Monitoring System',
      description: 'Real-time TAK network monitoring and After Action Review for military training exercises.',
      path: '/products/network-monitoring',
      features: ['LIVE Mode', 'AAR Playback', 'Network Topology', 'Casualty Tracking'],
    },
    {
      image: terrainImg,
      name: 'One World Terrain Viewer (OWT)',
      description: '3D terrain visualization platform for geospatial analysis and mission planning.',
      path: '/products/owt-viewer',
      features: ['3D Tiles', 'CesiumJS', 'Terrain Mesh', 'Building Models'],
    },
  ];

  return (
    <section id={sectionId} className="section-dark section-padding scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="SOFTWARE"
          title="Software Solutions"
          subtitle="Web-based applications for monitoring, visualization, and analysis"
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card size="xl" className={`h-full flex flex-col ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
                {product.image ? (
                  <div className={`w-20 h-20 rounded-xl overflow-hidden mb-4 ${
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
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                  {product.name}
                </h3>
                <p className={`text-sm mb-4 flex-grow ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  {product.description}
                </p>
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
      </div>
    </section>
  );
}
