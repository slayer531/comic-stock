import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SupplierList from './Components/SupplierListContainer';
import SupplierDetailComponent from './Components/SupplierDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from './api';

class ComicStrip extends React.Component {
  constructor() {
    super();
    this.initialiseState();
  }

  initialiseState() {
    this.state = {
      supplier: { id: 0, name: '', city: '', reference: '' },
      Edit: false,
      Saved: false
    };
  }

  EditSupplier(supplier) {
    this.setState({
      supplier: supplier,
      Edit: true,
      Saved: false
    });
  }

  render() {
    return (
      <div>
        <div className="banner">
          <h1>Need to put a menu in here</h1>
        </div>
        <SupplierDetailComponent
          id={this.state.supplier.id}
          name={this.state.supplier.name}
          city={this.state.supplier.city}
          reference={this.state.supplier.reference}
          SaveSupplier={i => this.SaveSupplier(i)}
        />
        <SupplierList EditSupplier={i => this.EditSupplier(i)} />
      </div>
    );
  }
}

ReactDOM.render(<ComicStrip />, document.getElementById('root'));
/* ReactDOM.render(<SupplierList id="1" name="test" city="NYC" reference="bongo" />, document.getElementById('root')); */
