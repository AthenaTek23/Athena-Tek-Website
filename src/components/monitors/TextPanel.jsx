import React, { memo } from 'react';

const TextPanel = memo(({ title, description, emphasis, listItems, footer }) => (
  <div className="monitor-text-panel">
    <h2 className="monitor-text-panel__title">{title}</h2>
    <p className="monitor-text-panel__description">
      {description}
      {emphasis && <em> {emphasis}</em>}
    </p>
    <ul className="monitor-text-panel__list">
      {listItems && listItems.map((item, index) => (
        <li key={index} className="monitor-text-panel__list-item">{item}</li>
      ))}
    </ul>
    {footer && (
      <div className="monitor-text-panel__footer">
        {footer.text}
        {footer.links && footer.links.map((link, index) => (
          <React.Fragment key={index}>
            {index === 0 ? ' ' : ' and '}
            <strong>{link}</strong>
            {index === footer.links.length - 1 ? '.' : ''}
          </React.Fragment>
        ))}
      </div>
    )}
  </div>
));

export default TextPanel;
