import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Globe, Cpu, Target } from 'lucide-react';

/* Banner image - import */
import BannerImg from '../assets/BannerImg.jpg';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
    </div>
  );
}

// Hero Section - New design with three pillars as pill buttons
function HeroSection() {
  const { isDark } = useTheme();
  const pillars = [
    { label: 'Network Focused', path: '/network', icon: <Globe size={14} /> },
    { label: 'TED', path: '/ted', icon: <Cpu size={14} /> },
    { label: 'Solution Driven', path: '/training', icon: <Target size={14} /> },
  ];

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background image - more prominent */}
      <div className="absolute inset-0">
        <img
          src={BannerImg}
          alt="Athena-Tek background"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${
          isDark
            ? 'from-dark-950/80 via-dark-950/50 to-transparent'
            : 'from-light-100/90 via-light-100/60 to-transparent'
        }`} />
        <div className={`absolute inset-0 bg-gradient-to-t ${
          isDark
            ? 'from-dark-950/90 via-transparent to-transparent'
            : 'from-light-100/90 via-transparent to-transparent'
        }`} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 container-main py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Three Pillar Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {pillars.map((pillar, i) => (
                <Link
                  key={i}
                  to={pillar.path}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 ${
                    isDark
                      ? 'bg-white/90 border border-white text-primary-navy hover:bg-white hover:shadow-lg'
                      : 'bg-white border border-light-300 text-primary-navy hover:bg-white hover:shadow-lg hover:border-primary-navy/30'
                  }`}
                >
                  {pillar.icon}
                  {pillar.label}
                </Link>
              ))}
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-lg max-w-xl leading-relaxed ${
                isDark ? 'text-dark-300' : 'text-light-700'
              }`}
            >
              Revolutionary platform for training, test & evaluation, and
              distributed intelligence at the edge.
            </motion.p>
          </div>

          {/* Right side - could add device image here */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            {/* Placeholder for device visualization or leave empty for background to show */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

