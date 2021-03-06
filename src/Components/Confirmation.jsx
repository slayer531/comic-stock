import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import { confirmable } from 'react-confirm';

class Confirmation extends React.Component {
  render() {
    const {
      okLabel = 'OK',
      cancelLabel = 'CANCEL',
      title,
      confirmation,
      show,
      proceed,
      dismiss,
      cancel,
      enableEscape = true,
    } = this.props;
    return (
      <div className="static-modal">
        <Modal
          show={show}
          onHide={dismiss}
          backdrop={enableEscape ? true : 'static'}
          keyboard={enableEscape}
        >
          <Modal.Header>
            <Modal.Title>
              {title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {confirmation}
          </Modal.Body>
          <Modal.Footer>
            {cancelLabel
              ? <Button onClick={cancel}>
                  {cancelLabel}
                </Button>
              : null}
            <Button className="button-l" bsStyle="primary" onClick={proceed}>
              {okLabel}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

Confirmation.propTypes = {
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  title: PropTypes.string,
  confirmation: PropTypes.string,
  show: PropTypes.bool,
  proceed: PropTypes.func, // called when ok button is clicked.
  cancel: PropTypes.func, // called when cancel button is clicked.
  dismiss: PropTypes.func, // called when backdrop is clicked or escaped.
  enableEscape: PropTypes.bool,
};

Confirmation.defaultProps = {
  okLabel: 'OK',
  cancelLabel: 'CANCEL',
  title: '',
  confirmation: '',
  show: false,
  proceed: {}, // called when ok button is clicked.
  cancel: {}, // called when cancel button is clicked.
  dismiss: {}, // called when backdrop is clicked or escaped.
  enableEscape: false,
};
export default confirmable(Confirmation);
