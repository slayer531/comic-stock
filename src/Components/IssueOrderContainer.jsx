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
  }

  initialiseState(props) {
    this.state = {
      issue: props.Issue,
      supplierData: [],
      order: {
        id: 0,
        SupplierId: 0,
        items: [
          { id: 0, condition: IssueCondition.VeryFine, quantity: 0 },
          { id: 0, condition: IssueCondition.Fine, quantity: 0 },
          { id: 0, condition: IssueCondition.Good, quantity: 0 },
          { id: 0, condition: IssueCondition.Poor, quantity: 0 }
        ]
      }
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

  onAmountChangeHandle(event) {
    console.log("onAmountChangeHandle:" + event.target.value);
    this.setState({
      value: event.target.value
    });
  }

  render() {
    let order = { ...this.state.order };
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <IssueOrder
              suppliers={this.state.supplierData}
              order={order}
              onAmountChange={e => this.onAmountChangeHandle(e)}
            />
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
