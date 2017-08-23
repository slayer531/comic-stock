import React from 'react';
import PropTypes from 'prop-types';
import IssueDetailContainer from './Components/IssueDetailContainer';
import IssueListContainer from './Components/IssueListContainer';

function IssueEditor(props) {
  return (
    <div className="row">
      <div className="col-md-3">
        <IssueListContainer View={i => props.View(i)} />
      </div>
      <div className="col-md-6">
        <IssueDetailContainer Issue={props.Issue} history={props.history} />
      </div>
    </div>
  );
}

IssueEditor.propTypes = {
  Issue: PropTypes.objectOf(PropTypes.any),
  View: PropTypes.func,
  history: PropTypes.objectOf(PropTypes.history),
};
IssueEditor.defaultProps = { Issue: {}, View: null, history: {} };

export default IssueEditor;
