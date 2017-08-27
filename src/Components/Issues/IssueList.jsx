import React from 'react';
import Image from 'react-bootstrap/lib/Image';
import Col from 'react-bootstrap/lib/Col';
import PropTypes from 'prop-types';
import NoImage from './../../images/not_available_icon.jpg';

function IssueList(props) {
  const issues = props.Issues;

  return (
    <div className="row">
      <div className="col-md-12">
        {issues.map(issue =>
          <Col key={issue.id} xs={2} md={2}>
            <Image
              className="thumbnail"
              responsive
              src={
                issue.images.length > 0
                  ? issue.images[0].pathIncludingExtension
                  : NoImage
              }
              onClick={() => props.View(issue.id)}
              rounded
            />
          </Col>,
        )}
      </div>
    </div>
  );
}

IssueList.propTypes = {
  Issues: PropTypes.arrayOf(PropTypes.object),
};
IssueList.defaultProps = { Issues: [] };

export default IssueList;
