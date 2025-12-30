import { motion } from 'framer-motion';
import { Antenna, Radio, BarChart3, Shield, Check, Waves, Signal, Radar } from 'lucide-react';
import { Card } from '../../components/ui';
import { SectionHeader, CTASection } from '../../components/common';
import { PageSectionNav, SectionDots } from '../../components/navigation';
import { useTheme } from '../../contexts/ThemeContext';
import { iconSizes } from '../../styles/theme';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'services', label: 'Services' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'tools', label: 'Tools & Methods' },
];

export default function RFEngineeringPage() {
  const { isDark } = useTheme();

  return (
    <div className="pt-20">
      <PageSectionNav sections={sections} />
      <SectionDots sections={sections} />

      <OverviewSection isDark={isDark} />
      <ServicesSection isDark={isDark} />
      <CapabilitiesSection isDark={isDark} />
      <ToolsSection isDark={isDark} />
      <CTASection
        title="Need RF Engineering Support?"
        subtitle="Contact our team to discuss your wireless communication requirements."
      />
    </div>
  );
}

function OverviewSection({ isDark }) {
  return (
    <section id="overview" className="py-5 md:py-7 lg:py-10 container-main scroll-mt-36">
      <SectionHeader
        tag="RF ENGINEERING"
        title="Radio Frequency Engineering Services"
        subtitle="Expert RF design, analysis, and optimization for mission-critical wireless systems"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card size="xl" variant="featured">
          <div className="flex items-start gap-4">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
              isDark ? 'bg-primary-navy/30' : 'bg-primary-navy/10'
            }`}>
              <Antenna size={32} className={isDark ? 'text-primary-light' : 'text-primary-navy'} />
            </div>
            <div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-light-900'}`}>
                Comprehensive RF Solutions
              </h3>
              <p className={`text-base leading-relaxed ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                Athena Technologies provides end-to-end RF engineering services supporting the design, deployment, and optimization of wireless communication systems. From initial spectrum analysis through operational support, our team delivers solutions that meet the demanding requirements of defense and commercial applications.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}

function ServicesSection({ isDark }) {
  const services = [
    {
      icon: <Waves size={iconSizes.lg} />,
      title: 'Spectrum Analysis',
      desc: 'Comprehensive spectrum surveys and analysis to identify optimal frequencies, detect interference sources, and ensure regulatory compliance.'
    },
    {
      icon: <Antenna size={iconSizes.lg} />,
      title: 'Antenna Design & Integration',
      desc: 'Custom antenna system design, selection, and integration for single and multi-band applications across VHF through mmWave frequencies.'
    },
    {
      icon: <Signal size={iconSizes.lg} />,
      title: 'RF Site Surveys',
      desc: 'On-site RF assessments including coverage verification, interference identification, and propagation validation for optimal system performance.'
    },
    {
      icon: <Shield size={iconSizes.lg} />,
      title: 'Interference Mitigation',
      desc: 'Identification and resolution of RF interference issues through filtering, frequency coordination, and system optimization techniques.'
    },
    {
      icon: <Radar size={iconSizes.lg} />,
      title: 'EMC/EMI Testing',
      desc: 'Electromagnetic compatibility assessment and testing to ensure systems meet MIL-STD and commercial EMC requirements.'
    },
    {
      icon: <BarChart3 size={iconSizes.lg} />,
      title: 'RF Propagation Modeling',
      desc: 'Advanced propagation studies using industry-standard tools to predict coverage, capacity, and interference in complex environments.'
    },
  ];

  return (
    <section id="services" className="section-dark py-5 md:py-7 lg:py-10 scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="SERVICES"
          title="RF Engineering Services"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card size="lg" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
                <div className="icon-box w-12 h-12 mb-4">
                  {service.icon}
                </div>
                <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                  {service.title}
                </h4>
                <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  {service.desc}
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
  const capabilities = {
    design: [
      'RF link budget analysis and margin calculations',
      'Path loss modeling for diverse environments',
      'Antenna pattern analysis and optimization',
      'Multi-band system architecture design',
      'Frequency coordination and deconfliction',
      'Co-site interference analysis',
    ],
    planning: [
      'Coverage prediction and gap analysis',
      'Capacity planning and traffic modeling',
      'Handoff and mobility optimization',
      'Indoor/outdoor propagation studies',
      'Terrain and clutter analysis',
      'Network densification planning',
    ],
    operations: [
      'Performance monitoring and KPI tracking',
      'Drive testing and coverage verification',
      'Interference hunting and resolution',
      'System optimization and tuning',
      'Troubleshooting and root cause analysis',
      'Regulatory compliance support',
    ],
  };

  return (
    <section id="capabilities" className="py-5 md:py-7 lg:py-10 container-main scroll-mt-36">
      <SectionHeader
        tag="CAPABILITIES"
        title="Technical Capabilities"
        subtitle="Deep expertise across the RF engineering lifecycle"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card size="lg" className="h-full">
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
              RF Design
            </h4>
            <ul className="space-y-3">
              {capabilities.design.map((item, i) => (
                <li key={i} className={`flex items-start gap-2 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  <Check size={14} className={`mt-1 flex-shrink-0 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`} />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Card size="lg" className="h-full">
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
              Network Planning
            </h4>
            <ul className="space-y-3">
              {capabilities.planning.map((item, i) => (
                <li key={i} className={`flex items-start gap-2 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  <Check size={14} className={`mt-1 flex-shrink-0 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`} />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card size="lg" className="h-full">
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
              RF Operations
            </h4>
            <ul className="space-y-3">
              {capabilities.operations.map((item, i) => (
                <li key={i} className={`flex items-start gap-2 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  <Check size={14} className={`mt-1 flex-shrink-0 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`} />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function ToolsSection({ isDark }) {
  const tools = [
    'EDX SignalPro for RF propagation modeling',
    'ATDI ICS Telecom for network planning',
    'Keysight/Agilent spectrum analyzers',
    'Vector network analyzers for antenna testing',
    'Drive test equipment and post-processing tools',
    'Custom MATLAB/Python analysis scripts',
  ];

  const frequencies = [
    { band: 'VHF/UHF', range: '30 MHz - 1 GHz', apps: 'Land mobile radio, tactical communications' },
    { band: 'L/S Band', range: '1 - 4 GHz', apps: 'GPS, telemetry, radar systems' },
    { band: 'C Band', range: '4 - 8 GHz', apps: 'Satellite communications, CBRS' },
    { band: 'Sub-6 GHz', range: '600 MHz - 6 GHz', apps: '5G NR, LTE, Wi-Fi' },
    { band: 'mmWave', range: '24 - 100 GHz', apps: '5G mmWave, point-to-point links' },
  ];

  return (
    <section id="tools" className="section-dark py-5 md:py-7 lg:py-10 scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="TOOLS & EXPERTISE"
          title="Tools & Frequency Expertise"
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
                Engineering Tools
              </h4>
              <ul className="space-y-3">
                {tools.map((tool, i) => (
                  <li key={i} className={`flex items-start gap-3 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                    <Check size={18} className={`flex-shrink-0 mt-0.5 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`} />
                    <span className="text-sm">{tool}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card size="xl" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
                Frequency Bands
              </h4>
              <div className="space-y-4">
                {frequencies.map((freq, i) => (
                  <div key={i} className={`pb-3 ${i < frequencies.length - 1 ? (isDark ? 'border-b border-white/5' : 'border-b border-light-200') : ''}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-medium ${isDark ? 'text-white' : 'text-light-900'}`}>{freq.band}</span>
                      <span className={`text-xs ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>{freq.range}</span>
                    </div>
                    <span className={`text-xs ${isDark ? 'text-dark-400' : 'text-light-500'}`}>{freq.apps}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
