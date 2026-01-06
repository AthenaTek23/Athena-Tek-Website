import { motion } from 'framer-motion';
import { Cpu, Wifi, MonitorPlay, Shield, Check, Zap, Radio } from 'lucide-react';
import { Card } from '../../components/ui';
import { SectionHeader, CTASection } from '../../components/common';
import { PageSectionNav, SectionDots } from '../../components/navigation';
import { useTheme } from '../../contexts/ThemeContext';
import { iconSizes } from '../../styles/theme';

// Hero image
import tedEcosystemImg from '../../assets/TED-EcoSystem.png';

// Device images
import tedImg from '../../assets/TED.png';
import tedMImg from '../../assets/TED-M.png';
import atedImg from '../../assets/ATED.png';

// Capabilities images
import multiNetworkImg from '../../assets/multiNetwork.png';
import secureEdgeImg from '../../assets/secureEdge.png';
import integratedSensImg from '../../assets/integratedSens.png';
import aiWorkflowsImg from '../../assets/AI-WorkFlows.png';

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'devices', label: 'Device Family' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'integration', label: 'Integration' },
];

export default function TEDEcosystemPage() {
  const { isDark } = useTheme();

  return (
    <div className="pt-20">
      <PageSectionNav sections={sections} />
      <SectionDots sections={sections} />

      <HeroSection isDark={isDark} />
      <DevicesSection isDark={isDark} />
      <CapabilitiesSection isDark={isDark} />
      <IntegrationSection isDark={isDark} />
      <CTASection
        title="Ready to Deploy the TED Ecosystem?"
        subtitle="Contact our team for integration support and deployment options."
      />
    </div>
  );
}

function HeroSection({ isDark }) {
  return (
    <section id="hero" className="py-8 md:py-12 lg:py-16 container-main scroll-mt-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl mx-auto"
      >
        <div className="mb-8">
          <img
            src={tedEcosystemImg}
            alt="TED Ecosystem"
            className="w-full max-w-[384px] mx-auto rounded-2xl shadow-lg"
          />
        </div>
        <span className="tag-base tag-primary mb-4 inline-block">TED ECOSYSTEM</span>
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
          TED Ecosystem
        </h1>
        <p className={`text-xl md:text-2xl mb-6 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
          Training & T&E Edge Devices
        </p>
        <p className={`text-base md:text-lg max-w-4xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
          Athena-Tek's edge device ecosystem bridges network focus into deployed solutions for both Training and Test & Evaluation. At the center is the Training Edge Device (TED)—a one-of-a-kind, sensor-rich, multi-network platform built to deliver AI-enabled workflows at the point of need.
        </p>
      </motion.div>
    </section>
  );
}

function DevicesSection({ isDark }) {
  const devices = [
    {
      image: tedImg,
      name: 'TED',
      subtitle: 'Training Edge Device',
      description: 'TED combines multi-modal communications, secure edge computing, and integrated sensing to support real-time data capture, local processing, and synchronization across range systems and enterprise analytics. It is engineered to function in DDIL conditions and maintain operational continuity when connectivity is limited, buffering critical data and synchronizing when communications return.',
      features: ['Multi-modal communications', 'Secure edge computing', 'Integrated sensing', 'DDIL operation', 'Data buffering & sync'],
    },
    {
      image: tedMImg,
      name: 'TED-M',
      subtitle: 'MANET Variant',
      description: 'TED-M is a MANET-focused variant optimized for infrastructure-less environments. It provides mesh networking capabilities for operations where traditional connectivity is unavailable, extending coverage and maintaining communications in challenging terrain.',
      features: ['Infrastructure-less operation', 'Mesh networking', 'Extended range', 'Self-healing topology', 'Optimized for field ops'],
    },
    {
      image: atedImg,
      name: 'A-TED',
      subtitle: 'ATAK-Integrated Controller',
      description: 'A-TED is an ATAK-integrated operational controller device that supports pairing, exercise management, and field operations for OC/EXCON roles. It provides a flexible interface for managing training exercises and coordinating field operations.',
      features: ['ATAK integration', 'Exercise management', 'OC/EXCON support', 'Device pairing', 'Field operations'],
    },
  ];

  return (
    <section id="devices" className="section-dark py-8 md:py-12 lg:py-16 scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="DEVICE FAMILY"
          title="The TED Device Family"
          subtitle="A flexible baseline supporting modernization while maintaining interoperability"
          light
        />

        <div className="space-y-8">
          {devices.map((device, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card size="xl" className={`${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-xl overflow-hidden ${
                      isDark ? 'bg-primary-navy/20' : 'bg-light-100'
                    }`}>
                      <img src={device.image} alt={device.name} className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-1 !text-black">
                      {device.name}
                    </h3>
                    <p className="text-sm font-medium mb-3 !text-black">
                      {device.subtitle}
                    </p>
                    <p className="text-sm mb-4 !text-black">
                      {device.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {device.features.map((feature, j) => (
                        <span
                          key={j}
                          className="text-xs px-3 py-1 rounded-full bg-light-200 !text-black"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
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

function CapabilitiesSection({ isDark }) {
  const capabilities = [
    { image: multiNetworkImg, title: 'Multi-Network Communications', desc: 'Support for 5G/4G, mesh/MANET, and hybrid connectivity modes' },
    { image: secureEdgeImg, title: 'Secure Edge Computing', desc: 'On-device processing for real-time decision support' },
    { image: integratedSensImg, title: 'Integrated Sensing', desc: 'Built-in sensors for position, orientation, and environmental data' },
    { image: aiWorkflowsImg, title: 'AI-Enabled Workflows', desc: 'Edge AI capabilities for inference and data processing' },
  ];

  return (
    <section id="capabilities" className="py-8 md:py-12 lg:py-16 container-main scroll-mt-36">
      <SectionHeader
        tag="CORE CAPABILITIES"
        title="What TED Delivers"
        subtitle="Sensor-rich, multi-network platform with AI at the edge"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {capabilities.map((cap, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="lg" className="h-full text-center">
              <div className={`w-14 h-14 rounded-xl overflow-hidden mx-auto mb-4 ${isDark ? 'bg-primary-navy/20' : 'bg-light-100'}`}>
                <img src={cap.image} alt={cap.title} className="w-full h-full object-contain" />
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
            Operational Continuity in DDIL Conditions
          </h4>
          <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
            TED is engineered to function in DDIL (Denied, Degraded, Intermittent, and Limited) conditions and maintain operational continuity when connectivity is limited. The device buffers critical data locally and automatically synchronizes when communications return, ensuring no data loss during connectivity gaps. This capability is essential for realistic training scenarios that simulate contested communications environments.
          </p>
        </Card>
      </motion.div>
    </section>
  );
}

function IntegrationSection({ isDark }) {
  const integrationPoints = [
    'Range instrumentation systems',
    'Enterprise analytics platforms',
    'Exercise control systems',
    'After-action review pipelines',
    'Existing training architectures',
    'Legacy instrumentation systems',
  ];

  return (
    <section id="integration" className="section-dark py-8 md:py-12 lg:py-16 scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="END-TO-END SOLUTIONS"
          title="Integration Expertise"
          subtitle="More than devices—complete integration into your ecosystem"
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card size="xl" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
                Integration Points
              </h4>
              <div className="space-y-3">
                {integrationPoints.map((point, i) => (
                  <div key={i} className={`flex items-center gap-3 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                    <Check size={16} className={`flex-shrink-0 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`} />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card size="xl" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
                Reduced Risk, Accelerated Deployment
              </h4>
              <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                Together, the TED device family provides a flexible baseline that supports modernization while maintaining interoperability with existing training and instrumentation architectures. Athena-Tek delivers not just the device, but the integration expertise to connect edge systems into end-to-end solutions—reducing risk and accelerating deployment for training and test missions.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
