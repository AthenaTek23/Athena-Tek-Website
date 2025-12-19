import React from 'react';

const TextPanel = ({ title, description, listItems, footer }) => (
  <div className="text-panel">
    <h2 className="text-panel__title">{title}</h2>
    <p className="text-panel__description">{description}</p>
    <ul className="text-panel__list">
      {listItems.map((item, index) => (
        <li key={index} className="text-panel__list-item">{item}</li>
      ))}
    </ul>
    <div className="text-panel__footer">{footer.text}</div>
  </div>
);

export default TextPanel;
