import React from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.min.css";
import IssueList from "./../IssueList";

class IssueListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.initialiseState();
    this.GetIssues();
  }

  initialiseState() {
    this.state = {
      issueData: []
    };
  }

  GetIssues() {
    api
      .get("/Issues")
      .then(response => {
        this.setState({
          issueData: response.data
        });
      })
      .catch(e => {
        console.error(e);
      });
  }

  /* componentDidMount() {
    this.GetIssues();
  } */

  render() {
    return <IssueList Issues={this.state.issueData} View={this.props.View} />;
  }
}

export default IssueListContainer;
