import React from 'react';
import Navigation from './Navigation';

const Sidebar = ({ config, views, activeView, onViewChange }) => (
  <aside className="monitor-sidebar">
    <header className="monitor-sidebar__header">
      {config.label && <div className="monitor-sidebar__label">{config.label}</div>}
      <h1 className="monitor-sidebar__title">{config.title}</h1>
      <p className="monitor-sidebar__subtitle">{config.subtitle}</p>
    </header>

    <Navigation
      views={views}
      activeView={activeView}
      onViewChange={onViewChange}
      menuLabel={config.menuLabel || 'Select View'}
    />

    <footer className="monitor-sidebar__footer">
      <b>Tip:</b> {config.footerTip.replace('Tip: ', '')}
    </footer>
  </aside>
);

export default Sidebar;
