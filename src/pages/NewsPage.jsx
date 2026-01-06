import { motion } from 'framer-motion';
import { Calendar, FileText, Mail } from 'lucide-react';
import { Card } from '../components/ui';
import { SectionHeader, CTASection } from '../components/common';
import { PageSectionNav, SectionDots } from '../components/navigation';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'featured', label: 'Featured' },
  { id: 'news', label: 'Latest News' },
  { id: 'events', label: 'Events' },
  { id: 'media', label: 'Media' },
];

export default function NewsPage() {
  return (
    <div className="pt-20">
      <PageSectionNav sections={sections} />
      <SectionDots sections={sections} />

      <HeroSection />
      <FeaturedSection />
      <LatestNewsSection />
      <EventsSection />
      <MediaSection />
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
        <span className="tag-base tag-primary mb-4 inline-block">NEWSROOM & EVENTS</span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-light-900 mb-4">
          Stay Informed With the Latest Updates
        </h1>
        <p className="text-lg text-light-600 leading-relaxed">
          Ongoing updates on technology development, partnerships, training and T&E events, conference participation, and product enhancements.
        </p>
      </motion.div>
    </section>
  );
}

function FeaturedSection() {
  return (
    <section id="featured" className="section-padding container-main scroll-mt-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <Card variant="featured" size="xl" className="p-10 md:p-14">
          <span className="inline-block px-4 py-1.5 bg-primary-navy/10 rounded-lg text-xs font-bold text-primary-navy mb-5">
            FEATURED ANNOUNCEMENT
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-light-900 mb-4">
            Athena-Tek Showcases AI-Enabled TED and Global Network Solutions at I/ITSEC
          </h2>
          <p className="text-light-600 leading-relaxed">
            Athena-Tek demonstrated the full capabilities of TED, advanced multi-bearer networks, and AI-driven training
            and T&E solutions. Highlights included TED as the soldier-worn AI engine, RTCA improvements, hybrid positioning,
            and integration with major defense partners.
          </p>
        </Card>
      </motion.div>
    </section>
  );
}

function LatestNewsSection() {
  const news = [
    { title: 'AI-Driven Soldier Safety Features Expand Across TED', desc: 'Advanced physiological modeling, heat casualty prediction, fall detection, and real-time safety analytics.', date: 'Recent' },
    { title: 'Athena-Tek Extends NTN Capabilities for Global Distributed Training', desc: 'Direct-to-device satellite connectivity for Indo-Pacific, maritime, and remote expeditionary training.', date: 'Recent' },
    { title: 'Enhanced T&E Capabilities with High-Speed & Embedded Cameras', desc: 'Synchronized visual + telemetry analysis for missile tests, weapons trials, and urban maneuver events.', date: 'Recent' },
    { title: 'TED Integration with Next-Generation Systems', desc: 'Additional integrations with VTESS, IWS, FN weapon simulators, and third-party devices.', date: 'Recent' },
  ];

  return (
    <section id="news" className="section-dark section-padding scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="LATEST NEWS"
          title="Recent Updates"
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {news.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card size="lg" className="bg-white">
                <span className="text-xs text-primary-navy font-medium mb-3 block">{item.date}</span>
                <h4 className="text-lg font-semibold text-light-900 mb-3 leading-snug">{item.title}</h4>
                <p className="text-sm text-light-600 leading-relaxed">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventsSection() {
  const events = [
    { name: 'I/ITSEC', location: 'Orlando, FL', status: 'Featured Event', desc: 'TED, global networks, AI-driven training modernization' },
    { name: 'SOF Week', location: 'Tampa, FL', status: 'Upcoming', desc: 'AI-enabled soldier monitoring, 5G/Mesh networks' },
    { name: 'AUSA Annual Meeting', location: 'Washington, D.C.', status: 'Upcoming', desc: 'Army modernization and international partnerships' },
    { name: 'NATO & Allied Workshops', location: 'Various', status: 'Scheduled', desc: 'Coalition training initiatives' },
  ];

  return (
    <section id="events" className="section-padding container-main scroll-mt-36">
      <SectionHeader
        tag="EVENTS"
        title="Events & Conferences"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Card size="md">
              <div className="flex items-center justify-between mb-4 text-primary-navy">
                <Calendar size={20} />
                <span className="text-xs font-semibold px-2.5 py-1 bg-primary-navy/10 rounded">
                  {event.status}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-light-900 mb-1">{event.name}</h4>
              <p className="text-sm text-primary-navy mb-3">{event.location}</p>
              <p className="text-sm text-light-600">{event.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function MediaSection() {
  const resources = [
    'TED Product Sheet',
    'Network Solutions Overview',
    'Live Training Summary',
    'T&E Capability Summary',
    'AI Ecosystem Overview',
    'Corporate Overview',
  ];

  return (
    <section id="media" className="section-dark section-padding scroll-mt-36">
      <div className="container-main">
        <SectionHeader
          tag="MEDIA RESOURCES"
          title="Press & Downloads"
          light
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto mb-10">
          {resources.map((res, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 p-4 bg-white rounded-xl text-sm text-light-700 cursor-pointer hover:bg-light-50 transition-colors"
            >
              <FileText size={20} className="flex-shrink-0 text-primary-navy" />
              <span className="leading-tight">{res}</span>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3 text-primary-light">
          <Mail size={20} />
          <span>Press Contact: press@athena-tek.com</span>
        </div>
      </div>
    </section>
  );
}
