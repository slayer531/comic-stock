import React from 'react';
import ReactDOM from 'react-dom';
import ComicStrip from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ComicStrip />, div);
});
