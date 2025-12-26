import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Layers, Box, MapPin, Eye, Server, Cpu, Database, ChevronRight, Check } from 'lucide-react';
import { Card } from '../../components/ui';
import { SectionHeader, CTASection } from '../../components/common';
import { useTheme } from '../../contexts/ThemeContext';
import { iconSizes } from '../../styles/theme';

export default function OWTViewerPage() {
  const { isDark } = useTheme();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-dark-900 to-dark-950' : 'bg-gradient-to-b from-light-100 to-white'}`} />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative z-10 container-main text-center">
          <span className="tag-base tag-primary mb-4 inline-block">SOFTWARE PRODUCT</span>
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-light-900'}`}>
            One World Terrain (OWT)
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
            3D terrain visualization platform for geospatial analysis and mission planning
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="#features" className="btn-primary">
              View Features
            </Link>
            <Link to="#technology" className="btn-secondary">
              Technology Stack
            </Link>
          </div>
        </div>
      </section>

      <OverviewSection isDark={isDark} />
      <ArchitectureSection isDark={isDark} />
      <TechnologySection isDark={isDark} />
      <FeaturesSection isDark={isDark} />
      <CTASection
        title="Deploy OWT Viewer"
        subtitle="Contact our team for deployment options and customization."
      />
    </div>
  );
}

function OverviewSection({ isDark }) {
  const highlights = [
    { icon: <Globe size={iconSizes.lg} />, title: '3D Globe Rendering', desc: 'WGS84 ellipsoid with high-fidelity terrain visualization' },
    { icon: <Layers size={iconSizes.lg} />, title: '3D Tiles Support', desc: 'Native OGC 3D Tiles 1.0/1.1 loader for efficient streaming' },
    { icon: <Box size={iconSizes.lg} />, title: 'Building Models', desc: 'Refined 3D building and infrastructure models' },
    { icon: <Eye size={iconSizes.lg} />, title: 'WebGL Performance', desc: 'GPU-accelerated rendering for smooth interaction' },
  ];

  return (
    <section id="features" className="section-padding container-main">
      <SectionHeader
        tag="OVERVIEW"
        title="3D Terrain Viewer"
        subtitle="Client-server web application for rendering 3D geospatial terrain data using modern web technologies"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card size="lg" className="h-full text-center">
              <div className="icon-box w-14 h-14 mx-auto mb-4">
                {item.icon}
              </div>
              <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-light-900'}`}>
                {item.title}
              </h4>
              <p className={`text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                {item.desc}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ArchitectureSection({ isDark }) {
  const clientComponents = [
    { name: 'CesiumJS Viewer', desc: '3D rendering context with scene management' },
    { name: 'Globe Renderer', desc: 'Earth ellipsoid with imagery layers' },
    { name: '3D Tiles Loader', desc: 'Efficient tileset streaming and caching' },
    { name: 'UI Controls', desc: 'Layer panel, navigation, and info displays' },
  ];

  const serverComponents = [
    { name: 'Express.js Server', desc: 'Web application framework and routing' },
    { name: 'Static File Server', desc: 'Serve frontend and tile data' },
    { name: 'REST API', desc: 'Tileset listing and extent queries' },
    { name: 'CORS Middleware', desc: 'Cross-origin resource sharing support' },
  ];

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="ARCHITECTURE"
          title="System Architecture"
          subtitle="Modern client-server architecture for high-performance terrain visualization"
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Client-Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card size="xl" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  isDark ? 'bg-teal-900/30' : 'bg-teal-100'
                }`}>
                  <Globe size={24} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-light-900'}`}>
                    Frontend (Client-Side)
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                    CesiumJS-powered visualization
                  </p>
                </div>
              </div>
              <ul className="space-y-4">
                {clientComponents.map((comp, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className={`mt-0.5 flex-shrink-0 ${isDark ? 'text-teal-400' : 'text-teal-600'}`} />
                    <div>
                      <span className={`font-medium ${isDark ? 'text-white' : 'text-light-900'}`}>
                        {comp.name}
                      </span>
                      <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                        {comp.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Server-Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card size="xl" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  isDark ? 'bg-blue-900/30' : 'bg-blue-100'
                }`}>
                  <Server size={24} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-light-900'}`}>
                    Backend (Server-Side)
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                    Node.js/Express infrastructure
                  </p>
                </div>
              </div>
              <ul className="space-y-4">
                {serverComponents.map((comp, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className={`mt-0.5 flex-shrink-0 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                    <div>
                      <span className={`font-medium ${isDark ? 'text-white' : 'text-light-900'}`}>
                        {comp.name}
                      </span>
                      <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                        {comp.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TechnologySection({ isDark }) {
  const technologies = [
    { category: 'Frontend', items: [
      { name: 'CesiumJS 1.113', desc: '3D geospatial visualization library' },
      { name: 'HTML5/CSS3', desc: 'User interface structure and styling' },
      { name: 'Vanilla JavaScript', desc: 'No framework dependencies' },
    ]},
    { category: 'Backend', items: [
      { name: 'Node.js', desc: 'JavaScript runtime environment' },
      { name: 'Express.js 4.x', desc: 'Web application framework' },
      { name: 'CORS', desc: 'Cross-origin resource sharing' },
    ]},
    { category: 'Data Format', items: [
      { name: 'OGC 3D Tiles', desc: 'Version 1.0/1.1 specification' },
      { name: '3TZ Archives', desc: 'SQLite-based tile storage' },
      { name: 'GeoJSON', desc: 'Geographic extent definitions' },
    ]},
  ];

  return (
    <section id="technology" className="section-padding container-main">
      <SectionHeader
        tag="TECHNOLOGY STACK"
        title="Built on Modern Technologies"
        subtitle="Optimized for performance, reliability, and ease of deployment"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {technologies.map((tech, techIdx) => (
          <motion.div
            key={techIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: techIdx * 0.1 }}
          >
            <Card size="lg" className="h-full">
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
                {tech.category}
              </h4>
              <ul className="space-y-4">
                {tech.items.map((item, i) => (
                  <li key={i}>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-light-900'}`}>
                      {item.name}
                    </span>
                    <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FeaturesSection({ isDark }) {
  const cesiumFeatures = [
    { requirement: '3D Tiles Support', capability: 'Native OGC 3D Tiles 1.0/1.1 loader' },
    { requirement: 'Globe Rendering', capability: 'WGS84 ellipsoid with terrain' },
    { requirement: 'Performance', capability: 'WebGL-based GPU rendering' },
    { requirement: 'Open Source', capability: 'Apache 2.0 license' },
  ];

  const dataLayers = [
    'Terrain mesh',
    'Refined buildings',
    'Refined bridges',
    'Aeronautic features',
    'Hydrography',
    'Transportation ground',
    'Utility infrastructure',
    'Military features',
  ];

  const performanceFeatures = [
    { feature: 'Level of Detail (LOD)', desc: 'Automatic detail level based on distance' },
    { feature: 'Frustum Culling', desc: 'Only visible tiles are rendered' },
    { feature: 'Memory Management', desc: 'Configurable memory usage limits' },
    { feature: 'Skip LOD', desc: 'Skip intermediate levels for faster loading' },
  ];

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <SectionHeader
          tag="CAPABILITIES"
          title="Advanced Features"
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CesiumJS Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card size="lg" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
                CesiumJS Capabilities
              </h4>
              <div className="space-y-3">
                {cesiumFeatures.map((item, i) => (
                  <div key={i} className={`pb-3 ${
                    i < cesiumFeatures.length - 1 ? (isDark ? 'border-b border-white/5' : 'border-b border-light-200') : ''
                  }`}>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-light-900'}`}>
                      {item.requirement}
                    </span>
                    <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                      {item.capability}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Data Layers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card size="lg" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
                Data Layers
              </h4>
              <ul className="space-y-2">
                {dataLayers.map((layer, i) => (
                  <li key={i} className={`flex items-center gap-2 text-sm ${isDark ? 'text-dark-300' : 'text-light-600'}`}>
                    <Check size={14} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
                    {layer}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Performance Optimization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card size="lg" className={`h-full ${isDark ? 'bg-white/[0.02]' : 'bg-white'}`}>
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
                Performance Optimization
              </h4>
              <div className="space-y-3">
                {performanceFeatures.map((item, i) => (
                  <div key={i} className={`pb-3 ${
                    i < performanceFeatures.length - 1 ? (isDark ? 'border-b border-white/5' : 'border-b border-light-200') : ''
                  }`}>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-light-900'}`}>
                      {item.feature}
                    </span>
                    <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-light-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
