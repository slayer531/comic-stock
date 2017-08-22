import React from "react";
import NoImage from "./images/not_available_icon.jpg";
import Image from "react-bootstrap/lib/Image";

function IssueList(props) {
  let issuesFirstHalf = props.Issues.slice(0, 3);
  let issuesSecondHalf = props.Issues.slice(3);

  return (
    <div className="row">
      <div className="col-md-6">
        {issuesFirstHalf.map((issue, index) =>
          <div className="col-md-12 thumbnail">
            <Image
              key={index}
              src={
                issue.images.length > 0
                  ? issue.images[0].pathIncludingExtension
                  : NoImage
              }
              onClick={() => props.View(issue.id)}
              rounded
            />
          </div>
        )}
      </div>
      <div className="col-md-6">
        {issuesSecondHalf.map((issue, index) =>
          <div className="col-md-12 thumbnail">
            <Image
              key={index}
              src={
                issue.images.length > 0
                  ? issue.images[0].pathIncludingExtension
                  : NoImage
              }
              onClick={() => props.View(issue.id)}
              rounded
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default IssueList;
