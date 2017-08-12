import React from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";
import SupplierList from "../SupplierList";

class SupplierListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.initialiseState();
  }

  initialiseState() {
    this.state = { supplierData: [] };
  }

  GetSuppliers() {
    api
      .get("/Suppliers")
      .then(response => {
        this.setState({
          supplierData: response.data
        });
      })
      .catch(e => {
        console.error(e);
      });
  }

  componentDidMount() {
    this.GetSuppliers();
  }

  DeleteSupplier(supplier) {    
    //alert("Supplier id about to delete: " + supplier.id);
    api({
      method: "delete",
      url: "/Suppliers/" + supplier.id
    })
      .then(response => {
        console.log(response);
        api
          .get("/Suppliers")
          .then(response => {
            this.setState({
              supplierData: response.data
            });
          })
          .catch(e => {
            console.error(e);
          });
      })
      .catch(function(error) {
        console.log(error);
        console.log("failed to delete " + supplier.id);
      });
  }

  render() {
    return (
      <SupplierList
        suppliers={this.state.supplierData}
        Delete={i => this.DeleteSupplier(i)}
        Edit={i => this.props.EditSupplier(i)}
      />
    );
  }
}

export default SupplierListContainer;
