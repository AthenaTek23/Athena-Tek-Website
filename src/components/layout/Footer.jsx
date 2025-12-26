import { Link } from 'react-router-dom';
import { companyInfo } from '../../styles/theme';
import { useTheme } from '../../contexts/ThemeContext';
import logoImg from '../../assets/Logo.png';

const footerLinks = {
  products: [
    { label: 'Android TED', path: '/products/android-ted' },
    { label: 'ARES V', path: '/products/ares-v' },
    { label: 'Network Monitoring', path: '/products/network-monitoring' },
    { label: 'OWT Viewer', path: '/products/owt-viewer' },
  ],
  services: [
    { label: 'System Engineering', path: '/services/system-engineering' },
    { label: 'System Integration', path: '/services/system-integration' },
    { label: 'Modeling & Simulation', path: '/services/modeling-simulation' },
    { label: 'Network Design', path: '/services/network-design' },
  ],
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Capabilities', path: '/capabilities' },
    { label: 'Innovation', path: '/innovation' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img
                src={logoImg}
                alt={companyInfo.name}
                className="h-10 w-auto"
                loading="lazy"
              />
            </Link>
            <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
              {companyInfo.tagline}
            </p>
            <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
              {companyInfo.location}
            </p>
            <a
              href={`mailto:${companyInfo.email}`}
              className={`text-sm transition-colors ${isDark ? 'text-dark-400 hover:text-primary-500' : 'text-light-600 hover:text-teal-600'}`}
            >
              {companyInfo.email}
            </a>
          </div>

          {/* Products */}
          <div>
            <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-sm transition-colors ${
                      isDark
                        ? 'text-dark-400 hover:text-primary-500'
                        : 'text-light-600 hover:text-teal-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-sm transition-colors ${
                      isDark
                        ? 'text-dark-400 hover:text-primary-500'
                        : 'text-light-600 hover:text-teal-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-sm transition-colors ${
                      isDark
                        ? 'text-dark-400 hover:text-primary-500'
                        : 'text-light-600 hover:text-teal-600'
                    }`}
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
          <p className={`text-sm text-center ${isDark ? 'text-dark-500' : 'text-light-500'}`}>
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
