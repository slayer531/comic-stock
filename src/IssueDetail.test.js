import React from 'react';
import ReactDOM from 'react-dom';
import IssueDetail from './IssueDetail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IssueDetail />, div);
});
