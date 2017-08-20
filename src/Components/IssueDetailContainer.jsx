import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import IssueDetail from "../IssueDetail";
import IssueOrderContainer from "./IssueOrderContainer";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

class IssueDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.initialiseState(props);
    this.handleCancelNewOrder = this.handleCancelNewOrder.bind(this);
  }

  initialiseState(props) {
    this.state = {
      issue: props.Issue,
      showModal: false
    };
  }

  OrderIssues() {
    this.setState({
      showModal: true
    });
  }

  handleCancelNewOrder() {
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.OrderIssues()}>
          {"Order"}
        </Button>
        <div>
          <IssueDetail Issue={this.props.Issue} />
        </div>
        <div />
        <Modal show={this.state.showModal}>
          <IssueOrderContainer
            CancelNewOrder={this.handleCancelNewOrder}
            Issue={this.props.Issue}
          />
        </Modal>
      </div>
    );
  }
}

export default IssueDetailContainer;
