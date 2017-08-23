import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import SupplierEditorContainer from './Components/SupplierEditorContainer';
import IssueEditorContainer from './Components/IssueEditorContainer';
import NavigationBar from './NavigationBar';
import HomePage from './HomePage';

import {
  APP_HOME_PAGE,
  APP_ISSUES_URL,
  APP_SUPPLIERS_URL,
  APP_ISSUES_VIEW_ID_URL,
} from './Constants';

class ComicStrip extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <Route
          exact
          path={APP_HOME_PAGE}
          component={HomePage}
          history={this.history}
        />
        <Route
          path={APP_SUPPLIERS_URL}
          component={SupplierEditorContainer}
          history={this.history}
        />
        <Route
          path={APP_ISSUES_VIEW_ID_URL}
          component={IssueEditorContainer}
          history={this.history}
        />
        <Route
          exact
          path={APP_ISSUES_URL}
          component={IssueEditorContainer}
          history={this.history}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Route path={'/'} component={ComicStrip} />
  </BrowserRouter>,
  document.getElementById('root'),
);
