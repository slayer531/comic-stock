import React from 'react';
import ReactDOM from 'react-dom';
import SupplierList from './SupplierList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SupplierList />, div);
});
