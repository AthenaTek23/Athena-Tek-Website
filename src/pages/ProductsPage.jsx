import { motion } from 'framer-motion';
import { Card } from '../components/ui';
import { PageHero, SectionHeader, CTASection } from '../components/common';

export default function ProductsPage() {
  return (
    <div>
      {/* Custom compact hero section */}
      <section className="relative py-2 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative z-10 max-w-sm mx-auto text-center">
          <span className="tag-base tag-primary mb-1 inline-block text-xs">ATHENA-TEK PRODUCTS</span>
          <h1 className="text-xl md:text-2xl font-extrabold text-white mb-1 whitespace-nowrap">
            Athena-Tek’s Product Line, ARES.
          </h1>
          <h2 className="text-base md:text-lg font-semibold text-primary-500 mb-1">
            Discover Athena-Tek’s ARES Systems
          </h2>
          <p className="text-xs text-dark-400 leading-relaxed">
            Engineered for Precision, Resilience, and Real-World Readiness.
          </p>
        </div>
      </section>
      <DefensePartnersSection />
      <TelecomPartnersSection />
      <AIPartnersSection />
      <PartnerSection />
      <CTASection
        title="Become Part of the Ecosystem"
        subtitle="Contact us for integration opportunities and partnership discussions."
      />
    </div>
  );
}
//TODO - Start here...
function DefensePartnersSection() {
  const partners = [
    { name: 'Cubic', desc: 'IWS & Soldier system integration' },
    { name: 'Lockheed Martin', desc: 'VTESS, hybrid weapon systems' },
    { name: 'GDMS', desc: 'XLCC and STIA EXCON technologies' },
    { name: 'GDIT', desc: 'Vehicle-based 5G infrastructure' },
    { name: 'FN America', desc: 'Weapon simulator integration' },
    { name: 'Phoenix Defense', desc: 'ATAK integration, EXCON pipelines' },
  ];

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="DEFENSE & TRAINING SYSTEMS"
        title="Defense & Training Systems"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {partners.map((partner, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Card size="md">
              <h4 className="text-lg font-semibold text-white mb-2">{partner.name}</h4>
              <p className="text-sm text-dark-400">{partner.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TelecomPartnersSection() {
  const partners = [
    { name: 'Vodafone', desc: 'Global terrestrial + NTN reach' },
    { name: 'Ericsson', desc: '5G and LTE O-RAN solutions' },
    { name: 'Nokia', desc: 'Banshee Flex 5G Radio' },
    { name: 'Samsung', desc: 'Private 5G solutions' },
    { name: 'T-Mobile', desc: 'Commercial + NTN coverage' },
    { name: 'AT&T / Verizon', desc: 'CONUS carrier support' },
  ];

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="TELECOMMUNICATIONS & NETWORK"
          title="Telecommunications & Network"
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card size="md" className="bg-white/[0.03]">
                <h4 className="text-lg font-semibold text-white mb-2">{partner.name}</h4>
                <p className="text-sm text-dark-400">{partner.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIPartnersSection() {
  const partners = [
    { name: 'NVIDIA', desc: 'Inference engines, edge GPU' },
    { name: 'Axiomtek', desc: 'Compact NVIDIA/5G AI systems' },
    { name: '7StarLake', desc: 'Ruggedized GPU servers' },
  ];

  return (
    <section className="section-padding container-main">
      <SectionHeader
        tag="AI & COMPUTE"
        title="AI & Compute"
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {partners.map((partner, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Card size="md">
              <h4 className="text-lg font-semibold text-white mb-2">{partner.name}</h4>
              <p className="text-sm text-dark-400">{partner.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function PartnerSection() {
  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="STRATEGIC PARTNERSHIPS"
          title="Partners That Amplify Mission Impact"
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          <a href="#">Click here </a> {/*//TODO*/}
		  
		
		  
        </div>
      </div>
    </section>
  );
}
