import { motion } from 'framer-motion';
import { Box, Eye } from 'lucide-react';
import { Card } from '../components/ui';
import { PageHero, SectionHeader, CTASection } from '../components/common';

export default function TEPage() {
  return (
    <div>
      {/* Custom compact hero section */}
      <section className="relative py-2 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative z-10 max-w-sm mx-auto text-center">
          <span className="tag-base tag-primary mb-1 inline-block text-xs">SOLUTION DRIVEN</span>
          <h1 className="text-xl md:text-2xl font-extrabold text-white mb-1 whitespace-nowrap">
            Test & Evaluation Reimagined
          </h1>
          <h2 className="text-base md:text-lg font-semibold text-primary-500 mb-1">
            For Modern Weapon Systems
          </h2>
          <p className="text-xs text-dark-400 leading-relaxed">
            Complete T&E architecture supporting Developmental Test (DT) and Operational Test (OT) with global networks, high-fidelity sensors, and AI-enabled analytics.
          </p>
        </div>
      </section>
      <DTOTSection />
      <InstrumentationSection />
      <AnalyticsSection />
      <CTASection />
    </div>
  );
}

function DTOTSection() {
  const dt = {
    title: 'Developmental Test',
    subtitle: 'DT',
    desc: 'System design evaluation and early engineering risk reduction',
    items: [
      'Flexible, rapidly deployable networks',
      'Soldier/operator telemetry through TED',
      'High-speed camera integration',
      'Synchronized data collection',
      'AI tagging of anomalies',
    ],
  };

  const ot = {
    title: 'Operational Test',
    subtitle: 'OT',
    desc: 'System performance validation under realistic conditions',
    items: [
      'Large-scale 5G/NTN networks',
      'Satellite-based coverage for denied environments',
      'High data throughput for video/sensors',
      'XLCC integration',
      'Automated AAR and test logs',
    ],
  };

  return (
    <section className="section-padding container-main">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card size="xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1.5 bg-primary-500/20 rounded-lg text-xs font-bold text-primary-500">
              {dt.subtitle}
            </span>
            <h3 className="text-xl font-bold text-white">{dt.title}</h3>
          </div>
          <p className="text-dark-400 mb-5">{dt.desc}</p>
          <ul className="space-y-2">
            {dt.items.map((item, i) => (
              <li key={i} className="text-sm text-dark-400">• {item}</li>
            ))}
          </ul>
        </Card>
        <Card variant="dark" size="xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1.5 bg-white/20 rounded-lg text-xs font-bold text-white">
              {ot.subtitle}
            </span>
            <h3 className="text-xl font-bold text-white">{ot.title}</h3>
          </div>
          <p className="text-white/70 mb-5">{ot.desc}</p>
          <ul className="space-y-2">
            {ot.items.map((item, i) => (
              <li key={i} className="text-sm text-white/80">• {item}</li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}

function InstrumentationSection() {
  const dataCollection = [
    'Soldier-worn TED telemetry',
    'Vehicle telemetry transceivers',
    'Ruggedized data collectors',
    'GPS RTK & IMU',
    'Environmental sensing',
  ];

  const video = [
    'High-speed cameras (1000+ FPS)',
    'Embedded 5G MOUT cameras',
    'Mesh-based low-light cameras',
    'Edge analytics for detection',
    'Full video-telemetry alignment',
  ];

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="INSTRUMENTATION"
          title="Data Collection & Video"
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card size="lg" className="bg-white/[0.03] text-center">
            <Box size={32} className="text-primary-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-white mb-4">Data Collection</h4>
            <ul className="space-y-2 text-left">
              {dataCollection.map((item, i) => (
                <li key={i} className="text-sm text-dark-400">• {item}</li>
              ))}
            </ul>
          </Card>
          <Card size="lg" className="bg-white/[0.03] text-center">
            <Eye size={32} className="text-primary-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-white mb-4">Video Instrumentation</h4>
            <ul className="space-y-2 text-left">
              {video.map((item, i) => (
                <li key={i} className="text-sm text-dark-400">• {item}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

function AnalyticsSection() {
  const analytics = [
    'Weapon system reliability analysis',
    'Anomaly and pattern detection',
    'Operator behavior modeling',
    'Blast radius prediction',
    'Test failure signatures',
    'Automated test logs and AAR',
  ];

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="AI ANALYTICS"
        title="AI-Enabled T&E Analytics"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {analytics.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-xl"
          >
            <span className="text-2xl font-bold text-primary-500/40 font-mono">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="text-dark-300">{item}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
