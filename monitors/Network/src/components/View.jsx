import React from 'react';
import Pill from './Pill';
import GraphicPanel from './GraphicPanel';
import TextPanel from './TextPanel';

const View = ({ viewData }) => {
  const { badge, title, tag, pillText, image, video, panel, isHome } = viewData;

  // Check if this is a video-only view (has video but minimal panel content)
  const isVideoOnly = video && (!panel?.description || panel?.description === '') && (!panel?.listItems || panel?.listItems.length === 0 || panel?.listItems.every(item => item.trim() === ''));

  return (
    <section className={`view ${isHome ? 'view--home' : ''} ${isVideoOnly ? 'view--video-only' : ''}`}>
      <div className="view__header">
        <div>
          {badge && <div className="view__badge">{badge}</div>}
          <div className="view__title">
            <span>{title}</span>
            <span className="view__title-tag">{tag}</span>
          </div>
        </div>
        <Pill text={pillText} />
      </div>
      <div className="view__main">
        <GraphicPanel
          src={image?.src}
          alt={image?.alt}
          video={video?.src}
          poster={video?.poster}
        />
        {!isVideoOnly && <TextPanel {...panel} />}
      </div>
    </section>
  );
};

export default View;
