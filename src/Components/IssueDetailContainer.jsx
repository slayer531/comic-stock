import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import IssueDetail from '../IssueDetail';
import IssueOrderContainer from './IssueOrderContainer';
import { APP_ISSUES_VIEW_URL, APP_ORDER } from './../Constants';

class IssueDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.initialiseState(props);
    this.handleCancelNewOrder = this.handleCancelNewOrder.bind(this);
    this.history = props.history;
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
    this.history.push(`${APP_ISSUES_VIEW_URL}id/${issue.id}/${APP_ORDER}`);
  }

  handleCancelNewOrder() {
    this.setState({
      showModal: false,
    });
  }

  DisplayIssueDetail(props) {
    if (props.Issue.id) {
      return (
        <div>
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

export default IssueDetailContainer;
