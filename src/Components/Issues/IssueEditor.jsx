import React from 'react';
import PropTypes from 'prop-types';
import IssueDetailContainer from './IssueDetailContainer';
import IssueListContainer from './IssueListContainer';

function IssueEditor(props) {
  return (
    <div className="row">
      <div className="col-md-3">
        <IssueListContainer View={i => props.View(i)} />
      </div>
      <div className="col-md-6">
        <IssueDetailContainer Issue={props.Issue} />
      </div>
    </div>
  );
}

IssueEditor.propTypes = {
  Issue: PropTypes.objectOf(PropTypes.any),
  View: PropTypes.func,
};

IssueEditor.defaultProps = { Issue: {}, View: null };

export default IssueEditor;
