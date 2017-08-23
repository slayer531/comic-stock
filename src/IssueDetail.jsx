import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import dateFormat from 'dateformat';
import Image from 'react-bootstrap/lib/Image';
import NoImage from './images/not_available_icon.jpg';

function IssueDetail(props) {
  return (
    <div className=".container">
      <div className=".row">
        <div className=".col-md-2">
          <h1>
            {props.Issue.title}
          </h1>
        </div>
      </div>
      <div className=".row">
        <div className=".col-md-2">
          <label>
            {props.Issue.description}
          </label>
        </div>
      </div>
      <div className=".row">
        <label>
          {'Published on: '}
        </label>
        <label>
          {props.Issue.publicationDate
            ? dateFormat(props.Issue.publicationDate, 'longDate')
            : ''}
        </label>
        <div className=".row">
          <label>
            {'Published by: '}
          </label>
          <label>
            {props.Issue.publisher}
          </label>
        </div>
        <div className=".row">
          <Image
            src={
              props.Issue.images != null && props.Issue.images.length > 0
                ? props.Issue.images[0].pathIncludingExtension
                : NoImage
            }
            rounded
          />
        </div>
      </div>
    </div>
  );
}

export default IssueDetail;
