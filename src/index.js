import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import SupplierEditorContainer from './Components/Suppliers/SupplierEditorContainer';
import IssueEditorContainer from './Components/Issues/IssueEditorContainer';
import NavigationBar from './Components/NavigationBar';
import HomePage from './Components/HomePage';

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
        <Route exact path={APP_HOME_PAGE} component={HomePage} />
        <Route exact path={'/'} component={HomePage} />
        <Route path={APP_SUPPLIERS_URL} component={SupplierEditorContainer} />
        <Route path={APP_ISSUES_VIEW_ID_URL} component={IssueEditorContainer} />
        <Route exact path={APP_ISSUES_URL} component={IssueEditorContainer} />
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
