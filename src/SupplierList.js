import React from 'react';
import DeleteImage from './images/delete-x-square-button.png';

const SupplierList = props =>
    <div className="SupplierList">
                    <div>Name</div>
                    <div>City</div>
                    <div>Reference</div>                 
                    {props.suppliers.map((supplier,index)  =>(
                        <div key={supplier.id} index={supplier.id}>
                            <div>{supplier.name}</div>
                            <div>{supplier.city}</div>
                            <div>{supplier.reference}</div>  
                            <img ref="#" src={DeleteImage} alt="delete me" onClick={() => props.onClick(supplier.id)} />
                        </div>                      
                    ))}                     
    </div>

export default SupplierList;
