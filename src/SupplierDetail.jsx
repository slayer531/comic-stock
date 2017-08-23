import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/lib/Button';
import PropTypes from 'prop-types';

function SupplierDetail(props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-2 col-md-offset-2">Name</div>
        <input value={props.name} onChange={props.setName} />
        <input className="hiddenControl" value={props.id} />
      </div>
      <div className="row">
        <div className="col-md-2 col-md-offset-2">City</div>
        <input value={props.city} onChange={props.setCity} />
      </div>
      <div className="row">
        <div className="col-md-2 col-md-offset-2">Reference</div>
        <input value={props.reference} onChange={props.setReference} />
      </div>
      <br />
      <div className="row">
        <div className="col-md-2 col-md-offset-3">
          <Button onClick={i => props.Cancel(i)}>CANCEL</Button>
        </div>
        <div className="col-md-2 col-md-offset-1">
          <Button onClick={i => props.SaveSupplier(i)}>SAVE</Button>
        </div>
      </div>
    </div>
  );
}

SupplierDetail.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
  id: PropTypes.string,
  city: PropTypes.string,
  setCity: PropTypes.func,
  reference: PropTypes.string,
  setReference: PropTypes.func,
  Cancel: PropTypes.func,
  SaveSupplier: PropTypes.func,
};

SupplierDetail.defaultProps = {
  name: '',
  setName: {},
  id: '',
  city: '',
  setCity: {},
  reference: '',
  setReference: {},
  Cancel: {},
  SaveSupplier: {},
};

export default SupplierDetail;
