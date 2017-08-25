import React from 'react';
import ReactDOM from 'react-dom';
import SupplierDetail from './SupplierDetail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SupplierDetail />, div);
});
