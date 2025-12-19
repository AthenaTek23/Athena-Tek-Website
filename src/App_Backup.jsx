import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import {
  HomePage,
  NetworkPage,
  TEDPage,
  TrainingPage,
  TEPage,
  AIPage,
  PartnersPage,
  AboutPage,
  NewsPage,
} from './pages';

function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/network" element={<NetworkPage />} />
          <Route path="/ted" element={<TEDPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/te" element={<TEPage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
