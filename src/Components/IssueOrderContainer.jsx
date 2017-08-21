import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import IssueOrder from "../IssueOrder";
import api from "./../api.js";

const IssueCondition = {
  VeryFine: 1,
  Fine: 2,
  Good: 3,
  Poor: 4
};

class IssueOrderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.initialiseState(props);
    this.onAmountChangeHandle = this.onAmountChangeHandle.bind(this);
    this.onConditionChangeHandle = this.onConditionChangeHandle.bind(this);
    this.onSupplierChangeHandle = this.onSupplierChangeHandle.bind(this);
  }

  initialiseState(props) {
    this.state = {
      issue: props.Issue,
      supplierData: [],
      order: {
        id: 0,
        SupplierId: 0,
        items: [{ id: 0, condition: IssueCondition.VeryFine, quantity: 0 }]
      }
    };
  }

  componentDidMount() {
    this.GetSuppliers();
  }

  //PUT /api/Orders/{supplierId}/issues/{issueId}/Put
  SubmitNewIssueOrder() {
    console.log(
      "trying to add order with supplierId: " +
        this.state.order.SupplierId +
        " and issueId: " +
        this.state.issue.id
    );
    console.log(this.state.issue);
    api
      .put(
        "/Orders/" +
          this.state.order.SupplierId +
          "/issues/" +
          this.state.issue.id +
          "/put",
        {
          orderDate: new Date(),
          issue: this.state.issue,
          items: this.state.order.items,
          shipmentReference: "I added an order :-)"
        }
      )
      .then(response => {
        console.log("successfully pushed to API");
      })
      .catch(function(error) {
        alert("An error occurred while submitting the order " + error);
        console.error(error);
      });
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

  onSupplierChangeHandle(event) {
    var order = this.state.order;

    order.SupplierId = event.target.value;
    this.setState({
      order: order
    });
  }

  onAmountChangeHandle(event) {
    var order = this.state.order;

    order.items[0].quantity = event.target.value;
    this.setState({
      order: order
    });
  }

  onConditionChangeHandle(event) {
    var order = this.state.order;

    order.items[0].condition = event.target.value;
    this.setState({
      order: order
    });
  }

  render() {
    return (
      <div className="container">
        <br/>
        <div className="row">
          <div className="col-md-4">
            <IssueOrder
              suppliers={this.state.supplierData}
              order={this.state.order}
              onAmountChange={e => this.onAmountChangeHandle(e)}
              onConditionChange={e => this.onConditionChangeHandle(e)}
              onSupplierChange={e => this.onSupplierChangeHandle(e)}
            />
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-md-3 col-md-offset-1">            
             <button onClick={this.props.CancelNewOrder}>
              {"Cancel"}
            </button>
          </div>
          <div className=".col-md-3 .col-md-offset-1">
           <button onClick={() => this.SubmitNewIssueOrder()}>
              {"Submit Order"}
            </button>
          </div>
        </div>
        <br/>
      </div>
    );
  }
}

export default IssueOrderContainer;
