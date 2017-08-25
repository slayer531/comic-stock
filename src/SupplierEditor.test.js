import React from 'react';
import ReactDOM from 'react-dom';
import SupplierEditor from './SupplierEditor';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SupplierEditor />, div);
});
