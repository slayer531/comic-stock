import React from 'react';
import api from '../api';
import 'bootstrap/dist/css/bootstrap.css';
import SupplierList from '../SupplierList'

class SupplierListContainer extends React.Component{
    constructor(props) {
        super(props);
        this.initialiseState();
    }

    initialiseState(){
        this.state = {supplierData : []}
    }

    GetSuppliers() {
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

    componentDidMount() {   
        this.GetSuppliers();
    }

    /* EditSupplier(index){
        
    } */

    DeleteSupplier(index){
        alert('Supplier id about to delete: ' + index);
        api({
            method: 'delete',
            url: '/Suppliers/' +  index
            })
        .then(((response)=> {
            console.log(response);
            api.get('/Suppliers')
                .then((response) => {
                    this.setState({
                        supplierData : response.data
                        })})
                .catch((e) => {
                    console.error(e);
                }
            );
        }))
        .catch(function (error) {
            console.log(error);
            console.log('failed to delete ' + index);
        });
    };

    render() {
        return(
            <SupplierList 
                suppliers={this.state.supplierData} 
                Delete={(i) => this.DeleteSupplier(i)}
                Edit={(i) => this.props.EditSupplier(i)}
            />            
        );
    }
}

 export default SupplierListContainer 