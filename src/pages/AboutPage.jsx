import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { Card } from '../components/ui';
import { PageHero, SectionHeader, CTASection } from '../components/common';

export default function AboutPage() {
  return (
    <div>
      {/* Custom compact hero section */}
      <section className="relative py-2 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative z-10 max-w-sm mx-auto text-center">
          <span className="tag-base tag-primary mb-1 inline-block text-xs">ABOUT ATHENA-TEK</span>
          <h1 className="text-xl md:text-2xl font-extrabold text-white mb-1 whitespace-nowrap">
            Pioneering the Future
          </h1>
          <h2 className="text-base md:text-lg font-semibold text-primary-500 mb-1">
            Of Soldier Training & Test Evaluation
          </h2>
          <p className="text-xs text-dark-400 leading-relaxed">
            Orlando-based technology company specializing in global networks, AI-enabled soldier systems, Live Training modernization, and T&E integration for over 15 years.
          </p>
        </div>
      </section>
      <MissionVisionSection />
      <ExperienceSection />
      <LeadershipSection />
      <CTASection />
    </div>
  );
}

function MissionVisionSection() {
  return (
    <section className="section-padding container-main">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card variant="featured" size="xl">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-dark-400 leading-relaxed">
              Equip warfighters and test organizations with the most accurate, most connected, and most intelligent technology in the world.
            </p>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Card size="xl">
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-dark-400 leading-relaxed">
              A future where every soldier, platform, and instrumented system produces real-time, AI-powered insight—anywhere in the world.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const experience = [
    { label: 'PM TRADE', desc: 'CTC Enterprise + Home Station' },
    { label: 'PM CT2', desc: 'Soldier & weapon systems' },
    { label: 'ATEC & DOT&E', desc: 'Operational & Developmental test' },
    { label: 'CTCs', desc: 'NTC, JRTC, JMRC, JPMRC' },
    { label: 'STE-LTS & STIA', desc: 'Early integration' },
    { label: 'International', desc: 'Global training partnerships' },
  ];

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="EXPERIENCE"
          title="15+ Years of Excellence"
          light
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 max-w-5xl mx-auto">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-5 bg-white/[0.03] rounded-xl text-center"
            >
              <h4 className="text-base font-semibold text-white mb-1">{exp.label}</h4>
              <p className="text-xs text-dark-500">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  const leadership = [
    { name: 'Janio R. Sanchez', title: 'President & CEO', desc: 'Founder with 20+ years supporting U.S. Army training and test modernization.' },
    { name: 'Oscar Sanchez', title: 'Corporate Counsel', desc: 'U.S. Marine veteran, leading legal governance and regulatory compliance.' },
    { name: 'William Sanchez', title: 'Chief Engineer', desc: 'Responsible for TED architecture, integration, and engineering leadership.' },
    { name: 'Tracy Sanchez', title: 'Director of Technology Operations', desc: 'Oversees program execution and system deployment.' },
    { name: 'Pablo F. Sanchez', title: 'Chief Financial Officer', desc: 'Responsible for financial strategy and federal contracting compliance.' },
  ];

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="LEADERSHIP"
        title="Leadership Team"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {leadership.map((leader, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Card size="lg" className="text-center">
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary-500/20 to-primary-500/5 flex items-center justify-center text-primary-500">
                <Users size={32} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">{leader.name}</h4>
              <p className="text-sm text-primary-500 mb-3">{leader.title}</p>
              <p className="text-sm text-dark-400 leading-relaxed">{leader.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
