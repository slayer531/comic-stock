import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SupplierList from "./Components/SupplierListContainer";
import SupplierDetailComponent from "./Components/SupplierDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "./api";
import AddSupplierImage from "./images/add.png";

class ComicStrip extends React.Component {
  constructor() {
    super();
    this.initialiseState();
    this.setEditMode = this.setEditMode.bind(this);
  }

  initialiseState() {
    this.state = {
      supplier: { id: 0, name: "", city: "", reference: "" },
      Edit: false,
      Saved: false,
      AddNew: false
    };
  }

  EditSupplier(supplier) {
    this.setState({
      supplier: supplier,
      Edit: true,
      Saved: false,
      AddNew: false
    });
  }

  setEditMode(event) {
    console.log(event);
    /*  // make a copy of supplier
        console.log('changing name');
        var supplier = { ...this.state.supplier }
        // give it the new name
        supplier.name = event.target.value
        // push the new supplier into the state
        this.setState({
            supplier// we're using es6 so I don't need to do supplier: supplier
        }) */
  }

  AddNew() {
    console.log("Add new item");
  }

  render() {
    return (
      <div>
        <div className="banner">
          <h1>Need to put a menu in here</h1>
        </div>
        <div>
          <img
            src={AddSupplierImage}
            alt="Add new supplier"
            onClick={i => this.AddNew(i)}
          />
        </div>
        <SupplierDetailComponent
          id={this.state.supplier.id}
          name={this.state.supplier.name}
          city={this.state.supplier.city}
          reference={this.state.supplier.reference}
          SaveSupplier={i => this.SaveSupplier(i)}
          setEditMode={this.setEditMode}
        />
        <SupplierList EditSupplier={i => this.EditSupplier(i)} />
      </div>
    );
  }
}

ReactDOM.render(<ComicStrip />, document.getElementById("root"));
/* ReactDOM.render(<SupplierList id="1" name="test" city="NYC" reference="bongo" />, document.getElementById('root')); */
