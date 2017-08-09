import React from 'react';
import api from '../api';
import 'bootstrap/dist/css/bootstrap.css';
import SupplierList from '../SupplierList'

class SupplierListContainer extends React.Component{
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

    DeleteSupplier(index){
        alert('test from Supplier Comp Testing: ' + index);
        console.log(index);
        /* let array = [
                    { "name": "Joe", "age": 17 },
                    { "name": "Joe", "age": 17 },
                    { "name": "Carl", "age": 35 }
                    ];
        array.map(item => item.age)
            .filter((value, index, self) => self.indexOf(value) === index)
            console.log('testing filter: ' + array.map(item => item.age)
            .filter((value, index, self) => self.indexOf(value) === index)); */

    };

    render() {
        return(
            <SupplierList suppliers={this.state.supplierData} onClick={(i) => this.DeleteSupplier(i)} />            
        );
    }
}

 export default SupplierListContainer 