import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Settings, Puzzle, BarChart3, Radio, ChevronRight, Code, Briefcase, Antenna, Check, Cpu, Users, Target, Zap } from 'lucide-react';
import { Card } from '../components/ui';
import { SectionHeader, CTASection } from '../components/common';
import { PageSectionNav, SectionDots } from '../components/navigation';
import { useTheme } from '../contexts/ThemeContext';
import { iconSizes } from '../styles/theme';

// RF & Network service images
import servicesComprehensiveImg from '../assets/ServicesComprehensive.png';
import services5GImg from '../assets/Services5G.png';
import servicesRFImg from '../assets/ServicesRF.png';

// Program Management & Software Engineering images
import servicesDoWImg from '../assets/ServicesDoW.png';
import servicesSWEImg from '../assets/ServicesSWE-Dev.png';

// Engineering section images
import systemEngImg from '../assets/SystenEng.png';
import systemIntegrationImg from '../assets/SystemIntegration .png';

// Program Management section images
import lvcImg from '../assets/LVC.png';
import knowledgeMImg from '../assets/knowledgeM.png';
import teImg from '../assets/T&E.png';

// Software Engineering section images
import softwareImg from '../assets/Software.png';
import sustainmentImg from '../assets/Sustainment.png';
import integrationImg from '../assets/Integration.png';
import aiSoftwareImg from '../assets/AI-Software.png';

const sections = [
  { id: 'engineering', label: 'Engineering' },
  { id: 'rf-network', label: 'RF & Network' },
  { id: 'program-management', label: 'Program Management' },
  { id: 'software', label: 'Software Engineering' },
];

export default function ServicesPage() {
  const { isDark } = useTheme();

  return (
    <div className="pt-20">
      <PageSectionNav sections={sections} />
      <SectionDots sections={sections} />

      <EngineeringSection isDark={isDark} />
      <RFNetworkSection isDark={isDark} />
      <ProgramManagementSection isDark={isDark} />
      <SoftwareEngineeringSection isDark={isDark} />
      <CTASection
        title="Ready to Get Started?"
        subtitle="Contact our team to discuss your engineering and technical service needs."
      />
    </div>
  );
}

function EngineeringSection({ isDark }) {
  const sectionId = 'engineering';
  const services = [
    {
      image: systemEngImg,
      name: 'System Engineering',
      description: 'Full lifecycle engineering support from requirements to deployment with DoW acquisition expertise.',
      path: '/services/system-engineering',
      features: ['Requirements Analysis', 'System Architecture', 'Hardware/Software Engineering', 'Test & Evaluation'],
    },
    {
      image: systemIntegrationImg,
      name: 'System Integration',
      description: 'Live, Virtual, and Constructive (LVC) integration for comprehensive training environments.',
      path: '/services/system-integration',
      features: ['LVC Integration', 'Partner Systems', 'EXCON Integration', 'SA Devices'],
    },
  ];

  return (
    <section id={sectionId} className="section-padding container-main scroll-mt-36">
      <SectionHeader
        tag="ENGINEERING"
        title="Engineering Services"
        subtitle="Expert engineering support for complex defense systems"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="xl" className="h-full flex flex-col">
              {service.image && (
                <div className={`w-20 h-20 rounded-xl overflow-hidden mb-4 ${
                  isDark ? 'bg-primary-navy/20' : 'bg-light-100'
                }`}>
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                {service.name}
              </h3>
              <p className={`text-sm mb-4 flex-grow ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                {service.description}
              </p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, j) => (
                    <span
                      key={j}
                      className={`text-xs px-2 py-1 rounded ${
                        isDark ? 'bg-white/5 text-dark-300' : 'bg-light-200 text-light-700'
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to={service.path}
                className={`inline-flex items-center gap-2 text-sm font-medium ${
                  isDark ? 'text-primary-light hover:text-primary-light/80' : 'text-primary-navy hover:text-primary-navy/80'
                }`}
              >
                Learn more
                <ChevronRight size={16} />
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function RFNetworkSection({ isDark }) {
  const sectionId = 'rf-network';
  const services = [
    {
      image: servicesComprehensiveImg,
      name: 'RF Engineering',
      description: 'Comprehensive RF engineering services from spectrum analysis to antenna design, ensuring optimal wireless performance for mission-critical applications.',
      path: '/services/rf-engineering',
      features: ['Spectrum Analysis', 'Antenna Design', 'RF Site Surveys', 'Interference Mitigation', 'EMC/EMI Testing'],
    },
    {
      image: services5GImg,
      name: 'Network Design 5G/LTE',
      description: 'Private 5G and LTE network solutions with end-to-end planning, from RF propagation studies to core network architecture.',
      path: '/services/network-design',
      features: ['5G Networks', 'Private LTE', 'Mesh Networks', 'NTN/Satellite'],
    },
    {
      image: servicesRFImg,
      name: 'Modeling & Simulation',
      description: 'Advanced RF propagation modeling and network simulation for coverage optimization and capacity planning.',
      path: '/services/modeling-simulation',
      features: ['RF Propagation', 'Network Modeling', 'Performance Analysis', 'Coverage Optimization'],
    },
  ];

  const rfCapabilities = [
    'RF link budget analysis and path loss calculations',
    'Frequency coordination and spectrum management',
    'Multi-band antenna system design and optimization',
    'RF coverage planning for urban, suburban, and rural environments',
    'Indoor/outdoor propagation modeling',
    'Network capacity planning and optimization',
  ];

  return (
    <section id={sectionId} className="section-dark section-padding scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="RF & NETWORK"
          title="RF Engineering & Network Planning"
          subtitle="Expert RF design and network planning for tactical and commercial wireless systems"
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card size="xl" className={`h-full flex flex-col ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
                {service.image ? (
                  <div className={`w-20 h-20 rounded-xl overflow-hidden mb-4 ${
                    isDark ? 'bg-primary-navy/20' : 'bg-light-100'
                  }`}>
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                    isDark ? 'bg-primary-navy/30' : 'bg-primary-navy/10'
                  }`}>
                    <div className={isDark ? 'text-primary-light' : 'text-primary-navy'}>
                      {service.icon}
                    </div>
                  </div>
                )}
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: isDark ? 'white' : '#111827' }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-sm mb-4 flex-grow"
                  style={{ color: isDark ? '#d1d5db' : '#374151' }}
                >
                  {service.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, j) => (
                      <span
                        key={j}
                        className={`text-xs px-2 py-1 rounded ${
                          isDark ? 'bg-white/5 text-dark-300' : 'bg-light-200 text-light-700'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={service.path}
                  className={`inline-flex items-center gap-2 text-sm font-medium ${
                    isDark ? 'text-primary-light hover:text-primary-light/80' : 'text-primary-navy hover:text-primary-navy/80'
                  }`}
                >
                  Learn more
                  <ChevronRight size={16} />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card size="xl" className={isDark ? 'bg-white/[0.02]' : 'bg-white'}>
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
              RF Engineering Capabilities
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rfCapabilities.map((cap, i) => (
                <div key={i} className={`flex items-start gap-3 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  <Check size={18} className={`flex-shrink-0 mt-0.5 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`} />
                  <span className="text-sm">{cap}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function ProgramManagementSection({ isDark }) {
  const sectionId = 'program-management';

  const pmServices = [
    {
      image: servicesDoWImg,
      title: 'DoW Acquisition Support',
      desc: 'End-to-end program management support throughout the defense acquisition lifecycle, from requirements definition to fielding and sustainment.'
    },
    {
      image: lvcImg,
      title: 'Live, Virtual, Constructive (LVC)',
      desc: 'Expert support for LVC simulation programs, integrating live training, virtual environments, and constructive simulations into cohesive training solutions.'
    },
    {
      image: knowledgeMImg,
      title: 'Knowledge Management',
      desc: 'Comprehensive knowledge management services ensuring institutional expertise is captured, organized, and accessible throughout program lifecycles.'
    },
    {
      image: teImg,
      title: 'Test & Evaluation Management',
      desc: 'Program management for DT&E and OT&E activities, coordinating test planning, execution, and reporting for defense systems.'
    },
  ];

  const lvcCapabilities = [
    'Live training instrumentation and integration',
    'Virtual simulation environment development',
    'Constructive simulation federation',
    'Distributed Mission Operations (DMO) support',
    'Joint Live Virtual Constructive (JLVC) architecture',
    'Training effectiveness analysis and assessment',
    'Exercise design and scenario development',
    'After Action Review (AAR) system integration',
  ];

  return (
    <section id={sectionId} className="section-padding container-main scroll-mt-36">
      <SectionHeader
        tag="PROGRAM MANAGEMENT"
        title="DoW Program Management Support"
        subtitle="Experienced program management for defense acquisition and training programs"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {pmServices.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="lg" className="h-full">
              {service.image ? (
                <div className={`w-14 h-14 rounded-xl overflow-hidden mb-4 ${
                  isDark ? 'bg-primary-navy/20' : 'bg-light-100'
                }`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="icon-box w-12 h-12 mb-4">
                  {service.icon}
                </div>
              )}
              <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                {service.title}
              </h4>
              <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                {service.desc}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card size="xl" variant="featured">
          <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
            LVC Simulation Expertise
          </h4>
          <p className={`text-sm mb-6 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
            Our team brings decades of experience supporting Live, Virtual, and Constructive simulation programs across the DoW, delivering integrated training solutions that maximize readiness while optimizing resources.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lvcCapabilities.map((cap, i) => (
              <div key={i} className={`flex items-start gap-3 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                <Check size={18} className={`flex-shrink-0 mt-0.5 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`} />
                <span className="text-sm">{cap}</span>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </section>
  );
}

function SoftwareEngineeringSection({ isDark }) {
  const sectionId = 'software';

  const swServices = [
    {
      image: softwareImg,
      title: 'Software Development',
      description: 'Modern software development using Agile methodologies and CMMI best practices, delivering high-quality solutions from concept to deployment.',
      features: ['Agile/Scrum', 'CMMI Level 3', 'DevSecOps', 'CI/CD Pipelines'],
    },
    {
      image: sustainmentImg,
      title: 'Post Deployment Software Support (PDSS)',
      description: 'Comprehensive sustainment services ensuring operational systems remain secure, current, and mission-ready throughout their lifecycle.',
      features: ['Corrective Maintenance', 'Adaptive Updates', 'Security Patches', 'Performance Optimization'],
    },
    {
      image: integrationImg,
      title: 'Software Integration',
      description: 'Expert integration services connecting disparate systems, APIs, and data sources into cohesive, interoperable solutions.',
      features: ['API Development', 'System Interfaces', 'Data Integration', 'Legacy Modernization'],
    },
  ];

  const aiFeatures = [
    {
      title: 'AI-Assisted Development',
      desc: 'Leveraging AI tools for code generation, review, and optimization to accelerate development while maintaining quality standards.'
    },
    {
      title: 'Intelligent Code Analysis',
      desc: 'Automated code review and vulnerability detection using AI-powered static analysis tools to identify issues early in the development cycle.'
    },
    {
      title: 'Predictive Maintenance',
      desc: 'AI-driven analytics for PDSS activities, predicting potential issues before they impact operations and optimizing maintenance schedules.'
    },
  ];

  const methodologies = [
    'Agile/Scrum sprint-based development',
    'CMMI-compliant processes and documentation',
    'DevSecOps pipeline automation',
    'Continuous Integration/Continuous Deployment (CI/CD)',
    'Test-Driven Development (TDD)',
    'Code quality gates and automated testing',
    'Security-first development practices',
    'Containerization and microservices architecture',
  ];

  return (
    <section id={sectionId} className="section-dark section-padding scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="SOFTWARE ENGINEERING"
          title="Software Engineering Services"
          subtitle="Modern development practices with AI-enhanced capabilities for defense applications"
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {swServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card size="xl" className={`h-full flex flex-col ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
                {service.image ? (
                  <div className={`w-20 h-20 rounded-xl overflow-hidden mb-4 ${
                    isDark ? 'bg-primary-navy/20' : 'bg-light-100'
                  }`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                    isDark ? 'bg-primary-navy/30' : 'bg-primary-navy/10'
                  }`}>
                    <div className={isDark ? 'text-primary-light' : 'text-primary-navy'}>
                      {service.icon}
                    </div>
                  </div>
                )}
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: isDark ? 'white' : '#111827' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm mb-4 flex-grow"
                  style={{ color: isDark ? '#d1d5db' : '#374151' }}
                >
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, j) => (
                    <span
                      key={j}
                      className={`text-xs px-2 py-1 rounded ${
                        isDark ? 'bg-white/5 text-dark-300' : 'bg-light-200 text-light-700'
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* AI at the Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card size="xl" className={isDark ? 'bg-white/[0.02]' : 'bg-white'}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-14 h-14 rounded-xl overflow-hidden ${
                isDark ? 'bg-primary-navy/20' : 'bg-light-100'
              }`}>
                <img src={aiSoftwareImg} alt="AI at the Code" className="w-full h-full object-contain" />
              </div>
              <h4
                className="text-xl font-bold"
                style={{ color: isDark ? 'white' : '#111827' }}
              >
                AI at the Code
              </h4>
            </div>
            <p
              className="text-sm mb-6"
              style={{ color: isDark ? '#d1d5db' : '#374151' }}
            >
              We integrate artificial intelligence throughout the software development lifecycle, enhancing developer productivity, code quality, and system reliability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aiFeatures.map((feature, i) => (
                <div key={i} className={`p-4 rounded-lg ${isDark ? 'bg-white/[0.02] border border-white/5' : 'bg-light-100 border border-light-200'}`}>
                  <h5
                    className="font-semibold mb-2"
                    style={{ color: isDark ? '#93c5fd' : '#111827' }}
                  >
                    {feature.title}
                  </h5>
                  <p
                    className="text-sm"
                    style={{ color: isDark ? '#d1d5db' : '#374151' }}
                  >
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Methodologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card size="xl" className={isDark ? 'bg-white/[0.02]' : 'bg-white'}>
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`}>
              Development Methodologies & Best Practices
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {methodologies.map((method, i) => (
                <div key={i} className={`flex items-start gap-3 ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                  <Check size={18} className={`flex-shrink-0 mt-0.5 ${isDark ? 'text-primary-light' : 'text-primary-navy'}`} />
                  <span className="text-sm">{method}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
