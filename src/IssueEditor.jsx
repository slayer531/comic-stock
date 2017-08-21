import React from "react";
import IssueDetailContainer from "./Components/IssueDetailContainer";
import IssueListContainer from "./Components/IssueListContainer";

function IssueEditor(props) {
  return (
     <div className="row">
        <div className="col-md-6">
          <IssueListContainer View={i => props.View(i)} />
        </div>
        <div className="col-md-6">
          <IssueDetailContainer Issue={props.Issue} />
        </div>              
      </div>
  );
}

export default IssueEditor;
