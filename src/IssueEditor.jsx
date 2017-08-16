import React from "react";
import IssueDetailContainer from "./Components/IssueDetailContainer";
import IssueListContainer from "./Components/IssueListContainer";
import IssueOrderContainer from "./Components/IssueOrderContainer";

function IssueEditor(props) {

  return (
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <IssueListContainer View={i => props.View(i)}/>
            </div>
            <div className="col-md-6">
                <IssueDetailContainer Issue={props.Issue} />
            </div>
            <div>
                <IssueOrderContainer />
            </div>
        </div>
      </div>
    );
}

export default IssueEditor;