import React from "react";
import SupplierDetailContainer from "./Components/SupplierDetailContainer";
import SupplierListContainer from "./Components/SupplierListContainer";
import Button from "react-bootstrap/lib/Button";

const PageState = {
  List: 1,
  Edit: 2,
  New: 3,
  Saved: 4
};

function AddNewVisibility(props) {
  if (props.PageState === PageState.List) {
    return (
      <div className="row">
        <div className="col-md-2">
          <Button
            bsStyle="primary"
            onClick={i => props.AddNew(i)}
          >
            {"ADD SUPPLIER"}
          </Button>
        </div>
      </div>
    );
  }
}

function ControlsToShow(props) {
  switch (props.PageState) {
    case PageState.List:
      return (
        <SupplierListContainer EditSupplier={i => props.EditSupplier(i)} />
      );
    case PageState.New:
      return (
        <SupplierDetailContainer
          id={0}
          name={""}
          city={""}
          reference={""}
          SaveSupplier={i => props.SaveSupplier(i)}
          setPageMode={props.setPageMode}
          history={props.history}
        />
      );
    case PageState.Edit:
      return (
        <SupplierDetailContainer
          id={props.id}
          name={props.name}
          city={props.city}
          reference={props.reference}
          SaveSupplier={i => props.SaveSupplier(i)}
          setPageMode={props.setPageMode}
          history={props.history}
        />
      );
    case PageState.Saved:
      return (
        <SupplierListContainer EditSupplier={i => props.EditSupplier(i)} />
      );
    default:
      alert("Invalid Page State encountered");
  }
}

function SupplierEditor(props) {
  return (
    <div>
      {AddNewVisibility(props)}<br/>
      {ControlsToShow(props)}
    </div>
  );
}

export default SupplierEditor;
