import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { Card } from '../components/ui';
import { PageHero, SectionHeader, CTASection } from '../components/common';

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
    <div className="contact-page">
      <PageHero
        tag="Contact ATHENA-TEK"
        title="Contact Us"
        subtitle="Start the conversation with our experts"
        description="Looking to learn more about our technologies, capabilities, or deployment options? Our team is ready to provide detailed information and address your mission requirements. Contact us to start the conversation."
        icon={<Users />}
      />

      <section aria-labelledby="contact-form-title" className="container mx-auto px-4 py-8">
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
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="Jane Doe"
                className="mt-1 w-full rounded border px-3 py-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="jane@example.com"
                className="mt-1 w-full rounded border px-3 py-2"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                inputMode="tel"
                autoComplete="tel"
                placeholder="(555) 123-4567"
                className="mt-1 w-full rounded border px-3 py-2"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                autoComplete="organization"
                placeholder="Acme Corp"
                className="mt-1 w-full rounded border px-3 py-2"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                disabled={status.type === 'loading'}
              >
                {status.type === 'loading' ? 'Sending…' : 'Submit'}
              </button>
            </div>

            <p id="form-status" role="status" aria-live="polite" className="text-sm">
              {status.message}
            </p>
          </motion.form>
        </Card>
      </section>

      <CTASection
        title="Prefer email or phone?"
        description="Reach us through your favorite channel and we'll respond promptly."
      />
    </div>
  );
}
