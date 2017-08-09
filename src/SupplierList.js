import React from 'react';
import DeleteImage from './images/delete-x-square-button.png';

const SupplierList = props =>
    <div>
        <div className="row">
            <div className="col-md-1">Edit</div>
            <div className="col-md-4">Name</div>
            <div className="col-md-3">City</div>
            <div className="col-md-3">Reference</div>
            <div className="col-md-1">Delete</div>
        </div>
        <div className="row">
            {props.suppliers.map((supplier,index)  =>(
                        <div key={supplier.id} index={supplier.id}>
                            <div className="col-md-1"><button onClick={() => props.Edit(supplier.id)}>Edit</button></div>
                            <div className="col-md-4">{supplier.name}</div>
                            <div className="col-md-3">{supplier.city}</div>
                            <div className="col-md-3">{supplier.reference}</div>  
                            <div className="col-md-1"><img src={DeleteImage} alt="delete me" onClick={() => props.Delete(supplier.id)} /></div>
                        </div>                      
                    ))}
        </div>
                                         
    </div>

export default SupplierList;
