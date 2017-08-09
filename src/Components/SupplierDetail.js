import React from 'react';
import api from '../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import SupplierDetail from '../SupplierDetail'

class SupplierDetailContainer extends React.Component{
    constructor() {
        super();
        this.initialiseState();
    }

    initialiseState(){
        this.state = {supplierData : { "name":"", "city":"", "reference":"" }};
    }

    componentDidMount() {
        
    }

    SaveSupplier(index){
        alert('Supplier id about to save: ' + index);
        api.post('/Suppliers', {
                name: this.state.supplierData.name,
                city: this.state.supplierData.city,
                reference: this.state.supplierData.reference
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    render() {
        return(
            <SupplierDetail 
                supplier={this.state.supplierData} 
                Save={(i) => this.SaveSupplier(i)}
            />            
        );
    }
}

 export default SupplierDetailContainer 