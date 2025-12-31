import { motion } from 'framer-motion';
import { Users, Shield, GraduationCap } from 'lucide-react';
import { Card } from '../components/ui';
import { PageHero, SectionHeader, CTASection } from '../components/common';
import { useTheme } from '../contexts/ThemeContext';
import { iconSizes } from '../styles/theme';

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
          <p className="text-xs text-dark-300 leading-relaxed">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 content-medium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card variant="featured" size="xl">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-dark-300 leading-relaxed">
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
            <p className="text-dark-300 leading-relaxed">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 content-medium">
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
              <p className="text-xs text-dark-400">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  const { isDark } = useTheme();

  const leadership = [
    {
      name: 'Janio Sanchez',
      title: 'President & CEO',
      isVeteran: false,
      bio: 'A defense and telecom executive with 40+ years of engineering and leadership experience across the Americas. Janio is a recognized SME in live-training and T&E networks, spectrum management, and systems integration, and previously supported CPE STRI as a senior systems engineer. He founded Athena-Tek in 2010 and drives the company\'s mission to bridge network focus into deployed solutions through TED—delivering AI to the point of need.',
      education: 'MBA, International Business — University of Miami Herbert Business School; Computer Science — Duke University; B.S., Electrical Engineering & Applied Mathematics — University at Buffalo.',
    },
    {
      name: 'Tracy Sanchez',
      title: 'Director of Technology Operations',
      isVeteran: false,
      bio: 'A PMP-certified program leader with 10+ years of experience delivering complex IT and infrastructure programs using agile methodologies. Tracy is recognized for execution discipline, customer satisfaction, and empowering high-performing teams across Athena-Tek\'s network-focused portfolio. She also holds MIT Professional Education credentials spanning Chief Technology Officer, Cloud & DevOps, Machine Learning, and technology strategy.',
      education: 'Master\'s — Florida Atlantic University; Bachelor\'s — University of Miami.',
    },
    {
      name: 'William Sanchez',
      title: 'Chief Engineer',
      isVeteran: true,
      bio: 'A United States Marine Corps veteran and engineer with 40 years of experience supporting U.S. Armed Forces tactical and training systems. William contributed to the original Land Warrior program at CECOM and served as Assistant Product Manager for major programs including the Synthetic Training Environment (STE), Close Combat Tactical Trainer (CCTT), Aviation Combined Arms Tactical Trainer (AVCATT), and Joint Land Component Constructive Training Capability (JLCCTC). At Athena-Tek, he leads development of next-generation Training and Testing Player Unit Radios and edge instrumentation technologies.',
      education: 'Master\'s, Software Engineering — Monmouth College; MBA — Webster University; B.S. Electrical Engineering — The City College of New York.',
    },
    {
      name: 'Pablo F. Sanchez',
      title: 'Chief Financial Officer',
      isVeteran: true,
      bio: 'A trusted, hands-on CPA and Finance & Accounting Executive with 35+ years of experience, including a Big Four accounting background and leadership across public, private, and international organizations. Pablo also manages his own CPA practice and ensures Athena-Tek maintains strong financial governance, compliant program execution, and scalable growth.',
      education: 'Bachelor\'s, Accounting — Baruch College; Certified Public Accountant — City University of New York.',
    },
    {
      name: 'Oscar E. Sanchez',
      title: 'Legal Counsel',
      isVeteran: true,
      bio: 'A former prosecutor and tax auditor and a versatile litigation attorney with deep experience representing small businesses in employment matters, contracts, real estate and construction litigation, and white-collar defense. Oscar provides strategic legal oversight for Athena-Tek and brings a mission-first mindset shaped by his prior service in the United States Marine Corps.',
      education: 'J.D. — Cardozo School of Law; B.B.A., Accounting — Baruch College.',
    },
  ];

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="LEADERSHIP"
        title="Leadership Team"
      />

      {/* Intro paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <p className={`text-lg leading-relaxed ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
          Athena-Tek's leadership team combines decades of defense, telecom, engineering, and enterprise execution experience with a strong heritage of service. Three members of our leadership team served in the United States Marine Corps, bringing firsthand understanding of warfighter requirements and the operational realities of training and testing.
        </p>
      </motion.div>

      {/* Leadership cards */}
      <div className="space-y-8">
        {leadership.map((leader, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="xl" className={`${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
              <div className="flex flex-col md:flex-row gap-6">
                {/* Avatar and basic info */}
                <div className="flex flex-col items-center md:items-start md:w-64 shrink-0">
                  <div className={`w-24 h-24 mb-4 rounded-full flex items-center justify-center ${
                    isDark ? 'bg-primary-navy/30' : 'bg-primary-navy/10'
                  }`}>
                    <Users size={40} className={isDark ? 'text-primary-light' : 'text-primary-navy'} />
                  </div>
                  <h4 className={`text-xl font-bold mb-1 text-center md:text-left ${isDark ? 'text-white' : 'text-light-900'}`}>
                    {leader.name}
                  </h4>
                  <p className={`text-sm font-medium mb-2 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
                    {leader.title}
                  </p>
                  {leader.isVeteran && (
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                      isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                    }`}>
                      <Shield size={14} />
                      USMC Veteran
                    </span>
                  )}
                </div>

                {/* Bio and education */}
                <div className="flex-1">
                  <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                    {leader.bio}
                  </p>
                  <div className={`flex items-start gap-2 pt-4 border-t ${isDark ? 'border-white/10' : 'border-light-200'}`}>
                    <GraduationCap size={18} className={`shrink-0 mt-0.5 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`} />
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-dark-400' : 'text-light-500'}`}>
                      <span className="font-semibold">Education:</span> {leader.education}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
