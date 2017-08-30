import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import IssueDetail from './IssueDetail';
import IssueOrderContainer from './IssueOrderContainer';
import { APP_ISSUES_VIEW_URL, APP_ORDER } from './../../Constants';
import history from './../../history';

class IssueDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.initialiseState(props);
    this.handleCancelNewOrder = this.handleCancelNewOrder.bind(this);
  }

  initialiseState(props) {
    this.state = {
      issue: props.Issue,
      showModal: false,
    };
  }

  OrderIssues(issue) {
    this.setState({
      showModal: true,
    });
    history.push(`${APP_ISSUES_VIEW_URL}id/${issue.id}/${APP_ORDER}`);
  }

  handleCancelNewOrder() {
    this.setState({
      showModal: false,
    });
    history.push(`${APP_ISSUES_VIEW_URL}id/${this.props.Issue.id}`);
  }

  DisplayIssueDetail(props) {
    if (props.Issue.id) {
      return (
        <div className="col-md-12">
          <Button onClick={() => this.OrderIssues(props.Issue)}>
            {'Order'}
          </Button>
          <div>
            <IssueDetail Issue={props.Issue} />
          </div>
        </div>
      );
    }
    return <br />;
  }

  render() {
    return (
      <div>
        {this.DisplayIssueDetail(this.props)}
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

IssueDetailContainer.propTypes = {
  Issue: PropTypes.objectOf(PropTypes.any),
};

IssueDetailContainer.defaultProps = {
  Issue: {},
};

export default IssueDetailContainer;
