import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SupplierEditorContainer from "./Components/SupplierEditorContainer.jsx";
import IssueEditorContainer from "./Components/IssueEditorContainer.jsx";
import NavigationBar from "./NavigationBar.jsx";
import { BrowserRouter, Route } from "react-router-dom";

class ComicStrip extends React.Component {
  constructor() {
    super();
    this.initialiseState();
  }

  initialiseState() {
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <NavigationBar />
        <Route path="/Suppliers" component={SupplierEditorContainer} />
        <Route path="/Issues" component={IssueEditorContainer} />
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <ComicStrip />
  </BrowserRouter>,
  document.getElementById("root")
);
