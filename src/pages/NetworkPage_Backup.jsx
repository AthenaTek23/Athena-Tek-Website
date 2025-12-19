import { motion } from 'framer-motion';
import { Radio, Server, Wifi, Satellite, Globe, Layers, Check } from 'lucide-react';
import { Card } from '../components/ui';
import { PageHero, SectionHeader, CTASection } from '../components/common';

export default function NetworkPage() {
  return (
    <div>
      <PageHero
        tag="NETWORK FOCUSED"
        title="Global Networks. Non-Terrestrial Ready."
        subtitle="Expeditionary by Design"
        description="Resilient, multi-bearer network architectures purpose-built for Live Training and Test & Evaluation across the world's most challenging environments."
      />
      <ArchitectureSection />
      <NTNSection />
      <MeshSection />
      <CTASection />
    </div>
  );
}

function ArchitectureSection() {
  const networkTypes = [
    { icon: <Radio size={24} />, title: '5G O-RAN + SA/NSA', desc: 'High-throughput, low-latency networks for training and T&E' },
    { icon: <Server size={24} />, title: 'Private 5G (Zeus)', desc: 'Deployable CBRS/DoD-band 5G for ranges and CTCs' },
    { icon: <Wifi size={24} />, title: '4G LTE / CBRS', desc: 'Wide-area coverage with proven stability' },
    { icon: <Satellite size={24} />, title: 'Non-Terrestrial Networks', desc: 'Direct-to-device 4G/5G satellite connectivity' },
    { icon: <Globe size={24} />, title: 'SATCOM Backhaul', desc: 'LEO and multi-orbit support for EXCON reachback' },
    { icon: <Layers size={24} />, title: 'Hybrid Mesh Networks', desc: 'Long-range, low-power multi-hop connectivity' },
  ];

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="ARCHITECTURE"
        title="Global Network Architecture"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {networkTypes.map((net, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Card size="lg">
              <div className="icon-box w-14 h-14 mb-5">
                {net.icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{net.title}</h4>
              <p className="text-sm text-dark-400">{net.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function NTNSection() {
  const environments = ['NTC', 'JRTC', 'JMRC', 'JPMRC', 'Home Station', 'National Guard', 'Indo-Pacific', 'ATEC/DOT&E'];
  const features = [
    'Coverage for remote Indo-Pacific CTC locations',
    'Reliable connectivity for maritime and dispersed operations',
    'Perfect for OCONUS partner-nation training',
    'JPMRC-Pacific rotations support',
  ];

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="tag-base tag-light mb-4">NTN TECHNOLOGY</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Non-Terrestrial Networks
            </h2>
            <p className="text-dark-400 mb-6 leading-relaxed">
              Athena-Tek enables global, infrastructure-independent training through NTN technologies
              with direct-to-device 4G/5G satellite connectivity.
            </p>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-dark-300">
                  <Check size={16} className="text-primary-500 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <Card variant="featured" size="lg">
            <h4 className="text-lg font-semibold text-white mb-5">Supported Environments</h4>
            <div className="flex flex-wrap gap-2">
              {environments.map((env, i) => (
                <span key={i} className="px-4 py-2 bg-primary-500/10 rounded-lg text-sm text-primary-500 font-medium">
                  {env}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function MeshSection() {
  const features = [
    { title: 'Multi-Hop Connectivity', desc: 'Soldier-to-soldier mesh networking' },
    { title: '2km HaLow Range', desc: 'Per hop with deep penetration' },
    { title: 'GPS-Denied Positioning', desc: 'Combined with IMU, BLE, ZigBee' },
    { title: 'MOUT Support', desc: 'Multi-floor tracking, room-level precision' },
  ];

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="HYBRID MESH"
        title="Hybrid Mesh Networks (802.11s + 802.11ah)"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="lg">
              <span className="block text-5xl font-extrabold text-primary-500/30 font-mono mb-4">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-dark-400">{feature.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
