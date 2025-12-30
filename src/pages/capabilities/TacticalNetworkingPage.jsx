import { motion } from 'framer-motion';
import { Network, Radio, Wifi, Globe, Shield, Check, Server, MapPin } from 'lucide-react';
import { Card } from '../../components/ui';
import { SectionHeader, CTASection } from '../../components/common';
import { PageSectionNav, SectionDots } from '../../components/navigation';
import { useTheme } from '../../contexts/ThemeContext';
import { iconSizes } from '../../styles/theme';

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'network-types', label: 'Network Types' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'outcomes', label: 'Outcomes' },
];

export default function TacticalNetworkingPage() {
  const { isDark } = useTheme();

  return (
    <div className="pt-20">
      <PageSectionNav sections={sections} />
      <SectionDots sections={sections} />

      <HeroSection isDark={isDark} />
      <NetworkTypesSection isDark={isDark} />
      <CapabilitiesSection isDark={isDark} />
      <OutcomesSection isDark={isDark} />
      <CTASection
        title="Ready to Modernize Your Network?"
        subtitle="Contact our team to discuss multi-modal networking solutions for your mission."
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
        className="text-center"
      >
        <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
          isDark ? 'bg-primary-navy/30' : 'bg-primary-navy/10'
        }`}>
          <Network size={48} className={isDark ? 'text-primary-light' : 'text-primary-navy'} />
        </div>
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
          Multi-Modal Tactical Networking
        </h1>
        <p className={`text-xl md:text-2xl mb-6 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
          5G | Mesh | Hybrid Backhaul
        </p>
        <p className={`text-base md:text-lg max-w-4xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
          Modern training and test environments require more than connectivity—they require networks that are resilient, adaptable, and outcome-driven. Athena-Tek designs and deploys multi-modal architectures that support operations across home stations, CTCs, MOUT sites, and austere ranges under denied, degraded, intermittent, and limited connectivity (DDIL) conditions.
        </p>
      </motion.div>
    </section>
  );
}

function NetworkTypesSection({ isDark }) {
  const networkTypes = [
    {
      icon: <Radio size={iconSizes.xl} />,
      title: '5G/4G Networks',
      desc: 'Private and hybrid 5G/4G networks including FR1 and CBRS use cases for high-bandwidth, low-latency communications.'
    },
    {
      icon: <Wifi size={iconSizes.xl} />,
      title: 'MANET/Mesh',
      desc: 'Infrastructure-less MANET/mesh capability for operations where traditional network infrastructure is unavailable.'
    },
    {
      icon: <Globe size={iconSizes.xl} />,
      title: 'SATCOM Backhaul',
      desc: 'Optional SATCOM-enabled backhaul for global connectivity and resilient communications in remote locations.'
    },
    {
      icon: <Shield size={iconSizes.xl} />,
      title: 'DDIL Resilient',
      desc: 'Designed for denied, degraded, intermittent, and limited connectivity environments with automatic failover.'
    },
  ];

  return (
    <section id="network-types" className="section-dark py-8 md:py-12 lg:py-16 scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="NETWORK ARCHITECTURE"
          title="Multi-Modal Network Types"
          subtitle="Integrated network solutions for every operational environment"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {networkTypes.map((type, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card size="xl" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                  isDark ? 'bg-primary-navy/30' : 'bg-primary-navy/10'
                }`}>
                  <div className={isDark ? 'text-primary-light' : 'text-primary-navy'}>
                    {type.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-light-900'}`}>
                  {type.title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  {type.desc}
                </p>
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
    'Supporting operations across home stations, CTCs, MOUT sites, and austere ranges',
    'Secure, low-latency data flow between soldiers, platforms, instrumentation systems, and exercise control',
    'Instrumentation data capture and range safety workflows',
    'After-action review pipelines and enterprise integration',
    'RF propagation modeling and network simulation',
    'Scalable from small unit events to enterprise-level operations',
    'Network performance, coverage, and quality-of-service alignment to mission requirements',
    'Field-ready deployment and integration support',
  ];

  return (
    <section id="capabilities" className="py-8 md:py-12 lg:py-16 container-main scroll-mt-36">
      <SectionHeader
        tag="WHAT WE DELIVER"
        title="Network Design Capabilities"
        subtitle="Athena-Tek engineers networks with training and T&E outcomes in mind"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card size="xl" variant="featured" className="h-full">
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
              Integrated Network Approach
            </h4>
            <p className={`text-sm mb-6 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
              We integrate private and hybrid 5G/4G networks (including FR1 and CBRS use cases) with infrastructure-less MANET/mesh capability and optional SATCOM-enabled backhaul. This approach allows units and test teams to operate continuously while maintaining secure, low-latency data flow between soldiers, platforms, instrumentation systems, and exercise control.
            </p>
            <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
              Our designs scale from small unit events to enterprise-level operations, ensuring that network performance, coverage, and quality-of-service align to the mission.
            </p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Card size="xl" className="h-full">
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
              Capability Highlights
            </h4>
            <div className="space-y-3">
              {capabilities.map((cap, i) => (
                <div key={i} className={`flex items-start gap-3 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  <Check size={16} className={`flex-shrink-0 mt-1 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`} />
                  <span className="text-sm">{cap}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function OutcomesSection({ isDark }) {
  const outcomes = [
    { icon: <Server size={iconSizes.lg} />, title: 'Connectivity to Capability', desc: 'Networks that turn connectivity into capability—where and when it matters most' },
    { icon: <MapPin size={iconSizes.lg} />, title: 'Field-Ready Deployment', desc: 'From modeling and simulation of wireless performance to field-ready deployment and integration' },
    { icon: <Shield size={iconSizes.lg} />, title: 'Mission-Aligned Performance', desc: 'Network performance, coverage, and QoS aligned to mission requirements' },
  ];

  return (
    <section id="outcomes" className="section-dark py-8 md:py-12 lg:py-16 scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="MISSION OUTCOMES"
          title="From Connectivity to Capability"
          subtitle="Delivering networks that support real-world training and test outcomes"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card size="lg" className={`h-full text-center ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
                <div className="icon-box w-14 h-14 mx-auto mb-4">
                  {outcome.icon}
                </div>
                <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                  {outcome.title}
                </h4>
                <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  {outcome.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
