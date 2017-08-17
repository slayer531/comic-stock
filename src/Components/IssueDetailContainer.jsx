import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import IssueDetail from "../IssueDetail";
import IssueOrderContainer from "./IssueOrderContainer";
import Modal from "react-bootstrap/es/Modal";

class IssueDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.initialiseState(props);
    this.handleCancelNewOrder = this.handleCancelNewOrder.bind(this);
  }

  initialiseState(props) {    
    this.state = { issue: props.Issue,
    showModal:false };
  }

  OrderIssues(){    
    this.setState({
      showModal:true/* ,
      issue: this.state.issue */
    })

    /* console.log(this.props.Issue); */
  }

  handleCancelNewOrder(){
     this.setState({
      showModal:false      
    })
  }

  render() {
    var issue = {...this.state.issue};

    return (
      <div>
        <div>
          <IssueDetail Issue={this.props.Issue} />
        </div>
        <div>
          <button onClick={()=>this.OrderIssues()}>
            {"Order"}
          </button>
        </div>
        <Modal show={this.state.showModal}>
          <IssueOrderContainer CancelNewOrder={this.handleCancelNewOrder} Issue={this.props.Issue} />
        </Modal>  
      </div>
    );
  }
}

export default IssueDetailContainer;
