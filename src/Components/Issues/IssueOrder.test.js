import React from 'react';
import ReactDOM from 'react-dom';
import IssueOrder from './IssueOrder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IssueOrder />, div);
});
