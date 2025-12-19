import React from 'react';

const NavButton = ({ label, isActive, onClick }) => (
  <button 
    className={`nav__btn ${isActive ? 'nav__btn--active' : ''}`}
    onClick={onClick}
  >
    <span className="nav__btn-label">{label}</span>
    <span className="nav__btn-chevron">›</span>
  </button>
);

export default NavButton;
