import { motion } from 'framer-motion';
import { Layers, Network, Shield, Check, Monitor, Radio, Users } from 'lucide-react';
import { Card } from '../../components/ui';
import { SectionHeader, CTASection } from '../../components/common';
import { PageSectionNav, SectionDots } from '../../components/navigation';
import { useTheme } from '../../contexts/ThemeContext';
import { iconSizes } from '../../styles/theme';

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'differentiators', label: 'Key Differentiators' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'outcomes', label: 'Outcomes' },
];

export default function LVCIntegrationPage() {
  const { isDark } = useTheme();

  return (
    <div className="pt-20">
      <PageSectionNav sections={sections} />
      <SectionDots sections={sections} />

      <HeroSection isDark={isDark} />
      <DifferentiatorsSection isDark={isDark} />
      <CapabilitiesSection isDark={isDark} />
      <OutcomesSection isDark={isDark} />
      <CTASection
        title="Ready for LVC Integration?"
        subtitle="Contact our team to discuss Live-Virtual-Constructive integration solutions."
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
          <Layers size={48} className={isDark ? 'text-primary-light' : 'text-primary-navy'} />
        </div>
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
          LVC Integration & Interoperability
        </h1>
        <p className={`text-xl md:text-2xl mb-6 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
          Live-Virtual-Constructive Training at Scale
        </p>
        <p className={`text-base md:text-lg max-w-4xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
          Athena-Tek is uniquely positioned to bridge live training and instrumentation into virtual and constructive environments, enabling modern Live-Virtual-Constructive (LVC) training at scale. We reduce federation risk by connecting real devices, real networks, and real range data into the broader LVC ecosystem through proven integration and interoperability practices.
        </p>
      </motion.div>
    </section>
  );
}

function DifferentiatorsSection({ isDark }) {
  const differentiators = [
    {
      icon: <Network size={iconSizes.xl} />,
      title: 'Live Domain Expertise',
      desc: 'Real devices, real networks, and real range data integrated into LVC ecosystems. Athena-Tek brings live-domain execution expertise that software-only providers cannot match.'
    },
    {
      icon: <Shield size={iconSizes.xl} />,
      title: 'Federation Risk Reduction',
      desc: 'Proven integration practices that reduce complexity and accelerate deployment. We connect live instrumentation into the broader ecosystem while minimizing integration risk.'
    },
    {
      icon: <Layers size={iconSizes.xl} />,
      title: 'Interoperability Workflows',
      desc: 'Translation and interoperability workflows that connect live training systems into virtual and constructive environments for seamless data flow.'
    },
  ];

  return (
    <section id="differentiators" className="section-dark py-8 md:py-12 lg:py-16 scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="WHY ATHENA-TEK"
          title="Key Differentiators"
          subtitle="Live-domain expertise combined with integration excellence"
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {differentiators.map((diff, i) => (
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
                    {diff.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-light-900'}`}>
                  {diff.title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  {diff.desc}
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
    'Connect live instrumentation into simulation and exercise control systems',
    'Maintain alignment with enterprise architectures',
    'Handle communications constraints and field conditions',
    'Support safety requirements under real-world conditions',
    'Integrate with LVC gateways and training architectures',
    'Enable scalable exercise control and assessment',
    'Translation workflows for cross-domain interoperability',
    'Real-time data integration into virtual environments',
  ];

  const integrationPoints = [
    { title: 'LVC Gateways', desc: 'Direct integration with standard LVC gateway architectures' },
    { title: 'Enterprise Training', desc: 'Connection to enterprise training management systems' },
    { title: 'Simulation Systems', desc: 'Interface with virtual and constructive simulation platforms' },
    { title: 'Exercise Control', desc: 'Support for EXCON operations and scenario management' },
  ];

  return (
    <section id="capabilities" className="py-8 md:py-12 lg:py-16 container-main scroll-mt-36">
      <SectionHeader
        tag="INTEGRATION CAPABILITIES"
        title="What We Deliver"
        subtitle="Comprehensive LVC integration under real-world conditions"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card size="xl" variant="featured" className="h-full">
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
              Real-World Integration
            </h4>
            <p className={`text-sm mb-6 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
              Athena-Tek understands the practical realities of live training—communications constraints, field conditions, safety requirements—and designs LVC integrations that remain operational under real-world conditions.
            </p>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="space-y-4 h-full flex flex-col">
            {integrationPoints.map((point, i) => (
              <Card key={i} size="lg" className="flex-1">
                <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
                  {point.title}
                </h4>
                <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  {point.desc}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card size="xl">
          <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
            Beyond Software-Only Solutions
          </h4>
          <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
            Whether integrating to LVC gateways, enterprise training architectures, or simulation systems, Athena-Tek brings live-domain execution expertise that software-only providers cannot. We support translation and interoperability workflows that connect live training systems into virtual and constructive environments, enabling more realistic training, improved assessment, and scalable exercise control.
          </p>
        </Card>
      </motion.div>
    </section>
  );
}

function OutcomesSection({ isDark }) {
  const outcomes = [
    { icon: <Network size={iconSizes.lg} />, title: 'Stronger Interoperability', desc: 'Seamless data flow between live, virtual, and constructive domains' },
    { icon: <Monitor size={iconSizes.lg} />, title: 'Greater Realism', desc: 'Live instrumentation data enhances virtual and constructive fidelity' },
    { icon: <Shield size={iconSizes.lg} />, title: 'Lower Integration Risk', desc: 'Proven practices reduce deployment complexity and timeline' },
  ];

  return (
    <section id="outcomes" className="section-dark py-8 md:py-12 lg:py-16 scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="MISSION OUTCOMES"
          title="LVC-Enabled Training Results"
          subtitle="Delivering measurable improvements for LVC training missions"
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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`text-center text-sm font-medium ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}
        >
          The result is stronger interoperability, greater realism, and lower integration risk for LVC-enabled training missions.
        </motion.p>
      </div>
    </section>
  );
}
