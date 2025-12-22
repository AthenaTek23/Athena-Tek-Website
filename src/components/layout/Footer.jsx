import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { companyInfo } from '../../styles/theme';

/* Logo image - import */
import LogoImg from '../../assets/Logo.png';

const footerLinks = {
  solutions: [
    { label: 'Network', path: '/network' },
    { label: 'TED', path: '/ted' },
    { label: 'Live Training', path: '/training' },
    { label: 'T&E', path: '/te' },
  ],
  company: [
    { label: 'About', path: '/about' },
    { label: 'Partners', path: '/partners' },
    { label: 'AI Ecosystem', path: '/ai' },
    { label: 'Newsroom', path: '/news' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-white/5">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
		
		
          {/* Brand - Footer logo and company tag line.*/}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
			
				{/* RichNote: Logo img */}
				<div>
					<img src={LogoImg} />
				</div>
              
			  {/* Shield icon and company name text */}
			  {/*
			  <div className="w-10 h-10 bg-gradient-to-br from-primary-501 to-primary-601 rounded-xl flex items-center justify-center text-white">
                <Shield size={20} />
              </div>
              <span className="text-lg font-bold tracking-wider text-white">
                {companyInfo.name.toUpperCase()}
              </span>
			  */}
			  
            </Link>
            <p className="text-sm text-dark-400 leading-relaxed">
              {companyInfo.tagline}
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-dark-400 hover:text-primary-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-dark-400 hover:text-primary-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-dark-400">
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.pressEmail}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {companyInfo.pressEmail}
                </a>
              </li>
              <li>{companyInfo.location}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-main py-6">
          <p className="text-sm text-dark-500 text-center">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
