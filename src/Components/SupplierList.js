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

    EditSupplier(index){
        alert('Supplier id about to edit: ' + index);
    }
    
    DeleteSupplier(index){
        alert('Supplier id about to delete: ' + index);

        /* api.get('/Suppliers')
                .then((response) => {
                     this.setState({
                         supplierData : response.data
                        })
        }).catch((e) =>
        {
            console.error(e);
        }); */

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
            <SupplierList 
                suppliers={this.state.supplierData} 
                Delete={(i) => this.DeleteSupplier(i)}
                Edit={(i) => this.EditSupplier(i)}
            />            
        );
    }
}

 export default SupplierListContainer 