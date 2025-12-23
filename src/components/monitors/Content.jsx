import React from 'react';
import View from './View';

const Content = ({ viewData, basePath = '' }) => (
  <main className="monitor-content">
    <div className="monitor-content__inner">
      <div className="monitor-content__overlay"></div>
      <View viewData={viewData} basePath={basePath} />
    </div>
  </main>
);

export default Content;
