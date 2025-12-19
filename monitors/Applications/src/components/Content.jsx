import React from 'react';
import View from './View';

const Content = ({ viewData }) => (
  <main className="content">
    <div className="content__inner">
      <View viewData={viewData} />
    </div>
  </main>
);

export default Content;
