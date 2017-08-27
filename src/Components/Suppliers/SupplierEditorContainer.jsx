import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SupplierEditor from './SupplierEditor';
import {
  APP_SUPPLIERS_ADD_URL,
  APP_SUPPLIERS_EDIT_URL,
  PageState,
} from './../../Constants';
import history from './../../history';

class SupplierEditorContainer extends React.Component {
  constructor() {
    super();
    this.initialiseState();
    this.EditSupplier = this.EditSupplier.bind(this);
    this.setPageMode = this.setPageMode.bind(this);
    this.AddNew = this.AddNew.bind(this);
  }

  setPageMode(pageState) {
    this.setState({
      PageState: pageState,
    });
  }

  EditSupplier(supplier) {
    this.setState({
      supplier,
      PageState: PageState.Edit,
    });
    history.push(APP_SUPPLIERS_EDIT_URL + supplier.id);
  }
  initialiseState() {
    this.state = {
      supplier: { id: 0, name: '', city: '', reference: '' },
      PageState: PageState.List,
    };
  }

  AddNew() {
    this.setPageMode(PageState.New);
    history.push(APP_SUPPLIERS_ADD_URL);
  }

  render() {
    return (
      <SupplierEditor
        PageState={this.state.PageState}
        setPageMode={this.setPageMode}
        SaveSupplier={this.SaveSupplier}
        EditSupplier={this.EditSupplier}
        id={this.state.supplier.id}
        name={this.state.supplier.name}
        city={this.state.supplier.city}
        reference={this.state.supplier.reference}
        AddNew={this.AddNew}
      />
    );
  }
}

SupplierEditorContainer.propTypes = {};

SupplierEditorContainer.defaultProps = {};

export default SupplierEditorContainer;