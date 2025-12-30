import React, { memo } from 'react';

const GraphicPanel = memo(({ src, alt, video, poster, basePath = '' }) => {
  // Prepend basePath to src/video/poster if they are relative paths
  const getPath = (path) => {
    if (!path) return path;
    if (path.startsWith('http') || path.startsWith('/')) return path;
    return `${basePath}/${path}`;
  };

  return (
    <div className="monitor-graphic-panel">
      <div className="monitor-graphic-panel__inner">
        {video ? (
          <video
            className="monitor-graphic-panel__img"
            src={getPath(video)}
            poster={getPath(poster)}
            autoPlay
            loop
            controls
            playsInline
            aria-label={alt || 'Monitor demonstration video'}
          />
        ) : (
          <img
            className="monitor-graphic-panel__img"
            src={getPath(src)}
            alt={alt}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
});

export default GraphicPanel;
