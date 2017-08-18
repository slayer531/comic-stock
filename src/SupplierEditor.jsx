import React from "react";
import AddSupplierImage from "./images/add.png";
import SupplierDetailContainer from "./Components/SupplierDetailContainer";
import SupplierListContainer from "./Components/SupplierListContainer";

const PageState = {
  List: 1,
  Edit: 2,
  New: 3,
  Saved: 4
};

function AddNewVisibility(props) {
  if (props.PageState === PageState.List) {
    return (
      <div className="col-md-1 col-md-offset-11">
        <img
          src={AddSupplierImage}
          alt="Add new supplier"
          onClick={i => props.AddNew(i)}
        />
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
        />
      );
    case PageState.Saved:
      return (
        <SupplierListContainer EditSupplier={i => props.EditSupplier(i)} />
      );
    default:
      alert("Invalid Page State encountered");
  }
};

function SupplierEditor(props) {
  return (
    <div className="container">
      {AddNewVisibility(props)}
      {ControlsToShow(props)}
    </div>
  );
}

export default SupplierEditor;
