import { motion } from 'framer-motion';
import { Database, Cpu, MonitorPlay, Check, Server, Activity, Zap } from 'lucide-react';
import { Card } from '../../components/ui';
import { SectionHeader, CTASection } from '../../components/common';
import { PageSectionNav, SectionDots } from '../../components/navigation';
import { useTheme } from '../../contexts/ThemeContext';
import { iconSizes } from '../../styles/theme';

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'data-services', label: 'Data Services' },
  { id: 'outcomes', label: 'Outcomes' },
];

export default function SoftwareAARPage() {
  const { isDark } = useTheme();

  return (
    <div className="pt-20">
      <PageSectionNav sections={sections} />
      <SectionDots sections={sections} />

      <HeroSection isDark={isDark} />
      <CapabilitiesSection isDark={isDark} />
      <DataServicesSection isDark={isDark} />
      <OutcomesSection isDark={isDark} />
      <CTASection
        title="Ready to Transform Your Data?"
        subtitle="Contact our team to discuss software and data solutions for training and T&E."
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
          <Database size={48} className={isDark ? 'text-primary-light' : 'text-primary-navy'} />
        </div>
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
          Embedded Software, Data Services & AAR
        </h1>
        <p className={`text-xl md:text-2xl mb-6 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
          From Edge Data to Real-Time Insight
        </p>
        <p className={`text-base md:text-lg max-w-4xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
          Athena-Tek delivers the software foundations that transform edge data into real-time insight and measurable training outcomes. We build and integrate embedded software for edge devices, secure data pipelines, visualization tools, and after-action review (AAR) workflows that support both Training and Test & Evaluation missions.
        </p>
      </motion.div>
    </section>
  );
}

function CapabilitiesSection({ isDark }) {
  const capabilities = [
    {
      icon: <Cpu size={iconSizes.xl} />,
      title: 'Embedded Software',
      description: 'Our embedded software capabilities enable real-time capture, buffering, and synchronization of critical instrumentation data, ensuring mission continuity in DDIL environments. Edge software runs directly on TED devices, providing local processing and data management.',
      features: ['Real-time capture', 'Data buffering', 'DDIL synchronization', 'Edge processing', 'Local data management'],
    },
    {
      icon: <Database size={iconSizes.xl} />,
      title: 'Data Services',
      description: 'We support scalable data services that connect edge devices and networks to enterprise analytics platforms, enabling both immediate operational awareness and post-event assessment. Our data pipelines ensure reliable data flow from the field to decision-makers.',
      features: ['Data pipelines', 'Enterprise integration', 'Analytics platforms', 'Scalable architecture', 'Reliable data flow'],
    },
    {
      icon: <MonitorPlay size={iconSizes.xl} />,
      title: 'Visualization & AAR',
      description: 'Athena-Tek develops visualization and monitoring tools that support exercise control, formation and movement tracking, and playback-based AAR. Our tools provide rich context for evaluation and continuous improvement.',
      features: ['Exercise control', 'Movement tracking', 'Playback AAR', 'Performance metrics', 'Continuous improvement'],
    },
  ];

  return (
    <section id="capabilities" className="section-dark py-8 md:py-12 lg:py-16 scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="CORE CAPABILITIES"
          title="Software & Data Solutions"
          subtitle="End-to-end software foundations for training and T&E"
          light
        />

        <div className="space-y-8">
          {capabilities.map((cap, i) => (
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
                    <div className={`w-20 h-20 rounded-xl flex items-center justify-center ${
                      isDark ? 'bg-primary-navy/30' : 'bg-primary-navy/10'
                    }`}>
                      <div className={isDark ? 'text-primary-light' : 'text-primary-navy'}>
                        {cap.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-light-900'}`}>
                      {cap.title}
                    </h3>
                    <p className={`text-sm mb-4 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                      {cap.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cap.features.map((feature, j) => (
                        <span
                          key={j}
                          className={`text-xs px-3 py-1 rounded-full ${
                            isDark ? 'bg-white/5 text-dark-300' : 'bg-light-200 text-light-700'
                          }`}
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

function DataServicesSection({ isDark }) {
  const dataFlowSteps = [
    { icon: <Cpu size={iconSizes.lg} />, title: 'Edge Capture', desc: 'Real-time data capture at the edge with local buffering' },
    { icon: <Server size={iconSizes.lg} />, title: 'Data Pipeline', desc: 'Secure, scalable pipelines for data transport' },
    { icon: <Activity size={iconSizes.lg} />, title: 'Analytics', desc: 'Enterprise analytics for deep assessment' },
    { icon: <MonitorPlay size={iconSizes.lg} />, title: 'Visualization', desc: 'Interactive dashboards and AAR playback' },
  ];

  const integrationCapabilities = [
    'Network performance metrics integration',
    'Training data correlation',
    'Test data synchronization',
    'Performance baseline tracking',
    'Trend analysis and reporting',
    'Cross-exercise comparison',
  ];

  return (
    <section id="data-services" className="py-8 md:py-12 lg:py-16 container-main scroll-mt-36">
      <SectionHeader
        tag="DATA FLOW"
        title="Edge to Enterprise"
        subtitle="Complete data journey from instrumentation to insight"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {dataFlowSteps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="lg" className="h-full text-center">
              <div className="icon-box w-14 h-14 mx-auto mb-4">
                {step.icon}
              </div>
              <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                {step.title}
              </h4>
              <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                {step.desc}
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
            Rich Context for Evaluation
          </h4>
          <p className={`text-sm mb-6 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
            By integrating network performance metrics with training and test data, we provide richer context for evaluation and continuous improvement. Our integrated approach enables:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrationCapabilities.map((cap, i) => (
              <div key={i} className={`flex items-center gap-3 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                <Check size={18} className={`flex-shrink-0 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`} />
                <span className="text-sm">{cap}</span>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </section>
  );
}

function OutcomesSection({ isDark }) {
  const outcomes = [
    { icon: <Zap size={iconSizes.lg} />, title: 'Faster Decisions', desc: 'Real-time insight enables immediate response and adaptation' },
    { icon: <Activity size={iconSizes.lg} />, title: 'Smarter Analysis', desc: 'Integrated data provides comprehensive assessment' },
    { icon: <MonitorPlay size={iconSizes.lg} />, title: 'Better AAR', desc: 'Playback-based review with rich contextual data' },
  ];

  return (
    <section id="outcomes" className="section-dark py-8 md:py-12 lg:py-16 scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="MISSION OUTCOMES"
          title="Instrumentation to Insight"
          subtitle="Helping stakeholders make faster, smarter decisions"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card size="xl" variant="featured" className={isDark ? 'bg-white/[0.02]' : 'bg-white'}>
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
              End-to-End Data Solutions
            </h4>
            <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
              From edge software to enterprise integration, Athena-Tek delivers end-to-end data solutions that convert instrumentation into insight—helping stakeholders make faster, smarter decisions. Our software foundations ensure that data becomes actionable intelligence, supporting training effectiveness assessment and continuous improvement across your organization.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
