import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Network, Cpu, Shield, Layers, Wrench, Database, ChevronRight } from 'lucide-react';
import { Card } from '../components/ui';
import { CTASection } from '../components/common';
import { useTheme } from '../contexts/ThemeContext';
import { iconSizes } from '../styles/theme';

export default function CapabilitiesPage() {
  const { isDark } = useTheme();

  return (
    <div className="pt-20">
      <HeroSection isDark={isDark} />
      <OverviewSection isDark={isDark} />
      <CTASection
        title="Ready to Get Started?"
        subtitle="Contact our team to discuss how our capabilities can support your mission."
      />
    </div>
  );
}

function HeroSection({ isDark }) {
  return (
    <section className="py-8 md:py-12 lg:py-16 container-main">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-4xl mx-auto"
      >
        <span className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full mb-4 ${
          isDark ? 'bg-primary-navy/30 text-primary-light' : 'bg-primary-navy/10 text-primary-navy'
        }`}>
          CAPABILITIES
        </span>
        <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-light-900'}`}>
          Network-Focused. Solution-Driven.
        </h1>
        <p className={`text-xl md:text-2xl font-medium mb-4 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
          Built for Training and Test & Evaluation.
        </p>
        <p className={`text-lg ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
          Athena-Tek delivers next-generation capabilities for the Department of Defense and mission partners by bridging resilient communications networks to real-world outcomes. We specialize in multi-modal tactical networking, edge devices, and AI-enabled sensor fusion—enabling safer, more realistic, and more measurable training and operational test environments.
        </p>
      </motion.div>
    </section>
  );
}

function OverviewSection({ isDark }) {
  const coreCapabilities = [
    {
      icon: <Network size={iconSizes.xl} />,
      title: 'Multi-Modal Tactical Networking',
      desc: '5G/4G (FR1/CBRS), mesh/MANET, Wi-Fi, and hybrid backhaul—built for DDIL environments.',
      path: '/capabilities/tactical-networking',
    },
    {
      icon: <Cpu size={iconSizes.xl} />,
      title: 'TED Ecosystem',
      desc: 'TED, TED-M, and A-TED deliver sensing, computing, and multi-network communications with AI at the edge.',
      path: '/capabilities/ted-ecosystem',
    },
    {
      icon: <Shield size={iconSizes.xl} />,
      title: 'AI-Enabled Training & Soldier Safety',
      desc: 'Sensor fusion, anomaly detection, adaptive sampling, and performance baselines—actionable insight in real time.',
      path: '/capabilities/ai-safety',
    },
    {
      icon: <Layers size={iconSizes.xl} />,
      title: 'LVC Integration',
      desc: 'Bridging live instrumentation into virtual and constructive environments; reducing federation risk at scale.',
      path: '/capabilities/lvc-integration',
    },
    {
      icon: <Wrench size={iconSizes.xl} />,
      title: 'T&E Network Modernization',
      desc: 'Expeditionary test networks, wireless modeling, enterprise integration, and instrumentation modernization.',
      path: '/capabilities/tenm',
    },
    {
      icon: <Database size={iconSizes.xl} />,
      title: 'Software, Data Services & AAR',
      desc: 'Edge software, data pipelines, visualization tools, and AAR workflows that turn data into decisions.',
      path: '/capabilities/software-aar',
    },
  ];

  return (
    <section className="section-dark py-12 md:py-16 lg:py-20">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full mb-4 ${
            isDark ? 'bg-primary-navy/30 text-primary-light' : 'bg-primary-navy/10 text-primary-navy'
          }`}>
            CORE CAPABILITY AREAS
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
            What We Deliver
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
            At the center of our approach is the Training Edge Device (TED), a one-of-a-kind platform that brings AI to the point of need for both Training and T&E.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCapabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={cap.path} className="block h-full">
                <Card size="xl" className={`h-full flex flex-col hover:scale-[1.02] transition-transform cursor-pointer ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                    isDark ? 'bg-primary-navy/30' : 'bg-primary-navy/10'
                  }`}>
                    <div className={isDark ? 'text-primary-light' : 'text-primary-navy'}>
                      {cap.icon}
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                    {cap.title}
                  </h3>
                  <p className={`text-sm flex-grow ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                    {cap.desc}
                  </p>
                  <div className={`mt-4 inline-flex items-center gap-2 text-sm font-medium ${
                    isDark ? 'text-primary-light' : 'text-primary-navy'
                  }`}>
                    Learn more
                    <ChevronRight size={16} />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
