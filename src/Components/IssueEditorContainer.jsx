import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import IssueEditor from "./../IssueEditor";
import api from "./../api.js";

class IssueEditorContainer extends React.Component {
  constructor() {
    super();
    this.initialiseState();
    this.View = this.View.bind(this);
  }

  initialiseState() {
    this.state = {
      issue: { }
    };
  }

   GetIssue(issueId) {
    api
      .get("/Issues/" + issueId)
      .then(response => {
        this.setState({
          issue: response.data
        });
      })
      .catch(e => {
        console.error(e);
      });
  }
  View(e) {
    console.log('viewing Issue: ' + e);
     this.GetIssue(e);
  }

  render() {
    return (
    <IssueEditor View={this.View} Issue={this.state.issue} />    
    );
  }
}

export default IssueEditorContainer;
