import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { Card } from '../components/ui';
import { PageHero, SectionHeader, CTASection } from '../components/common';
/* TED image - import */
import bannerImg from '../assets/ARES_IV.jpg';

export default function TEDPage() {
  return (
    // Centered image section
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        boxSizing: 'border-box',
        background: '#0b2e7a1a'
      }}
    >
      <motion.img
        src={bannerImg}
        alt="Athena-Tek ARES IV device"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          width: '100%',
          maxWidth: 480,
          height: 'auto',
          borderRadius: 12,
          boxShadow: '0 10px 30px rgba(0,0,0,0.25)'
        }}
      />
    </div>
  );
}

function AICapabilitiesSection() {
  const capabilities = [
    'Direct fire RTCA using shooter pose, stance, weapon orientation',
    'Indirect fire RTCA (mortars, grenades, anti-armor)',
    'Loss-of-concealment validation using YOLO models',
    'Movement classification (crawl, walk, sprint, kneel, lean, dive)',
    'Soldier behavior analysis and stress indicators',
    'Fall and immobility detection',
    'Heat casualty prediction and physiological monitoring',
    'Quantized LLMs for rule-based inference',
  ];
  return (
    <ul>
      {capabilities.map((cap, i) => (
        <li key={i}>{cap}</li>
      ))}
    </ul>
  );
}

function SensorFusionSection() {
  const sensors = ['3-axis accelerometer', '3-axis gyroscope', 'Magnetometer', 'Barometer', 'GPS RTK'];
  const emitters = ['5G NR (FR1)', '4G LTE', 'Wi-Fi 6 / HaLow', 'ZigBee', 'BLE'];
  return (
    <div>
      <h5>##### Sensors</h5>
      <ul>
        {sensors.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
      <div>FUSION</div>
      <h5>##### Emitters</h5>
      <ul>
        {emitters.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

function SpecificationsSection() {
  const specs = [
    { category: 'Processor', items: ['NXP i.MX 8M Quad Core ARM Cortex-A53 @ 1.5GHz', '4 GB LPDDR4 RAM', '128 GB eMMC storage'] },
    { category: 'Radios', items: ['5G NR Sub-6', '4G LTE', 'Wi-Fi 6', 'Wi-Fi HaLow (802.11ah)', 'Bluetooth LE', 'ZigBee'] },
    { category: 'Positioning', items: ['GPS RTK', 'IMU (Accel + Gyro)', 'Magnetometer', 'Barometer'] },
    { category: 'Security', items: ['AES-256 Data Encryption', 'FIPS 140-3 (optional)', 'Linux Yocto OS', 'Docker-enabled'] },
  ];
  return (
    <div>
      {specs.map((spec, i) => (
        <div key={i}>
          <h5>##### {spec.category}</h5>
          <ul>
            {spec.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function IntegrationSection() {
  return (
    <div>
      <h4>#### Integration & Compatibility</h4>
      <h5>##### Training Systems</h5>
      <p>
        MILES / IWS (Cubic) • VTESS (Lockheed Martin) • FN America • Phoenix Defense ATAK • Serious Simulations
      </p>
      <h5>##### EXCON Systems</h5>
      <p>
        TAK Server • STIA (STE Live) • HITS / RCS • XLCC (T&E)
      </p>
    </div>
  );
}
