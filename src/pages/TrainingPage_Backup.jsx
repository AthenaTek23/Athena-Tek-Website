import { motion } from 'framer-motion';
import { ChevronRight, MapPin, Activity, Shield, Zap, Eye } from 'lucide-react';
import { Card } from '../components/ui';
import { PageHero, SectionHeader, CTASection } from '../components/common';

export default function TrainingPage() {
  return (
    <div>
      <PageHero
        tag="SOLUTION DRIVEN"
        title="Live Training Reinvented"
        subtitle="For the Modern Battlefield"
        description="Next-generation Live Training powered by TED, AI-enabled networks, and deep integration with Army enterprise EXCON systems."
      />
      <ChallengeSection />
      <FoFSection />
      <PositioningSection />
      <CTASection />
    </div>
  );
}

function ChallengeSection() {
  const solutions = [
    'AI-driven RTCA',
    'Hybrid indoor/outdoor positioning',
    'Indirect fire realism',
    'Soldier safety analytics',
    'Wearable integration',
    'Automated AAR',
  ];

  return (
    <section className="section-padding container-main">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div>
          <span className="tag-base tag-primary mb-4">THE CHALLENGE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Live Training Must Evolve
          </h2>
          <p className="text-dark-400 leading-relaxed">
            Modern conflict involves complex urban terrain, multi-level buildings, GPS-denied environments,
            distributed formations, and wearable-driven health monitoring. Legacy systems cannot scale to
            these requirements.
          </p>
        </div>
        <Card variant="featured" size="lg">
          <h4 className="text-lg font-semibold text-primary-500 mb-5">Athena-Tek Solutions</h4>
          <ul className="space-y-3">
            {solutions.map((sol, i) => (
              <li key={i} className="flex items-center gap-3 text-dark-300">
                <ChevronRight size={16} className="text-primary-500 flex-shrink-0" />
                {sol}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}

function FoFSection() {
  const directFire = [
    'AI-driven e-bullet modeling',
    'Shooter pose reconstruction (IMU)',
    'Posture detection',
    'Weapon orientation + ballistic modeling',
    'Optional YOLO-based visibility validation',
  ];

  const weapons = [
    'Cubic IWS',
    'Lockheed Martin VTESS',
    'FN America hybrid weapons',
    'Serious Simulations M320',
    'Phoenix Defense ATAK + EXCON',
  ];

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="FORCE-ON-FORCE"
          title="FoF Modernization"
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card size="lg" className="bg-white/[0.03]">
            <h4 className="text-lg font-semibold text-white mb-4">Direct Fire Enhancements</h4>
            <ul className="space-y-2">
              {directFire.map((item, i) => (
                <li key={i} className="text-sm text-dark-400">• {item}</li>
              ))}
            </ul>
          </Card>
          <Card size="lg" className="bg-white/[0.03]">
            <h4 className="text-lg font-semibold text-white mb-4">Weapon Integrations</h4>
            <ul className="space-y-2">
              {weapons.map((item, i) => (
                <li key={i} className="text-sm text-dark-400">• {item}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

function PositioningSection() {
  const posCapabilities = [
    'Multi-floor tracking',
    'Room-level precision',
    'Indoor indirect fire adjudication',
    'Terrain-aware 3D reconstruction',
  ];

  const safetyFeatures = [
    { title: 'Heat Casualty Prediction', icon: <Activity size={20} /> },
    { title: 'Fall Detection', icon: <Shield size={20} /> },
    { title: 'Movement Deviation Alerts', icon: <Eye size={20} /> },
    { title: 'Panic Button Integration', icon: <Zap size={20} /> },
  ];

  return (
    <section className="section-padding container-main">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <span className="tag-base tag-primary mb-4">MOUT & GPS-DENIED</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Industry-Leading Positioning
          </h2>
          <p className="text-dark-400 mb-6 leading-relaxed">
            TED delivers hybrid indoor/outdoor positioning using GPS RTK, Wi-Fi HaLow, BLE, ZigBee,
            IMU, and barometer for vertical floor detection.
          </p>
          <div className="space-y-3">
            {posCapabilities.map((cap, i) => (
              <div key={i} className="flex items-center gap-3 text-dark-300">
                <MapPin size={16} className="text-primary-500" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span className="tag-base tag-primary mb-4">SOLDIER SAFETY</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Predictive Safety Monitoring
          </h2>
          <p className="text-dark-400 mb-6 leading-relaxed">
            TED integrates wearable devices to track physiological data and provide predictive safety alerts.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {safetyFeatures.map((feat, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white/[0.02] rounded-xl text-sm text-dark-300">
                <span className="text-primary-500">{feat.icon}</span>
                <span>{feat.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
