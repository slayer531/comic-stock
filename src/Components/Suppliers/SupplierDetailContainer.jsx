import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../api';
import SupplierDetail from './SupplierDetail';
import { APP_SUPPLIERS_URL, PageState } from './../../Constants';
import confirm from '../confirm';
import history from './../../history';

class SupplierDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.initialiseState();
    this.setName = this.setName.bind(this);
    this.setCity = this.setCity.bind(this);
    this.setReference = this.setReference.bind(this);
  }

  componentDidMount() {
    this.setState({
      supplier: {
        id: this.props.id,
        name: this.props.name,
        city: this.props.city,
        reference: this.props.reference,
      },
    });
  }

  componentWillReceiveProps(nextProps) {
    const supplier = {
      id: nextProps.id,
      name: nextProps.name,
      city: nextProps.city,
      reference: nextProps.reference,
    };
    this.setState({
      supplier,
    });
  }

  onCancelHandler() {
    this.props.setPageMode(PageState.List);
    history.push(APP_SUPPLIERS_URL);
  }

  onSaveSupplierHandler() {
    if (this.state.supplier.id > 0) {
      api
        .put(`/Suppliers/${this.state.supplier.id}`, {
          id: this.state.supplier.id,
          name: this.state.supplier.name,
          city: this.state.supplier.city,
          reference: this.state.supplier.reference,
        })
        .then(() => {
          this.props.setPageMode(PageState.Saved);
          history.push(APP_SUPPLIERS_URL);
          this.props.RefreshList();
        })
        .catch(error => {
          confirm(`An error occurred while updating the record ${error}`, {
            okLabel: 'OK',
            cancelLabel: null,
            title: 'Error saving supplier',
          }).then(() => {}, () => {});
          console.error(error);
        });
    } else {
      api
        .post('/Suppliers', {
          name: this.state.supplier.name,
          city: this.state.supplier.city,
          reference: this.state.supplier.reference,
        })
        .then(() => {
          this.props.setPageMode(PageState.List);
          this.props.RefreshList();
          history.push(APP_SUPPLIERS_URL);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  setName(event) {
    // make a copy of supplier
    const supplier = { ...this.state.supplier };
    // give it the new name
    supplier.name = event.target.value;
    // push the new supplier into the state
    this.setState({
      supplier, // we're using es6 so I don't need to do supplier: supplier
    });
  }

  setCity(event) {
    // make a copy of supplier
    const supplier = { ...this.state.supplier };
    // give it the new city
    supplier.city = event.target.value;
    // push the new supplier into the state
    this.setState({
      supplier, // we're using es6 so I don't need to do supplier: supplier
    });
  }

  setReference(event) {
    // make a copy of supplier
    const supplier = { ...this.state.supplier };
    // give it the new reference
    supplier.reference = event.target.value;
    // push the new supplier into the state
    this.setState({
      supplier,
    });
  }

  initialiseState() {
    this.state = { supplier: { id: 0, name: '', city: '', reference: '' } };
  }

  render() {
    return (
      <SupplierDetail
        {...this.state.supplier}
        SaveSupplier={() => this.onSaveSupplierHandler()}
        Cancel={() => this.onCancelHandler()}
        setName={this.setName}
        setCity={this.setCity}
        setReference={this.setReference}
      />
    );
  }
}

SupplierDetailContainer.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  city: PropTypes.string,
  reference: PropTypes.string,
  setPageMode: PropTypes.func,
  RefreshList: PropTypes.func,
};

SupplierDetailContainer.defaultProps = {
  id: 0,
  name: '',
  city: '',
  reference: '',
  setPageMode: () => {},
  RefreshList: () => {},
};

export default SupplierDetailContainer;
