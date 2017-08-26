import React from 'react';
import Image from 'react-bootstrap/lib/Image';
import PropTypes from 'prop-types';
import NoImage from './../../images/not_available_icon.jpg';

function IssueList(props) {
  const issuesFirstHalf = props.Issues.slice(0, 3);
  const issuesSecondHalf = props.Issues.slice(3);

  return (
    <div className="row">
      <div className="col-md-6">
        {issuesFirstHalf.map(issue =>
          <div key={issue.id} className="col-md-12 thumbnail">
            <Image
              src={
                issue.images.length > 0
                  ? issue.images[0].pathIncludingExtension
                  : NoImage
              }
              onClick={() => props.View(issue.id)}
              rounded
            />
          </div>,
        )}
      </div>
      <div className="col-md-6">
        {issuesSecondHalf.map(issue =>
          <div key={issue.id} className="col-md-12 thumbnail">
            <Image
              src={
                issue.images.length > 0
                  ? issue.images[0].pathIncludingExtension
                  : NoImage
              }
              onClick={() => props.View(issue.id)}
              rounded
            />
          </div>,
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
