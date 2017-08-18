import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SupplierEditorContainer from "./Components/SupplierEditorContainer.jsx";
import IssueEditorContainer from "./Components/IssueEditorContainer.jsx";
import NavigationBar from "./NavigationBar.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import Constants from "./Constants.jsx";

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
        <Route path= {Constants.APP_SUPPLIERS_URL} component={SupplierEditorContainer} />
        <Route path={Constants.APP_ISSUES_URL} component={IssueEditorContainer} />
      </div>
    );
  }
}

  ReactDOM.render(
  <BrowserRouter basename="/comic-strip">
     <Route path={Constants.APP_HOME} component={ComicStrip}/>
  </BrowserRouter>,
  document.getElementById("root")
);  