import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SupplierEditor from "./../SupplierEditor"

const PageState = {
  List: 1,
  Edit: 2,
  New: 3,
  Saved: 4
};

class SupplierEditorContainer extends React.Component {
  constructor() {
    super();
    this.initialiseState();    
    this.EditSupplier = this.EditSupplier.bind(this);
    this.setPageMode = this.setPageMode.bind(this);
    this.AddNew = this.AddNew.bind(this);
  }

  initialiseState() {
    this.state = {
      supplier: { id: 0, name: "", city: "", reference: "" },
      PageState: PageState.List
    };
  }

  EditSupplier(supplier) {
    this.setState({
      supplier: supplier,
      PageState: PageState.Edit
    });
  }

  setPageMode(pageState) {
    this.setState({
      PageState: pageState
    });
  }

  AddNew() {
    this.setPageMode(PageState.New);
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

export default SupplierEditorContainer