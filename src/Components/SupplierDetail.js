import React from 'react';
import api from '../api';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import SupplierDetail from '../SupplierDetail' */
import SaveImage from './../images/save-resume.png';

class SupplierDetail extends React.Component{
    constructor(props) {
        super(props);
        this.initialiseState();        
    }

    initialiseState(){
        this.state = { id:0, name:"", city:"", reference:"" }; 
    }

    SaveSupplier(index){
        if(this.refs.id>0){
            api.put('/Suppliers', {   
                id: this.refs.id.value,             
                name: this.refs.name.value,
                city: this.refs.city.value,
                reference: this.refs.reference.value
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            }); 
        }
        else{
             api.post('/Suppliers', {                
                name: this.props.name,
                city: this.refs.city.value,
                reference: this.refs.reference.value
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
            <div>
        <div className="row">
            <div className="col-md-3">Name</div>
            <div className="col-md-3">City</div>
            <div className="col-md-3">Reference</div>
            <div className="col-md-3">Save</div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <input className="hiddenControl" ref="id" value={this.props.id}></input>
                <input type="text" ref="name" value={this.props.name} onChange={this.props.setName}></input>  
            </div>                                     
            <div className="col-md-3">
                <input ref="city" value={this.props.city}></input>                                        
            </div>
            <div className="col-md-3">
                <input ref="reference" value={this.props.reference}></input>                    
            </div>
            <div className="col-md-3">
                <img src={SaveImage} alt="save me" onClick={(i) => this.SaveSupplier(i)} />                     
            </div>
        </div>                     
    </div>
           /*  <SupplierDetail 
                supplier={this.state.supplierData} 
                Save={(i) => this.SaveSupplier(i)}
            />     */        
        );
    }
}

 export default SupplierDetail