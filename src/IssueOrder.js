import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const IssueCondition = {
  VeryFine: 1,
  Fine: 2,
  Good: 3,
  Poor: 4
};

export function IssueConditionDisplayValue(issueCondition) {
  switch (issueCondition) {
    case IssueCondition.VeryFine:
      return "Very Fine";

    case IssueCondition.Fine:
      return "Fine";

    case IssueCondition.Good:
      return "Good";

    case IssueCondition.Poor:
      return "Poor";

    default:
      return console.error(
        "Unknown issue condition encountered: " + issueCondition
      );
  }
}
export function IssuesOrderDetails() {}

function IssueOrder(props) {
  const SupplierListItems = props.suppliers.map(supplier => {
    return (
      <option value={supplier.id}>
        {supplier.name}
      </option>
    );
  });

  const IssueConditions = props.issueOrderDetails.IssueOrder.map(
    issueOrderDetail => {
      return (
        <div key={issueOrderDetail.Condition} className="row">
          <div className="col-md-2">
            <label>
              {"Condition"}
            </label>
          </div>
          <div className="col-md-2">
            <label>
              {IssueConditionDisplayValue(issueOrderDetail.Condition)}
            </label>
          </div>
          <div className="col-md-2">
            <input
              type="number"
              value={issueOrderDetail.Amount}
              onChange={props.onAmountChange}
            />
          </div>
        </div>
      );
    }
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-1">
          <label>Supplier</label>
        </div>
        <div className="col-md-2">
          <select name="Suppliers" id="Suppliers">
            {SupplierListItems}
          </select>
        </div>
      </div>
      <div className="row">
        {IssueConditions}
        <div className="col-md-12" />
      </div>
    </div>
  );
}

export default IssueOrder;
