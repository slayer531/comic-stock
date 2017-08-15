import React from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";
import SupplierList from "../SupplierList";
import confirm from "../confirm.js";

class SupplierListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.initialiseState();
    this.FilterSuppliers = this.FilterSuppliers.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  initialiseState() {
    this.state = {
      supplierData: [],
      supplierDataFiltered: [],
      currentPage:1,
      SuppliersToShow:10,
      SearchString:''
    };
  }

  GetSuppliers() {
    api
      .get("/Suppliers")
      .then(response => {
        this.setState({
          supplierData: response.data,
          supplierDataFiltered: response.data
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
      },
      () => {}
    );
  }

  handlePageClick(event){
        this.setState({
          currentPage:event
      })  
  }

  FilterSuppliers(event) {
    var searchString = event.target.value;
    var supplierDataFiltered = [];

    //SearchString
    this.setState({
        SearchString: searchString
      });

    if (searchString != null) {
      supplierDataFiltered = this.state.supplierData.filter(function(item) {
        searchString = searchString.toLowerCase();
        return (
          item.name.toLowerCase().indexOf(searchString) !== -1 ||
          item.city.toLowerCase().indexOf(searchString) !== -1 ||
          item.reference.toLowerCase().indexOf(searchString) !== -1
        );
      });

      this.setState({
        supplierDataFiltered: supplierDataFiltered
      });
    }
  }

  DeleteSupplier(supplier) {
    api({
      method: "delete",
      url: "/Suppliers/" + supplier.id
    })
      .then(response => {
        api
          .get("/Suppliers")
          .then(response => {
            this.setState({
              supplierData: response.data,
              supplierDataFiltered: response.data            
            });
          })
          .catch(e => {
            console.error(e);
          });
      })
      .catch(function(error) {
        console.log(error);
        console.error("failed to delete " + supplier.id);
      });
  }

  render() {
    return (
      <SupplierList
        suppliers={this.state.supplierDataFiltered}
        Delete={i => this.handleOnClickDelete(i)}
        Edit={i => this.props.EditSupplier(i)}
        FilterSuppliers={this.FilterSuppliers}
        CurrentPage={this.state.currentPage}
        SuppliersToShow={this.state.SuppliersToShow}
        handlePageClick={i => this.handlePageClick(i)}
      />
    );
  }
}

export default SupplierListContainer;
