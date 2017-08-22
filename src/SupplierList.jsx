import React from "react";
import Button from "react-bootstrap/lib/Button";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import Panel from "react-bootstrap/lib/Panel";
import FormControl from "react-bootstrap/lib/FormControl";

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
        <div className="col-md-4">         
          <FormControl type="text" placeholder="Search..." onChange={props.FilterSuppliers} />
        </div>
      </div>
      <br/>
      <div className="">
        <div className="row">
          <Panel header="">
            <label className="col-md-1"></label>
            <label className="col-md-1"></label>
            <label className="col-md-4">Name</label>
            <label className="col-md-3">City</label>
            <label className="col-md-3">Reference</label>            
          </Panel>
        </div>
        <div className=".row">
          {currentSuppliers.map((supplier, index) =>
            <div key={index} className="row altrow">
              <div className="col-md-1">
                <Button
                  bsStyle="warning"
                  bsSize="small"
                  onClick={() => props.Delete(supplier)}
                >
                  DELETE
                </Button>
              </div>
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
              
            </div>
          )}
        </div>
      </div>
      <br />
      <ul id="page-numbers">
        <ButtonGroup>
          {renderPageNumbers}
        </ButtonGroup>
      </ul>
    </div>
  );
}

export default SupplierList;
