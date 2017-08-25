import React from 'react';
import ReactDOM from 'react-dom';
import SupplierEditorContainer from './SupplierEditorContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SupplierEditorContainer />, div);
});
