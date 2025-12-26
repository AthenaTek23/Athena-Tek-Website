import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Radio, Activity, BarChart3, Globe, Waves, Target, Cpu, LineChart, ChevronRight, Check } from 'lucide-react';
import { Card } from '../../components/ui';
import { SectionHeader, CTASection } from '../../components/common';
import { useTheme } from '../../contexts/ThemeContext';
import { iconSizes } from '../../styles/theme';

export default function ModelingSimulationPage() {
  const { isDark } = useTheme();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-dark-900 to-dark-950' : 'bg-gradient-to-b from-light-100 to-white'}`} />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative z-10 container-main text-center">
          <span className="tag-base tag-primary mb-4 inline-block">TECHNICAL SERVICES</span>
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
            Modeling & Simulation
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
            RF propagation studies and network modeling for mission-critical communications
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="#rf-modeling" className="btn-primary">
              RF Propagation
            </Link>
            <Link to="#network-modeling" className="btn-secondary">
              Network Modeling
            </Link>
          </div>
        </div>
      </section>

      <RFModelingSection isDark={isDark} />
      <NetworkModelingSection isDark={isDark} />
      <ToolsSection isDark={isDark} />
      <CTASection
        title="Start Your M&S Project"
        subtitle="Contact our team for RF propagation studies and network modeling."
      />
    </div>
  );
}

function RFModelingSection({ isDark }) {
  const rfCapabilities = [
    { icon: <Radio size={iconSizes.lg} />, title: 'Propagation Analysis', desc: 'Comprehensive RF propagation modeling across diverse terrain and environmental conditions' },
    { icon: <Globe size={iconSizes.lg} />, title: 'Terrain Integration', desc: 'High-fidelity terrain data integration for accurate signal coverage prediction' },
    { icon: <Waves size={iconSizes.lg} />, title: 'Interference Analysis', desc: 'Electromagnetic interference modeling and spectrum management' },
    { icon: <BarChart3 size={iconSizes.lg} />, title: 'Coverage Optimization', desc: 'Optimal antenna placement and network topology recommendations' },
  ];

  return (
    <section id="rf-modeling" className="section-padding container-main">
      <SectionHeader
        tag="RF PROPAGATION"
        title="Radio Frequency Modeling"
        subtitle="Accurate RF propagation studies for military communication systems"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rfCapabilities.map((cap, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="lg" className="h-full">
              <div className="flex items-start gap-4">
                <div className="icon-box w-12 h-12 flex-shrink-0">
                  {cap.icon}
                </div>
                <div>
                  <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                    {cap.title}
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                    {cap.desc}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* RF Modeling Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8"
      >
        <Card size="xl" variant="featured">
          <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
            Propagation Study Deliverables
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={`p-4 rounded-lg ${isDark ? 'bg-white/5' : 'bg-light-100'}`}>
              <span className={`font-medium ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>Coverage Maps</span>
              <p className={`text-sm mt-1 ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                Signal strength and coverage area visualization
              </p>
            </div>
            <div className={`p-4 rounded-lg ${isDark ? 'bg-white/5' : 'bg-light-100'}`}>
              <span className={`font-medium ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>Link Budget Analysis</span>
              <p className={`text-sm mt-1 ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                End-to-end link performance calculations
              </p>
            </div>
            <div className={`p-4 rounded-lg ${isDark ? 'bg-white/5' : 'bg-light-100'}`}>
              <span className={`font-medium ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>Optimization Reports</span>
              <p className={`text-sm mt-1 ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                Recommendations for improved coverage
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}

function NetworkModelingSection({ isDark }) {
  const networkCapabilities = [
    { title: 'Capacity Planning', desc: 'Network capacity modeling for varying user loads and traffic patterns' },
    { title: 'Latency Analysis', desc: 'End-to-end latency prediction for time-critical applications' },
    { title: 'Throughput Optimization', desc: 'Data throughput modeling and bottleneck identification' },
    { title: 'Mesh Network Design', desc: 'Multi-hop mesh network topology optimization' },
    { title: 'Failure Analysis', desc: 'Network resilience and failover scenario modeling' },
    { title: 'QoS Modeling', desc: 'Quality of Service prediction for priority traffic' },
  ];

  return (
    <section id="network-modeling" className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="NETWORK SIMULATION"
          title="Network Performance Modeling"
          subtitle="Comprehensive network simulation for training and operational systems"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {networkCapabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card size="lg" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isDark ? 'bg-teal-900/30' : 'bg-teal-100'
                  }`}>
                    <Activity size={18} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-light-900'}`}>
                      {cap.title}
                    </h4>
                    <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                      {cap.desc}
                    </p>
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

function ToolsSection({ isDark }) {
  const modelingApproaches = [
    { name: 'Ray Tracing', desc: 'High-fidelity propagation for urban environments' },
    { name: 'Statistical Models', desc: 'Rapid analysis using empirical propagation models' },
    { name: 'Discrete Event Simulation', desc: 'Network behavior under varying conditions' },
    { name: 'Monte Carlo Analysis', desc: 'Probabilistic performance assessment' },
  ];

  const applications = [
    '5G/LTE network planning',
    'Mesh network optimization',
    'Training range communications',
    'GPS-denied operations',
    'MOUT environment analysis',
    'Interference mitigation',
  ];

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="METHODOLOGY"
        title="Analysis Approaches"
        subtitle="Industry-leading modeling techniques and methodologies"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Modeling Approaches */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card size="xl" className="h-full">
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
              Modeling Techniques
            </h4>
            <div className="space-y-4">
              {modelingApproaches.map((approach, i) => (
                <div key={i} className={`pb-4 ${
                  i < modelingApproaches.length - 1 ? (isDark ? 'border-b border-white/5' : 'border-b border-light-200') : ''
                }`}>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-light-900'}`}>
                    {approach.name}
                  </span>
                  <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                    {approach.desc}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Applications */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card size="xl" className="h-full">
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
              Applications
            </h4>
            <ul className="space-y-3">
              {applications.map((app, i) => (
                <li key={i} className={`flex items-center gap-3 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  <Check size={18} className={`flex-shrink-0 ${isDark ? 'text-teal-400' : 'text-teal-600'}`} />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
