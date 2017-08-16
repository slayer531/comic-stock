import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import IssueDetail from "../IssueDetail";

class IssueDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.initialiseState(props);
  }

  initialiseState(props) {    
    this.state = { issue: props.Issue };
  }

  OrderIssues(){
    console.log('open order issue UI');
  }

  render() {
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
      </div>
    );
  }
}

export default IssueDetailContainer;
