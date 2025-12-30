import { motion } from 'framer-motion';
import { Wrench, Radio, Server, Network, Check, Zap, Shield, Activity } from 'lucide-react';
import { Card } from '../../components/ui';
import { SectionHeader, CTASection } from '../../components/common';
import { PageSectionNav, SectionDots } from '../../components/navigation';
import { useTheme } from '../../contexts/ThemeContext';
import { iconSizes } from '../../styles/theme';

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'approach', label: 'Our Approach' },
  { id: 'outcomes', label: 'Outcomes' },
];

export default function TENMPage() {
  const { isDark } = useTheme();

  return (
    <div className="pt-20">
      <PageSectionNav sections={sections} />
      <SectionDots sections={sections} />

      <HeroSection isDark={isDark} />
      <CapabilitiesSection isDark={isDark} />
      <ApproachSection isDark={isDark} />
      <OutcomesSection isDark={isDark} />
      <CTASection
        title="Ready to Modernize Your T&E Network?"
        subtitle="Contact our team to discuss test and evaluation network modernization."
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
          <Wrench size={48} className={isDark ? 'text-primary-light' : 'text-primary-navy'} />
        </div>
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
          Test & Evaluation Network Modernization
        </h1>
        <p className={`text-xl md:text-2xl mb-6 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
          TENM
        </p>
        <p className={`text-base md:text-lg max-w-4xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
          Athena-Tek supports the modernization of test and evaluation (T&E) networks through resilient wireless engineering, expeditionary architecture, and enterprise integration expertise. We understand that modern T&E requires distributed, secure, and high-fidelity data movement across complex environments—often under real-world operational constraints.
        </p>
      </motion.div>
    </section>
  );
}

function CapabilitiesSection({ isDark }) {
  const capabilities = [
    {
      icon: <Radio size={iconSizes.xl} />,
      title: 'Wireless Engineering',
      desc: 'Resilient wireless design and RF propagation expertise for complex test environments. Wireless modeling and simulation for optimal coverage and performance.'
    },
    {
      icon: <Server size={iconSizes.xl} />,
      title: 'Expeditionary Architecture',
      desc: 'Deployable network solutions designed for dynamic test environments. Rapid deployment capabilities that adapt to changing requirements.'
    },
    {
      icon: <Network size={iconSizes.xl} />,
      title: 'Enterprise Integration',
      desc: 'Connecting test data to enterprise analytics systems for comprehensive analysis. Seamless data flow from instrumentation to decision-makers.'
    },
    {
      icon: <Wrench size={iconSizes.xl} />,
      title: 'Instrumentation Modernization',
      desc: 'Upgrading legacy systems while enabling future-ready solutions. Support for both legacy and next-generation test systems.'
    },
  ];

  return (
    <section id="capabilities" className="section-dark py-8 md:py-12 lg:py-16 scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="CORE CAPABILITIES"
          title="T&E Network Modernization"
          subtitle="Comprehensive capabilities for modern test environments"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((cap, i) => (
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
                    {cap.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-light-900'}`}>
                  {cap.title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  {cap.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection({ isDark }) {
  const approachPoints = [
    'Wireless modeling and simulation for coverage optimization',
    'Private and hybrid network design for test environments',
    'Integration of edge devices into test instrumentation workflows',
    'Field-proven networking and instrumentation experience',
    'Support for both legacy and next-generation systems',
    'Scalable, future-ready modernization solutions',
  ];

  return (
    <section id="approach" className="py-8 md:py-12 lg:py-16 container-main scroll-mt-36">
      <SectionHeader
        tag="OUR APPROACH"
        title="Field-Proven Expertise"
        subtitle="Applying real-world experience to modernization initiatives"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card size="xl" variant="featured" className="h-full">
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
              Modern T&E Requirements
            </h4>
            <p className={`text-sm mb-6 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
              Modern T&E requires distributed, secure, and high-fidelity data movement across complex environments—often under real-world operational constraints. Our capabilities span wireless modeling and simulation, private and hybrid network design, and integration of edge devices into test instrumentation workflows.
            </p>
            <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
              Athena-Tek applies field-proven networking and instrumentation experience to modernization initiatives, supporting both legacy and next-generation systems while enabling scalable, future-ready solutions.
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
              What We Deliver
            </h4>
            <div className="space-y-3">
              {approachPoints.map((point, i) => (
                <div key={i} className={`flex items-start gap-3 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  <Check size={16} className={`flex-shrink-0 mt-1 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`} />
                  <span className="text-sm">{point}</span>
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
    { icon: <Zap size={iconSizes.lg} />, title: 'Reduced Deployment Complexity', desc: 'Streamlined deployment processes that get you operational faster' },
    { icon: <Activity size={iconSizes.lg} />, title: 'Improved Data Quality', desc: 'Higher fidelity data capture for better test outcomes' },
    { icon: <Shield size={iconSizes.lg} />, title: 'Expanded Operational Relevance', desc: 'Test infrastructure aligned with operational requirements' },
  ];

  const additionalOutcomes = [
    'Real-time data capture and synchronization',
    'Range instrumentation modernization',
    'Integration with enterprise analysis systems',
  ];

  return (
    <section id="outcomes" className="section-dark py-8 md:py-12 lg:py-16 scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="MODERNIZATION OUTCOMES"
          title="Moving Faster, Testing Better"
          subtitle="Measurable improvements for test organizations"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
          <Card size="xl" className={isDark ? 'bg-white/[0.02]' : 'bg-white'}>
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
              Additional Capabilities
            </h4>
            <p className={`text-sm mb-4 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
              We help test organizations move faster—reducing deployment complexity, improving data quality, and expanding operational relevance. Our solutions support:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {additionalOutcomes.map((outcome, i) => (
                <div key={i} className={`flex items-center gap-3 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  <Check size={18} className={`flex-shrink-0 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`} />
                  <span className="text-sm">{outcome}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`text-center mt-8 text-sm font-medium ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}
        >
          Athena-Tek turns test infrastructure into a modern, resilient capability—supporting the operational testing needs of today and the mission demands of tomorrow.
        </motion.p>
      </div>
    </section>
  );
}
