import { motion } from 'framer-motion';
import { Brain, Check } from 'lucide-react';
import { Card } from '../components/ui';
import { PageHero, SectionHeader, CTASection } from '../components/common';

export default function AIPage() {
  return (
    <div>
      {/* Custom compact hero section */}
      <section className="relative py-2 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative z-10 max-w-sm mx-auto text-center">
          <span className="tag-base tag-primary mb-1 inline-block text-xs">AI ECOSYSTEM</span>
          <h1 className="text-xl md:text-2xl font-extrabold text-white mb-1 whitespace-nowrap">
            AI That Understands the Mission
          </h1>
          <h2 className="text-base md:text-lg font-semibold text-primary-500 mb-1">
            Distributed Intelligence at Every Level
          </h2>
          <p className="text-xs text-dark-400 leading-relaxed">
            A unified, mission-focused artificial intelligence layer operating at the soldier, network, and EXCON levels simultaneously.
          </p>
        </div>
      </section>

      {/* Embedded Applications Monitor */}
      <section className="w-full bg-dark-950">
        <div className="container-main py-4">
          <SectionHeader
            tag="INTERACTIVE DEMO"
            title="AI Applications Explorer"
          />
        </div>
        <iframe
          src="/monitors/applications/index.html"
          title="AI Applications Monitor"
          style={{
            width: '100%',
            height: '85vh',
            border: 'none',
            display: 'block'
          }}
          allow="fullscreen"
        />
      </section>

      <AILevelsSection />
      <EdgeAISection />
      <AARSection />
      <CTASection />
    </div>
  );
}

function AILevelsSection() {
  const levels = [
    { level: '01', title: 'AI at the Soldier', subtitle: 'Edge AI — TED', desc: 'On-device inference with zero cloud dependency for RTCA, safety, and positioning.', color: 'text-primary-500' },
    { level: '02', title: 'AI in the Network', subtitle: 'AI-Assisted Connectivity', desc: 'Real-time network optimization, bearer selection, and QoS adjustments.', color: 'text-accent-amber' },
    { level: '03', title: 'AI at EXCON', subtitle: 'Training & T&E Intelligence', desc: 'Automated analysis, AAR generation, and test data processing.', color: 'text-accent-indigo' },
  ];

  return (
    <section className="section-padding container-main">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {levels.map((ai, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="xl">
              <span className={`text-5xl font-extrabold font-mono ${ai.color} opacity-50 mb-4 block`}>
                {ai.level}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{ai.title}</h3>
              <p className="text-sm text-dark-500 mb-4">{ai.subtitle}</p>
              <p className="text-dark-400 leading-relaxed">{ai.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function EdgeAISection() {
  const functions = [
    'Real-Time Casualty Assessment (RTCA)',
    'Shooter pose estimation',
    'Movement classification',
    'Blast/impact correlation',
    'Fall & immobility detection',
    'Heat casualty prediction',
    'Behavior recognition',
    'YOLO-based visibility analysis',
  ];

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="EDGE AI CAPABILITIES"
          title="TED AI Functions"
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {functions.map((func, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="flex items-center gap-3 px-4 py-3 bg-white/[0.03] rounded-lg text-sm text-dark-300"
            >
              <Brain size={16} className="text-primary-500 flex-shrink-0" />
              <span>{func}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AARSection() {
  const individual = ['Movement heatmaps', 'Exposure timelines', 'Weapon accuracy summaries', 'Safety events'];
  const unit = ['Formation patterns', 'Engagement analysis', 'Terrain usage', 'Network performance'];
  const teAI = ['Reliability analysis', 'Performance scoring', 'Operator behavior modeling', 'Failure mode detection'];

  return (
    <section className="section-padding container-main">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <span className="tag-base tag-primary mb-4">AAR AUTOMATION</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            AI-Generated After Action Review
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Card size="md">
              <h4 className="text-base font-semibold text-white mb-3">Individual AAR</h4>
              <ul className="space-y-2">
                {individual.map((item, i) => (
                  <li key={i} className="text-sm text-dark-400">• {item}</li>
                ))}
              </ul>
            </Card>
            <Card size="md">
              <h4 className="text-base font-semibold text-white mb-3">Unit AAR</h4>
              <ul className="space-y-2">
                {unit.map((item, i) => (
                  <li key={i} className="text-sm text-dark-400">• {item}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
        <div>
          <span className="tag-base tag-primary mb-4">T&E ANALYTICS</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            AI for Test & Evaluation
          </h2>
          <p className="text-dark-400 mb-6 leading-relaxed">
            AI assists T&E by analyzing thousands of data points in real time, enabling faster test execution,
            more accurate data, and automated reporting.
          </p>
          <ul className="space-y-3">
            {teAI.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-dark-300">
                <Check size={16} className="text-primary-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
