import React, { useState, useEffect, useCallback, useRef } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

/**
 * MonitorApp - Reusable monitor component
 * @param {Object} viewsConfig - View configuration object
 * @param {Object} siteConfig - Site configuration with sidebar settings
 * @param {string} theme - Theme name: 'network', 'ted', or 'applications'
 * @param {string} basePath - Base path for assets (e.g., '/monitors/network')
 */
const MonitorApp = ({ viewsConfig, siteConfig, theme = 'network', basePath = '' }) => {
  const [activeView, setActiveView] = useState(siteConfig.defaultView);
  const containerRef = useRef(null);

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    // Only handle if the container or its children are focused
    if (!containerRef.current?.contains(document.activeElement) &&
        document.activeElement !== containerRef.current) {
      return;
    }

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
  }, [activeView, viewsConfig]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      ref={containerRef}
      className={`monitor-app monitor-theme-${theme}`}
      tabIndex={0}
      role="application"
      aria-label={`${siteConfig.sidebar.title} Interactive Monitor`}
    >
      <Sidebar
        config={siteConfig.sidebar}
        views={viewsConfig}
        activeView={activeView}
        onViewChange={setActiveView}
      />
      <Content
        viewData={viewsConfig[activeView]}
        basePath={basePath}
      />
    </div>
  );
};

export default MonitorApp;
