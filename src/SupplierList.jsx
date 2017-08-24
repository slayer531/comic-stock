import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import PropTypes from 'prop-types';

function SupplierList(props) {
  const currentPage = props.CurrentPage;
  const suppliersPerPage = props.SuppliersToShow;
  const suppliers = props.suppliers;
  const indexOfLastSupplier = currentPage * suppliersPerPage;
  const indexOfFirstSupplier = indexOfLastSupplier - suppliersPerPage;
  const currentSuppliers = suppliers.slice(
    indexOfFirstSupplier,
    indexOfLastSupplier,
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(suppliers.length / suppliersPerPage); i += 1) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number =>
    <Button
      key={number}
      id={number}
      onClick={() => props.handlePageClick(number)}
    >
      {number}
    </Button>,
  );

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <FormControl
            type="text"
            placeholder="Search..."
            onChange={props.FilterSuppliers}
          />
        </div>
      </div>
      <br />
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="col-md-1" />
              <th className="col-md-1" />
              <th className="col-md-4">Name</th>
              <th className="col-md-3">City</th>
              <th className="col-md-3">Reference</th>
            </tr>
          </thead>
          <tbody>
            {currentSuppliers.map(supplier =>
              <tr key={supplier.id}>
                <td className="col-md-1">
                  <Button
                    bsStyle="danger"
                    bsSize="small"
                    onClick={() => props.Delete(supplier)}
                  >
                    DELETE
                  </Button>
                </td>
                <td className="col-md-1">
                  <Button
                    bsStyle="info"
                    bsSize="small"
                    onClick={() => props.Edit(supplier)}
                  >
                    EDIT
                  </Button>
                </td>
                <td className="col-md-4">
                  {supplier.name}
                </td>
                <td className="col-md-3">
                  {supplier.city}
                </td>
                <td className="col-md-3">
                  {supplier.reference}
                </td>
              </tr>,
            )}
          </tbody>
        </table>
      </div>
      <ul id="page-numbers">
        <ButtonGroup>
          {renderPageNumbers}
        </ButtonGroup>
      </ul>
    </div>
  );
}

SupplierList.propTypes = {
  CurrentPage: PropTypes.number,
  SuppliersToShow: PropTypes.number,
  suppliers: PropTypes.arrayOf(PropTypes.any),
  FilterSuppliers: PropTypes.func,
};
SupplierList.defaultProps = {
  CurrentPage: 1,
  SuppliersToShow: 10,
  suppliers: [],
  FilterSuppliers: {},
};

export default SupplierList;
