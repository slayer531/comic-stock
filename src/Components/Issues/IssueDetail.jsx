import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import dateFormat from 'dateformat';
import Image from 'react-bootstrap/lib/Image';
import NoImage from './../../images/not_available_icon.jpg';

function IssueDetail(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <h1>
              {props.Issue.title}
            </h1>
          </div>
          <div className="row">
            <h4>
              {props.Issue.description}
            </h4>
          </div>
          <div className="row">
            <label htmlFor="none">
              {'Published on: '}
            </label>
            <label htmlFor="none">
              {props.Issue.publicationDate
                ? dateFormat(props.Issue.publicationDate, 'longDate')
                : ''}
            </label>
          </div>
          <div className="row">
            <label htmlFor="none">
              {'Published by: '}
            </label>
            <label htmlFor="none">
              {props.Issue.publisher}
            </label>
          </div>
        </div>
        <div className="col-md-6">
          <Image
            src={
              props.Issue.images != null && props.Issue.images.length > 0
                ? props.Issue.images[0].pathIncludingExtension
                : NoImage
            }
            rounded
            responsive
          />
        </div>
      </div>
    </div>
  );
}

IssueDetail.propTypes = {
  Issue: PropTypes.objectOf(PropTypes.any),
};

IssueDetail.defaultProps = {
  Issue: {},
};

export default IssueDetail;
