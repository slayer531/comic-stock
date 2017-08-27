import React from 'react';
import PropTypes from 'prop-types';
import IssueDetailContainer from './IssueDetailContainer';
import IssueListContainer from './IssueListContainer';

function IssueEditor(props) {
  return (
    <div className="row">
      <div className="row">
        <div className="col-md-12">
          <IssueListContainer View={i => props.View(i)} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <IssueDetailContainer Issue={props.Issue} />
        </div>
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
