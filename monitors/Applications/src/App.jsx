import React, { useState, useEffect, useCallback } from 'react';
import { Sidebar, Content } from './components';
import { viewsConfig, siteConfig } from './config/views';
import './styles/index.css';

const App = () => {
  const [activeView, setActiveView] = useState(siteConfig.defaultView);

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    const viewIds = Object.keys(viewsConfig);
    const currentIndex = viewIds.indexOf(activeView);

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % viewIds.length;
      setActiveView(viewIds[nextIndex]);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + viewIds.length) % viewIds.length;
      setActiveView(viewIds[prevIndex]);
    }
  }, [activeView]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Update page title on view change
  useEffect(() => {
    document.title = `${viewsConfig[activeView].title} | Athena-Tek Monitor 3`;
  }, [activeView]);

  return (
    <div className="app">
      <Sidebar
        config={siteConfig.sidebar}
        views={viewsConfig}
        activeView={activeView}
        onViewChange={setActiveView}
      />
      <Content viewData={viewsConfig[activeView]} />
    </div>
  );
};

export default App;
