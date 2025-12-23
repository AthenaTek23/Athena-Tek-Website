import React, { memo } from 'react';

const Pill = memo(({ text }) => (
  <div className="monitor-pill">
    <span className="monitor-pill__dot"></span> {text}
  </div>
));

export default Pill;
