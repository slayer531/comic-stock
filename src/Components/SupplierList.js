import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import DeleteImage from '../images/delete-x-square-button.png';
import api from '../api';
import 'bootstrap/dist/css/bootstrap.css';

class SupplierList extends React.Component{
    constructor() {
        super();
        this.initialiseState();
    }

    initialiseState(){
        this.state = {supplierData : []}
    }

    componentDidMount() {
        
        api.get('/Suppliers')
                .then((response) => {
                     this.setState({
                         supplierData : response.data
                        })
        }).catch((e) =>
        {
            console.error(e);
        });
    }

    DeleteSupplier(){
        alert('test from Supplier Comp');

    };

    render() {
        return(
            <div className="SupplierList">
                {this.state.supplierData.map((supplier,index)  =>(
                    <div>
                        <div>{supplier.name} {supplier.city} {supplier.reference}</div>
                        <div><img ref="#" src={DeleteImage} alt="delete me" onClick={this.DeleteSupplier} /></div>
                    </div>                        
                ))}                    
            </div>
        );
    }
}

export default SupplierList