import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Header, Footer } from './components/layout';
import { useTheme } from './contexts/ThemeContext';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const CapabilitiesPage = lazy(() => import('./pages/CapabilitiesPage'));
const InnovationPage = lazy(() => import('./pages/InnovationPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));

// Product sub-pages
const AndroidTEDPage = lazy(() => import('./pages/products/AndroidTEDPage'));
const ARESVPage = lazy(() => import('./pages/products/ARESVPage'));
const NetworkMonitoringPage = lazy(() => import('./pages/products/NetworkMonitoringPage'));
const OWTViewerPage = lazy(() => import('./pages/products/OWTViewerPage'));

// Service pages
const SystemEngineeringPage = lazy(() => import('./pages/services/SystemEngineeringPage'));
const SystemIntegrationPage = lazy(() => import('./pages/services/SystemIntegrationPage'));
const ModelingSimulationPage = lazy(() => import('./pages/services/ModelingSimulationPage'));
const NetworkDesignPage = lazy(() => import('./pages/services/NetworkDesignPage'));

// Legacy pages (kept for internal reference)
const NetworkPage = lazy(() => import('./pages/NetworkPage'));
const TEDPage = lazy(() => import('./pages/TEDPage'));
const TrainingPage = lazy(() => import('./pages/TrainingPage'));
const TEPage = lazy(() => import('./pages/TEPage'));
const AIPage = lazy(() => import('./pages/AIPage'));
const PartnersPage = lazy(() => import('./pages/PartnersPage'));

// Loading fallback component
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function App() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-dark-950' : 'bg-gray-50'}`}>
      <Header />
      <main className="pt-20">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Main navigation routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/capabilities" element={<CapabilitiesPage />} />
            <Route path="/innovation" element={<InnovationPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />

            {/* Products routes */}
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/android-ted" element={<AndroidTEDPage />} />
            <Route path="/products/ares-v" element={<ARESVPage />} />
            <Route path="/products/network-monitoring" element={<NetworkMonitoringPage />} />
            <Route path="/products/owt-viewer" element={<OWTViewerPage />} />

            {/* Services routes */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/system-engineering" element={<SystemEngineeringPage />} />
            <Route path="/services/system-integration" element={<SystemIntegrationPage />} />
            <Route path="/services/modeling-simulation" element={<ModelingSimulationPage />} />
            <Route path="/services/network-design" element={<NetworkDesignPage />} />

            {/* Legacy routes (internal reference) */}
            <Route path="/network" element={<NetworkPage />} />
            <Route path="/ted" element={<TEDPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/te" element={<TEPage />} />
            <Route path="/ai" element={<AIPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contactuspage" element={<ContactUsPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
