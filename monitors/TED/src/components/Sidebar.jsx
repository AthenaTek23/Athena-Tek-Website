import React from 'react';
import Navigation from './Navigation';

const Sidebar = ({ config, views, activeView, onViewChange }) => (
  <aside className="sidebar">
    <div>
      {config.label && <div className="sidebar__label">{config.label}</div>}
      <h1 className="sidebar__title">{config.title}</h1>
      <p className="sidebar__subtitle">{config.subtitle}</p>
    </div>

    <Navigation 
      views={views} 
      activeView={activeView} 
      onViewChange={onViewChange}
      menuLabel={config.menuLabel || 'Select View'}
    />

    <footer className="sidebar__footer">
      <b>Tip:</b> {config.footerTip.replace('Tip: ', '')}
    </footer>
  </aside>
);

export default Sidebar;
