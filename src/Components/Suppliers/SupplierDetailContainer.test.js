import React from 'react';
import ReactDOM from 'react-dom';
import SupplierDetailContainer from './SupplierDetailContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SupplierDetailContainer />, div);
});
