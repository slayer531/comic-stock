import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import PropTypes from 'prop-types';
import SupplierDetailContainer from './SupplierDetailContainer';
import SupplierListContainer from './SupplierListContainer';
import { PageState } from './../../Constants';

function SupplierEditor(props) {
  let id = 0;
  let name = '';
  let city = '';
  let reference = '';

  if (props.PageState === PageState.Edit) {
    id = props.id;
    name = props.name;
    city = props.city;
    reference = props.reference;
  } else if (props.PageState === PageState.New) {
    id = 0;
    name = '';
    city = '';
    reference = '';
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Button bsStyle="primary" onClick={i => props.AddNew(i)}>
            {'ADD SUPPLIER'}
          </Button>
        </div>
      </div>
      <br />
      <SupplierListContainer
        EditSupplier={i => props.EditSupplier(i)}
        PageState={props.PageState}
        supplierData={props.supplierData}
        supplierDataFiltered={props.supplierData}
      />
      <Modal
        show={
          props.PageState === PageState.Edit ||
          props.PageState === PageState.New
        }
      >
        <SupplierDetailContainer
          id={id}
          name={name}
          city={city}
          reference={reference}
          SaveSupplier={i => props.SaveSupplier(i)}
          setPageMode={props.setPageMode}
          RefreshList={() => props.RefreshList()}
        />
      </Modal>
    </div>
  );
}

SupplierEditor.propTypes = {
  PageState: PropTypes.number,
  id: PropTypes.number,
  name: PropTypes.string,
  city: PropTypes.string,
  reference: PropTypes.string,
  supplierData: PropTypes.arrayOf(PropTypes.any),
  AddNew: PropTypes.func,
  SaveSupplier: PropTypes.func,
  EditSupplier: PropTypes.func,
  setPageMode: PropTypes.func,
  RefreshList: PropTypes.func,
};

SupplierEditor.defaultProps = {
  PageState: 1,
  id: 0,
  name: '',
  city: '',
  reference: '',
  supplierData: [],
  AddNew: () => {},
  SaveSupplier: () => {},
  EditSupplier: () => {},
  setPageMode: () => {},
  RefreshList: () => {},
};

export default SupplierEditor;
