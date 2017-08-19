import React from "react";
import DeleteImage from "./images/delete-x-square-button.png";
import Button from "react-bootstrap/lib/Button";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";

function SupplierList(props) {
  const currentPage = props.CurrentPage;
  const suppliersPerPage = props.SuppliersToShow;
  const suppliers = props.suppliers;
  const indexOfLastSupplier = currentPage * suppliersPerPage;
  const indexOfFirstSupplier = indexOfLastSupplier - suppliersPerPage;
  const currentSuppliers = suppliers.slice(
    indexOfFirstSupplier,
    indexOfLastSupplier
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(suppliers.length / suppliersPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <Button
        key={number}
        id={number}
        onClick={() => props.handlePageClick(number)}
      >
        {number}
      </Button>
    );
  });

  return (
    <div>
      <div className="row">
        <div className="col-md-4 col-md-offset-8">
          <label htmlFor="Search" value="">
            Search:
          </label>
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
          {currentSuppliers.map((supplier, index) =>
            <div key={index} className="row altrow">
              <div className="col-md-1">
                <Button
                  bsStyle="info"
                  bsSize="small"
                  onClick={() => props.Edit(supplier)}
                >
                  EDIT
                </Button>
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
                <Button
                  bsStyle="warning"
                  bsSize="small"
                  onClick={() => props.Delete(supplier)}
                >
                  DELETE
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <br/>
      <ul id="page-numbers">
        <ButtonGroup>
          {renderPageNumbers}
        </ButtonGroup>
      </ul>
    </div>
  );
}

export default SupplierList;
