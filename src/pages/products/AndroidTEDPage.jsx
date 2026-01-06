import { motion } from 'framer-motion';
import { Smartphone, Radio, Video, Mic, Users, Target, Zap, Check } from 'lucide-react';
import { Card } from '../../components/ui';
import { SectionHeader, CTASection } from '../../components/common';
import { PageSectionNav, SectionDots } from '../../components/navigation';
import { useTheme } from '../../contexts/ThemeContext';
import { iconSizes } from '../../styles/theme';

// Product image
import androidTedImg from '../../assets/products/android-ted.webp';

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'oc-features', label: 'OC Features' },
  { id: 'soldier-features', label: 'Soldier Features' },
  { id: 'future-capabilities', label: 'Future Capabilities' },
  { id: 'specifications', label: 'Specifications' },
];

export default function AndroidTEDPage() {
  const { isDark } = useTheme();

  return (
    <div className="pt-20">
      <PageSectionNav sections={sections} />
      <SectionDots sections={sections} />

      <HeroSection isDark={isDark} />
      <OCFeaturesSection isDark={isDark} />
      <SoldierFeaturesSection isDark={isDark} />
      <FutureCapabilitiesSection isDark={isDark} />
      <SpecificationsSection isDark={isDark} />
      <CTASection
        title="Learn More About Android TED"
        subtitle="Contact our team for detailed specifications and integration options."
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
          <img src={androidTedImg} alt="Android TED" className="w-full h-full object-contain" />
        </div>
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
          Android TED
        </h1>
        <p className={`text-xl md:text-2xl mb-6 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
          Android Training Edge Device (A TED)
        </p>
        <p className={`text-base md:text-lg max-w-3xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
          OC tool based on modified COTS 5G phone with IR capabilities for exercise control and management.
          Full ATAK integration with PTT voice communications and video observation.
        </p>
      </motion.div>
    </section>
  );
}

function OCFeaturesSection({ isDark }) {
  const ocFeatures = [
    { icon: <Radio size={iconSizes.lg} />, title: 'ATAK Base EXCON', desc: 'Full ATAK integration for exercise control' },
    { icon: <Users size={iconSizes.lg} />, title: 'Exercise Management', desc: 'Comprehensive training management tools' },
    { icon: <Target size={iconSizes.lg} />, title: 'After Action Review', desc: 'Detailed AAR capabilities' },
    { icon: <Zap size={iconSizes.lg} />, title: 'Soldier PAN Pairing', desc: 'ZigBee-based Personal Area Network' },
    { icon: <Video size={iconSizes.lg} />, title: 'Video Observation', desc: 'Real-time video capture capabilities' },
    { icon: <Mic size={iconSizes.lg} />, title: 'PTT Voice Comms', desc: 'Push-to-talk voice communications' },
  ];

  return (
    <section id="oc-features" className="py-5 md:py-7 lg:py-10 container-main scroll-mt-28 md:scroll-mt-36">
      <SectionHeader
        tag="OBSERVER CONTROLLER"
        title="OC Features"
        subtitle="Comprehensive feature set for Observer Controllers"
      />

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
        <Card size="md" className={isDark ? 'bg-primary-navy/20 border-primary-light/20' : 'bg-primary-navy/5 border-primary-navy/20'}>
          <p className={`text-sm ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
            <strong>Additional OC Capability:</strong> Locate Grenades After Training - Track and recover training grenades post-exercise
          </p>
        </Card>
      </div>
    </section>
  );
}

function SoldierFeaturesSection({ isDark }) {
  const soldierFeatures = [
    { title: 'Mortar Programming', desc: 'Direct mortar system programming interface' },
    { title: 'Stinger Programming', desc: 'Stinger missile system programming' },
  ];

  return (
    <section id="soldier-features" className="section-dark py-5 md:py-7 lg:py-10 scroll-mt-28 md:scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="SOLDIER CAPABILITIES"
          title="Soldier Features"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {soldierFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card size="lg" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  isDark ? 'bg-primary-navy/30' : 'bg-primary-navy/10'
                }`}>
                  <Smartphone size={24} className={isDark ? 'text-primary-light' : 'text-primary-navy'} />
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
      </div>
    </section>
  );
}

function FutureCapabilitiesSection({ isDark }) {
  const futureFeatures = [
    { title: 'Room Illuminator', desc: 'IR illumination for MOUT training environments' },
    { title: 'MILES Gun Integration', desc: 'Full MILES weapon system integration' },
  ];

  return (
    <section id="future-capabilities" className="py-5 md:py-7 lg:py-10 container-main scroll-mt-28 md:scroll-mt-36">
      <SectionHeader
        tag="COMING SOON"
        title="Future Capabilities"
        subtitle="Planned enhancements for the Android TED platform"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {futureFeatures.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="lg" className={isDark ? 'border-dashed border-white/20' : 'border-dashed border-light-400'}>
              <span className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
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
    <section id="specifications" className="section-dark py-5 md:py-7 lg:py-10 scroll-mt-28 md:scroll-mt-36">
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
                      <td className={`py-3 px-4 font-medium ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
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
