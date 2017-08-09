import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SupplierList from './Components/SupplierList';
import SupplierDetail from './Components/SupplierDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

//import api from './api';

class ComicStrip extends React.Component{
    constructor() {
        super();
        this.initialiseState();
    }

    initialiseState(){
        this.state = {}
    }

     componentDidMount() {
        
       /* api.get('/Suppliers')
                .then((response) => {
                     this.setState({
                         supplierData : response.data
                        })
        }).catch((e) =>
        {
            console.error(e);
        }); */
    } 

    render() {
      /*   const Suppliers = ({supplier}) => (
        <div>
            {this.props.supplierData.map(supplier => (
            <div className="supplier" key={supplier.id}>{supplier.name}</div>
            ))}
        </div>
        ); */
         /* console.log("This is the value " + this.state.supplierData[0]);  */
         /* console.log(Array.isArray(this.state.supplierData)); */

        return(
            <div className="app">
                <div className="banner">
                    <h1>Need to put a menu in here</h1>
                </div>
                <SupplierDetail />
                <SupplierList />                
            </div>
        );
    }
}

  ReactDOM.render(<ComicStrip />, document.getElementById('root'));   
/* ReactDOM.render(<SupplierList id="1" name="test" city="NYC" reference="bongo" />, document.getElementById('root')); */
