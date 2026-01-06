import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Network, Cpu, Shield, Layers, Wrench, Database, ChevronRight } from 'lucide-react';
import { Card } from '../components/ui';
import { SectionHeader, CTASection } from '../components/common';
import { PageSectionNav, SectionDots } from '../components/navigation';
import { useTheme } from '../contexts/ThemeContext';
import { iconSizes } from '../styles/theme';

// Hero image
import capabilitiesImg from '../assets/TED_AI-EnabledSensor_and_EmitterFusionEngine_v2/Capabilities.png';

// Core Capabilities images
import multiModalImg from '../assets/MultiModal.png';
import tedEcosystemImg from '../assets/TED-EcoSystem.png';
import aiEnabledImg from '../assets/AI-Enabled.png';
import lvcImg from '../assets/LVC.png';
import teNetworkImg from '../assets/T&E-Mana.png';
import softwareImg from '../assets/Software.png';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'capabilities', label: 'Core Capabilities' },
];

export default function CapabilitiesPage() {
  const { isDark } = useTheme();

  return (
    <div className="pt-20">
      <PageSectionNav sections={sections} />
      <SectionDots sections={sections} />

      <OverviewSection isDark={isDark} />
      <CapabilitiesSection isDark={isDark} />
      <CTASection
        title="Ready to Get Started?"
        subtitle="Contact our team to discuss how our capabilities can support your mission."
      />
    </div>
  );
}

function OverviewSection({ isDark }) {
  return (
    <section id="overview" className="section-padding container-main scroll-mt-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl mx-auto"
      >
        {/* Hero Image */}
        <div className="mb-8">
          <img
            src={capabilitiesImg}
            alt="Capabilities"
            className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg"
          />
        </div>
        <span className="tag-base tag-primary mb-4 inline-block">CAPABILITIES</span>
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
          Network-Focused. Solution-Driven.
        </h1>
        <p className={`text-lg leading-relaxed ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
          Athena-Tek delivers next-generation capabilities for the Department of Defense and mission partners by bridging resilient communications networks to real-world outcomes. We specialize in multi-modal tactical networking, edge devices, and AI-enabled sensor fusion—enabling safer, more realistic, and more measurable training and operational test environments.
        </p>
      </motion.div>
    </section>
  );
}

function CapabilitiesSection({ isDark }) {
  const coreCapabilities = [
    {
      image: multiModalImg,
      title: 'Multi-Modal Tactical Networking',
      desc: '5G/4G (FR1/CBRS), mesh/MANET, Wi-Fi, and hybrid backhaul—built for DDIL environments.',
      path: '/capabilities/tactical-networking',
    },
    {
      image: tedEcosystemImg,
      title: 'TED Ecosystem',
      desc: 'TED, TED-M, and A-TED deliver sensing, computing, and multi-network communications with AI at the edge.',
      path: '/capabilities/ted-ecosystem',
    },
    {
      image: aiEnabledImg,
      title: 'AI-Enabled Training & Soldier Safety',
      desc: 'Sensor fusion, anomaly detection, adaptive sampling, and performance baselines—actionable insight in real time.',
      path: '/capabilities/ai-safety',
    },
    {
      image: lvcImg,
      title: 'LVC Integration',
      desc: 'Bridging live instrumentation into virtual and constructive environments; reducing federation risk at scale.',
      path: '/capabilities/lvc-integration',
    },
    {
      image: teNetworkImg,
      title: 'T&E Network Modernization',
      desc: 'Expeditionary test networks, wireless modeling, enterprise integration, and instrumentation modernization.',
      path: '/capabilities/tenm',
    },
    {
      image: softwareImg,
      title: 'Software, Data Services & AAR',
      desc: 'Edge software, data pipelines, visualization tools, and AAR workflows that turn data into decisions.',
      path: '/capabilities/software-aar',
    },
  ];

  return (
    <section id="capabilities" className="section-padding container-main scroll-mt-36">
        <SectionHeader
          tag="CORE CAPABILITY AREAS"
          title="What We Deliver"
          subtitle="At the center of our approach is the Training Edge Device (TED), a one-of-a-kind platform that brings AI to the point of need for both Training and T&E."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  {cap.image ? (
                    <div className={`w-20 h-20 rounded-xl overflow-hidden mb-4 ${
                      isDark ? 'bg-primary-navy/20' : 'bg-light-100'
                    }`}>
                      <img
                        src={cap.image}
                        alt={cap.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                      isDark ? 'bg-primary-navy/30' : 'bg-primary-navy/10'
                    }`}>
                      <div className={isDark ? 'text-primary-light' : 'text-primary-navy'}>
                        {cap.icon}
                      </div>
                    </div>
                  )}
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
    </section>
  );
}
