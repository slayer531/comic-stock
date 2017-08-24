import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import IssueOrder from '../IssueOrder';
import api from './../api';

const IssueCondition = {
  VeryFine: 1,
  Fine: 2,
  Good: 3,
  Poor: 4,
};

class IssueOrderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.initialiseState(props);
    this.onAmountChangeHandle = this.onAmountChangeHandle.bind(this);
    this.onConditionChangeHandle = this.onConditionChangeHandle.bind(this);
    this.onSupplierChangeHandle = this.onSupplierChangeHandle.bind(this);
  }

  componentDidMount() {
    this.GetSuppliers();
  }

  onSupplierChangeHandle(event) {
    const order = this.state.order;

    order.SupplierId = event.target.value;
    this.setState({
      order,
    });
  }

  onAmountChangeHandle(event) {
    const order = this.state.order;

    order.items[0].quantity = event.target.value;
    this.setState({
      order,
    });
  }

  onConditionChangeHandle(event) {
    const order = this.state.order;

    order.items[0].condition = event.target.value;
    this.setState({
      order,
    });
  }

  GetSuppliers() {
    api
      .get('/Suppliers')
      .then(response => {
        this.setState({
          supplierData: response.data,
        });
      })
      .catch(e => {
        console.error(e);
      });
  }

  SubmitNewIssueOrder() {
    api
      .put(
        `/Orders/${this.state.order.SupplierId}/issues/${this.state.issue
          .id}/put`,
        {
          orderDate: new Date(),
          issue: this.state.issue,
          items: this.state.order.items,
          shipmentReference: 'I added an order :-)',
        },
      )
      .then(() => {
        console.info('successfully pushed to API');
      })
      .catch(error => {
        alert(`An error occurred while submitting the order ${error}`);
        console.error(error);
      });
  }

  initialiseState(props) {
    this.state = {
      issue: props.Issue,
      supplierData: [],
      order: {
        id: 0,
        SupplierId: 0,
        items: [{ id: 0, condition: IssueCondition.VeryFine, quantity: 0 }],
      },
    };
  }

  render() {
    return (
      <div className="container">
        <br />
        <div className="row">
          <div className="col-md-4">
            <IssueOrder
              suppliers={this.state.supplierData}
              order={this.state.order}
              onAmountChange={e => this.onAmountChangeHandle(e)}
              onConditionChange={e => this.onConditionChangeHandle(e)}
              onSupplierChange={e => this.onSupplierChangeHandle(e)}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3 col-md-offset-1">
            <button onClick={this.props.CancelNewOrder}>
              {'Cancel'}
            </button>
          </div>
          <div className=".col-md-3 .col-md-offset-1">
            <button onClick={() => this.SubmitNewIssueOrder()}>
              {'Submit Order'}
            </button>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

IssueOrderContainer.propTypes = {
  CancelNewOrder: PropTypes.func,
};

IssueOrderContainer.defaultProps = {
  CancelNewOrder: {},
};

export default IssueOrderContainer;
