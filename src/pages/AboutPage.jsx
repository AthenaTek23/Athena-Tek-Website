import { motion } from 'framer-motion';
import { Users, Shield, GraduationCap, Check, Download } from 'lucide-react';
import { Card } from '../components/ui';
import { SectionHeader, CTASection } from '../components/common';
import { PageSectionNav, SectionDots } from '../components/navigation';
import { iconSizes } from '../styles/theme';

// Capability Statement PDF
import capabilityStatementPdf from '../assets/ATHENA Capability Statement.pdf';

// Hero image
import aiSoldierImg from '../assets/AI-Soldier.png';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'mission-vision', label: 'Mission & Vision' },
  { id: 'what-we-deliver', label: 'What We Deliver' },
  { id: 'past-performance', label: 'Past Performance' },
  { id: 'leadership', label: 'Leadership' },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <PageSectionNav sections={sections} />
      <SectionDots sections={sections} />

      <HeroSection />
      <MissionVisionSection />
      <WhatWeDeliverSection />
      <PastPerformanceSection />
      <LeadershipSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section id="overview" className="section-padding container-main scroll-mt-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl mx-auto"
      >
        {/* Hero Image */}
        <div className="mb-8">
          <img
            src={aiSoldierImg}
            alt="AI Soldier"
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg"
          />
        </div>
        <span className="tag-base tag-primary mb-4 inline-block">ABOUT ATHENA-TEK</span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-light-900 mb-4">
          Pioneering the Future of Soldier Training and Test & Evaluation
        </h1>
        <p className="text-lg text-light-600 leading-relaxed mb-6">
          Orlando-based technology company specializing in global networks, AI-enabled soldier systems, Live Training modernization, and T&E integration for over 15 years.
        </p>
        <a
          href={capabilityStatementPdf}
          download="ATHENA-Tek-Capability-Statement.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-navy text-white font-semibold rounded-lg hover:bg-primary-navy/90 transition-colors"
        >
          <Download size={20} />
          Download Capability Statement
        </a>
      </motion.div>
    </section>
  );
}

function MissionVisionSection() {
  return (
    <section id="mission-vision" className="section-padding container-main scroll-mt-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card variant="featured" size="xl" className="h-full">
            <h3 className="text-2xl font-bold text-light-900 mb-4">Our Mission</h3>
            <p className="text-light-600 leading-relaxed">
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
          <Card size="xl" className="h-full">
            <h3 className="text-2xl font-bold text-light-900 mb-4">Our Vision</h3>
            <p className="text-light-600 leading-relaxed">
              A future where every soldier, platform, and instrumented system produces real-time, AI-powered insight—anywhere in the world.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function WhatWeDeliverSection() {
  const capabilities = [
    'Resilient multi-modal networks: 5G/4G (FR1/CBRS), mesh/MANET, Wi-Fi, BLE, Zigbee, and hybrid backhaul including SATCOM options.',
    'Edge-first architecture: distributed intelligence that stays operational in denied, degraded, intermittent, or limited connectivity environments.',
    'Field-proven integration: interoperable with TAK, CTIA, and LVC architectures aligned to modern instrumentation needs.',
    'AI-enabled sensor fusion: real-time safety alerts and performance analytics using integrated sensors and wearable data.',
  ];

  return (
    <section id="what-we-deliver" className="section-padding container-main scroll-mt-36">
        <SectionHeader
          tag="WHAT WE DELIVER"
          title="Network-Focused. Solution-Driven."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card size="xl" className="bg-white">
            <p className="text-light-700 leading-relaxed mb-6">
              Athena-Tek is a network-focused, solution-driven technology enterprise delivering advanced communications, Training, and Test & Evaluation (T&E) solutions to the Department of Defense and mission partners. We bridge resilient multi-modal networking with one-of-a-kind edge computing and AI to enable safer, higher-fidelity training and operationally relevant test environments.
            </p>

            <div className="space-y-4">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check size={20} className="text-primary-navy mt-0.5 flex-shrink-0" />
                  <p className="text-light-600 leading-relaxed">{cap}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
    </section>
  );
}

function PastPerformanceSection() {
  const performances = [
    {
      title: 'PEO STRI – STAAR Test Bed',
      description: 'Delivered 60 Training Edge Devices (TEDs) with integrated 5G/mesh networking, sub-meter GPS, AES-256 encryption, and LT2 interoperability. These were validated through multiple Soldier Touch Points, ensuring technology was tested in realistic training environments. Our experience integrating TED into Army exercises directly supports the rapid deployment of TED devices, guaranteeing interoperability with existing MILES IWS equipment.',
    },
    {
      title: 'ACC Orlando – STE LTS (TReX-II)',
      description: 'Designed and fielded the TED-Mesh (TED-M) for small-unit training, supporting 100 participants with MILES, biometrics, video/voice streaming, and point-of-need After-Action Review (AAR).',
    },
    {
      title: 'OUSD R&E – 5G AR/VR Network Enhancements',
      description: 'Advanced battalion-scale training networks through 5G slicing, edge computing, and AR/VR integration. Demonstrated reliable networking for high-bandwidth, low-latency applications. Our expertise in AR/VR and high-fidelity training applies directly to future-proofing Army networks, ensuring that today\'s MILES integration can grow into tomorrow\'s AR/VR-enabled training ranges. The TED is already integrating with Next Generation systems.',
    },
    {
      title: 'PEO STRI / General Dynamics – XLCC Integration',
      description: 'Provided engineering and integration support for the Expeditionary LVC Test Command Center (XLCC), maintaining LT2 compliance across live, virtual, and constructive domains. This shows our ability to integrate with existing Army command and control architectures, a critical skill for ensuring the Army\'s training data can tie into RTCA and higher-level systems.',
    },
  ];

  return (
    <section id="past-performance" className="section-padding container-main scroll-mt-36">
      <SectionHeader
        tag="PAST PERFORMANCE"
        title="Past Performance"
        subtitle="Athena-Tek has a proven record of delivering advanced training networks and live simulation solutions for the U.S. Army and allied partners."
      />

      <div className="space-y-6 max-w-4xl mx-auto">
        {performances.map((perf, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="xl">
              <h4 className="text-lg font-bold text-light-900 mb-3">
                {perf.title}
              </h4>
              <p className="text-light-600 leading-relaxed">
                {perf.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function LeadershipSection() {
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
    <section id="leadership" className="section-padding container-main scroll-mt-36">
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
          <p className="text-lg leading-relaxed text-light-600">
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
              <Card size="xl" className="bg-white">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar and basic info */}
                  <div className="flex flex-col items-center md:items-start md:w-64 shrink-0">
                    <div className="w-24 h-24 mb-4 rounded-full flex items-center justify-center bg-primary-navy/10">
                      <Users size={40} className="text-primary-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-1 text-center md:text-left text-light-900">
                      {leader.name}
                    </h4>
                    <p className="text-sm font-medium mb-2 text-primary-navy">
                      {leader.title}
                    </p>
                    {leader.isVeteran && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        <Shield size={14} />
                        USMC Veteran
                      </span>
                    )}
                  </div>

                  {/* Bio and education */}
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed mb-4 text-light-600">
                      {leader.bio}
                    </p>
                    <div className="flex items-start gap-2 pt-4 border-t border-light-200">
                      <GraduationCap size={18} className="shrink-0 mt-0.5 text-primary-navy" />
                      <p className="text-xs leading-relaxed text-light-500">
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
