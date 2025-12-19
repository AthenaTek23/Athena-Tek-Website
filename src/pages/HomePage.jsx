import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Zap,
  ArrowRight,
  Globe,
  Cpu,
  Target,
  ChevronRight,
  Brain,
  MapPin,
  Layers,
  Activity,
  Shield,
  FileText,
  Server,
  Check,
} from 'lucide-react';
import { Button, Card } from '../components/ui';
import { SectionHeader, CTASection } from '../components/common';

/* Banner image - import */
import BannerImg from '../assets/BannerImg.jpg';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <div>
	
		
		<div
			/* Banner image - Start */
			style={{
			  position: 'relative',
			  width: '100%',
			  overflow: 'hidden',
			  backgroundColor: '#000',
			}}
			>
			<img
			  src={BannerImg}
			  alt="Athena-Tek banner"
			  style={{
				display: 'block',
				width: '100%',
				height: 'auto',
				objectFit: 'cover',
			  }}
			  /* Banner image - End */
			/>
		</div>
	
      <HeroSection />
      <EcosystemSection />
      <CapabilitiesSection />
      <SolutionsSection />
      <PartnersSection />
      <CTASection />
    </div>
  );
}

// Hero Section - Compact version
function HeroSection() {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '4', label: 'CTCs Supported' },
    { number: 'Global', label: 'Network Reach' },
  ];

  return (
    <section className="relative py-4 px-4 overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />

      <div className="relative z-10 max-w-lg mx-auto text-center">
        <motion.div {...fadeInUp} className="mb-2">
          <span className="tag-base tag-primary text-xs">
            <Zap size={12} />
            <span>NEXT-GENERATION DEFENSE TECHNOLOGY</span>
          </span>
        </motion.div>

        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl font-extrabold text-white mb-1 leading-tight whitespace-nowrap"
        >
          AI-Driven Soldier Insight <span className="text-gradient">at the Point of Need</span>
        </motion.h1>

        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-xs text-dark-400 max-w-md mx-auto mb-3 leading-relaxed"
        >
          Athena-Tek delivers AI-enabled global networks, advanced sensor fusion,
          and the world's most capable Training Edge Device (TED).
        </motion.p>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="flex flex-row gap-2 justify-center mb-4"
        >
          <Button to="/ted" variant="primary" size="sm" icon={<ArrowRight size={14} />}>
            Explore TED
          </Button>
          <Button to="/about" variant="secondary" size="sm">
            About Us
          </Button>
        </motion.div>
      </div>

      {/* Stats - Compact */}
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative z-10 flex justify-center gap-8 mt-2 flex-wrap"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="text-center"
          >
            <span className="block text-xl md:text-2xl font-extrabold text-primary-500 font-mono">
              {stat.number}
            </span>
            <span className="text-xs text-dark-500 uppercase tracking-wider">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// Ecosystem Section
function EcosystemSection() {
  const pillars = [
    {
      icon: <Globe size={32} />,
      title: 'Network Focused',
      description: 'Global multi-bearer network architectures—5G, LTE, NTN, SATCOM, and hybrid mesh—ensuring resilient connectivity anywhere.',
      path: '/network',
    },
    {
      icon: <Cpu size={32} />,
      title: 'TED',
      description: 'The Training Edge Device—a rugged, AI-powered soldier state engine for real-time RTCA, positioning, and telemetry.',
      path: '/ted',
      featured: true,
    },
    {
      icon: <Target size={32} />,
      title: 'Solution Driven',
      description: 'Integrated Live Training and T&E solutions delivering high fidelity, realism, and soldier safety.',
      path: '/training',
    },
  ];

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="THE ATHENA-TEK ECOSYSTEM"
        title="Three Pillars of Excellence"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link to={pillar.path}>
              <Card
                variant={pillar.featured ? 'featured' : 'default'}
                size="lg"
                className="h-full"
              >
                <div className="icon-box w-16 h-16 mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-dark-400 mb-6 leading-relaxed">
                  {pillar.description}
                </p>
                <span className="btn-ghost text-sm">
                  Learn More <ChevronRight size={16} />
                </span>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Capabilities Section
function CapabilitiesSection() {
  const capabilities = [
    { icon: <Brain size={24} />, title: 'AI-Driven RTCA', desc: 'Direct and indirect fire assessment' },
    { icon: <MapPin size={24} />, title: 'Hybrid Positioning', desc: 'Indoor/outdoor soldier tracking' },
    { icon: <Layers size={24} />, title: 'Multi-Sensor Fusion', desc: 'Posture, movement, and state' },
    { icon: <Activity size={24} />, title: 'Physiological Data', desc: 'Wearable integration' },
    { icon: <Shield size={24} />, title: 'Safety Monitoring', desc: 'Real-time alerts and prediction' },
    { icon: <Cpu size={24} />, title: 'Edge AI Inference', desc: 'Zero-latency decisions' },
    { icon: <FileText size={24} />, title: 'Automated AAR', desc: 'Soldier and unit level' },
    { icon: <Server size={24} />, title: 'EXCON Integration', desc: 'Full platform compatibility' },
  ];

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="CAPABILITIES"
          title="TED: The AI-Enabled Fusion Engine"
          subtitle="Capabilities unmatched by any training device ever fielded"
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card size="md" hover={false}>
                <div className="icon-box w-12 h-12 mb-4">
                  {cap.icon}
                </div>
                <h4 className="text-base font-semibold text-white mb-1">
                  {cap.title}
                </h4>
                <p className="text-sm text-dark-500">{cap.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Solutions Section
function SolutionsSection() {
  const solutions = [
    {
      title: 'Live Training',
      items: [
        'Direct & indirect fire fidelity',
        'FoF modernization beyond legacy',
        'MOUT GPS-denied tracking',
        'Soldier safety and sensor fusion',
        'High-fidelity AAR',
        'STIA, HITS, RCS, TAK integration',
      ],
      path: '/training',
      dark: false,
    },
    {
      title: 'Test & Evaluation',
      items: [
        'Soldier/vehicle telemetry',
        'Private 5G/NTN networks for OT',
        'High-speed camera instrumentation',
        'Synchronized test metadata',
        'XLCC integration',
        'AI-powered test insights',
      ],
      path: '/te',
      dark: true,
    },
  ];

  return (
    <section className="section-padding container-main">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {solutions.map((solution, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link to={solution.path}>
              <Card
                variant={solution.dark ? 'dark' : 'default'}
                size="xl"
                className="h-full"
              >
                <h3 className={`text-2xl font-bold mb-6 ${solution.dark ? 'text-white' : 'text-white'}`}>
                  {solution.title}
                </h3>
                <ul className="space-y-3 mb-8">
                  {solution.items.map((item, j) => (
                    <li
                      key={j}
                      className={`flex items-center gap-3 text-sm pb-3 border-b ${
                        solution.dark
                          ? 'text-white/80 border-white/10'
                          : 'text-dark-400 border-white/5'
                      }`}
                    >
                      <Check size={16} className="text-primary-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className={`btn-ghost text-sm ${solution.dark ? 'text-white' : ''}`}>
                  Explore <ArrowRight size={16} />
                </span>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Partners Section
function PartnersSection() {
  const partners = [
    'Cubic', 'Lockheed Martin', 'GDMS', 'GDIT', 'FN America',
    'Phoenix Defense', 'Vodafone', 'Ericsson', 'Nokia', 'Samsung',
  ];

  return (
    <section className="py-16 bg-dark-900">
      <div className="container-main text-center">
        <h3 className="text-xs font-semibold tracking-[0.2em] text-dark-500 mb-10">
          TRUSTED BY INDUSTRY AND GOVERNMENT
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-6 py-3 bg-white/[0.02] border border-white/5 rounded-lg text-sm text-dark-400"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
