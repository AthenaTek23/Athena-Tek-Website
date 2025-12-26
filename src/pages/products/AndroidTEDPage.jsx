import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone, Radio, Video, Mic, Users, Target, Zap, ChevronRight } from 'lucide-react';
import { Card } from '../../components/ui';
import { SectionHeader, CTASection } from '../../components/common';
import { useTheme } from '../../contexts/ThemeContext';
import { iconSizes } from '../../styles/theme';

export default function AndroidTEDPage() {
  const { isDark } = useTheme();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-dark-900 to-dark-950' : 'bg-gradient-to-b from-light-100 to-white'}`} />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative z-10 container-main text-center">
          <span className="tag-base tag-primary mb-4 inline-block">HARDWARE PRODUCT</span>
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
            Android TED (A TED)
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
            OC tool based on modified COTS 5G phone with IR capabilities
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="#features" className="btn-primary">
              View Features
            </Link>
            <Link to="#specifications" className="btn-secondary">
              Specifications
            </Link>
          </div>
        </div>
      </section>

      <FeaturesSection isDark={isDark} />
      <SpecificationsSection isDark={isDark} />
      <CTASection
        title="Learn More About Android TED"
        subtitle="Contact our team for detailed specifications and integration options."
      />
    </div>
  );
}

function FeaturesSection({ isDark }) {
  const ocFeatures = [
    { icon: <Radio size={iconSizes.lg} />, title: 'ATAK Base EXCON', desc: 'Full ATAK integration for exercise control' },
    { icon: <Users size={iconSizes.lg} />, title: 'Exercise Management', desc: 'Comprehensive training management tools' },
    { icon: <Target size={iconSizes.lg} />, title: 'After Action Review', desc: 'Detailed AAR capabilities' },
    { icon: <Zap size={iconSizes.lg} />, title: 'Soldier PAN Pairing', desc: 'ZigBee-based Personal Area Network' },
    { icon: <Video size={iconSizes.lg} />, title: 'Video Observation', desc: 'Real-time video capture capabilities' },
    { icon: <Mic size={iconSizes.lg} />, title: 'PTT Voice Comms', desc: 'Push-to-talk voice communications' },
  ];

  const soldierFeatures = [
    { title: 'Mortar Programming', desc: 'Direct mortar system programming interface' },
    { title: 'Stinger Programming', desc: 'Stinger missile system programming' },
  ];

  const futureFeatures = [
    { title: 'Room Illuminator', desc: 'IR illumination for MOUT training environments' },
    { title: 'MILES Gun Integration', desc: 'Full MILES weapon system integration' },
  ];

  return (
    <section id="features" className="section-padding container-main">
      <SectionHeader
        tag="CAPABILITIES"
        title="A TED Features"
        subtitle="Comprehensive feature set for Observer Controllers and Soldiers"
      />

      {/* Observer Controller Features */}
      <div className="mb-16">
        <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-light-900'}`}>
          Observer Controller Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ocFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card size="lg" className="h-full">
                <div className="icon-box w-12 h-12 mb-4">
                  {feature.icon}
                </div>
                <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                  {feature.title}
                </h4>
                <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  {feature.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-6">
          <Card size="md" className={isDark ? 'bg-teal-900/20 border-teal-500/20' : 'bg-teal-50 border-teal-200'}>
            <p className={`text-sm ${isDark ? 'text-teal-400' : 'text-teal-700'}`}>
              <strong>Additional OC Capability:</strong> Locate Grenades After Training - Track and recover training grenades post-exercise
            </p>
          </Card>
        </div>
      </div>

      {/* Soldier Features */}
      <div className="mb-16">
        <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-light-900'}`}>
          Soldier Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {soldierFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card size="lg">
                <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                  {feature.title}
                </h4>
                <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  {feature.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Future Features */}
      <div>
        <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-light-900'}`}>
          Future Capabilities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {futureFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card size="lg" className={isDark ? 'border-dashed border-white/20' : 'border-dashed border-light-400'}>
                <span className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
                  Coming Soon
                </span>
                <h4 className={`text-lg font-semibold mb-2 mt-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                  {feature.title}
                </h4>
                <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  {feature.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecificationsSection({ isDark }) {
  const specifications = [
    { label: 'Indicator', value: 'LED Indicator' },
    { label: 'Sensor', value: 'Proximity / Light Sensor' },
    { label: 'Volume', value: 'Volume Buttons' },
    { label: 'Buttons', value: 'Function 1, SOS, Power, Function 2 (Barcode Scan), Function 3' },
    { label: 'Slot', value: 'USIM / MicroSD Slot' },
    { label: 'Emitter', value: 'IR Emitter' },
    { label: 'Audio', value: '3.5mm Audio Jack' },
    { label: 'Receiver', value: 'Built-in Receiver' },
    { label: 'Microphones', value: 'MIC1, MIC2, MIC3 (Triple Microphone Array)' },
    { label: 'Cameras', value: 'Front Camera, Rear Camera with Flash' },
    { label: 'Display', value: 'LCD / Touch Screen' },
    { label: 'Speakers', value: 'Dual Speakers (x2)' },
    { label: 'Connectivity', value: 'POGO Pin, USB Type-C Port' },
  ];

  return (
    <section id="specifications" className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="TECHNICAL DETAILS"
          title="A TED Specifications"
          light
        />

        <div className="max-w-4xl mx-auto">
          <Card size="xl" className={isDark ? 'bg-white/[0.02]' : 'bg-white'}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`border-b ${isDark ? 'border-white/10' : 'border-light-300'}`}>
                    <th className={`text-left py-4 px-4 font-semibold ${isDark ? 'text-white' : 'text-light-900'}`}>
                      Component
                    </th>
                    <th className={`text-left py-4 px-4 font-semibold ${isDark ? 'text-white' : 'text-light-900'}`}>
                      Specification
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {specifications.map((spec, i) => (
                    <tr
                      key={i}
                      className={`border-b ${isDark ? 'border-white/5' : 'border-light-200'} ${
                        i % 2 === 0 ? (isDark ? 'bg-white/[0.01]' : 'bg-light-50') : ''
                      }`}
                    >
                      <td className={`py-3 px-4 font-medium ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
                        {spec.label}
                      </td>
                      <td className={`py-3 px-4 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
