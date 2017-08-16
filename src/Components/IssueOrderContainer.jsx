import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import IssueOrder from "../IssueOrder";
import api from "./../api.js";

class IssueOrderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.initialiseState(props);
  }

  initialiseState(props) {
    this.state = {
      issue: props.Issue,
      supplierData: []
    };
  }

  componentDidMount() {
    this.GetSuppliers();
  }

  CreateNewIssueOrder() {
    console.log("submitting new issue order to api");
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
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <IssueOrder suppliers={this.state.supplierData} />
          </div>          
        </div>
        <div className="row">
          <button onClick={() => this.CreateNewIssueOrder()}>
            {"Submit Order"}
          </button>
           <button onClick={this.props.CancelNewOrder}>
            {"Cancel"}
          </button>
        </div>
      </div>
    );
  }
}

export default IssueOrderContainer;
