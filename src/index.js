import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SupplierEditorContainer from "./Components/SupplierEditorContainer.jsx";
import IssueEditorContainer from "./Components/IssueEditorContainer.jsx";
import NavigationBar from "./NavigationBar.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./HomePage.jsx";

import {
  APP_HOME_PAGE,
  APP_ISSUES_URL,
  APP_SUPPLIERS_URL
} from "./Constants";

class ComicStrip extends React.Component {

  render() {
    return (
      <div className="container">
        <NavigationBar /> 
        <Route exact path={APP_HOME_PAGE} component={HomePage} history={this.history} />     
        <Route path={APP_SUPPLIERS_URL} component={SupplierEditorContainer} history={this.history} />
        <Route path={APP_ISSUES_URL} component={IssueEditorContainer} history={this.history} />        
      </div>
    );
  }
}

   ReactDOM.render(
  <BrowserRouter>
     <Route path={"/"} component={ComicStrip}/>
  </BrowserRouter>,
  document.getElementById("root")
);