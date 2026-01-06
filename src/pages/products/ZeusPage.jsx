import { motion } from 'framer-motion';
import { RadioTower, Zap, Shield, Clock, Globe, Sun, Satellite, Server, Check, Target } from 'lucide-react';
import { Card } from '../../components/ui';
import { SectionHeader, CTASection } from '../../components/common';
import { PageSectionNav, SectionDots } from '../../components/navigation';
import { useTheme } from '../../contexts/ThemeContext';
import { iconSizes } from '../../styles/theme';

// Product image
import zeus5gImg from '../../assets/products/zeus-5g.webp';

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'description', label: 'About Zeus' },
  { id: 'why-zeus', label: 'Why Zeus' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'applications', label: 'Applications' },
  { id: 'athena-advantage', label: 'Athena Advantage' },
];

export default function ZeusPage() {
  const { isDark } = useTheme();

  return (
    <div className="pt-20">
      <PageSectionNav sections={sections} />
      <SectionDots sections={sections} />

      <HeroSection isDark={isDark} />
      <DescriptionSection isDark={isDark} />
      <WhyZeusSection isDark={isDark} />
      <CapabilitiesSection isDark={isDark} />
      <ApplicationsSection isDark={isDark} />
      <AthenaAdvantageSection isDark={isDark} />
      <CTASection
        title="Your Network. Your Mission. Your Terms."
        subtitle="Contact our team to deploy Zeus for your tactical connectivity needs."
      />
    </div>
  );
}

function HeroSection({ isDark }) {
  return (
    <section id="hero" className="py-8 md:py-12 lg:py-16 container-main scroll-mt-28 md:scroll-mt-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className={`w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 rounded-2xl flex items-center justify-center overflow-hidden ${
          isDark ? 'bg-primary-navy/20' : 'bg-light-100'
        }`}>
          <img src={zeus5gImg} alt="5G Zeus" className="w-full h-full object-contain" />
        </div>
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
          5G Zeus
        </h1>
        <p className={`text-xl md:text-2xl mb-6 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
          Expeditionary 5G Network in a Box
        </p>
        <p className={`text-base md:text-lg max-w-3xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
          Tactical Connectivity. Anywhere. Anytime. Carrier-grade 5G connectivity in a ruggedized,
          rapidly deployable package designed for the modern warfighter.
        </p>
      </motion.div>
    </section>
  );
}

function DescriptionSection({ isDark }) {
  return (
    <section id="description" className="py-5 md:py-7 lg:py-10 container-main scroll-mt-28 md:scroll-mt-36">
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
              <RadioTower size={32} className={isDark ? 'text-primary-light' : 'text-primary-navy'} />
            </div>
            <div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-light-900'}`}>
                Bringing Private 5G to the Edge of the Battlefield
              </h3>
              <p className={`text-base leading-relaxed ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                Zeus delivers carrier-grade 5G connectivity in a ruggedized, rapidly deployable package designed for the modern warfighter. When missions take you beyond fixed infrastructure, Zeus ensures your forces stay connected with the speed, security, and reliability that only private 5G can provide.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}

function WhyZeusSection({ isDark }) {
  const benefits = [
    {
      icon: <Clock size={iconSizes.lg} />,
      title: 'Deploy in Minutes, Not Months',
      desc: 'Zeus transforms 5G from a fixed infrastructure investment into a mobile tactical asset. Unpack, power on, and establish a secure high-speed network wherever the mission demands—from remote training ranges to forward operating bases.'
    },
    {
      icon: <Shield size={iconSizes.lg} />,
      title: 'True Network Independence',
      desc: 'Own your network. Control your data. Zeus operates as a fully self-contained private 5G ecosystem, keeping sensitive communications on-premises and eliminating dependence on commercial carriers or vulnerable infrastructure.'
    },
    {
      icon: <Zap size={iconSizes.lg} />,
      title: 'Built for the Harshest Environments',
      desc: 'Hardened components, flexible power options including solar and battery, and multiple backhaul choices—fiber, microwave, or satellite via Iridium—ensure Zeus performs when and where you need it most.'
    },
    {
      icon: <Globe size={iconSizes.lg} />,
      title: 'Spectrum Ready for DoW',
      desc: 'Leveraging CBRS shared spectrum (n48) with automated SAS authorization, Zeus operates within the regulatory framework already available at most Army installations, streamlining approval and accelerating fielding.'
    },
  ];

  return (
    <section id="why-zeus" className="section-dark py-5 md:py-7 lg:py-10 scroll-mt-28 md:scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="ADVANTAGES"
          title="Why Zeus?"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card size="lg" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
                <div className="icon-box w-12 h-12 mb-4">
                  {benefit.icon}
                </div>
                <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-light-900'}`}>
                  {benefit.title}
                </h4>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  {benefit.desc}
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
    { feature: 'Two-Sector gNodeB', benefit: '360° coverage for expansive operational areas', icon: <RadioTower size={20} /> },
    { feature: 'Hardened RAN/CORE Server', benefit: 'All-in-one processing for austere conditions', icon: <Server size={20} /> },
    { feature: 'Satellite Backhaul', benefit: 'Connectivity anywhere on the globe', icon: <Satellite size={20} /> },
    { feature: 'Solar/Battery Power', benefit: 'Sustained operations without grid dependency', icon: <Sun size={20} /> },
    { feature: 'Standards-Based Architecture', benefit: 'Interoperability with existing tactical systems', icon: <Globe size={20} /> },
  ];

  return (
    <section id="capabilities" className="py-5 md:py-7 lg:py-10 container-main scroll-mt-28 md:scroll-mt-36">
      <SectionHeader
        tag="FEATURES"
        title="Capabilities"
        subtitle="Enterprise-grade features in a tactical package"
      />

      <div className="max-w-4xl mx-auto">
        <Card size="xl">
          <div className="space-y-0">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col sm:flex-row sm:items-center gap-4 py-4 ${
                  i < capabilities.length - 1 ? (isDark ? 'border-b border-white/10' : 'border-b border-light-200') : ''
                }`}
              >
                <div className={`flex items-center gap-3 sm:min-w-[280px] ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
                  {cap.icon}
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-light-900'}`}>
                    {cap.feature}
                  </span>
                </div>
                <span className={`${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  {cap.benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function ApplicationsSection({ isDark }) {
  const applications = [
    {
      title: 'Expeditionary Training',
      desc: 'Extend realistic, networked training to any location',
    },
    {
      title: 'Disaster Response',
      desc: 'Restore communications when infrastructure fails',
    },
    {
      title: 'Forward Operations',
      desc: 'Secure, high-bandwidth connectivity at the tactical edge',
    },
    {
      title: 'Range Modernization',
      desc: 'Upgrade legacy training facilities with next-generation networks',
    },
  ];

  return (
    <section id="applications" className="section-dark py-5 md:py-7 lg:py-10 scroll-mt-28 md:scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="USE CASES"
          title="Applications"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card size="lg" className={`h-full text-center ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  isDark ? 'bg-primary-navy/30' : 'bg-primary-navy/10'
                }`}>
                  <Target size={24} className={isDark ? 'text-primary-light' : 'text-primary-navy'} />
                </div>
                <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                  {app.title}
                </h4>
                <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  {app.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AthenaAdvantageSection({ isDark }) {
  const integrations = [
    'Real-time position tracking',
    'Sensor fusion capabilities',
    'After-action review',
    'Individual soldier devices',
    'Vehicle-mounted systems',
    'Comprehensive training support',
  ];

  return (
    <section id="athena-advantage" className="py-5 md:py-7 lg:py-10 container-main scroll-mt-28 md:scroll-mt-36">
      <SectionHeader
        tag="INTEGRATION"
        title="The Athena Advantage"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card size="xl" variant="featured">
          <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
            Zeus integrates seamlessly with the Athena Technologies Training Edge Device (TED) ecosystem, enabling real-time position tracking, sensor fusion, and after-action review capabilities across your private 5G network. From individual soldier devices to vehicle-mounted systems, Zeus provides the connective backbone for comprehensive training and operational excellence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.map((item, i) => (
              <div key={i} className={`flex items-center gap-3 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                <Check size={18} className={`flex-shrink-0 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`} />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
