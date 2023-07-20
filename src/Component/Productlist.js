import React, { useState, useEffect } from "react";
 
import { Link } from "react-router-dom";
import axios from "axios";
 
function Productlist()
{ 
    const[product, setProduct]= useState([]);
     
    useEffect( ()=>{
        const getProduct= ()=>{
            fetch("http://127.0.0.1:8000/api/products")
            .then(res=>{ return res.json()})
            .then(response=>{ 
                console.log(response.products)
                setProduct(response.products)
            })
            .catch(error=>{ console.log(error)});
        }
        getProduct();
    },[]);
  
   
    const deleteProduct = (id) => {
        axios.delete('http://127.0.0.1:8000/api/delete/'+id).then(function(response){
            console.log(response.data);
            alert("Successfully Deleted");
        });
    }
     
    return(
        <React.Fragment>
            <div className="container container_overflow">
                <div className="row">
                    <div className="col-12">
                        <h5 className="mb-4">Product List</h5> 
                        <p className="text-danger"> </p>                 
                                <table className="table table-bordered">
                                <thead>
                                <tr>
                                <th scope="col">Sr.No</th>
                                <th scope="col">Product Title</th>
                                <th scope="col">Product Quanty</th>
                                <th scope="col">Product Description</th>
                                <th scope="col">Product Category</th>
                                <th scope="col">Product Value</th>
                                <th scope="col" width="200">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        product.map((pdata, index)=>(
                                            <tr key={index}>
                                            <td>{index+1 } </td>
                                            <td>{pdata.name } </td>
                                            <td>{pdata.quanty } </td>
                                            <td>{pdata.description } </td>
                                            <td>{pdata.category } </td>
                                            <td>{pdata.value } </td>
                                            
                                            <td>
                                                <Link to={`/editproduct/${pdata.id}/edit`} className="btn btn-success mx-2">Edit</Link>
                                                <button onClick={() => deleteProduct(pdata.id)} className="btn btn-danger">Delete</button>
                                            </td>
                                            </tr>
                                        ))
                                    }
                               
                                                                
                                </tbody>
                                </table>  
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Productlist;