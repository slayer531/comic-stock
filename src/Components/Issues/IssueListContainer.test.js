import React from 'react';
import ReactDOM from 'react-dom';
import IssueListContainer from './IssueListContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IssueListContainer />, div);
});
