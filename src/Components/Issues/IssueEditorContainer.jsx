import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import IssueEditor from './IssueEditor';
import api from './../../api';
import { APP_ISSUES_VIEW_URL } from './../../Constants';
import history from './../../history';

class IssueEditorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.initialiseState();
    this.View = this.View.bind(this);
  }

  componentDidMount() {
    const issueId = this.props.match.params.issueId;
    this.GetIssue(issueId);
  }

  initialiseState() {
    this.state = {
      issue: {},
    };
  }

  GetIssue(issueId) {
    api
      .get(`/Issues/${issueId}`)
      .then(response => {
        this.setState({
          issue: response.data,
        });
      })
      .catch(e => {
        console.error(e);
      });
  }

  View(issueId) {
    history.push(`${APP_ISSUES_VIEW_URL}id/${issueId}`);
    this.GetIssue(issueId);
  }

  render() {
    return <IssueEditor View={this.View} Issue={this.state.issue} />;
  }
}

IssueEditorContainer.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
};
IssueEditorContainer.defaultProps = { match: {} };

export default IssueEditorContainer;
