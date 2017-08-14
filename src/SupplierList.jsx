import React from "react";
import DeleteImage from "./images/delete-x-square-button.png";

function SupplierList(props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-4 col-md-offset-8">
          <label htmlFor="Search" value="">Search: </label>
          <input onChange={props.FilterSuppliers} />
        </div>
      </div>
      <div className="container border">
        <div className="row border">
          <div className="col-md-1">Edit</div>
          <div className="col-md-4">Name</div>
          <div className="col-md-3">City</div>
          <div className="col-md-3">Reference</div>
          <div className="col-md-1">Delete</div>
        </div>
        <div className=".row">
          {props.suppliers.map((supplier, index) =>
            <div key={index} className="row altrow">
              <div className="col-md-1">
                <button onClick={() => props.Edit(supplier)}>Edit</button>
              </div>
              <div className="col-md-4">
                {supplier.name}
              </div>
              <div className="col-md-3">
                {supplier.city}
              </div>
              <div className="col-md-3">
                {supplier.reference}
              </div>
              <div className="col-md-1">
                <img
                  src={DeleteImage}
                  alt="delete me"
                  onClick={() => props.Delete(supplier)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SupplierList;
