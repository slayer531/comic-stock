import React from "react";
import NoImage from "./images/not_available_icon.jpg";
import Thumbnail from "react-bootstrap/lib/Thumbnail";

function IssueList(props) {
  let issues = props.Issues;

  return (
    <div>
        {issues.map((issue, index) =>
            <Thumbnail
                    src={
                      issue.images.length > 0
                        ? issue.images[0].pathIncludingExtension
                        : NoImage
                    }
                    onClick={() => props.View(issue.id)}
                    alt="171x180"
                  />
          )}
      </div>
  );
}

export default IssueList;
