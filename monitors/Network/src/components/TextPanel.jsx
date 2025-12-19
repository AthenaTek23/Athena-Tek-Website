import React from 'react';

const TextPanel = ({ title, description, emphasis, listItems, footer }) => (
  <div className="text-panel">
    <h2 className="text-panel__title">{title}</h2>
    <p className="text-panel__description">
      {description}
      {emphasis && <em> {emphasis}</em>}
    </p>
    <ul className="text-panel__list">
      {listItems.map((item, index) => (
        <li key={index} className="text-panel__list-item">{item}</li>
      ))}
    </ul>
    <div className="text-panel__footer">
      {footer.text}
      {footer.links && footer.links.map((link, index) => (
        <React.Fragment key={index}>
          {index === 0 ? ' ' : ' and '}
          <strong>{link}</strong>
          {index === footer.links.length - 1 ? '.' : ''}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default TextPanel;
