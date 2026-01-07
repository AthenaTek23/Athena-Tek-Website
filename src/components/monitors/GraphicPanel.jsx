import React, { memo } from 'react';

const GraphicPanel = memo(({ src, alt, video, poster, basePath = '' }) => {
  // Get Vite's base URL for GitHub Pages deployment
  const baseUrl = import.meta.env.BASE_URL || '/';

  // Prepend basePath to src/video/poster if they are relative paths
  const getPath = (path) => {
    if (!path) return path;
    if (path.startsWith('http')) return path;
    // For absolute paths starting with /, prepend the base URL (removing trailing slash to avoid double slashes)
    if (path.startsWith('/')) return `${baseUrl.replace(/\/$/, '')}${path}`;
    return `${baseUrl.replace(/\/$/, '')}${basePath}/${path}`;
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
