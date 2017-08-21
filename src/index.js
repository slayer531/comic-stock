import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SupplierEditorContainer from "./Components/SupplierEditorContainer.jsx";
import IssueEditorContainer from "./Components/IssueEditorContainer.jsx";
import NavigationBar from "./NavigationBar.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import IssueOrderContainer from "./Components/IssueOrderContainer.jsx";

import {
  APP_HOME,
  APP_ISSUES_URL,
  APP_SUPPLIERS_ADD_URL,
  APP_SUPPLIERS_URL
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
        <Route path={APP_SUPPLIERS_URL} component={SupplierEditorContainer} history={this.history} />
        <Route path={APP_ISSUES_URL} component={IssueEditorContainer} history={this.history} />
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

/* ReactDOM.render(<ParamsExample />, document.getElementById("root")); */
