import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import { companyInfo } from '../../styles/theme';
import { useTheme } from '../../contexts/ThemeContext';
import logoImg from '../../assets/Logo.png';

const footerLinks = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Newsroom', path: '/news' },
    { label: 'Contact Us', path: '/contact' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();

  return (
    <footer className={`border-t ${isDark ? 'bg-dark-950 border-white/5' : 'bg-light-100 border-light-300'}`}>
      <div className="container-main py-16">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Brand */}
          <div className="bg-white rounded-xl shadow-lg border border-light-200 px-8 py-6">
            <Link to="/" className="flex items-center justify-center mb-4">
              <img
                src={logoImg}
                alt={companyInfo.name}
                className="h-10 w-auto"
                loading="lazy"
              />
            </Link>
            <a
              href="https://www.linkedin.com/company/10109504/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold mb-4 transition-colors hover:opacity-80"
              style={{ color: '#003087' }}
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <p className="text-sm font-semibold leading-relaxed mb-4" style={{ color: '#003087' }}>
              {companyInfo.tagline}
            </p>
            <p className="text-sm font-semibold" style={{ color: '#003087' }}>
              {companyInfo.location}
            </p>
            <a
              href={`mailto:${companyInfo.email}`}
              className="text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: '#003087' }}
            >
              {companyInfo.email}
            </a>
          </div>

          {/* Company */}
          <div className="bg-white rounded-xl shadow-lg border border-light-200 px-8 py-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#003087' }}>
              Company
            </h4>
            <ul className="flex flex-wrap justify-center gap-4">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="inline-block px-4 py-2 text-sm font-semibold rounded-lg bg-light-100 shadow-sm border border-light-200 transition-all hover:shadow-md hover:bg-light-200"
                    style={{ color: '#003087' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={`border-t ${isDark ? 'border-white/5' : 'border-light-300'}`}>
        <div className="container-main py-6">
          <p className="text-sm font-semibold text-center" style={{ color: '#003087' }}>
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
