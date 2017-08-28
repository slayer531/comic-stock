import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SupplierEditor from './SupplierEditor';
import api from '../../api';
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
    this.GetSuppliers = this.GetSuppliers.bind(this);
  }

  componentDidMount() {
    this.GetSuppliers();
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
      supplierData: [],
    };
  }

  AddNew() {
    this.setPageMode(PageState.New);
    /* this.state = {
      supplier: { id: 0, name: '', city: '', reference: '' },
    }; */
    history.push(APP_SUPPLIERS_ADD_URL);
  }

  GetSuppliers() {
    api
      .get('/Suppliers')
      .then(response => {
        this.setState({
          supplierData: response.data,
        });
        return response.data;
      })
      .catch(e => {
        console.error(e);
      });
  }

  render() {
    return (
      <SupplierEditor
        PageState={this.state.PageState}
        setPageMode={this.setPageMode}
        EditSupplier={this.EditSupplier}
        id={this.state.supplier.id}
        name={this.state.supplier.name}
        city={this.state.supplier.city}
        reference={this.state.supplier.reference}
        AddNew={this.AddNew}
        supplierData={this.state.supplierData}
        RefreshList={this.GetSuppliers}
      />
    );
  }
}

SupplierEditorContainer.propTypes = {};

SupplierEditorContainer.defaultProps = {};

export default SupplierEditorContainer;
