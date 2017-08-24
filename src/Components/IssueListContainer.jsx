import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import IssueList from './../IssueList';
import api from '../api';

class IssueListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.initialiseState();
    this.GetIssues();
  }

  initialiseState() {
    this.state = {
      issueData: [],
    };
  }

  GetIssues() {
    api
      .get('/Issues')
      .then(response => {
        this.setState({
          issueData: response.data,
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

IssueListContainer.propTypes = {
  View: PropTypes.func,
};

IssueListContainer.defaultProps = {
  View: {},
};
export default IssueListContainer;
