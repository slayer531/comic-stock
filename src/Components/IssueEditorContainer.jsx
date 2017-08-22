import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import IssueEditor from "./../IssueEditor";
import api from "./../api.js";
import {APP_ISSUES_VIEW_URL} from "./../Constants.jsx";

class IssueEditorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.initialiseState();
    this.View = this.View.bind(this);
    this.history = props.history;
  }

  componentDidMount () {
    const issueId = this.props.match.params.issueId
    this.GetIssue(issueId)
  }

  initialiseState() {
    this.state = {
      issue: {}
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

  View(issueId) {
    this.history.push(APP_ISSUES_VIEW_URL + "id/" + issueId);
    this.GetIssue(issueId);
  }

  render() {
    return <IssueEditor View={this.View} Issue={this.state.issue} history={this.history} />;
  }
}

export default IssueEditorContainer;
