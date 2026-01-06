import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui';
import { SectionHeader, CTASection } from '../components/common';
import { PageSectionNav, SectionDots } from '../components/navigation';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'contact-form', label: 'Contact Form' },
];

export default function ContactUsPage() {
  const EMAIL_TO = 'info@athena-tek.com';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Opening your mail app…' });

    const { name, email, phone, company } = formData;
    const subject = encodeURIComponent(`New contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '—'}\nCompany: ${company || '—'}`
    );

    // Open default mail client
    window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
    setStatus({ type: 'success', message: 'Mail app opened. If it did not open, please email us directly.' });
  };

  return (
    <div className="pt-20">
      <PageSectionNav sections={sections} />
      <SectionDots sections={sections} />

      {/* Hero Section */}
      <section id="overview" className="section-padding container-main scroll-mt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="tag-base tag-primary mb-4 inline-block">CONTACT ATHENA-TEK</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-light-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-primary-navy font-semibold mb-4">
            Start the conversation with our experts
          </p>
          <p className="text-lg text-light-600 leading-relaxed">
            Looking to learn more about our technologies, capabilities, or deployment options? Our team is ready to provide detailed information and address your mission requirements. Contact us to start the conversation.
          </p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" aria-labelledby="contact-form-title" className="section-padding container-main scroll-mt-36">
        <SectionHeader
          id="contact-form-title"
          title="Get in touch"
          subtitle="Fill out the form and we'll reach out."
        />

        <Card as="div" className="max-w-2xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            noValidate
            className="space-y-6 p-6"
            aria-describedby="form-status"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-light-900">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="Jane Doe"
                className="mt-1 w-full rounded border border-light-300 px-3 py-2 text-light-900 focus:border-primary-navy focus:outline-none focus:ring-1 focus:ring-primary-navy"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-light-900">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="jane@example.com"
                className="mt-1 w-full rounded border border-light-300 px-3 py-2 text-light-900 focus:border-primary-navy focus:outline-none focus:ring-1 focus:ring-primary-navy"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-light-900">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                inputMode="tel"
                autoComplete="tel"
                placeholder="(555) 123-4567"
                className="mt-1 w-full rounded border border-light-300 px-3 py-2 text-light-900 focus:border-primary-navy focus:outline-none focus:ring-1 focus:ring-primary-navy"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-light-900">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                autoComplete="organization"
                placeholder="Acme Corp"
                className="mt-1 w-full rounded border border-light-300 px-3 py-2 text-light-900 focus:border-primary-navy focus:outline-none focus:ring-1 focus:ring-primary-navy"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center rounded bg-primary-navy px-6 py-3 text-white font-medium hover:bg-primary-navy/90 disabled:opacity-50 transition-colors"
                disabled={status.type === 'loading'}
              >
                {status.type === 'loading' ? 'Sending…' : 'Submit'}
              </button>
            </div>

            <p id="form-status" role="status" aria-live="polite" className="text-sm text-light-600">
              {status.message}
            </p>
          </motion.form>
        </Card>
      </section>

      <CTASection
        title="Prefer email or phone?"
        subtitle="Reach us through your favorite channel and we'll respond promptly."
      />
    </div>
  );
}
