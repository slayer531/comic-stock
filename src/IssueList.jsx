import React from "react";
import NoImage from "./images/not_available_icon.jpg";
import Image from "react-bootstrap/lib/Image";
import  Col from "react-bootstrap/lib/Col";

function IssueList(props) {
  let issues = props.Issues;

  return (
    <div>
      {issues.map((issue, index) =>
        <div className="thumbnail">
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
  );
}

export default IssueList;
