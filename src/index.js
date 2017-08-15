import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SupplierEditorContainer from "./Components/SupplierEditorContainer.jsx"

class ComicStrip extends React.Component {
  constructor() {
    super();
    this.initialiseState();
  }

  initialiseState() {
    this.state = {

    };
  }

  render() {
    return (
      <div className="container">
        <div className="banner">
          <h1>Need to put a menu in here</h1>
        </div>
        <SupplierEditorContainer />
      </div>
    );
  }
}

ReactDOM.render(<ComicStrip />, document.getElementById("root"));
