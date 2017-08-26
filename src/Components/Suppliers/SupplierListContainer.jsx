import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import api from '../../api';
import SupplierList from './SupplierList';
import confirm from './../confirm';
import history from './../../history';
import { APP_SUPPLIERS_DELETE_URL, APP_SUPPLIERS_URL } from './../../Constants';

class SupplierListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.initialiseState();
    this.FilterSuppliers = this.FilterSuppliers.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.GetSuppliers();
  }

  GetSuppliers() {
    api
      .get('/Suppliers')
      .then(response => {
        this.setState({
          supplierData: response.data,
          supplierDataFiltered: response.data,
        });
      })
      .catch(e => {
        console.error(e);
      });
  }

  initialiseState() {
    this.state = {
      supplierData: [],
      supplierDataFiltered: [],
      currentPage: 1,
      SuppliersToShow: 10,
      SearchString: '',
    };
  }

  handleOnClickDelete(supplier) {
    history.push(APP_SUPPLIERS_DELETE_URL + supplier.id);
    confirm('Are you sure that you want to delete this supplier?', {
      okLabel: 'YES',
      cancelLabel: 'CANCEL',
      title: 'Delete Supplier',
    }).then(
      () => {
        this.DeleteSupplier(supplier);
      },
      () => {
        history.push(APP_SUPPLIERS_URL);
      },
    );
  }

  handlePageClick(event) {
    this.setState({
      currentPage: event,
    });
  }

  FilterSuppliers(event) {
    let searchString = event.target.value;
    let supplierDataFiltered = [];

    // SearchString
    this.setState({
      SearchString: searchString,
    });

    if (searchString != null) {
      supplierDataFiltered = this.state.supplierData.filter(item => {
        searchString = searchString.toLowerCase();
        return (
          item.name.toLowerCase().indexOf(searchString) !== -1 ||
          item.city.toLowerCase().indexOf(searchString) !== -1 ||
          item.reference.toLowerCase().indexOf(searchString) !== -1
        );
      });

      this.setState({
        supplierDataFiltered,
      });
    }
  }

  DeleteSupplier(supplier) {
    api({
      method: 'delete',
      url: `/Suppliers/${supplier.id}`,
    })
      .then(() => {
        api
          .get('/Suppliers')
          .then(response => {
            this.setState({
              supplierData: response.data,
              supplierDataFiltered: response.data,
            });
            history.push(APP_SUPPLIERS_URL);
          })
          .catch(e => {
            console.error(e);
          });
      })
      .catch(error => {
        console.error(`failed to delete ${supplier.id}.${error}`);
      });
  }

  render() {
    return (
      <SupplierList
        suppliers={this.state.supplierDataFiltered}
        Delete={i => this.handleOnClickDelete(i)}
        Edit={i => this.props.EditSupplier(i)}
        FilterSuppliers={this.FilterSuppliers}
        CurrentPage={this.state.currentPage}
        SuppliersToShow={this.state.SuppliersToShow}
        handlePageClick={i => this.handlePageClick(i)}
      />
    );
  }
}

SupplierListContainer.propTypes = {
  EditSupplier: PropTypes.func,
};

SupplierListContainer.defaultProps = {
  EditSupplier: {},
};

export default SupplierListContainer;
