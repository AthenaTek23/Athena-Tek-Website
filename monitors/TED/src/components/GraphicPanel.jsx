import React from 'react';

const GraphicPanel = ({ src, alt, video, poster }) => (
  <div className="graphic-panel">
    <div className="graphic-panel__inner">
      {video ? (
        <video
          className="graphic-panel__img"
          src={video}
          poster={poster}
          autoPlay
          loop
          controls
          playsInline
        />
      ) : (
        <img className="graphic-panel__img" src={src} alt={alt} />
      )}
    </div>
  </div>
);

export default GraphicPanel;
