import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../api';
import SupplierDetail from '../SupplierDetail';
import { APP_SUPPLIERS_URL } from './../Constants';

const PageState = {
  List: 1,
  Edit: 2,
  New: 3,
  Saved: 4,
};

class SupplierDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.initialiseState();
    this.setName = this.setName.bind(this);
    this.setCity = this.setCity.bind(this);
    this.setReference = this.setReference.bind(this);
    this.history = props.history;
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
    this.setState({
      supplier: {
        id: nextProps.id,
        name: nextProps.name,
        city: nextProps.city,
        reference: nextProps.reference,
      },
    });
  }

  initialiseState() {
    this.state = { supplier: { id: 0, name: '', city: '', reference: '' } };
  }

  CancelEdit(index) {
    this.props.setPageMode(PageState.List);
    this.history.push(APP_SUPPLIERS_URL);
  }

  SaveSupplier() {
    this.history.push(APP_SUPPLIERS_URL);

    if (this.state.supplier.id > 0) {
      api
        .put(`/Suppliers/${this.state.supplier.id}`, {
          id: this.state.supplier.id,
          name: this.state.supplier.name,
          city: this.state.supplier.city,
          reference: this.state.supplier.reference,
        })
        .then(() => {
          this.props.setPageMode(PageState.List);
        })
          alert("An error occurred while updating the record " + error);
        .catch(error => {
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

  render() {
    return (
      <SupplierDetail
        {...this.state.supplier}
        SaveSupplier={() => this.SaveSupplier()}
        Cancel={i => this.CancelEdit(i)}
        setName={this.setName}
        setCity={this.setCity}
        setReference={this.setReference}
      />
    );
  }
}

SupplierDetailContainer.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
};

SupplierDetailContainer.defaultProps = {
  history: {},
};

export default SupplierDetailContainer;
