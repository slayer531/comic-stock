import React from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";
import SupplierList from "../SupplierList";
import confirm from "../confirm.js";

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

  handleOnClickDelete(supplier) {
    confirm("Are you sure?").then(
      () => {
        this.DeleteSupplier(supplier);
        console.log("proceed!");
      },
      () => {
        console.log("cancel!");
      }
    );
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
        Delete={i => this.handleOnClickDelete(i)}
        Edit={i => this.props.EditSupplier(i)}
      />
    );
  }
}

export default SupplierListContainer;
