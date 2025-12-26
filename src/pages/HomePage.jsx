import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {
  Zap,
  ArrowRight,
  Globe,
  Cpu,
  Target,
  ChevronRight,
  ChevronDown,
  Brain,
  MapPin,
  Layers,
  Activity,
  Shield,
  FileText,
  Server,
  Check,
  Play,
  Wifi,
  Radio,
  Satellite,
  Network,
  Clock,
  Eye,
  BarChart3,
  Cloud,
} from 'lucide-react';
import { Button, Card, BannerImage } from '../components/ui';
import { SectionHeader, CTASection } from '../components/common';
import { iconSizes } from '../styles/theme';

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
      <HeroSection />
      <BannerSection />
      <WhatWeDeliverSection />
      <EnterpriseFeaturesSection />
      <SeeItInActionSection />
      <ExploreFeaturesSection />
      <CTASection />
    </div>
  );
}

// Hero Section - New design with three pillars as pill buttons
function HeroSection() {
  const { isDark } = useTheme();
  const pillars = [
    { label: 'Network Focused', path: '/network', icon: <Globe size={14} /> },
    { label: 'TED', path: '/ted', icon: <Cpu size={14} /> },
    { label: 'Solution Driven', path: '/training', icon: <Target size={14} /> },
  ];

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background image - more prominent */}
      <div className="absolute inset-0">
        <img
          src={BannerImg}
          alt="Athena-Tek background"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${
          isDark
            ? 'from-dark-950/80 via-dark-950/50 to-transparent'
            : 'from-light-100/90 via-light-100/60 to-transparent'
        }`} />
        <div className={`absolute inset-0 bg-gradient-to-t ${
          isDark
            ? 'from-dark-950/90 via-transparent to-transparent'
            : 'from-light-100/90 via-transparent to-transparent'
        }`} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 container-main py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Three Pillar Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {pillars.map((pillar, i) => (
                <Link
                  key={i}
                  to={pillar.path}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isDark
                      ? 'bg-teal-900/30 border border-teal-500/30 text-teal-400 hover:bg-teal-900/50 hover:border-teal-500/50'
                      : 'bg-teal-100 border border-teal-300 text-teal-700 hover:bg-teal-200 hover:border-teal-400'
                  }`}
                >
                  {pillar.icon}
                  {pillar.label}
                </Link>
              ))}
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight ${
                isDark ? 'text-white' : 'text-light-900'
              }`}
            >
              The AI-Enabled Soldier Engine
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-lg max-w-xl leading-relaxed ${
                isDark ? 'text-dark-300' : 'text-light-700'
              }`}
            >
              Revolutionary platform for training, test & evaluation, and
              distributed intelligence at the edge.
            </motion.p>
          </div>

          {/* Right side - could add device image here */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            {/* Placeholder for device visualization or leave empty for background to show */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Banner Section - Full width text overlay
function BannerSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-teal-900 via-teal-800 to-teal-600">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Mountain/terrain gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 to-transparent" />

      <div className="relative z-10 container-main text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white"
        >
          AI-Driven Soldier Insight at the Point of Need
        </motion.h2>
      </div>
    </section>
  );
}

// What We Deliver Section
function WhatWeDeliverSection() {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'ARMY', 'NAVY/AF', 'T&E', 'AI'];

  const capabilities = [
    {
      icon: <Globe size={iconSizes.xl} />,
      title: 'Network Focused',
      description: 'Multi-bearer 5G, satellite, mesh and hybrid connectivity ensuring warfighter communications in any environment.',
      path: '/network',
      tags: ['ALL', 'ARMY', 'NAVY/AF'],
    },
    {
      icon: <Cpu size={iconSizes.xl} />,
      title: 'TED Device',
      description: 'Soldier-worn edge AI platform for real-time casualty assessment, sensor fusion, and on-device intelligence at reduced SWaP.',
      path: '/ted',
      tags: ['ALL', 'ARMY', 'AI'],
      featured: true,
    },
    {
      icon: <Target size={iconSizes.xl} />,
      title: 'Live Training',
      description: 'AI-driven direct fire, indirect fire, automated after action review, and comprehensive soldier monitoring.',
      path: '/training',
      tags: ['ALL', 'ARMY'],
    },
    {
      icon: <BarChart3 size={iconSizes.xl} />,
      title: 'T&E Solutions',
      description: 'Complete developmental and live-fire performance test with AI analytics, instrumentation, and anomaly detection.',
      path: '/te',
      tags: ['ALL', 'T&E'],
    },
    {
      icon: <Brain size={iconSizes.xl} />,
      title: 'AI Ecosystem',
      description: 'Distributed intelligence spanning soldier, vehicle, and command nodes with unified mission-focused operations.',
      path: '/ai',
      tags: ['ALL', 'AI'],
    },
  ];

  const filteredCapabilities = activeFilter === 'ALL'
    ? capabilities
    : capabilities.filter(cap => cap.tags.includes(activeFilter));

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="CORE CAPABILITIES"
        title="What We Deliver"
        subtitle="Complete ecosystem for modern military training and advanced weapons testing"
      />

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200
              ${activeFilter === filter
                ? 'bg-teal-600 text-white'
                : isDark
                  ? 'bg-white/5 text-dark-400 hover:bg-white/10 hover:text-white border border-white/10'
                  : 'bg-light-200 text-light-600 hover:bg-light-300 hover:text-light-800 border border-light-300'
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Capability cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {filteredCapabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link to={cap.path}>
              <Card
                variant={cap.featured ? 'featured' : 'default'}
                size="lg"
                className="h-full"
              >
                <div className="icon-box w-14 h-14 mb-5">
                  {cap.icon}
                </div>
                <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-light-900'}`}>
                  {cap.title}
                </h3>
                <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  {cap.description}
                </p>
                <span className="btn-ghost text-sm inline-flex items-center gap-1">
                  Learn more <ChevronRight size={iconSizes.sm} />
                </span>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Enterprise-Grade Features Section
function EnterpriseFeaturesSection() {
  const { isDark } = useTheme();
  const features = [
    {
      number: '1',
      title: 'Real-Time Processing',
      description: 'Millisecond-level AI inference and decision-making at the tactical edge.',
      icon: <Clock size={iconSizes.lg} />,
    },
    {
      number: '2',
      title: 'GPS-Denied Positioning',
      description: 'Multi-floor indoor positioning and 3D tracking without satellite dependency.',
      icon: <MapPin size={iconSizes.lg} />,
    },
    {
      number: '3',
      title: 'WCAG AAA Compliant',
      description: 'Industry-leading contrast, clarity, and accessibility for all interfaces.',
      icon: <Eye size={iconSizes.lg} />,
    },
    {
      number: '4',
      title: 'Distributed Intelligence',
      description: 'AI operating at soldier, vehicle, and command nodes simultaneously.',
      icon: <Network size={iconSizes.lg} />,
    },
    {
      number: '5',
      title: 'Zero Cloud Dependency',
      description: 'Complete edge processing for consistent security and reliability.',
      icon: <Cloud size={iconSizes.lg} />,
    },
    {
      number: '6',
      title: 'Advanced Analytics',
      description: 'Comprehensive performance metrics, anomaly detection, and performance trends.',
      icon: <BarChart3 size={iconSizes.lg} />,
    },
  ];

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="WHY CHOOSE ATHENA-TEK"
          title="Enterprise-Grade Features"
          subtitle="Built for military-scale operations with proven reliability and performance"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 content-wide">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`flex gap-4 p-6 rounded-xl ${
                isDark
                  ? 'bg-white/[0.02] border border-white/5'
                  : 'bg-white border border-light-300 shadow-sm'
              }`}
            >
              <div className="flex-shrink-0">
                <span className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm ${
                  isDark
                    ? 'bg-teal-900/50 text-teal-400'
                    : 'bg-teal-100 text-teal-700'
                }`}>
                  {feature.number}
                </span>
              </div>
              <div>
                <h4 className={`text-base font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                  {feature.title}
                </h4>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// See It In Action Section - Image Gallery with Video Links
function SeeItInActionSection() {
  const { isDark } = useTheme();
  const basePath = '/Athena-Tek-Website';

  const mediaItems = [
    {
      image: `${basePath}/monitors/Network/Images/NF-Ex.png`,
      video: `${basePath}/monitors/Network/videos/Multi5GMAPs.mp4`,
      alt: 'Network Focused',
      label: 'Network Focused',
      description: 'Multi-bearer 5G network architecture'
    },
    {
      image: `${basePath}/monitors/TED/Images/TED-SP.png`,
      video: `${basePath}/monitors/TED/videos/TED-Description.mp4`,
      alt: 'AI Ready TED',
      label: 'AI Ready TED',
      description: 'The AI-Enabled Sensor & Emitter Fusion Engine'
    },
    {
      image: `${basePath}/monitors/Applications/Images/SD-STE.png`,
      video: `${basePath}/monitors/Applications/videos/SensorFusion.mp4`,
      alt: 'AI Ecosystem',
      label: 'AI Ecosystem',
      description: 'Sensor fusion and AI-driven solutions'
    },
    {
      image: `${basePath}/monitors/Network/Images/NF-Star.png`,
      video: `${basePath}/monitors/Network/videos/NF-V.mp4`,
      alt: 'Network Security',
      label: 'Network Security',
      description: 'Secure network infrastructure'
    },
  ];

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="VISUAL PORTFOLIO"
        title="See It In Action"
        subtitle="Professional imagery showcasing Athena-Tek's capabilities and integration"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 content-wide">
        {mediaItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-xl cursor-pointer"
            onClick={() => setActiveVideo(item.video)}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${
              isDark
                ? 'from-dark-950/90 via-dark-950/30 to-transparent'
                : 'from-light-900/80 via-light-900/20 to-transparent'
            }`} />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 rounded-full bg-teal-500/90 flex items-center justify-center">
                <Play size={28} className="text-white ml-1" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white font-semibold text-lg">{item.label}</p>
              <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-300'}`}>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950/95 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-teal-400 transition-colors"
            >
              <span className="text-lg font-semibold">Close ✕</span>
            </button>
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full rounded-xl shadow-2xl"
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

// Explore Features Section - Sidebar navigation with content
function ExploreFeaturesSection() {
  const { isDark } = useTheme();
  const [activeFeature, setActiveFeature] = useState('network');

  const features = {
    network: {
      title: 'Network Focused',
      subtitle: 'Global multi-bearer architecture for resilient connectivity anywhere on the battlefield',
      cards: [
        { title: 'High-Throughput Networks', tag: '5G Bandwidth', description: 'Low-latency connectivity for training and T&E operations across global environments.' },
        { title: 'Mesh Architecture', tag: 'Resilient Mesh', description: 'Self + Mobile multi-hop networking for resilient formations with GPS-denied paths.' },
        { title: 'Satellite Coverage', tag: 'NTN Satellite', description: 'Direct-to-device ACAQ connectivity for remote test Pacific training operations.' },
        { title: 'Multi-SIM Support', tag: 'SATCOM Overlay', description: 'LTE and multi-wide support for expeditionary EXCON mesh deployments.' },
      ],
    },
    ted: {
      title: 'TED Device',
      subtitle: 'The Training Edge Device - AI-powered soldier state engine',
      cards: [
        { title: 'Edge AI Processing', tag: 'On-Device AI', description: 'Real-time casualty assessment and decision support at the tactical edge.' },
        { title: 'Sensor Fusion', tag: 'Multi-Sensor', description: 'IMU, GPS, barometer, and biometric data fusion for complete situational awareness.' },
        { title: 'Rugged Design', tag: 'MIL-STD', description: 'Smartphone-sized device built for harsh operational environments.' },
        { title: 'Zero Latency', tag: 'Real-Time', description: 'Millisecond-level inference without cloud dependency.' },
      ],
    },
    training: {
      title: 'Live Training',
      subtitle: 'Next-generation force-on-force and live fire training solutions',
      cards: [
        { title: 'Direct Fire RTCA', tag: 'AI-Driven', description: 'Shooter pose, stance, and weapon orientation for accurate casualty assessment.' },
        { title: 'Indirect Fire', tag: 'Mortar/Grenade', description: 'Complete indirect fire modeling for mortars, grenades, and anti-armor.' },
        { title: 'AAR Automation', tag: 'After Action', description: 'Automated after action review with comprehensive soldier analytics.' },
        { title: 'EXCON Integration', tag: 'Enterprise', description: 'Full compatibility with STIA, HITS, RCS, and TAK systems.' },
      ],
    },
    te: {
      title: 'T&E Solutions',
      subtitle: 'Comprehensive test and evaluation capabilities',
      cards: [
        { title: 'Telemetry Systems', tag: 'Data Collection', description: 'Soldier and vehicle telemetry for operational testing.' },
        { title: 'Private Networks', tag: '5G/NTN', description: 'Dedicated 5G and NTN networks for secure test environments.' },
        { title: 'Instrumentation', tag: 'High-Speed', description: 'High-speed camera and sensor synchronization.' },
        { title: 'AI Insights', tag: 'Analytics', description: 'AI-powered test analysis and anomaly detection.' },
      ],
    },
    ai: {
      title: 'AI Ecosystem',
      subtitle: 'Distributed intelligence across the operational environment',
      cards: [
        { title: 'Distributed AI', tag: 'Multi-Node', description: 'Intelligence at soldier, vehicle, and command levels.' },
        { title: 'Mission Focus', tag: 'Operational', description: 'AI optimized for training and test objectives.' },
        { title: 'Edge Computing', tag: 'Local Process', description: 'On-device processing for security and reliability.' },
        { title: 'Model Updates', tag: 'Continuous', description: 'Over-the-air AI model updates and improvements.' },
      ],
    },
  };

  const menuItems = [
    { id: 'network', label: 'Network Focused', icon: <Globe size={iconSizes.md} /> },
    { id: 'ted', label: 'TED Device', icon: <Cpu size={iconSizes.md} /> },
    { id: 'training', label: 'Live Training', icon: <Target size={iconSizes.md} /> },
    { id: 'te', label: 'T&E Solutions', icon: <BarChart3 size={iconSizes.md} /> },
    { id: 'ai', label: 'AI Ecosystem', icon: <Brain size={iconSizes.md} /> },
  ];

  const activeContent = features[activeFeature];

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="EXPLORE FEATURES"
          title="Capability Solutions"
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveFeature(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200
                    ${activeFeature === item.id
                      ? isDark
                        ? 'bg-teal-900/40 border border-teal-500/30 text-white'
                        : 'bg-teal-100 border border-teal-300 text-teal-800'
                      : isDark
                        ? 'bg-white/[0.02] border border-white/5 text-dark-400 hover:bg-white/[0.04] hover:text-white'
                        : 'bg-white border border-light-300 text-light-600 hover:bg-light-100 hover:text-light-800'
                    }`}
                >
                  <span className={activeFeature === item.id ? (isDark ? 'text-teal-400' : 'text-teal-600') : ''}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                  <ChevronRight
                    size={iconSizes.sm}
                    className={`ml-auto transition-transform ${activeFeature === item.id ? 'rotate-90' : ''}`}
                  />
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  {['5G', 'NTN', 'MESH', 'SATCOM'].map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                        isDark
                          ? 'bg-teal-900/40 border border-teal-500/30 text-teal-400'
                          : 'bg-teal-100 border border-teal-300 text-teal-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>{activeContent.title}</h3>
                <p className={isDark ? 'text-dark-300' : 'text-light-600'}>{activeContent.subtitle}</p>
              </div>

              {/* Cards grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeContent.cards.map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`p-5 rounded-xl transition-colors ${
                      isDark
                        ? 'bg-teal-900/20 border border-teal-500/20 hover:bg-teal-900/30'
                        : 'bg-teal-50 border border-teal-200 hover:bg-teal-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className={`text-base font-semibold ${isDark ? 'text-white' : 'text-light-900'}`}>{card.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${
                        isDark
                          ? 'bg-teal-900/50 text-teal-400'
                          : 'bg-teal-200 text-teal-700'
                      }`}>
                        {card.tag}
                      </span>
                    </div>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-dark-300' : 'text-light-600'}`}>{card.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
