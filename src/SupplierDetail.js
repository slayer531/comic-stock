import React from 'react';
import SaveImage from './images/save-resume.png';
import 'bootstrap/dist/css/bootstrap.css';

const SupplierDetail = props =>
    <div>
        <div className="row">
            <div className="col-md-3">Name</div>
            <div className="col-md-3">City</div>
            <div className="col-md-3">Reference</div>
            <div className="col-md-3">Save</div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <input defaultValue={props.supplier.name}></input>  
            </div>                                     
            <div className="col-md-3">
                <input  defaultValue={props.supplier.city}></input>                                        
            </div>
            <div className="col-md-3">
                <input defaultValue={props.supplier.reference}></input>                    
            </div>
            <div className="col-md-3">
                <img src={SaveImage} alt="save me" onClick={() => props.Save(props.supplier.id)} />                     
            </div>
        </div>            
        
                    
    </div>

export default SupplierDetail;
