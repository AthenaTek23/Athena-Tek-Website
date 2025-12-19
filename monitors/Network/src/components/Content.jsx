import React from 'react';
import View from './View';

const Content = ({ viewData }) => (
  <main className="content">
    <div className="content__inner">
      <div className="content__overlay"></div>
      <View viewData={viewData} />
    </div>
  </main>
);

export default Content;
