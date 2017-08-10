import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SupplierList from './Components/SupplierList';
import SupplierDetail from './Components/SupplierDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from './api';

class ComicStrip extends React.Component{
    constructor() {
        super();
        this.initialiseState();
        this.setName = this.setName.bind(this);
        this.setCity = this.setCity.bind(this);
        this.setReference = this.setReference.bind(this);
    }

    initialiseState(){
        this.state = {supplier:{"id":0, "name":"", "city":"", "reference":"" },
                        Edit: false}
    }

    EditSupplier(supplier){    
        this.setState({
                         supplier : supplier,
                         Edit: true
                        })
        console.log('Supplier after set state: ' + this.state.supplier.name)

        /* api.put('/Suppliers/' + index, { 
                id: 15,
                name: '@name12',
                city: 'Montgomery',
                reference: 'DDDDYDGF9EE0F42'
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            }
        ); */
    }

    setName (event) {
        // make a copy of supplier
        var supplier = { ...this.state.supplier }
        // give it the new name
        supplier.name = event.target.value
        // push the new supplier into the state
        this.setState({
            supplier// we're using es6 so I don't need to do supplier: supplier
        })
    }

    setCity (event) {
        // make a copy of supplier
        var supplier = { ...this.state.supplier }
        // give it the new name
        supplier.city = event.target.value
        // push the new supplier into the state
        this.setState({
            supplier// we're using es6 so I don't need to do supplier: supplier
        })
    }

    setReference(event){
       // make a copy of supplier
        var supplier = { ...this.state.supplier }
        // give it the new name
        supplier.reference = event.target.value
        // push the new supplier into the state
        this.setState({
            supplier// we're using es6 so I don't need to do supplier: supplier
        }) 
    }

    SaveSupplier(index){        
         if(this.state.supplier.id>0){
            console.log('finding the record: ' + this.state.supplier.id)
            api.put('/Suppliers/' + this.state.supplier.id, {   
                id: this.state.supplier.id,             
                name: this.state.supplier.name,
                city: this.state.supplier.city,
                reference: this.state.supplier.reference
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                alert('An error occurred while updating the record ' + error)
                console.log(error);
            }); 
        }
        else{
            console.log('new: ' + this.state.supplier.id)
             api.post('/Suppliers', {          
                  name: this.state.supplier.name,
                  city: this.state.supplier.city,
                  reference: this.state.supplier.reference
            })
            .then(function (response) {
                console.log(response);                
            })
            .catch(function (error) {
                console.log(error);
            }); 
        } 
        
    }

    render() {
        return(
            <div className="app">
                <div className="banner">
                    <h1>Need to put a menu in here</h1>
                </div>
                <SupplierDetail setName={this.setName} 
                                setCity={this.setCity}
                                setReference={this.setReference}
                                id={this.state.supplier.id} 
                                name={this.state.supplier.name} 
                                city={this.state.supplier.city}
                                reference={this.state.supplier.reference}
                                SaveSupplier = {(i) => this.SaveSupplier(i)}
                />
                <br/>
                <SupplierList EditSupplier={(i) => this.EditSupplier(i)} />                
            </div>
        );
    }
}

  ReactDOM.render(<ComicStrip />, document.getElementById('root'));   
/* ReactDOM.render(<SupplierList id="1" name="test" city="NYC" reference="bongo" />, document.getElementById('root')); */
