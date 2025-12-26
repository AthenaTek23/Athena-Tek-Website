import { motion } from 'framer-motion';
import { Brain, Cpu, Zap, Network, Radio, Target, Shield, Layers, Lightbulb, Rocket, Check } from 'lucide-react';
import { Card } from '../components/ui';
import { SectionHeader, CTASection } from '../components/common';
import { useTheme } from '../contexts/ThemeContext';
import { iconSizes } from '../styles/theme';

export default function InnovationPage() {
  const { isDark } = useTheme();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-dark-900 to-dark-950' : 'bg-gradient-to-b from-light-100 to-white'}`} />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative z-10 container-main text-center">
          <span className="tag-base tag-primary mb-4 inline-block">INNOVATION</span>
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
            Driving the Future
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
            AI ecosystem development and R&D initiatives shaping next-generation defense solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="#ai-ecosystem" className="btn-primary">
              AI Ecosystem
            </a>
            <a href="#rd" className="btn-secondary">
              R&D Initiatives
            </a>
          </div>
        </div>
      </section>

      <AIEcosystemSection isDark={isDark} />
      <EdgeComputingSection isDark={isDark} />
      <RDSection isDark={isDark} />
      <RoadmapSection isDark={isDark} />
      <CTASection
        title="Partner With Us"
        subtitle="Collaborate with Athena-Tek on next-generation defense innovations."
      />
    </div>
  );
}

function AIEcosystemSection({ isDark }) {
  const aiCapabilities = [
    { icon: <Brain size={iconSizes.lg} />, title: 'Machine Learning', desc: 'On-device ML models optimized for edge deployment and real-time inference' },
    { icon: <Cpu size={iconSizes.lg} />, title: 'Neural Processing', desc: 'Coral TPU integration for accelerated AI workloads at the tactical edge' },
    { icon: <Target size={iconSizes.lg} />, title: 'Computer Vision', desc: 'Image and video recognition for target identification and tracking' },
    { icon: <Radio size={iconSizes.lg} />, title: 'Speech Recognition', desc: 'Local NLP processing for voice commands without cloud connectivity' },
  ];

  return (
    <section id="ai-ecosystem" className="section-padding container-main">
      <SectionHeader
        tag="AI ECOSYSTEM"
        title="Intelligent Edge Solutions"
        subtitle="Distributed AI capabilities for tactical environments"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {aiCapabilities.map((cap, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="lg" className="h-full">
              <div className="icon-box w-12 h-12 mb-4">
                {cap.icon}
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

      {/* AI Features Detail */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8"
      >
        <Card size="xl" variant="featured">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
                Docker-Enabled AI Engines
              </h4>
              <p className={`text-sm mb-4 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                Containerized AI workloads enable flexible deployment and updates of machine learning models without device reconfiguration.
              </p>
              <ul className="space-y-2">
                <li className={`flex items-center gap-2 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  <Check size={14} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
                  Rapid model deployment and updates
                </li>
                <li className={`flex items-center gap-2 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  <Check size={14} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
                  Isolated execution environments
                </li>
                <li className={`flex items-center gap-2 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  <Check size={14} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
                  Resource-efficient operation
                </li>
              </ul>
            </div>
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
                Sensor Fusion
              </h4>
              <p className={`text-sm mb-4 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                Multi-sensor data integration combining GNSS, IMU, barometric, and biometric inputs for comprehensive situational awareness.
              </p>
              <ul className="space-y-2">
                <li className={`flex items-center gap-2 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  <Check size={14} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
                  Gyroscope and accelerometer fusion
                </li>
                <li className={`flex items-center gap-2 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  <Check size={14} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
                  Magnetometer integration
                </li>
                <li className={`flex items-center gap-2 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  <Check size={14} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
                  Trilateration support
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}

function EdgeComputingSection({ isDark }) {
  const edgeFeatures = [
    { title: 'Local Processing', desc: 'AI inference at the edge without cloud dependency', icon: <Cpu size={20} /> },
    { title: 'Low Latency', desc: 'Real-time decision support for time-critical applications', icon: <Zap size={20} /> },
    { title: 'Offline Operation', desc: 'Full functionality in denied or disconnected environments', icon: <Shield size={20} /> },
    { title: 'Data Privacy', desc: 'Sensitive data processed locally without transmission', icon: <Layers size={20} /> },
  ];

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="EDGE COMPUTING"
          title="Distributed Intelligence"
          subtitle="Bringing AI capabilities to the tactical edge"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {edgeFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card size="lg" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                  isDark ? 'bg-teal-900/30' : 'bg-teal-100'
                }`}>
                  <div className={isDark ? 'text-teal-400' : 'text-teal-600'}>
                    {feature.icon}
                  </div>
                </div>
                <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                  {feature.title}
                </h4>
                <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                  {feature.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Edge Platform */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card size="xl" className={isDark ? 'bg-white/[0.02]' : 'bg-white'}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className={`w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0 ${
                isDark ? 'bg-teal-900/30' : 'bg-teal-100'
              }`}>
                <Cpu size={40} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
              </div>
              <div>
                <h4 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                  ARES V Edge Platform
                </h4>
                <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  Built on NXP i.MX 8M Quad Core ARM Cortex-A53 with Coral TPU acceleration, ARES V delivers
                  enterprise-grade AI capabilities in a soldier-worn form factor. 4GB LPDDR4 memory and
                  128GB eMMC storage support complex multi-model deployments.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function RDSection({ isDark }) {
  const rdAreas = [
    {
      icon: <Network size={iconSizes.xl} />,
      title: 'Next-Gen Networking',
      desc: 'Advancing 5G, mesh, and satellite connectivity',
      initiatives: ['Multi-bearer seamless handoff', 'NTN/LEO satellite integration', 'GPS-denied navigation'],
    },
    {
      icon: <Brain size={iconSizes.xl} />,
      title: 'AI/ML Research',
      desc: 'Edge AI and machine learning advancement',
      initiatives: ['Federated learning', 'Model compression', 'Adversarial robustness'],
    },
    {
      icon: <Target size={iconSizes.xl} />,
      title: 'Training Systems',
      desc: 'Next-generation training technologies',
      initiatives: ['Enhanced realism', 'Biometric integration', 'Adaptive scenarios'],
    },
  ];

  return (
    <section id="rd" className="section-padding container-main">
      <SectionHeader
        tag="R&D INITIATIVES"
        title="Research & Development"
        subtitle="Investing in technologies that will shape tomorrow's defense systems"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {rdAreas.map((area, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="xl" className="h-full">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                isDark ? 'bg-teal-900/30' : 'bg-teal-100'
              }`}>
                <div className={isDark ? 'text-teal-400' : 'text-teal-600'}>
                  {area.icon}
                </div>
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                {area.title}
              </h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                {area.desc}
              </p>
              <ul className="space-y-2">
                {area.initiatives.map((initiative, j) => (
                  <li key={j} className={`flex items-center gap-2 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                    <Lightbulb size={14} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
                    {initiative}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function RoadmapSection({ isDark }) {
  const roadmapItems = [
    { phase: 'Current', items: ['ARES V deployment', '5G network integration', 'AI-enabled training'] },
    { phase: 'Near-Term', items: ['NTN/Satellite integration', 'Expanded sensor fusion', 'Enhanced mesh coverage'] },
    { phase: 'Future', items: ['Autonomous systems integration', 'Advanced AI capabilities', 'Next-gen communications'] },
  ];

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="TECHNOLOGY ROADMAP"
          title="Our Path Forward"
          subtitle="Continuous innovation driving capability advancement"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmapItems.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card size="xl" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isDark ? 'bg-teal-900/30' : 'bg-teal-100'
                  }`}>
                    <Rocket size={20} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
                  </div>
                  <h4 className={`text-lg font-bold ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
                    {phase.phase}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item, j) => (
                    <li key={j} className={`flex items-center gap-2 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                      <Check size={16} className={`flex-shrink-0 ${isDark ? 'text-teal-400' : 'text-teal-600'}`} />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
