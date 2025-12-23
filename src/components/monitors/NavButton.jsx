import React, { memo } from 'react';

const NavButton = memo(({ label, isActive, onClick }) => (
  <button
    className={`monitor-nav__btn ${isActive ? 'monitor-nav__btn--active' : ''}`}
    onClick={onClick}
  >
    <span className="monitor-nav__btn-label">{label}</span>
    <span className="monitor-nav__btn-chevron">›</span>
  </button>
));

export default NavButton;
