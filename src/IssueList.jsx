import React from "react";

function IssueList(props) {
  let issues = props.Issues;

  return (
    <div>
      <div className="container border">
          {issues.map((issue, index) =>
            <div className="row">
              <div key={index}>
                <div className="thumbnail hover">
                  <img
                    src={(issue.images.length>0) ? issue.images[0].pathIncludingExtension : ''}
                    alt={issue.title}
                    onClick={() => props.View(issue.id)}
                  />
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default IssueList;
