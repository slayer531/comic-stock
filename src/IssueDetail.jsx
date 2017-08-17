import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import dateFormat from "dateformat";
import NoImage from "./images/not_available_icon.jpg";

function IssueDetail(props) {
  return (
    <div className="container border">
      <div className="row">
        <div className="col-md-6">
          <h1>
            {props.Issue.title}
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>
            {props.Issue.description}
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>
            {"Published on: "}
          </label>
          <label>
            {(props.Issue.publicationDate) ? dateFormat(props.Issue.publicationDate, "longDate"):""}
          </label>
        </div>
        <div className="row">
          <div className="col-md-2">
            <label>
              {"Published by: "}
            </label>
            <label>
              {props.Issue.publisher}
            </label>
          </div>
        </div>
        <div className="col-md-2">
          <img src={(props.Issue.images!=null && props.Issue.images.length>0 ? props.Issue.images[0].pathIncludingExtension: NoImage)} alt="Comic" />
        </div>
      </div>
    </div>
  );
}

export default IssueDetail;
