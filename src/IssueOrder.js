import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';

const IssueCondition = {
  VeryFine: 1,
  Fine: 2,
  Good: 3,
  Poor: 4,
};

export function IssueConditionDisplayValue(issueCondition) {
  switch (issueCondition) {
    case IssueCondition.VeryFine:
      return 'Very Fine';

    case IssueCondition.Fine:
      return 'Fine';

    case IssueCondition.Good:
      return 'Good';

    case IssueCondition.Poor:
      return 'Poor';

    default:
      return console.error(
        `Unknown issue condition encountered: ${issueCondition}`,
      );
  }
}
export function IssuesOrderDetails() {}

function IssueOrder(props) {
  const SupplierListItems = props.suppliers.map(supplier =>
    <option value={supplier.id}>
      {supplier.name}
    </option>,
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-1">
          <label>Supplier</label>
        </div>
        <div className="col-md-2">
          <select
            onChange={props.onSupplierChange}
            name="Suppliers"
            id="Suppliers"
          >
            {SupplierListItems}
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1">
          <label>
            {'Condition'}
          </label>
        </div>
        <div className="col-md-2">
          <select
            onChange={props.onConditionChange}
            value={props.order.items[0].condition}
            name="Conditions"
            id="Conditions"
          >
            <option value="1">
              {IssueConditionDisplayValue(1)}
            </option>
            <option value="2">
              {IssueConditionDisplayValue(2)}
            </option>
            <option value="3">
              {IssueConditionDisplayValue(3)}
            </option>
            <option value="4">
              {IssueConditionDisplayValue(4)}
            </option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1">
          <label>Amount</label>
        </div>
        <div className="col-md-2">
          <input
            type="number"
            value={props.order.quantity}
            onChange={props.onAmountChange}
          />
        </div>
      </div>
    </div>
  );
}

IssueOrder.propTypes = {
  suppliers: PropTypes.arrayOf(PropTypes.object),
  onSupplierChange: PropTypes.func,
  order: PropTypes.objectOf(PropTypes.any),
  onAmountChange: PropTypes.func,
  onConditionChange: PropTypes.func,
};

IssueOrder.defaultProps = {
  suppliers: [],
  onSupplierChange: {},
  order: {},
  onAmountChange: {},
  onConditionChange: {},
};

export default IssueOrder;
