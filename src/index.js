import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SupplierList from "./Components/SupplierListContainer";
import SupplierDetailComponent from "./Components/SupplierDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import AddSupplierImage from "./images/add.png";

const PageState = {
  List: 1,
  Edit: 2,
  New: 3,
  Saved: 4
};

class ComicStrip extends React.Component {
  constructor() {
    super();
    this.initialiseState();
    this.setPageMode = this.setPageMode.bind(this);
  }

  initialiseState() {
    this.state = {
      supplier: { id: 0, name: "", city: "", reference: "" },
      PageState: PageState.List
    };
  }

  EditSupplier(supplier) {
    this.setState({
      supplier: supplier,
      PageState: PageState.Edit
    });
  }

  setPageMode(pageState) {
    this.setState({
      PageState: pageState
    });
  }

  AddNew() {
    this.setPageMode(PageState.New);
  }

  AddNewVisibility() {
    if (this.state.PageState === PageState.List) {
      return (
        <div>
          <img
            src={AddSupplierImage}
            alt="Add new supplier"
            onClick={i => this.AddNew(i)}
          />
        </div>
      );
    }
  }
  ControlsToShow() {
    switch (this.state.PageState) {
      case PageState.List:
        return <SupplierList EditSupplier={i => this.EditSupplier(i)} />;
      case PageState.New:
        return (
          <SupplierDetailComponent
            id={0}
            name={""}
            city={""}
            reference={""}
            SaveSupplier={i => this.SaveSupplier(i)}
            setPageMode={this.setPageMode}
          />
        );
      case PageState.Edit:
        return (
          <SupplierDetailComponent
            id={this.state.supplier.id}
            name={this.state.supplier.name}
            city={this.state.supplier.city}
            reference={this.state.supplier.reference}
            SaveSupplier={i => this.SaveSupplier(i)}
            setPageMode={this.setPageMode}
          />
        );
      case PageState.Saved:
        return <SupplierList EditSupplier={i => this.EditSupplier(i)} />;
      default:
        alert("Invalid Page State encountered");
    }
  }

  render() {
    return (
      <div className="container">
        <div className="banner">
          <h1>Need to put a menu in here</h1>
        </div>
        {this.AddNewVisibility()}
        {this.ControlsToShow()}
      </div>
    );
  }
}

ReactDOM.render(<ComicStrip />, document.getElementById("root"));
/* ReactDOM.render(<SupplierList id="1" name="test" city="NYC" reference="bongo" />, document.getElementById('root')); */
