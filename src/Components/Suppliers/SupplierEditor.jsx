import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import PropTypes from 'prop-types';
import SupplierDetailContainer from './SupplierDetailContainer';
import SupplierListContainer from './SupplierListContainer';

const PageState = {
  List: 1,
  Edit: 2,
  New: 3,
  Saved: 4,
};

function AddNewVisibility(props) {
  if (props.PageState === PageState.List) {
    return (
      <div className="row">
        <div className="col-md-2">
          <Button bsStyle="primary" onClick={i => props.AddNew(i)}>
            {'ADD SUPPLIER'}
          </Button>
        </div>
      </div>
    );
  }
}

function ControlsToShow(props) {
  switch (props.PageState) {
    case PageState.List:
      return (
        <SupplierListContainer EditSupplier={i => props.EditSupplier(i)} />
      );
    case PageState.New:
      return (
        <SupplierDetailContainer
          id={0}
          name={''}
          city={''}
          reference={''}
          SaveSupplier={i => props.SaveSupplier(i)}
          setPageMode={props.setPageMode}
          history={props.history}
        />
      );
    case PageState.Edit:
      return (
        <SupplierDetailContainer
          id={props.id}
          name={props.name}
          city={props.city}
          reference={props.reference}
          SaveSupplier={i => props.SaveSupplier(i)}
          setPageMode={props.setPageMode}
          history={props.history}
        />
      );
    case PageState.Saved:
      return (
        <SupplierListContainer EditSupplier={i => props.EditSupplier(i)} />
      );
    default:
      console.error('Invalid Page State encountered');
  }
}

function SupplierEditor(props) {
  return (
    <div>
      {AddNewVisibility(props)}
      <br />
      {ControlsToShow(props)}
    </div>
  );
}

ControlsToShow.propTypes = {
  PageState: PropTypes.objectOf(PropTypes.any),
  EditSupplier: PropTypes.func,
  SaveSupplier: PropTypes.func,
  setPageMode: PropTypes.func,
  history: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  city: PropTypes.string,
  reference: PropTypes.string,
};

ControlsToShow.defaultProps = {
  PageState: {},
  EditSupplier: {},
  AddNew: {},
  SaveSupplier: {},
  setPageMode: {},
  history: {},
  id: PropTypes.string,
  name: PropTypes.string,
  city: PropTypes.string,
  reference: PropTypes.string,
};

AddNewVisibility.propTypes = {
  AddNew: PropTypes.func,
  PageState: PropTypes.objectOf(PropTypes.any),
};

AddNewVisibility.defaultProps = {
  AddNew: {},
  PageState: {},
};

export default SupplierEditor;
