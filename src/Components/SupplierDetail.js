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
                <input value={this.props.name} onChange={this.props.setName}></input>  
            </div>                                     
            <div className="col-md-3">
                <input value={this.props.city} onChange={this.props.setCity}></input>                                        
            </div>
            <div className="col-md-3">
                <input value={this.props.reference} onChange={this.props.setReference}></input>                    
            </div>
            <div className="col-md-3">
                <img src={SaveImage} alt="save me" onClick={(i) => this.props.SaveSupplier(i)} />                     
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