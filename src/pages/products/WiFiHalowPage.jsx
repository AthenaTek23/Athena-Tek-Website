import { motion } from 'framer-motion';
import { Wifi, Radio, Shield, Cpu, Check } from 'lucide-react';
import { Card } from '../../components/ui';
import { SectionHeader, CTASection } from '../../components/common';
import { PageSectionNav, SectionDots } from '../../components/navigation';
import { useTheme } from '../../contexts/ThemeContext';
import { iconSizes } from '../../styles/theme';

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'specifications', label: 'Specifications' },
];

export default function WiFiHalowPage() {
  const { isDark } = useTheme();

  return (
    <div className="pt-20">
      <PageSectionNav sections={sections} />
      <SectionDots sections={sections} />

      <HeroSection isDark={isDark} />
      <FeaturesSection isDark={isDark} />
      <SpecificationsSection isDark={isDark} />
      <CTASection
        title="Ready to Deploy Wi-Fi HaLow?"
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
        className="text-center"
      >
        <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
          isDark ? 'bg-primary-navy/30' : 'bg-primary-navy/10'
        }`}>
          <Wifi size={48} className={isDark ? 'text-primary-light' : 'text-primary-navy'} />
        </div>
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
          Wi-Fi HaLow
        </h1>
        <p className={`text-xl md:text-2xl mb-6 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
          5-Watt Modem - IEEE 802.11ah
        </p>
        <p className={`text-base md:text-lg max-w-3xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
          Long-range, low-power wireless solution for IoT applications. Remote monitoring of distributed infrastructure
          with mesh networking capabilities and WPA3 security.
        </p>
      </motion.div>
    </section>
  );
}

function FeaturesSection({ isDark }) {
  const features = [
    { icon: <Radio size={iconSizes.lg} />, title: 'Long Range', desc: 'Extended coverage with Sub-1 GHz frequency for IoT applications' },
    { icon: <Wifi size={iconSizes.lg} />, title: 'Mesh Networking', desc: '802.11s mesh support for distributed infrastructure monitoring' },
    { icon: <Shield size={iconSizes.lg} />, title: 'WPA3 Security', desc: 'Latest wireless security standard for protected communications' },
    { icon: <Cpu size={iconSizes.lg} />, title: 'Low Power', desc: 'Adaptive power and modulation for efficient operation' },
  ];

  return (
    <section id="features" className="py-5 md:py-7 lg:py-10 container-main scroll-mt-36">
      <SectionHeader
        tag="FEATURES"
        title="Key Features"
        subtitle="Advanced capabilities for IoT and remote monitoring applications"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="lg" className="h-full">
              <div className="icon-box w-12 h-12 mb-4">
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
    </section>
  );
}

function SpecificationsSection({ isDark }) {
  const specifications = [
    { category: 'RF Spectrum', specs: [
      { label: 'Frequency Range', value: '898 - 932 MHz' },
      { label: 'Bandwidth', value: 'Supports 1/2/4 MHz bandwidth' },
    ]},
    { category: 'Electrical Hardware', specs: [
      { label: 'Power Amplifier', value: 'Up to 37 dBm' },
      { label: 'Low Noise Amplifier (LNA)', value: '~22 dB Gain' },
      { label: 'RF Shielding', value: 'Yes' },
    ]},
    { category: 'Software Features', specs: [
      { label: 'Authentication', value: 'wpa_supplicant' },
      { label: 'Power Control', value: 'Software controllable power' },
      { label: 'Rate Control', value: 'Adaptive rate control' },
      { label: 'Power Management', value: 'Adaptive power control' },
    ]},
    { category: 'Mechanical Form Factor', specs: [
      { label: 'Form Factor', value: 'mPCIe Card' },
    ]},
    { category: 'Processor', specs: [
      { label: 'SoC', value: 'NRC7394 Wi-Fi HaLow SoC' },
      { label: 'CPU', value: 'ARM Cortex-M3' },
    ]},
    { category: 'Security', specs: [
      { label: 'Wireless Security', value: 'WPA3' },
    ]},
    { category: 'Interfaces', specs: [
      { label: 'Wired Interface', value: 'USB 2.0' },
    ]},
    { category: 'Wireless', specs: [
      { label: 'Standards', value: '802.11ah and 802.11s' },
    ]},
  ];

  return (
    <section id="specifications" className="section-dark py-5 md:py-7 lg:py-10 scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="TECHNICAL SPECIFICATIONS"
          title="Complete Specifications"
          light
        />

        <div className="space-y-6 max-w-5xl mx-auto">
          {specifications.map((section, sectionIdx) => (
            <motion.div
              key={sectionIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIdx * 0.05 }}
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
