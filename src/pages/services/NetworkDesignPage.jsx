import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wifi, Radio, Satellite, Server, Shield, Zap, Network, Globe, ChevronRight, Check } from 'lucide-react';
import { Card } from '../../components/ui';
import { SectionHeader, CTASection } from '../../components/common';
import { useTheme } from '../../contexts/ThemeContext';
import { iconSizes } from '../../styles/theme';

export default function NetworkDesignPage() {
  const { isDark } = useTheme();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-dark-900 to-dark-950' : 'bg-gradient-to-b from-light-100 to-white'}`} />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative z-10 container-main text-center">
          <span className="tag-base tag-primary mb-4 inline-block">TECHNICAL SERVICES</span>
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
            Network Design 5G/LTE
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
            Private 5G and LTE network solutions for mission-critical communications
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="#5g" className="btn-primary">
              5G Networks
            </Link>
            <Link to="#architecture" className="btn-secondary">
              Architecture
            </Link>
          </div>
        </div>
      </section>

      <NetworkTypesSection isDark={isDark} />
      <ArchitectureSection isDark={isDark} />
      <FeaturesSection isDark={isDark} />
      <IntegrationSection isDark={isDark} />
      <CTASection
        title="Design Your Private Network"
        subtitle="Contact our team to discuss 5G/LTE network design and deployment."
      />
    </div>
  );
}

function NetworkTypesSection({ isDark }) {
  const networkTypes = [
    {
      icon: <Radio size={iconSizes.xl} />,
      title: '5G Networks',
      desc: 'Next-generation 5G network design for high-bandwidth, low-latency applications',
      features: [
        'Sub-6 GHz deployment',
        'NSA and SA architecture',
        'Ultra-low latency',
        'Massive MIMO support',
      ],
    },
    {
      icon: <Wifi size={iconSizes.xl} />,
      title: 'Private LTE',
      desc: 'Dedicated LTE networks for secure, reliable communications',
      features: [
        'Band 48 CBRS',
        'Private core network',
        'QoS prioritization',
        'Coverage optimization',
      ],
    },
    {
      icon: <Network size={iconSizes.xl} />,
      title: 'Mesh Networks',
      desc: 'Self-healing mesh topologies for extended coverage',
      features: [
        'Wi-Fi HaLow (802.11ah)',
        'Multi-hop routing',
        'Automatic failover',
        'Scalable deployment',
      ],
    },
  ];

  return (
    <section id="5g" className="section-padding container-main">
      <SectionHeader
        tag="NETWORK SOLUTIONS"
        title="Network Design Services"
        subtitle="Comprehensive design services for private wireless networks"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {networkTypes.map((type, i) => (
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
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
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

function ArchitectureSection({ isDark }) {
  const architectureElements = [
    { name: 'Radio Access Network (RAN)', desc: 'Base station and antenna system design' },
    { name: 'Core Network', desc: 'Private 5G/LTE core deployment' },
    { name: 'Transport Network', desc: 'Backhaul and fronthaul connectivity' },
    { name: 'Edge Computing', desc: 'MEC for low-latency applications' },
    { name: 'Network Management', desc: 'OSS/BSS and monitoring systems' },
    { name: 'Security', desc: 'End-to-end encryption and access control' },
  ];

  return (
    <section id="architecture" className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="ARCHITECTURE"
          title="Multi-Bearer Architecture"
          subtitle="Complete network architecture design from RAN to core"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {architectureElements.map((element, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card size="lg" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isDark ? 'bg-teal-900/30' : 'bg-teal-100'
                  }`}>
                    <span className={`font-bold text-sm ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-light-900'}`}>
                      {element.name}
                    </h4>
                    <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                      {element.desc}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection({ isDark }) {
  const features = [
    { icon: <Zap size={iconSizes.lg} />, title: 'Low Latency', desc: 'Sub-10ms latency for real-time applications' },
    { icon: <Shield size={iconSizes.lg} />, title: 'Security', desc: 'AES-256 encryption and FIPS compliance' },
    { icon: <Server size={iconSizes.lg} />, title: 'Reliability', desc: '99.999% availability with redundancy' },
    { icon: <Globe size={iconSizes.lg} />, title: 'Coverage', desc: 'Extended range with optimized RF design' },
  ];

  const bands = [
    { band: '5G Sub-6 GHz', spectrum: '600 MHz - 6 GHz', use: 'Wide area coverage' },
    { band: 'CBRS (Band 48)', spectrum: '3.5 GHz', use: 'Private LTE/5G' },
    { band: 'Wi-Fi HaLow', spectrum: '900 MHz ISM', use: 'Extended mesh' },
    { band: 'NTN/Satellite', spectrum: 'Ka/Ku band', use: 'Global backhaul' },
  ];

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="CAPABILITIES"
        title="Network Capabilities"
        subtitle="High-performance network features for mission-critical operations"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="lg" className="h-full text-center">
              <div className="icon-box w-14 h-14 mx-auto mb-4">
                {feature.icon}
              </div>
              <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                {feature.title}
              </h4>
              <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                {feature.desc}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Spectrum Bands */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card size="xl">
          <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
            Supported Spectrum Bands
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${isDark ? 'border-white/10' : 'border-light-300'}`}>
                  <th className={`text-left py-3 px-4 font-semibold ${isDark ? 'text-white' : 'text-light-900'}`}>Band</th>
                  <th className={`text-left py-3 px-4 font-semibold ${isDark ? 'text-white' : 'text-light-900'}`}>Spectrum</th>
                  <th className={`text-left py-3 px-4 font-semibold ${isDark ? 'text-white' : 'text-light-900'}`}>Primary Use</th>
                </tr>
              </thead>
              <tbody>
                {bands.map((band, i) => (
                  <tr key={i} className={`border-b ${isDark ? 'border-white/5' : 'border-light-200'}`}>
                    <td className={`py-3 px-4 font-medium ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>{band.band}</td>
                    <td className={`py-3 px-4 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>{band.spectrum}</td>
                    <td className={`py-3 px-4 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>{band.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}

function IntegrationSection({ isDark }) {
  const integrations = [
    'NTN/Satellite backhaul integration',
    'TAK (Team Awareness Kit) connectivity',
    'Edge computing deployment',
    'Multi-bearer seamless handoff',
    'GPS-denied environment support',
    'MOUT/urban environment optimization',
  ];

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="INTEGRATION"
          title="Advanced Integration"
          subtitle="Seamless integration with existing systems and emerging technologies"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {integrations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`flex items-center gap-3 p-4 rounded-lg ${
                isDark ? 'bg-white/[0.02] border border-white/5' : 'bg-white border border-light-300'
              }`}
            >
              <Check size={18} className={`flex-shrink-0 ${isDark ? 'text-teal-400' : 'text-teal-600'}`} />
              <span className={`text-sm ${isDark ? 'text-dark-200' : 'text-light-700'}`}>{item}</span>
            </motion.div>
          ))}
        </div>

        {/* NTN/Satellite Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl mx-auto"
        >
          <Card size="lg" variant="featured" className="text-center">
            <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
              isDark ? 'bg-teal-900/30' : 'bg-teal-100'
            }`}>
              <Satellite size={32} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
            </div>
            <h4 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
              NTN/Satellite Integration
            </h4>
            <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
              Non-Terrestrial Network integration for global connectivity and resilient backhaul in remote and contested environments.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
