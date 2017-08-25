import React from 'react';
import ReactDOM from 'react-dom';
import IssueDetailContainer from './IssueDetailContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IssueDetailContainer />, div);
});
