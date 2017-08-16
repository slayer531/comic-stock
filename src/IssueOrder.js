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
      break;

    case IssueCondition.Fine:
      return "Fine";
      break;

    case IssueCondition.Good:
      return "Good";
      break;

    case IssueCondition.Poor:
      return "Poor";
      break;
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

  let issueOrderDetails = {
    IssueId: 0,
    SupplierId: 0,
    IssueOrder: [
      { Condition: IssueCondition.VeryFine, Amount: 0 },
      { Condition: IssueCondition.Fine, Amount: 0 },
      { Condition: IssueCondition.Good, Amount: 0 },
      { Condition: IssueCondition.Poor, Amount: 0 }
    ]
  };

  const IssueConditions = issueOrderDetails.IssueOrder.map(issueOrderDetail => {
    console.log(issueOrderDetail);
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
          <input type="number" value={issueOrderDetail.Amount} />
        </div>
      </div>
    );
  });

  return (
    <div className="container border">
      <div className="row">
        <div className="col-md-2">
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
      {/* <div className="row">
        <div className="col-md-4">
          <label>
            {props.Issue.description}
          </label>
        </div>
        <div className="col-md-4">
          <label>
            {props.Issue.description}
          </label>
        </div>
        <div className="col-md-4">
          <label>
            {props.Issue.description}
          </label>
        </div> 
      </div>*/}
    </div>
  );
}

export default IssueOrder;
