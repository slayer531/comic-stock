import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import SaveImage from "./images/save-resume.png";
import CancelImage from "./images/cancel.jpg";
/* import * as bootstrap from 'react-bootstrap'; */

function SupplierDetail(props) {
  return (
    <div className="container border">
      <div className="row">
        <div className="col-md-3">Name</div>
        <div className="col-md-3">City</div>
        <div className="col-md-3">Reference</div>
        <div className="col-md-3">Save</div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <input className="hiddenControl" value={props.id} />
          <input value={props.name} onChange={props.setName} />
        </div>
        <div className="col-md-3">
          <input value={props.city} onChange={props.setCity} />
        </div>
        <div className="col-md-3">
          <input value={props.reference} onChange={props.setReference} />
        </div>
        <div className="col-md-3">
          <img
            src={SaveImage}
            alt="save me"
            onClick={i => props.SaveSupplier(i)}
          />
          <img
            src={CancelImage}
            alt="cancel editing"
            onClick={i => props.Cancel(i)}
          />
        </div>
      </div>
    </div>
  );
}

export default SupplierDetail;
