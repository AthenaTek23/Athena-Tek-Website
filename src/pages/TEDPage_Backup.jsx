import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { Card } from '../components/ui';
import { PageHero, SectionHeader, CTASection } from '../components/common';

export default function TEDPage() {
  return (
    <div>
      <PageHero
        tag="TRAINING EDGE DEVICE"
        title="TED — The AI-Enabled Soldier Engine"
        subtitle="Real-Time Intelligence at the Edge"
        description="A rugged, smartphone-sized device that fuses sensors, emitters, networks, and AI inference into the most advanced soldier state engine ever developed."
      />
      <AICapabilitiesSection />
      <SensorFusionSection />
      <SpecificationsSection />
      <IntegrationSection />
      <CTASection />
    </div>
  );
}

function AICapabilitiesSection() {
  const capabilities = [
    'Direct fire RTCA using shooter pose, stance, weapon orientation',
    'Indirect fire RTCA (mortars, grenades, anti-armor)',
    'Loss-of-concealment validation using YOLO models',
    'Movement classification (crawl, walk, sprint, kneel, lean, dive)',
    'Soldier behavior analysis and stress indicators',
    'Fall and immobility detection',
    'Heat casualty prediction and physiological monitoring',
    'Quantized LLMs for rule-based inference',
  ];

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="EDGE AI"
        title="AI Engine Capabilities"
        subtitle="On-device inference with zero cloud dependency"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {capabilities.map((cap, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-xl"
          >
            <Check size={18} className="text-primary-500 flex-shrink-0" />
            <span className="text-dark-300">{cap}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SensorFusionSection() {
  const sensors = ['3-axis accelerometer', '3-axis gyroscope', 'Magnetometer', 'Barometer', 'GPS RTK'];
  const emitters = ['5G NR (FR1)', '4G LTE', 'Wi-Fi 6 / HaLow', 'ZigBee', 'BLE'];

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="SENSOR FUSION"
          title="Multi-Sensor Integration"
          light
        />
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="min-w-[200px]">
            <h4 className="text-xs font-semibold tracking-wider text-dark-500 uppercase mb-4">Sensors</h4>
            {sensors.map((s, i) => (
              <div key={i} className="px-5 py-3 bg-white/[0.03] rounded-lg mb-2 text-sm text-dark-300">
                {s}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2 text-dark-500">
            <Zap size={32} className="text-accent-amber" />
            <span className="text-xs font-semibold tracking-wider uppercase">FUSION</span>
          </div>
          <div className="min-w-[200px]">
            <h4 className="text-xs font-semibold tracking-wider text-dark-500 uppercase mb-4">Emitters</h4>
            {emitters.map((e, i) => (
              <div key={i} className="px-5 py-3 bg-white/[0.03] rounded-lg mb-2 text-sm text-dark-300">
                {e}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecificationsSection() {
  const specs = [
    { category: 'Processor', items: ['NXP i.MX 8M Quad Core ARM Cortex-A53 @ 1.5GHz', '4 GB LPDDR4 RAM', '128 GB eMMC storage'] },
    { category: 'Radios', items: ['5G NR Sub-6', '4G LTE', 'Wi-Fi 6', 'Wi-Fi HaLow (802.11ah)', 'Bluetooth LE', 'ZigBee'] },
    { category: 'Positioning', items: ['GPS RTK', 'IMU (Accel + Gyro)', 'Magnetometer', 'Barometer'] },
    { category: 'Security', items: ['AES-256 Data Encryption', 'FIPS 140-3 (optional)', 'Linux Yocto OS', 'Docker-enabled'] },
  ];

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="SPECIFICATIONS"
        title="Technical Specifications"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {specs.map((spec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="lg">
              <h4 className="text-xs font-semibold tracking-wider text-primary-500 uppercase mb-4">
                {spec.category}
              </h4>
              {spec.items.map((item, j) => (
                <p key={j} className="text-sm text-dark-400 py-2 border-b border-white/[0.03] last:border-0">
                  {item}
                </p>
              ))}
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function IntegrationSection() {
  return (
    <section className="py-20 px-8 bg-gradient-to-br from-primary-500/10 to-primary-500/[0.02]">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-10">
          Integration & Compatibility
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-primary-500 uppercase mb-3">
              Training Systems
            </h4>
            <p className="text-dark-400 leading-relaxed">
              MILES / IWS (Cubic) • VTESS (Lockheed Martin) • FN America • Phoenix Defense ATAK • Serious Simulations
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-primary-500 uppercase mb-3">
              EXCON Systems
            </h4>
            <p className="text-dark-400 leading-relaxed">
              TAK Server • STIA (STE Live) • HITS / RCS • XLCC (T&E)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
