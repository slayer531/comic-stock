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
      <div>
        <div>
          <IssueOrder suppliers={this.state.supplierData} />
        </div>
        <div>
          <button>
            {"Order"}
          </button>
        </div>
      </div>
    );
  }
}

export default IssueOrderContainer;
