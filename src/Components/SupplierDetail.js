import React from 'react';
import api from '../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import SupplierDetail from '../SupplierDetail'

class SupplierDetailComponent extends React.Component{
    constructor(props) {
        super(props);
        this.initialiseState();   
        this.setName = this.setName.bind(this);
        this.setCity = this.setCity.bind(this);
        this.setReference = this.setReference.bind(this);     
    }

    initialiseState(){
        this.state = {supplier:{"id":0, "name":"", "city":"", "reference":"" }}
    }

    CancelEdit(index){   
        var Edit = {...this.state.Edit}
        Edit = false;
        this.setState({
            Edit
        });
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
            .then(((response) => {
                console.log(response);
                var Saved = {...this.state.Saved}
                Saved = true;
                this.setState({
                    Saved
                });
            }))
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

    setName (event) {
        // make a copy of supplier
        var supplier = { ...this.state.supplier }
        // give it the new name
        console.log(event.target.value);
        supplier.name = event.target.value
        // push the new supplier into the state
        this.setState({
            supplier// we're using es6 so I don't need to do supplier: supplier
        })
    }

    setCity (event) {
        // make a copy of supplier
        var supplier = { ...this.state.supplier }
        // give it the new city
        supplier.city = event.target.value
        // push the new supplier into the state
        this.setState({
            supplier// we're using es6 so I don't need to do supplier: supplier
        })
    }

    setReference(event){
       // make a copy of supplier
        var supplier = { ...this.state.supplier }
        // give it the new reference
        supplier.reference = event.target.value
        // push the new supplier into the state
        this.setState({
            supplier
        }) 
    }

    render() {
        return(
            <div>
                 <SupplierDetail 
                    id={this.props.id}
                    name={this.props.name}
                    city={this.props.city}
                    reference={this.props.reference}
                    SaveSupplier={(i) => this.SaveSupplier(i)}
                    Cancel={(i) => this.Cancel(i)}
                    setName={this.setName} 
                    setCity={this.setCity}
                    setReference={this.setReference}
                />    
            </div>
                            
        );
    }
}

 export default SupplierDetailComponent