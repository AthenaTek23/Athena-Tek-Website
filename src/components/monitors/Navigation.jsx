import React from 'react';
import NavButton from './NavButton';

const Navigation = ({ views, activeView, onViewChange, menuLabel }) => (
  <nav>
    <div className="monitor-nav__label">{menuLabel}</div>
    <div className="monitor-nav__menu">
      {Object.values(views).map((view) => (
        <NavButton
          key={view.id}
          label={view.label}
          isActive={activeView === view.id}
          onClick={() => onViewChange(view.id)}
        />
      ))}
    </div>
  </nav>
);

export default Navigation;
