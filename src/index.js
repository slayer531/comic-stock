import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SupplierEditorContainer from "./Components/SupplierEditorContainer.jsx";
import IssueEditorContainer from "./Components/IssueEditorContainer.jsx";
import NavigationBar from "./NavigationBar.jsx";
import { BrowserRouter, Route } from "react-router-dom";
 import Constants from "./Constants.jsx"; 
import {
    APP_HOME, APP_ISSUES_URL, APP_ORDERS_URL, APP_SUPPLIERS_ADD_URL,
    APP_SUPPLIERS_EDIT_URL, APP_SUPPLIERS_URL
} from "./Constants";

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
        {/* <Route path={"/suppliers/"} component={SupplierEditorContainer} />
        <Route path={"/issues/"} component={IssueEditorContainer} /> */}
         <Route path={APP_SUPPLIERS_URL} component={SupplierEditorContainer} />
        <Route path={APP_ISSUES_URL} component={IssueEditorContainer} /> 
      </div>
    );
  }
}

  ReactDOM.render(
  <BrowserRouter>
     <Route path={APP_HOME} component={ComicStrip}/>
  </BrowserRouter>,
  document.getElementById("root")
);  