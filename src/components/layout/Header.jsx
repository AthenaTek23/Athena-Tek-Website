import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Mountain } from 'lucide-react';
import { navItems, companyInfo } from '../../styles/theme';
import { useTheme } from '../../contexts/ThemeContext';
import logoImg from '../../assets/Logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { toggleTheme, isDark, isLight, isSepia, theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and scroll to top on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-dark-950/95 backdrop-blur-md border-b border-white/5'
            : isSepia
              ? 'bg-[#f5f0e1]/95 backdrop-blur-md border-b border-[#5a5030]/25 shadow-sm'
              : 'bg-white/95 backdrop-blur-md border-b border-light-300 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-main">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img
              src={logoImg}
              alt={companyInfo.name}
              className="h-10 w-auto flex-shrink-0 transition-transform group-hover:scale-105"
              loading="lazy"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                    ? isSepia ? 'bg-[#5a5030] text-white' : 'bg-primary-navy text-white'
                    : isDark
                      ? 'text-dark-300 hover:text-white hover:bg-primary-navy/20'
                      : isSepia
                        ? 'text-[#3d2914] hover:text-[#2d1f0f] hover:bg-[#c4a35a]/25'
                        : 'text-light-700 hover:text-light-900 hover:bg-primary-navy/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isDark
                  ? 'text-dark-300 hover:text-white hover:bg-white/5'
                  : isSepia
                    ? 'text-[#5a5030] hover:text-[#3d2914] hover:bg-[#c4a35a]/25'
                    : 'text-light-600 hover:text-light-900 hover:bg-light-200'
              }`}
              aria-label={`Switch theme (current: ${theme})`}
            >
              {isDark ? <Sun size={20} /> : isSepia ? <Moon size={20} /> : <Mountain size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${isDark ? 'text-white' : isSepia ? 'text-[#3d2914]' : 'text-light-800'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`lg:hidden backdrop-blur-md border-b overflow-hidden ${
              isDark
                ? 'bg-dark-950/98 border-white/5'
                : isSepia
                  ? 'bg-[#f5f0e1]/98 border-[#5a5030]/25'
                  : 'bg-white/98 border-light-300'
            }`}
          >
            <div className="container-main py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all ${
                      location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                        ? isSepia ? 'bg-[#5a5030] text-white' : 'bg-primary-navy text-white'
                        : isDark
                          ? 'text-dark-300 hover:text-white hover:bg-primary-navy/20'
                          : isSepia
                            ? 'text-[#3d2914] hover:text-[#2d1f0f] hover:bg-[#c4a35a]/25'
                            : 'text-light-700 hover:text-light-900 hover:bg-primary-navy/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <div className={`pt-4 border-t ${isDark ? 'border-white/10' : isSepia ? 'border-[#5a5030]/25' : 'border-light-300'}`}>
                <button
                  onClick={toggleTheme}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isDark
                      ? 'text-dark-300 hover:text-white hover:bg-white/5'
                      : isSepia
                        ? 'text-[#5a5030] hover:text-[#3d2914] hover:bg-[#c4a35a]/25'
                        : 'text-light-600 hover:text-light-900 hover:bg-light-200'
                  }`}
                >
                  {isDark ? <Sun size={20} /> : isSepia ? <Moon size={20} /> : <Mountain size={20} />}
                  <span>{isDark ? 'Light Mode' : isSepia ? 'Dark Mode' : 'Desert Mode'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
