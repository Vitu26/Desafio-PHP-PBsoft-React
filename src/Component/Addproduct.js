import React, { useState } from "react";
 
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
function Addproduct()
{  
    const navigate = useNavigate();
     
    const[txtname, setName]= useState('');
    const[txtquanty, setquanty]= useState('');
    const[txtdescription, setdescription]= useState('');
    const[txtcategory, setcategory]= useState('');
    const[txtvalue, setvalue]= useState('');

    const[message, setMessage]= useState('');
 
    const uploadProduct= async()=>{
        const formData= new FormData();
        formData.append('name', txtname);
        formData.append('quanty', txtquanty);
        formData.append('description',txtdescription);
        formData.append('category',txtcategory);
        formData.append('value',txtvalue);

        const responce= await axios.post("https://api-rest.maxima.inf.br/api/products", formData, {
            headers:{'Content-Type':"multipart/form-data"},
        } );
 
        if(responce)
        {
            console.log(responce)
            setMessage(responce.message); //"message": "Product successfully created."
            setTimeout(()=>{
                navigate('/productlist');
            }, 2000);
        }
    }
 
    const handleSubmit= async(e)=>{
      e.preventDefault();
      await uploadProduct();
 
   }
    return(
    <React.Fragment>
        <div className="container">
            <div className="row">
              <div className="col-md-8 mt-4">
                <h5 className="mb-4">Add Product </h5> 
                <p className="text-warning">{ message}</p>                              
                 
                    <form onSubmit={ handleSubmit}>             
                    <div className="mb-3 row">
                    <label  className="col-sm-3">Nome do produto: </label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" onChange={ (e)=>setName(e.target.value)}/>
                    </div>
                    </div>
 
                    <div className="mb-3 row">
                    <label  className="col-sm-3">Quantidade </label>
                    <div className="col-sm-9">
                    <input type="number" className="form-control" onChange={(e)=>setquanty(e.target.value)}  />
                    </div>
                    </div>

                    <div className="mb-3 row">
                    <label  className="col-sm-3">Descrição: </label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" onChange={(e)=>setdescription(e.target.value)}  />
                    </div>
                    </div>

                    <div className="mb-3 row">
                    <label  className="col-sm-3">Categoria: </label>
                    <div className="col-sm-9">
                        <select id="i3" class="form-control input-txt" name="category" onChange={(e)=>setcategory(e.target.value)}>
                            <option value="Sem categoria selecionada">Selecione a categoria</option>
                            <option value="Limpeza">Limpeza</option>
                            <option value="Alimentação">Alimentação</option>
                            <option value="Materiais de Construção">Materiais de Construção</option>
                            <option value="Produtos Industriais">Produtos Industriais</option>
                            <option value="Teste">Teste</option>
                        </select>
                    {/* <input type="text" className="form-control" onChange={(e)=>setcategory(e.target.value)}  /> */}
                    </div>
                    </div>

                    <div className="mb-3 row">
                        <label  className="col-sm-3">Preço: R$ </label>
                    <div className="col-sm-9">
                        
                        <input type="number" pattern="[0-9]+([,\.][0-9]+)?" className="form-control" onChange={(e)=>setvalue(e.target.value)}  />
                    </div>
                    </div>
 
                    
 
                    <div className="mb-3 row">
                    <label className="col-sm-3"></label>
                    <div className="col-sm-9">
                    <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                    </div>
 
                    </form>
 
             </div>
            </div>
        </div>
    </React.Fragment>
    );
}
export default Addproduct;