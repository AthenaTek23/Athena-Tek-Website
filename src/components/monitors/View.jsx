import React from 'react';
import Pill from './Pill';
import GraphicPanel from './GraphicPanel';
import TextPanel from './TextPanel';

const View = ({ viewData, basePath = '' }) => {
  const { badge, title, tag, pillText, image, video, panel, isHome, layout } = viewData;

  // Check if this is a video-only view (has video but minimal panel content)
  const isVideoOnly = video &&
    (!panel?.description || panel?.description === '') &&
    (!panel?.listItems || panel?.listItems.length === 0 || panel?.listItems.every(item => item.trim() === ''));

  // Determine if we should hide the text panel
  // layout: 'full' = graphic only, 'split' (default) = graphic + text panel
  const isFullWidth = layout === 'full' || isVideoOnly;

  return (
    <section className={`monitor-view ${isHome ? 'monitor-view--home' : ''} ${isFullWidth ? 'monitor-view--full-width' : ''}`}>
      <div className="monitor-view__header">
        <div>
          {badge && <div className="monitor-view__badge">{badge}</div>}
          <div className="monitor-view__title">
            <span>{title}</span>
            <span className="monitor-view__title-tag">{tag}</span>
          </div>
        </div>
        <Pill text={pillText} />
      </div>
      <div className="monitor-view__main">
        <GraphicPanel
          src={image?.src}
          alt={image?.alt}
          video={video?.src}
          poster={video?.poster}
          basePath={basePath}
        />
        {!isFullWidth && <TextPanel {...panel} />}
      </div>
    </section>
  );
};

export default View;
