import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, Radio, PlayCircle, Network, Users, Clock, MapPin, Layers, ChevronRight, Check } from 'lucide-react';
import { Card } from '../../components/ui';
import { SectionHeader, CTASection } from '../../components/common';
import { useTheme } from '../../contexts/ThemeContext';
import { iconSizes } from '../../styles/theme';

export default function NetworkMonitoringPage() {
  const { isDark } = useTheme();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-dark-900 to-dark-950' : 'bg-gradient-to-b from-light-100 to-white'}`} />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative z-10 container-main text-center">
          <span className="tag-base tag-primary mb-4 inline-block">SOFTWARE PRODUCT</span>
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
            Network Monitoring System
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
            Real-time TAK network monitoring and After Action Review for military training exercises
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="#features" className="btn-primary">
              View Features
            </Link>
            <Link to="#modes" className="btn-secondary">
              Operating Modes
            </Link>
          </div>
        </div>
      </section>

      <OverviewSection isDark={isDark} />
      <ModesSection isDark={isDark} />
      <TopologySection isDark={isDark} />
      <FeaturesSection isDark={isDark} />
      <CTASection
        title="Deploy Network Monitoring"
        subtitle="Contact our team for deployment and integration support."
      />
    </div>
  );
}

function OverviewSection({ isDark }) {
  const highlights = [
    { icon: <Activity size={iconSizes.lg} />, title: 'Real-Time Monitoring', desc: 'Live tracking of soldier positions and network connectivity' },
    { icon: <Radio size={iconSizes.lg} />, title: 'TAK Integration', desc: 'Full Team Awareness Kit (TAK) device support' },
    { icon: <PlayCircle size={iconSizes.lg} />, title: 'AAR Playback', desc: 'Review and analyze recorded training data' },
    { icon: <Network size={iconSizes.lg} />, title: 'Network Topology', desc: 'Visualize 802.11ah mesh network connectivity' },
  ];

  return (
    <section id="features" className="section-padding container-main">
      <SectionHeader
        tag="OVERVIEW"
        title="AAR Networking Monitor v3.0"
        subtitle="Web-based application for monitoring soldier positions and network connectivity during military training exercises"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="lg" className="h-full text-center">
              <div className="icon-box w-14 h-14 mx-auto mb-4">
                {item.icon}
              </div>
              <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                {item.title}
              </h4>
              <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                {item.desc}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ModesSection({ isDark }) {
  const liveFeatures = [
    { title: 'TAK Connection', desc: 'Connect to TAK multicast network for real-time data' },
    { title: 'Map View', desc: 'Soldiers appear as military symbols with real-time updates' },
    { title: 'Soldiers List', desc: 'View callsigns, IP addresses, connection types, and telemetry' },
    { title: 'Casualty Tracker', desc: 'Monitor soldier status changes and critical events' },
    { title: 'Adaptive Heartbeat', desc: 'Automatic disconnect detection based on message frequency' },
  ];

  const aarFeatures = [
    { title: 'CSV Import', desc: 'Import recorded training data from 30-column position files' },
    { title: 'Timeline Navigation', desc: 'Scrub through exercise timeline with play/pause controls' },
    { title: 'Playback Analysis', desc: 'Map and topology update to show state at selected time' },
    { title: 'Network Replay', desc: 'Visualize connectivity based on nexthop data' },
    { title: 'Status Analysis', desc: 'Review casualty states and posture changes over time' },
  ];

  return (
    <section id="modes" className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="OPERATING MODES"
          title="Two Powerful Modes"
          subtitle="Real-time monitoring and post-exercise analysis capabilities"
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LIVE Mode */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card size="xl" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  isDark ? 'bg-green-900/30' : 'bg-green-100'
                }`}>
                  <Activity size={24} className={isDark ? 'text-green-400' : 'text-green-600'} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-light-900'}`}>
                    LIVE Mode
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                    Real-time TAK device monitoring
                  </p>
                </div>
              </div>
              <ul className="space-y-4">
                {liveFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className={`mt-0.5 flex-shrink-0 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                    <div>
                      <span className={`font-medium ${isDark ? 'text-white' : 'text-light-900'}`}>
                        {feature.title}
                      </span>
                      <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                        {feature.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* AAR Mode */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card size="xl" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  isDark ? 'bg-blue-900/30' : 'bg-blue-100'
                }`}>
                  <PlayCircle size={24} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-light-900'}`}>
                    AAR Mode
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                    After Action Review playback
                  </p>
                </div>
              </div>
              <ul className="space-y-4">
                {aarFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className={`mt-0.5 flex-shrink-0 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                    <div>
                      <span className={`font-medium ${isDark ? 'text-white' : 'text-light-900'}`}>
                        {feature.title}
                      </span>
                      <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                        {feature.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TopologySection({ isDark }) {
  const nodeTypes = [
    { icon: '🟠', name: 'MAP', desc: 'Mesh Access Point' },
    { icon: '🔵', name: 'Gateway', desc: 'Central infrastructure' },
    { icon: '🟢', name: 'Station', desc: 'DHCP-connected soldier' },
    { icon: '🟣', name: 'Mesh Point', desc: 'Mesh-connected soldier' },
  ];

  const statusIndicators = [
    { color: 'bg-green-500', status: 'Active', desc: 'Receiving messages regularly' },
    { color: 'bg-yellow-500', status: 'Warning', desc: 'Message delayed, may disconnect' },
    { color: 'bg-gray-500', status: 'Stale', desc: 'No recent messages, likely offline' },
  ];

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="VISUALIZATION"
        title="Network Topology View"
        subtitle="Real-time visualization of 802.11ah mesh network connectivity"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Node Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card size="lg" className="h-full">
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
              Node Types
            </h4>
            <div className="space-y-4">
              {nodeTypes.map((node, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-2xl">{node.icon}</span>
                  <div>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-light-900'}`}>
                      {node.name}
                    </span>
                    <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                      {node.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Status Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Card size="lg" className="h-full">
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
              Status Indicators
            </h4>
            <div className="space-y-4">
              {statusIndicators.map((status, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full ${status.color}`} />
                  <div>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-light-900'}`}>
                      {status.status}
                    </span>
                    <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                      {status.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Topology Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-8"
      >
        <Card size="lg" variant="featured">
          <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
            Topology Controls
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={`p-4 rounded-lg ${isDark ? 'bg-white/5' : 'bg-light-100'}`}>
              <span className={`font-medium ${isDark ? 'text-white' : 'text-light-900'}`}>
                Show Stale Nodes
              </span>
              <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                Toggle visibility of disconnected nodes
              </p>
            </div>
            <div className={`p-4 rounded-lg ${isDark ? 'bg-white/5' : 'bg-light-100'}`}>
              <span className={`font-medium ${isDark ? 'text-white' : 'text-light-900'}`}>
                Auto Cleanup
              </span>
              <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                Automatically remove old stale nodes
              </p>
            </div>
            <div className={`p-4 rounded-lg ${isDark ? 'bg-white/5' : 'bg-light-100'}`}>
              <span className={`font-medium ${isDark ? 'text-white' : 'text-light-900'}`}>
                Node Details
              </span>
              <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                Click any node for detailed information
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}

function FeaturesSection({ isDark }) {
  const capabilities = [
    'Multicast WebSocket proxy for browser access',
    'Real-time COT message processing',
    'Military symbol map visualization',
    'Soldier telemetry display (posture, heart rate, temperature)',
    'Adaptive heartbeat detection algorithm',
    'CSV data import for post-exercise analysis',
    'Timeline scrubber with play/pause controls',
    'Network topology graph visualization',
    'Fall detection and casualty state alerts',
    'Multi-hop mesh connection tracking',
  ];

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="CAPABILITIES"
          title="Key Capabilities"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`flex items-center gap-3 p-4 rounded-lg ${
                isDark ? 'bg-white/[0.02] border border-white/5' : 'bg-white border border-light-300'
              }`}
            >
              <Check size={18} className={`flex-shrink-0 ${isDark ? 'text-teal-400' : 'text-teal-600'}`} />
              <span className={`text-sm ${isDark ? 'text-dark-200' : 'text-light-700'}`}>{cap}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
