import React from 'react';
import ReactDOM from 'react-dom';
import IssueOrderContainer from './IssueOrderContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IssueOrderContainer />, div);
});
