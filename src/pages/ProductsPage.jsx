import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Smartphone, Monitor, Globe, ChevronRight } from 'lucide-react';
import { Card } from '../components/ui';
import { SectionHeader, CTASection } from '../components/common';
import { useTheme } from '../contexts/ThemeContext';
import { iconSizes } from '../styles/theme';

export default function ProductsPage() {
  const { isDark } = useTheme();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-dark-900 to-dark-950' : 'bg-gradient-to-b from-light-100 to-white'}`} />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative z-10 container-main text-center">
          <span className="tag-base tag-primary mb-4 inline-block">ATHENA-TEK PRODUCTS</span>
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
            Our Product Line
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
            Engineered for precision, resilience, and real-world readiness
          </p>
        </div>
      </section>

      <HardwareSection isDark={isDark} />
      <SoftwareSection isDark={isDark} />
      <CTASection
        title="Ready to Learn More?"
        subtitle="Contact our team for detailed specifications and integration options."
      />
    </div>
  );
}

function HardwareSection({ isDark }) {
  const products = [
    {
      icon: <Smartphone size={iconSizes.xl} />,
      name: 'Android TED (A TED)',
      description: 'OC tool based on modified COTS 5G phone with IR capabilities for exercise control and management.',
      path: '/products/android-ted',
      features: ['ATAK Base EXCON', 'Exercise Management', 'PTT Voice Comms', 'IR Emitter'],
    },
    {
      icon: <Cpu size={iconSizes.xl} />,
      name: 'ARES V',
      description: 'AI-enabled soldier training device with advanced 5G connectivity and edge computing capabilities.',
      path: '/products/ares-v',
      features: ['5G/4G Cellular', 'Mesh Networking', 'Edge AI', 'Sensor Fusion'],
    },
  ];

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="HARDWARE"
        title="Training Devices & Hardware"
        subtitle="Rugged, field-proven hardware for military training and operations"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {products.map((product, i) => (
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
                  {product.icon}
                </div>
              </div>
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

function SoftwareSection({ isDark }) {
  const products = [
    {
      icon: <Monitor size={iconSizes.xl} />,
      name: 'Network Monitoring System',
      description: 'Real-time TAK network monitoring and After Action Review for military training exercises.',
      path: '/products/network-monitoring',
      features: ['LIVE Mode', 'AAR Playback', 'Network Topology', 'Casualty Tracking'],
    },
    {
      icon: <Globe size={iconSizes.xl} />,
      name: 'One World Terrain Viewer (OWT)',
      description: '3D terrain visualization platform for geospatial analysis and mission planning.',
      path: '/products/owt-viewer',
      features: ['3D Tiles', 'CesiumJS', 'Terrain Mesh', 'Building Models'],
    },
  ];

  return (
    <section className="section-dark section-padding">
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
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                  isDark ? 'bg-teal-900/30' : 'bg-teal-100'
                }`}>
                  <div className={isDark ? 'text-teal-400' : 'text-teal-600'}>
                    {product.icon}
                  </div>
                </div>
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
