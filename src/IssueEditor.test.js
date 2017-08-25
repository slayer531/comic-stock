import React from 'react';
import ReactDOM from 'react-dom';
import IssueEditor from './IssueEditor';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IssueEditor />, div);
});
