import { motion } from 'framer-motion';
import { Shield, Activity, Zap, Target, Users, Check, Cpu, AlertTriangle } from 'lucide-react';
import { Card } from '../../components/ui';
import { SectionHeader, CTASection } from '../../components/common';
import { PageSectionNav, SectionDots } from '../../components/navigation';
import { useTheme } from '../../contexts/ThemeContext';
import { iconSizes } from '../../styles/theme';

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'capabilities', label: 'AI Capabilities' },
  { id: 'use-cases', label: 'Use Cases' },
  { id: 'approach', label: 'Hybrid Approach' },
];

export default function AISafetyPage() {
  const { isDark } = useTheme();

  return (
    <div className="pt-20">
      <PageSectionNav sections={sections} />
      <SectionDots sections={sections} />

      <HeroSection isDark={isDark} />
      <CapabilitiesSection isDark={isDark} />
      <UseCasesSection isDark={isDark} />
      <ApproachSection isDark={isDark} />
      <CTASection
        title="Ready to Enhance Training Safety?"
        subtitle="Contact our team to discuss AI-enabled training and safety solutions."
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
          <Shield size={48} className={isDark ? 'text-primary-light' : 'text-primary-navy'} />
        </div>
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
          AI-Enabled Training & Soldier Safety
        </h1>
        <p className={`text-xl md:text-2xl mb-6 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
          AI at the Edge
        </p>
        <p className={`text-base md:text-lg max-w-4xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
          Athena-Tek brings AI to the edge—enhancing realism, safety, and measurable outcomes across training and operational testing. Our AI-enabled sensor fusion combines device-based sensing, position data, and wearable inputs to provide actionable insight in real time, even when bandwidth is constrained.
        </p>
      </motion.div>
    </section>
  );
}

function CapabilitiesSection({ isDark }) {
  const capabilities = [
    {
      icon: <Activity size={iconSizes.xl} />,
      title: 'Sensor Fusion',
      desc: 'Device-based sensing, position data, and wearable inputs combined to provide actionable insight in real time, even when bandwidth is constrained.'
    },
    {
      icon: <Zap size={iconSizes.xl} />,
      title: 'Anomaly Detection',
      desc: 'Lightweight inference workflows at the edge for real-time detection of unusual patterns and immediate alerting.'
    },
    {
      icon: <Target size={iconSizes.xl} />,
      title: 'Adaptive Sampling',
      desc: 'Intelligent data collection that adjusts sampling rates based on context, optimizing bandwidth usage while capturing critical data.'
    },
    {
      icon: <AlertTriangle size={iconSizes.xl} />,
      title: 'Safety Alerts',
      desc: 'Real-time safety monitoring with immediate alerts for heat stress, fatigue, injury detection, and geofence violations.'
    },
  ];

  return (
    <section id="capabilities" className="section-dark py-8 md:py-12 lg:py-16 scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="AI CAPABILITIES"
          title="Edge AI for Training & Safety"
          subtitle="Lightweight inference workflows delivering real-time insight"
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

function UseCasesSection({ isDark }) {
  const useCases = [
    { title: 'Heat Stress Monitoring', desc: 'Real-time monitoring of soldier heat stress indicators with automatic alerts' },
    { title: 'Fatigue Detection', desc: 'AI-powered detection of fatigue patterns to prevent training injuries' },
    { title: 'Injury & Inactivity Detection', desc: 'Automatic detection of potential injuries or sudden inactivity' },
    { title: 'Geofence Alerts', desc: 'Boundary enforcement with immediate alerts for safety zone violations' },
    { title: 'Performance Baselines', desc: 'Automated establishment and tracking of individual performance baselines' },
    { title: 'Training Effectiveness', desc: 'Assessment of training effectiveness and readiness evaluation' },
  ];

  return (
    <section id="use-cases" className="py-8 md:py-12 lg:py-16 container-main scroll-mt-36">
      <SectionHeader
        tag="USE CASES"
        title="Key AI-Enabled Applications"
        subtitle="Practical applications that enhance safety and training outcomes"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCases.map((useCase, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Card size="lg" className="h-full">
              <div className={`flex items-center gap-3 mb-3`}>
                <Check size={20} className={isDark ? 'text-primary-light' : 'text-primary-navy'} />
                <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-light-900'}`}>
                  {useCase.title}
                </h4>
              </div>
              <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                {useCase.desc}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={`text-center mt-8 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}
      >
        By operating at the point of need, Athena-Tek's AI reduces reaction time, improves situational awareness, and supports safer, more effective training events.
      </motion.p>
    </section>
  );
}

function ApproachSection({ isDark }) {
  const edgeCapabilities = [
    'Lightweight inference workflows',
    'Anomaly detection',
    'Adaptive sampling',
    'Safety alerts',
    'Local data processing',
  ];

  const centralCapabilities = [
    'Deeper assessment',
    'Performance baselining',
    'Trend analysis',
    'After-action review',
    'Scalable decision support',
  ];

  return (
    <section id="approach" className="section-dark py-8 md:py-12 lg:py-16 scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="HYBRID AI APPROACH"
          title="Edge + Central Analytics"
          subtitle="Timely response at the edge with scalable analysis centrally"
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card size="xl" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                isDark ? 'bg-primary-navy/30' : 'bg-primary-navy/10'
              }`}>
                <Cpu size={28} className={isDark ? 'text-primary-light' : 'text-primary-navy'} />
              </div>
              <h4 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
                At the Edge (TED)
              </h4>
              <p className={`text-sm mb-4 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                TED supports lightweight inference workflows that operate directly on the device, ensuring immediate response even without connectivity.
              </p>
              <div className="space-y-2">
                {edgeCapabilities.map((cap, i) => (
                  <div key={i} className={`flex items-center gap-3 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                    <Check size={14} className={isDark ? 'text-primary-light' : 'text-primary-navy'} />
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
            <Card size="xl" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                isDark ? 'bg-primary-navy/30' : 'bg-primary-navy/10'
              }`}>
                <Users size={28} className={isDark ? 'text-primary-light' : 'text-primary-navy'} />
              </div>
              <h4 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
                Central Analytics
              </h4>
              <p className={`text-sm mb-4 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                Integrated analytics provide deeper assessment for commanders, range operators, and evaluators.
              </p>
              <div className="space-y-2">
                {centralCapabilities.map((cap, i) => (
                  <div key={i} className={`flex items-center gap-3 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                    <Check size={14} className={isDark ? 'text-primary-light' : 'text-primary-navy'} />
                    <span className="text-sm">{cap}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card size="xl" variant="featured" className={isDark ? 'bg-white/[0.02]' : 'bg-white'}>
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
              Data Becomes Decisions
            </h4>
            <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
              This hybrid approach ensures timely response during incidents while enabling scalable decision support and after-action review. The result is a training and test ecosystem where data becomes decisions—delivered with speed, relevance, and operational trust.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
