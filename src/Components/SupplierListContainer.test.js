import React from 'react';
import ReactDOM from 'react-dom';
import SupplierListContainer from './SupplierListContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SupplierListContainer />, div);
});
