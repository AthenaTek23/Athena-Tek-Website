import React from 'react';

const Pill = ({ text }) => (
  <div className="pill">
    <span className="pill__dot"></span> {text}
  </div>
);

export default Pill;
