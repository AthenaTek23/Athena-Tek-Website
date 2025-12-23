import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Header, Footer } from './components/layout';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const NetworkPage = lazy(() => import('./pages/NetworkPage'));
const TEDPage = lazy(() => import('./pages/TEDPage'));
const TrainingPage = lazy(() => import('./pages/TrainingPage'));
const TEPage = lazy(() => import('./pages/TEPage'));
const AIPage = lazy(() => import('./pages/AIPage'));
const PartnersPage = lazy(() => import('./pages/PartnersPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage')); //RichNote: Add Products page here.
const AboutPage = lazy(() => import('./pages/AboutPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'));

// Loading fallback component
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <main className="pt-20">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/network" element={<NetworkPage />} />
            <Route path="/ted" element={<TEDPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/te" element={<TEPage />} />
            <Route path="/ai" element={<AIPage />} />
			<Route path="/partners" element={<PartnersPage />} />
			<Route path="/products" element={<ProductsPage />} /> //RichNote: Add Products page here.
            <Route path="/about" element={<AboutPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contactuspage" element={<ContactUsPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
